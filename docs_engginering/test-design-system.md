# System-Level Test Design - BankSampah

**Date:** 2026-01-02  
**Author:** TselTeam  
**Status:** Draft  
**Review Type:** Phase 3 - Testability Review (Pre-Implementation Gate Check)

---

## Executive Summary

**Purpose:** Validate testability of BankSampah architecture before implementation phase begins. This review assesses whether the chosen tech stack (React Native + Expo + Supabase) supports automated testing for 48 Functional Requirements and 24 Non-Functional Requirements across 10 epics.

**Key Findings:**

- ✅ **Testability Assessment:** PASS with minor concerns (details in Section 2)
- ⚠️ **Architecturally Significant Requirements (ASRs):** 8 high-risk NFRs identified requiring specialized testing approach
- ✅ **Test Levels Strategy:** 40% Unit / 30% Integration (API) / 20% E2E / 10% Manual (Mode Lansia accessibility)
- ✅ **NFR Testing Approach:** Hybrid strategy (Playwright E2E + k6 performance + Maestro mobile + manual WCAG audit)
- ⚠️ **Test Environment Requirements:** Local Supabase instance required, Firebase FCM sandbox needed for push notification testing
- ⚠️ **Testability Concerns:** 3 concerns flagged (Supabase RLS policy testing, Dual ledger atomicity, Mode Lansia voice TTS)

**Recommendation for Gate Check:** **PASS WITH CONCERNS** - Architecture supports testing, but 3 testability concerns require mitigation plans before Epic 3 (Core Transaction) implementation.

---

## 1. Testability Assessment

### 1.1 Controllability ⚠️ CONCERNS

**Definition:** Can we control system state for testing?

**Assessment:**

✅ **Strengths:**

- **Supabase PostgreSQL:** Direct SQL seed data via Supabase CLI (`supabase db reset --seed`)
- **Zustand State Management:** Stores can be reset/initialized programmatically in tests (`useAuthStore.setState({ user: null })`)
- **Supabase Auth:** Test users can be created via admin API (`supabase.auth.admin.createUser()`)
- **Expo Async Storage:** Can be cleared between tests (`AsyncStorage.clear()`)
- **Edge Functions:** Can be invoked directly in integration tests (`supabase.functions.invoke('process-transaction')`)

⚠️ **Concerns:**

1. **Supabase Row-Level Security (RLS) Policy Testing**

   - **Issue:** RLS policies execute at PostgreSQL level, difficult to test in isolation without full database
   - **Mitigation:** Use local Supabase instance (`supabase start`) for RLS policy integration tests
   - **Owner:** Dev team
   - **Timeline:** Epic 1 Story 7 (Database schema setup)

2. **Firebase Cloud Messaging (FCM) Sandbox**

   - **Issue:** Push notifications require real device/emulator with FCM credentials, cannot easily mock
   - **Mitigation:** Use Firebase FCM test mode with test device tokens, mock notification delivery in E2E tests
   - **Owner:** QA
   - **Timeline:** Epic 8 (Notification System)

3. **External API Mocking (Future: Phase 2B Marketplace)**
   - **Issue:** B2B buyer integration with external recycling facilities not yet defined
   - **Mitigation:** Defer to Phase 2B, use mock endpoints for MVP
   - **Owner:** Architect
   - **Timeline:** Phase 2B (Month 12-18)

**Controllability Score:** 7/10 (CONCERNS)

---

### 1.2 Observability ✅ PASS

**Definition:** Can we inspect system state to validate behavior?

**Assessment:**

✅ **Strengths:**

- **Supabase Real-time Subscriptions:** Balance changes observable via WebSocket listeners (`supabase.channel('balances').on('UPDATE', ...)`)
- **Sentry Error Tracking:** Exceptions captured with full stack traces, breadcrumbs, user context
- **PostHog Analytics:** Event tracking with funnel analysis (signup → onboarding → first transaction)
- **Supabase Logs:** Edge Function logs accessible via Supabase dashboard (`supabase functions logs`)
- **React Native DevTools:** Network requests, state changes, console logs inspectable during development
- **Audit Trail:** Immutable transaction logs in PostgreSQL (append-only table)

✅ **Test Assertions Possible:**

- **Balance Updates:** Query `balances` table directly to verify dual ledger accuracy (Rupiah + kg)
- **Transaction State:** Check `transactions.status` field progression (pending → completed)
- **Gamification Events:** Verify `badges`, `streaks`, `leaderboard` tables updated correctly
- **Notification Delivery:** Check FCM delivery status via Firebase Console API
- **Real-time Sync:** Subscribe to Supabase real-time channel in tests, assert events received <5s (NFR-P5)

**Observability Score:** 9/10 (PASS)

---

### 1.3 Reliability ✅ PASS

**Definition:** Are tests isolated, reproducible, and parallel-safe?

**Assessment:**

✅ **Strengths:**

- **Isolated Test Database:** Each test run uses fresh Supabase local instance (`supabase db reset`)
- **Idempotent Seed Data:** SQL seed scripts can be run multiple times without conflicts
- **Stateless Edge Functions:** No shared state between invocations, safe for parallel execution
- **Async Storage Isolation:** Each test clears Async Storage before execution
- **Deterministic Waits:** Supabase real-time subscriptions provide event-driven waits (no brittle `sleep()` calls)
- **HAR Network Capture:** Playwright can record/replay network for deterministic E2E tests

✅ **Parallel Execution:**

- **Unit Tests:** Pure functions, fully parallel (Jest/Vitest with `--maxWorkers`)
- **Integration Tests:** Each test uses separate database schema or transaction rollback
- **E2E Tests:** Playwright workers use isolated browser contexts, test users created per test

**Reliability Score:** 9/10 (PASS)

---

### 1.4 Overall Testability Verdict

**Verdict:** ✅ **PASS WITH CONCERNS**

**Summary:**

- **Controllability:** 7/10 (RLS policy testing requires local Supabase, FCM requires test mode)
- **Observability:** 9/10 (Excellent visibility into state via Supabase + Sentry + PostHog)
- **Reliability:** 9/10 (Isolated tests, deterministic waits, parallel-safe)

**Mitigation Required Before Epic 3 Implementation:**

1. Set up local Supabase instance for RLS policy testing (Epic 1 Story 7)
2. Configure Firebase FCM test mode with test device tokens (Epic 8 Story 1)
3. Document seed data factories for consistent test state (Epic 1 Story 2)

---

## 2. Architecturally Significant Requirements (ASRs)

**Definition:** Quality requirements that drive architecture decisions or pose testability challenges.

### 2.1 Trust-Breaking Tier 1 NFRs (CRITICAL)

#### ASR-1: Transaction Accuracy (NFR-S1) - 100% Accuracy

**Requirement:** Zero tolerance for lost or incorrect transactions.

**Architectural Decisions Driven:**

- Dual-write pattern (transactions table + audit log)
- Immutable audit trail (append-only, no deletes)
- Daily automated reconciliation checks (sum of transactions = current balance)
- PostgreSQL ACID transactions (atomicity guarantee)

**Testability Challenge:**

- **Issue:** Need to verify atomic updates across dual ledger (Rupiah + kg balance)
- **Risk Score:** Probability=3 (high complexity), Impact=3 (trust-breaking) → **Score 9 (CRITICAL)**

**Testing Approach:**

- **Integration Tests:** Verify atomic dual ledger updates

  ```typescript
  test("transaction updates both Rupiah and kg balance atomically", async ({
    request,
  }) => {
    // Seed initial balance
    const initialRupiah = 0;
    const initialKg = 0;

    // Process transaction (5 kg @ Rp 3000/kg = Rp 15000)
    await request.post("/functions/v1/process-transaction", {
      data: { user_id: "test-user", kg_amount: 5, price_per_kg: 3000 },
    });

    // Query balances table directly
    const balance = await supabase
      .from("balances")
      .select("rupiah_balance, kg_waste_balance")
      .eq("user_id", "test-user")
      .single();

    // Both ledgers must update together
    expect(balance.rupiah_balance).toBe(15000);
    expect(balance.kg_waste_balance).toBe(5);

    // Verify audit log created
    const auditLog = await supabase
      .from("transaction_audit_log")
      .select("*")
      .eq("user_id", "test-user")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    expect(auditLog.rupiah_delta).toBe(15000);
    expect(auditLog.kg_delta).toBe(5);
  });
  ```

- **Daily Reconciliation Test:** Automated job verifies sum of transactions = current balance
  ```typescript
  test("daily reconciliation detects balance drift", async () => {
    // Seed 10 transactions
    const transactions = await seedTransactions(10);

    // Calculate expected balance
    const expectedRupiah = transactions.reduce(
      (sum, t) => sum + t.rupiah_amount,
      0
    );
    const expectedKg = transactions.reduce((sum, t) => sum + t.kg_amount, 0);

    // Run reconciliation function
    const result = await supabase.functions.invoke("daily-reconciliation", {
      data: { user_id: "test-user" },
    });

    // Should detect no drift
    expect(result.data.drift_detected).toBe(false);
    expect(result.data.rupiah_balance).toBe(expectedRupiah);
    expect(result.data.kg_balance).toBe(expectedKg);
  });
  ```

**Mitigation Owner:** Dev team (Epic 3 Story 8)

---

#### ASR-2: Data Integrity (NFR-S2) - 100% Dual Ledger Accuracy

**Requirement:** Balance calculations must be 100% accurate (dual ledger kg + Rupiah).

**Architectural Decisions Driven:**

- Database constraints (CHECK constraints on balances >= 0)
- Transaction atomicity (PostgreSQL BEGIN/COMMIT)
- Reconciliation scripts (automated validation)

**Testability Challenge:**

- **Issue:** Race conditions during concurrent transactions (2 operators process same nasabah simultaneously)
- **Risk Score:** Probability=2 (possible), Impact=3 (trust-breaking) → **Score 6 (HIGH)**

**Testing Approach:**

- **Concurrency Test:** Simulate 100 concurrent transactions
  ```typescript
  test("concurrent transactions maintain balance integrity", async ({
    request,
  }) => {
    // Seed initial balance: Rp 0, 0 kg
    await seedUser({ id: "test-user", rupiah: 0, kg: 0 });

    // Submit 100 concurrent transactions (each +1kg, +Rp 3000)
    const promises = Array.from({ length: 100 }, () =>
      request.post("/functions/v1/process-transaction", {
        data: { user_id: "test-user", kg_amount: 1, price_per_kg: 3000 },
      })
    );

    await Promise.all(promises);

    // Final balance should be exactly 100kg, Rp 300,000
    const balance = await supabase
      .from("balances")
      .select("*")
      .eq("user_id", "test-user")
      .single();

    expect(balance.rupiah_balance).toBe(300000);
    expect(balance.kg_waste_balance).toBe(100);

    // Verify all 100 transactions recorded
    const txCount = await supabase
      .from("transactions")
      .select("id", { count: "exact" })
      .eq("user_id", "test-user");

    expect(txCount.count).toBe(100);
  });
  ```

**Mitigation Owner:** Dev team (Epic 3 Story 8)

---

#### ASR-3: Authentication Security (NFR-S3) - 99.99% Security

**Requirement:** No unauthorized access to user accounts.

**Architectural Decisions Driven:**

- Supabase Auth (battle-tested OAuth + OTP)
- JWT-based Row-Level Security policies
- Session management with token refresh
- MFA for withdrawals (Phase 2A)

**Testability Challenge:**

- **Issue:** RLS policies must be tested in realistic environment (cannot unit test PostgreSQL policies)
- **Risk Score:** Probability=2 (moderate), Impact=3 (trust-breaking) → **Score 6 (HIGH)**

**Testing Approach:**

- **E2E Security Tests:** Verify unauthorized access blocked

  ```typescript
  test("unauthenticated users cannot access balance data", async ({ page }) => {
    // Attempt to access dashboard without auth
    await page.goto("/dashboard");

    // Should redirect to login
    await expect(page).toHaveURL(/\/login/);
    await expect(page.getByText("Please sign in")).toBeVisible();
  });

  test("User A cannot access User B transaction history", async ({
    request,
  }) => {
    // Login as User A
    const userAToken = await loginUser("userA@example.com", "password");

    // Try to query User B transactions
    const response = await request.get(
      "/api/transactions?user_id=eq.user-b-id",
      {
        headers: { Authorization: `Bearer ${userAToken}` },
      }
    );

    // RLS policy should block (return empty array, not 403)
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toEqual([]); // No data leaked
  });
  ```

- **RLS Policy Integration Tests:** Use local Supabase instance

  ```sql
  -- Test RLS policy enforcement
  BEGIN;
  SET LOCAL ROLE authenticated;
  SET LOCAL jwt.claims.user_id = 'user-a-id';

  -- User A can only see own balance
  SELECT * FROM balances WHERE user_id = 'user-b-id';
  -- Expected: 0 rows (RLS blocks)

  ROLLBACK;
  ```

**Mitigation Owner:** Dev team (Epic 2 Story 6)

---

### 2.2 Performance NFRs (Tier 2)

#### ASR-4: Transaction Recording Latency (NFR-P1) - <3s p95

**Requirement:** Transaction recording must complete within 3 seconds (p95) from operator confirmation.

**Architectural Decisions Driven:**

- Edge Functions for business logic (deployed globally on Cloudflare Workers)
- Supabase Realtime for instant balance updates (<5s sync)
- Optimistic UI updates (instant feedback, eventual consistency)

**Testability Challenge:**

- **Issue:** Need to measure p95 latency under realistic load (Saturday morning peak: 100 concurrent operators)
- **Risk Score:** Probability=2 (moderate), Impact=2 (friction) → **Score 4 (MEDIUM)**

**Testing Approach:**

- **k6 Load Test:** Simulate 100 concurrent transactions

  ```javascript
  // tests/nfr/performance.k6.js
  import http from "k6/http";
  import { check } from "k6";

  export const options = {
    stages: [
      { duration: "1m", target: 50 }, // Ramp to 50 operators
      { duration: "3m", target: 100 }, // Peak: 100 concurrent
      { duration: "1m", target: 0 }, // Ramp down
    ],
    thresholds: {
      http_req_duration: ["p(95)<3000"], // NFR-P1: p95 <3s
    },
  };

  export default function () {
    const response = http.post(
      `${__ENV.API_URL}/functions/v1/process-transaction`,
      JSON.stringify({
        user_id: "test-user",
        kg_amount: 5,
        price_per_kg: 3000,
      }),
      {
        headers: {
          Authorization: `Bearer ${__ENV.API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    check(response, {
      "status is 200": (r) => r.status === 200,
      "latency <3s": (r) => r.timings.duration < 3000,
    });
  }
  ```

**Mitigation Owner:** QA (Epic 10 - Performance testing during production deployment)

---

#### ASR-5: Real-Time Sync Latency (NFR-P5) - <5s

**Requirement:** Balance updates propagate to all user devices within 5 seconds.

**Architectural Decisions Driven:**

- Supabase Realtime (WebSocket subscriptions)
- PostgreSQL LISTEN/NOTIFY triggers
- Optimistic UI updates (instant local state, eventual consistency)

**Testability Challenge:**

- **Issue:** Need to verify WebSocket sync across multiple devices (nasabah phone + operator tablet)
- **Risk Score:** Probability=2 (moderate), Impact=2 (UX friction) → **Score 4 (MEDIUM)**

**Testing Approach:**

- **E2E Real-Time Test:** Verify sync <5s
  ```typescript
  test("balance updates sync across devices within 5 seconds", async ({
    context,
  }) => {
    // Device 1: Nasabah phone
    const nasabahPage = await context.newPage();
    await nasabahPage.goto("/dashboard");

    // Subscribe to balance updates
    const balanceUpdates: number[] = [];
    nasabahPage.on("websocket", (ws) => {
      ws.on("framereceived", (event) => {
        if (event.payload.includes("balances")) {
          const data = JSON.parse(event.payload);
          balanceUpdates.push(data.new.rupiah_balance);
        }
      });
    });

    // Device 2: Operator tablet processes transaction
    const operatorPage = await context.newPage();
    await operatorPage.goto("/operator/transactions");
    await operatorPage.getByTestId("scan-qr").click();
    await operatorPage.fill('[data-testid="kg-amount"]', "5");
    await operatorPage.click('[data-testid="confirm-transaction"]');

    // Wait for balance update on nasabah device (max 5s)
    await nasabahPage.waitForSelector(
      '[data-testid="balance-rupiah"]:has-text("Rp 15,000")',
      { timeout: 5000 }
    );

    // Verify sync happened within 5 seconds
    expect(balanceUpdates.length).toBeGreaterThan(0);
    expect(balanceUpdates[balanceUpdates.length - 1]).toBe(15000);
  });
  ```

**Mitigation Owner:** QA (Epic 4 Story 1 - Dual ledger display)

---

### 2.3 Accessibility NFRs (MVP Critical)

#### ASR-6: Mode Lansia Interface (NFR-A1) - WCAG AAA

**Requirement:** Accessibility mode supports users 60+ years old with visual impairment (24pt font, 3-button UI, voice guidance, SMS confirmations).

**Architectural Decisions Driven:**

- Feature flag for Mode Lansia toggle (independent of Progressive UX levels)
- Text-to-Speech integration (device TTS engine)
- SMS fallback via Twilio (alternative to push notifications)
- High contrast color palette (WCAG AAA ≥7:1 contrast ratio)

**Testability Challenge:**

- **Issue:** Voice guidance (TTS) and touch target accessibility (88pt height) require manual testing on physical devices
- **Risk Score:** Probability=2 (moderate), Impact=3 (exclusion) → **Score 6 (HIGH)**

**Testing Approach:**

- **Automated Accessibility Audit:** Playwright with axe-core

  ```typescript
  import { test, expect } from "@playwright/test";
  import AxeBuilder from "@axe-core/playwright";

  test("Mode Lansia meets WCAG AAA contrast requirements", async ({ page }) => {
    await page.goto("/dashboard?mode=lansia");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2aaa", "wcag21aaa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("Mode Lansia buttons meet 88pt touch target size", async ({ page }) => {
    await page.goto("/dashboard?mode=lansia");

    const buttons = await page.locator('[data-testid*="lansia-button"]').all();

    for (const button of buttons) {
      const box = await button.boundingBox();
      expect(box?.height).toBeGreaterThanOrEqual(88);
      expect(box?.width).toBeGreaterThanOrEqual(88);
    }
  });
  ```

- **Manual Testing:** Voice TTS and SMS confirmations

  ```markdown
  **Manual Test Case: Mode Lansia Voice Guidance**

  **Pre-conditions:**

  - Physical device (Android or iOS)
  - Mode Lansia enabled in Settings
  - Device TTS engine configured (Indonesian language)

  **Steps:**

  1. Navigate to Dashboard
  2. Tap "Lihat Saldo" button
  3. Listen for TTS announcement: "Saldo Rupiah lima belas ribu"
  4. Tap "Setor Sampah" button
  5. Listen for TTS announcement: "Setor Sampah. Ambil foto sampah Anda."

  **Expected Result:**

  - TTS reads button labels aloud in Indonesian
  - TTS reads screen titles on navigation
  - TTS reads transaction amounts on confirmation

  **Pass Criteria:** All 3 TTS announcements audible and accurate
  ```

**Mitigation Owner:** QA (Epic 9 - Manual testing with accessibility consultant)

---

#### ASR-7: WCAG 2.1 Level AA Compliance (NFR-A2)

**Requirement:** Standard interface meets WCAG 2.1 Level AA standards (≥4.5:1 contrast, 44x44pt touch targets, screen reader support).

**Architectural Decisions Driven:**

- Semantic HTML/React Native accessibility props
- ARIA labels for screen readers (VoiceOver/TalkBack)
- Focus indicators for keyboard navigation
- Responsive design (4.7" to 6.7" screens)

**Testability Challenge:**

- **Issue:** Screen reader testing (VoiceOver/TalkBack) requires manual validation on physical devices
- **Risk Score:** Probability=1 (low complexity), Impact=2 (usability) → **Score 2 (LOW)**

**Testing Approach:**

- **Automated Accessibility Audit:** Playwright + axe-core

  ```typescript
  test("standard interface meets WCAG 2.1 AA requirements", async ({
    page,
  }) => {
    await page.goto("/dashboard");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
  ```

- **Manual Screen Reader Testing:**

  ```markdown
  **Manual Test Case: Screen Reader Navigation**

  **Pre-conditions:**

  - iOS with VoiceOver enabled OR Android with TalkBack enabled

  **Steps:**

  1. Swipe to navigate through Dashboard screen
  2. Verify all interactive elements have accessible labels
  3. Verify focus order is logical (top-to-bottom, left-to-right)
  4. Verify form inputs announce error messages

  **Expected Result:**

  - All buttons/links readable by screen reader
  - Focus order matches visual layout
  - Error messages announced when validation fails

  **Pass Criteria:** No unlabeled elements, logical focus order
  ```

**Mitigation Owner:** QA (Epic 9 Story 4)

---

### 2.4 Scalability & Reliability NFRs

#### ASR-8: Concurrent Transaction Processing (NFR-SC2) - 100 Concurrent

**Requirement:** System handles 100 concurrent transactions without performance degradation.

**Architectural Decisions Driven:**

- Supabase managed PostgreSQL (auto-scaling connection pooling)
- Edge Functions (Cloudflare Workers with auto-scaling)
- Optimistic UI updates (reduce perceived latency)

**Testability Challenge:**

- **Issue:** Need to simulate Saturday morning peak load (500 operators × 20% active = 100 concurrent)
- **Risk Score:** Probability=2 (moderate), Impact=2 (degradation) → **Score 4 (MEDIUM)**

**Testing Approach:**

- **k6 Spike Test:** Sudden traffic increase
  ```javascript
  export const options = {
    stages: [
      { duration: "30s", target: 10 }, // Normal load
      { duration: "10s", target: 100 }, // SPIKE to 100 concurrent
      { duration: "30s", target: 100 }, // Sustained spike
      { duration: "10s", target: 10 }, // Return to normal
    ],
    thresholds: {
      http_req_duration: ["p(95)<5000"], // Allow degradation to 5s during spike
      http_req_failed: ["rate<0.05"], // <5% error rate
    },
  };
  ```

**Mitigation Owner:** QA (Epic 10 - Load testing before production launch)

---

## 3. Test Levels Strategy

**Recommended Test Distribution:** 40% Unit / 30% Integration (API) / 20% E2E / 10% Manual

### 3.1 Rationale

**Mobile-First Full-Stack Architecture:**

- **Unit Tests (40%)**: Pure business logic (pricing calculations, badge rules, streak tracking, XP progression)
- **Integration Tests (30%)**: API-heavy validation (Supabase Edge Functions, database operations, real-time sync)
- **E2E Tests (20%)**: Critical user journeys (transaction flow, withdrawal, gamification unlocks)
- **Manual Tests (10%)**: Accessibility (Mode Lansia TTS, screen reader), physical device validation (QR scanning, camera)

**Avoid Duplicate Coverage:**

- ❌ Don't test pricing calculation at E2E level (already unit tested)
- ❌ Don't test database constraints at E2E level (already integration tested)
- ✅ Test transaction flow E2E (photo upload → QR scan → weight → balance update) as integrated user journey

### 3.2 Test Level Breakdown by Epic

| Epic                        | Unit Tests | Integration Tests | E2E Tests | Manual Tests | Rationale                                                                                        |
| --------------------------- | ---------- | ----------------- | --------- | ------------ | ------------------------------------------------------------------------------------------------ |
| **1. Foundation**           | 60%        | 30%               | 10%       | 0%           | Setup validation (Supabase client, Zustand stores, navigation)                                   |
| **2. Auth & Onboarding**    | 20%        | 40%               | 30%       | 10%          | Google OAuth E2E, Phone OTP integration, RBAC tests, Mode Lansia toggle manual                   |
| **3. Transaction Workflow** | 30%        | 40%               | 30%       | 0%           | Pricing logic unit, Edge Function integration, Photo → QR → Balance E2E                          |
| **4. Dashboard**            | 40%        | 30%               | 20%       | 10%          | Impact calculations unit, real-time sync integration, Progressive UX E2E, shareable cards manual |
| **5. Gamification**         | 50%        | 30%               | 20%       | 0%           | Badge rules unit, streak logic unit, leaderboard integration, unlock celebrations E2E            |
| **6. Withdrawals**          | 30%        | 40%               | 20%       | 10%          | Minimum threshold unit, withdrawal queue integration, approval flow E2E, receipt PDF manual      |
| **7. Operator BI**          | 20%        | 50%               | 20%       | 10%          | Retool dashboard manual, analytics queries integration, forecasting unit                         |
| **8. Notifications**        | 30%        | 40%               | 20%       | 10%          | Frequency limiting unit, FCM integration, notification delivery E2E, SMS fallback manual         |
| **9. Mode Lansia**          | 10%        | 20%               | 30%       | 40%          | WCAG compliance automated, TTS voice manual, 3-button UI E2E                                     |
| **10. Production**          | 10%        | 30%               | 30%       | 30%          | EAS Build validation, Sentry integration, k6 load testing, App Store submission manual           |

### 3.3 Tools by Test Level

**Unit Tests:**

- **Framework:** Jest (React Native default)
- **Mocking:** Jest mocks for Supabase client, Zustand stores
- **Execution:** `npm run test:unit` (fast feedback <1 min)

**Integration Tests (API):**

- **Framework:** Playwright Test (`@playwright/test`)
- **Setup:** Local Supabase instance (`supabase start`)
- **Execution:** `npm run test:integration` (moderate speed ~5 min)

**E2E Tests:**

- **Framework:** Maestro (mobile E2E) + Playwright (web admin portal)
- **Execution:** `npm run test:e2e` (slow ~30 min full suite)

**Manual Tests:**

- **Accessibility:** Manual audit with WCAG checklist
- **Physical Device:** QR scanning, camera, TTS voice, SMS

---

## 4. NFR Testing Approach

### 4.1 Security Testing

**Tools:** Playwright E2E + OWASP ZAP + npm audit

**Test Coverage:**

- ✅ **Authentication:** Unauthenticated redirect, JWT token expiry (15 min), password never logged
- ✅ **Authorization (RBAC):** User A cannot access User B transactions, operators only access own kelurahan
- ✅ **Row-Level Security (RLS):** PostgreSQL policies block unauthorized queries
- ✅ **OWASP Top 10:** SQL injection blocked, XSS sanitized, CSRF protection
- ✅ **Secrets Management:** API keys in EAS Secrets (not version control), Supabase service role key secure

**Example Test:**

```typescript
test("RLS policy blocks cross-user data access", async ({ request }) => {
  const userAToken = await loginUser("userA@example.com");

  // Try to query User B transactions
  const response = await request.get("/api/transactions?user_id=eq.user-b-id", {
    headers: { Authorization: `Bearer ${userAToken}` },
  });

  // RLS policy should return empty array (not 403)
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data).toEqual([]); // No data leaked
});
```

---

### 4.2 Performance Testing

**Tools:** k6 (load testing) + Lighthouse (mobile Core Web Vitals)

**Test Coverage:**

- ✅ **Load Test:** 100 concurrent transactions (Saturday morning peak)
- ✅ **Stress Test:** Identify breaking point (max transactions/second)
- ✅ **Spike Test:** Sudden traffic increase (10 → 100 → 10 VUs)
- ✅ **Endurance Test:** Sustained load for 30 minutes (memory leak detection)
- ✅ **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1 (mobile)

**SLO/SLA Thresholds:**

- NFR-P1: Transaction latency p95 <3s
- NFR-P5: Real-time sync <5s
- Error rate <1%
- Throughput >100 transactions/minute

**Example k6 Test:**

```javascript
export const options = {
  stages: [
    { duration: "1m", target: 50 },
    { duration: "3m", target: 100 },
    { duration: "1m", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<3000"], // NFR-P1
    http_req_failed: ["rate<0.01"], // <1% error rate
  },
};
```

---

### 4.3 Reliability Testing

**Tools:** Playwright E2E + Supabase Monitoring

**Test Coverage:**

- ✅ **Error Handling:** 500 error shows user-friendly message + retry button
- ✅ **Retries:** 3 attempts on transient failures (503 → eventual success)
- ✅ **Offline Mode:** Network disconnection graceful (sync when reconnected)
- ✅ **Health Checks:** `/api/health` monitors database, cache, queue
- ✅ **Circuit Breaker:** Opens after 5 consecutive failures (fallback UI)

**Example Test:**

```typescript
test("app handles network disconnection gracefully", async ({
  page,
  context,
}) => {
  await page.goto("/dashboard");

  // Simulate offline
  await context.setOffline(true);
  await page.getByRole("button", { name: "Refresh Data" }).click();

  // User sees offline indicator
  await expect(
    page.getByText("You are offline. Changes will sync when reconnected.")
  ).toBeVisible();

  // Reconnect
  await context.setOffline(false);
  await page.getByRole("button", { name: "Refresh Data" }).click();

  // Data loads successfully
  await expect(page.getByText("Data updated")).toBeVisible();
});
```

---

### 4.4 Maintainability Testing

**Tools:** GitHub Actions (CI) + jscpd + Sentry

**Test Coverage:**

- ✅ **Code Coverage:** ≥80% (from Jest coverage report)
- ✅ **Code Duplication:** <5% (from jscpd CI job)
- ✅ **Vulnerability Scan:** No critical/high vulnerabilities (npm audit)
- ✅ **Structured Logging:** Trace IDs in headers (Server-Timing)
- ✅ **Error Tracking:** Sentry integration validated (exception captured)

**CI Pipeline:**

```yaml
# .github/workflows/ci.yml
jobs:
  test-coverage:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run test:coverage
      - name: Check 80% coverage threshold
        run: |
          COVERAGE=$(jq '.total.lines.pct' coverage/coverage-summary.json)
          if (( $(echo "$COVERAGE < 80" | bc -l) )); then
            echo "❌ FAIL: Coverage $COVERAGE% below 80%"
            exit 1
          fi
```

---

## 5. Test Environment Requirements

### 5.1 Local Development Environment

**Required Setup:**

- **Supabase Local Instance:** `supabase start` (PostgreSQL + Edge Functions + Storage)
- **Node.js 18+:** Required for Expo SDK 52
- **Expo CLI:** `npx expo start` (Metro bundler)
- **Android Emulator OR iOS Simulator:** For E2E mobile testing
- **Firebase FCM Test Mode:** Test device tokens for push notification testing

**Seed Data:**

```sql
-- supabase/seed.sql
INSERT INTO kelurahan (id, name) VALUES
  ('kelurahan-1', 'Tanah Abang'),
  ('kelurahan-2', 'Menteng');

INSERT INTO waste_types (id, name, price_per_kg) VALUES
  ('waste-1', 'Plastik PET', 3000),
  ('waste-2', 'Kertas', 2500),
  ('waste-3', 'Logam', 5000);

INSERT INTO users (id, email, role, kelurahan_id) VALUES
  ('user-1', 'nasabah@example.com', 'nasabah', 'kelurahan-1'),
  ('user-2', 'operator@example.com', 'operator', 'kelurahan-1');
```

---

### 5.2 CI/CD Environment (GitHub Actions)

**Required Services:**

- **GitHub Actions Runner:** Ubuntu latest
- **Supabase CI:** Docker container with local instance
- **Maestro Cloud:** For mobile E2E testing (parallel execution)
- **k6 Cloud:** For distributed load testing

**Environment Variables:**

```env
SUPABASE_URL=http://localhost:54321
SUPABASE_ANON_KEY=<local-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<local-service-key>
FIREBASE_FCM_TEST_TOKEN=<test-device-token>
```

---

### 5.3 Staging Environment

**Required Infrastructure:**

- **Supabase Production Instance:** Southeast Asia region (Singapore)
- **Expo EAS Preview Build:** For internal testing
- **Firebase FCM Production:** With test user device tokens
- **Retool Staging Workspace:** For operator dashboard testing

**Data Isolation:**

- Separate PostgreSQL schema for staging (`staging_*` tables)
- Test users prefixed with `test-` (e.g., `test-nasabah@example.com`)
- Automated data cleanup after test runs

---

## 6. Testability Concerns

### 6.1 Concern #1: Supabase RLS Policy Testing

**Issue:** Row-Level Security policies execute at PostgreSQL level, difficult to test in isolation without full database.

**Impact:** Medium (without proper RLS testing, multi-tenancy data isolation risk)

**Mitigation Plan:**

1. **Use Local Supabase Instance:** Run `supabase start` for integration tests
2. **Integration Test Suite:** Dedicated tests for RLS policies
   ```typescript
   test("operator can only access own kelurahan transactions", async ({
     request,
   }) => {
     const operatorToken = await loginOperator("operator@kelurahan1.com");

     // Query transactions (should auto-filter by kelurahan via RLS)
     const response = await request.get("/api/transactions", {
       headers: { Authorization: `Bearer ${operatorToken}` },
     });

     const transactions = await response.json();

     // Verify all transactions belong to operator's kelurahan
     transactions.forEach((tx) => {
       expect(tx.kelurahan_id).toBe("kelurahan-1");
     });
   });
   ```
3. **SQL Test Scripts:** Direct PostgreSQL policy validation

   ```sql
   -- Test RLS policy enforcement
   BEGIN;
   SET LOCAL ROLE authenticated;
   SET LOCAL jwt.claims.user_id = 'user-a-id';

   -- User A can only see own balance
   SELECT * FROM balances WHERE user_id = 'user-b-id';
   -- Expected: 0 rows (RLS blocks)

   ROLLBACK;
   ```

**Owner:** Dev team (Epic 1 Story 7)  
**Timeline:** Sprint 1 (Epic 1)  
**Status:** Open

---

### 6.2 Concern #2: Dual Ledger Atomicity Under Concurrency

**Issue:** Race conditions during concurrent transactions (2 operators process same nasabah simultaneously) could corrupt dual ledger balance.

**Impact:** High (trust-breaking if balance drift occurs)

**Mitigation Plan:**

1. **PostgreSQL Row-Level Locking:** Use `SELECT ... FOR UPDATE` in Edge Functions

   ```sql
   -- Edge Function: process-transaction
   BEGIN;

   -- Lock balance row to prevent concurrent updates
   SELECT * FROM balances WHERE user_id = $1 FOR UPDATE;

   -- Update both ledgers atomically
   UPDATE balances
   SET rupiah_balance = rupiah_balance + $2,
       kg_waste_balance = kg_waste_balance + $3
   WHERE user_id = $1;

   -- Insert transaction record
   INSERT INTO transactions (...) VALUES (...);

   COMMIT;
   ```

2. **Concurrency Integration Test:** Simulate 100 concurrent transactions
   ```typescript
   test("100 concurrent transactions maintain balance integrity", async ({
     request,
   }) => {
     const promises = Array.from({ length: 100 }, () =>
       request.post("/functions/v1/process-transaction", {
         data: { user_id: "test-user", kg_amount: 1, price_per_kg: 3000 },
       })
     );

     await Promise.all(promises);

     const balance = await supabase
       .from("balances")
       .select("*")
       .eq("user_id", "test-user")
       .single();

     // Verify atomic updates (no drift)
     expect(balance.rupiah_balance).toBe(300000); // 100 * 3000
     expect(balance.kg_waste_balance).toBe(100); // 100 * 1
   });
   ```
3. **Daily Reconciliation Job:** Automated balance drift detection

   ```typescript
   // Supabase Edge Function: daily-reconciliation
   const transactions = await supabase
     .from("transactions")
     .select("rupiah_amount, kg_amount")
     .eq("user_id", userId);

   const expectedRupiah = transactions.reduce(
     (sum, t) => sum + t.rupiah_amount,
     0
   );
   const expectedKg = transactions.reduce((sum, t) => sum + t.kg_amount, 0);

   const balance = await supabase
     .from("balances")
     .select("*")
     .eq("user_id", userId)
     .single();

   if (
     balance.rupiah_balance !== expectedRupiah ||
     balance.kg_waste_balance !== expectedKg
   ) {
     // Alert: Balance drift detected
     await sendSlackAlert({
       message: `Balance drift detected for user ${userId}`,
       expected: { rupiah: expectedRupiah, kg: expectedKg },
       actual: { rupiah: balance.rupiah_balance, kg: balance.kg_waste_balance },
     });
   }
   ```

**Owner:** Dev team (Epic 3 Story 8)  
**Timeline:** Sprint 3 (Epic 3)  
**Status:** Open

---

### 6.3 Concern #3: Mode Lansia Voice TTS Testing

**Issue:** Text-to-Speech (TTS) voice guidance requires manual testing on physical devices, cannot automate.

**Impact:** Medium (accessibility gap for 60+ users if TTS broken)

**Mitigation Plan:**

1. **Manual Test Protocol:** Document TTS validation checklist

   ```markdown
   **Manual Test Case: Mode Lansia Voice Guidance**

   **Pre-conditions:**

   - Physical device (Android or iOS)
   - Mode Lansia enabled in Settings
   - Device TTS engine configured (Indonesian language)

   **Steps:**

   1. Navigate to Dashboard
   2. Tap "Lihat Saldo" button
   3. Listen for TTS announcement: "Saldo Rupiah lima belas ribu"
   4. Tap "Setor Sampah" button
   5. Listen for TTS announcement: "Setor Sampah. Ambil foto sampah Anda."

   **Expected Result:**

   - TTS reads button labels aloud in Indonesian
   - TTS reads screen titles on navigation
   - TTS reads transaction amounts on confirmation

   **Pass Criteria:** All 3 TTS announcements audible and accurate
   ```

2. **Accessibility Consultant:** Engage external expert for Mode Lansia validation
3. **User Acceptance Testing (UAT):** Pilot users (60+ age group) test TTS in real scenarios

**Owner:** QA + Product Manager  
**Timeline:** Sprint 9 (Epic 9)  
**Status:** Open

---

## 7. Recommendations for Sprint 0

**Sprint 0 Goals:** Set up test infrastructure before Epic 1 implementation.

### 7.1 Initialize Test Framework (`*framework` workflow)

**Actions:**

1. Install test dependencies:
   ```bash
   npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
   npm install --save-dev @playwright/test
   npm install --save-dev maestro-cli
   ```
2. Configure Jest for unit tests:
   ```javascript
   // jest.config.js
   module.exports = {
     preset: "react-native",
     setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
     testMatch: ["**/*.test.ts", "**/*.test.tsx"],
     coverageThreshold: {
       global: {
         branches: 80,
         functions: 80,
         lines: 80,
         statements: 80,
       },
     },
   };
   ```
3. Configure Playwright for API integration tests:

   ```typescript
   // playwright.config.ts
   import { defineConfig } from "@playwright/test";

   export default defineConfig({
     testDir: "./tests/integration",
     use: {
       baseURL: "http://localhost:54321", // Local Supabase
     },
   });
   ```

4. Set up local Supabase instance:
   ```bash
   supabase init
   supabase start
   ```

**Owner:** Dev team  
**Timeline:** Sprint 0 (Week 1-2)

---

### 7.2 CI/CD Pipeline Setup (`*ci` workflow)

**Actions:**

1. GitHub Actions workflow for automated testing:

   ```yaml
   # .github/workflows/ci.yml
   name: CI - Tests & Quality Gates

   on: [push, pull_request]

   jobs:
     unit-tests:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
         - run: npm ci
         - run: npm run test:unit
         - run: npm run test:coverage
         - name: Check 80% coverage threshold
           run: |
             COVERAGE=$(jq '.total.lines.pct' coverage/coverage-summary.json)
             if (( $(echo "$COVERAGE < 80" | bc -l) )); then
               echo "❌ FAIL: Coverage $COVERAGE% below 80%"
               exit 1
             fi

     integration-tests:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: supabase/setup-cli@v1
         - run: supabase start
         - run: npm ci
         - run: npm run test:integration

     security-audit:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - run: npm ci
         - run: npm audit --audit-level=moderate
   ```

**Owner:** Dev team  
**Timeline:** Sprint 0 (Week 1-2)

---

### 7.3 Test Data Factories Setup

**Actions:**

1. Create data factories for consistent test state:

   ```typescript
   // tests/factories/user.factory.ts
   import { faker } from "@faker-js/faker";

   export function createUser(overrides?: Partial<User>): User {
     return {
       id: faker.string.uuid(),
       email: faker.internet.email(),
       role: "nasabah",
       kelurahan_id: "kelurahan-1",
       created_at: new Date().toISOString(),
       ...overrides,
     };
   }

   export function createTransaction(
     overrides?: Partial<Transaction>
   ): Transaction {
     return {
       id: faker.string.uuid(),
       user_id: faker.string.uuid(),
       kg_amount: faker.number.float({ min: 1, max: 10 }),
       price_per_kg: 3000,
       rupiah_amount: 0, // Calculated
       status: "completed",
       created_at: new Date().toISOString(),
       ...overrides,
     };
   }
   ```

2. Seed database with factories:

   ```typescript
   // tests/utils/seed-database.ts
   import { createUser, createTransaction } from "../factories";

   export async function seedDatabase() {
     const users = Array.from({ length: 10 }, () => createUser());
     await supabase.from("users").insert(users);

     const transactions = users.flatMap((user) =>
       Array.from({ length: 5 }, () => createTransaction({ user_id: user.id }))
     );
     await supabase.from("transactions").insert(transactions);
   }
   ```

**Owner:** Dev team  
**Timeline:** Sprint 0 (Week 1-2)

---

### 7.4 Accessibility Testing Setup

**Actions:**

1. Install axe-core for automated WCAG audit:
   ```bash
   npm install --save-dev @axe-core/playwright
   ```
2. Create accessibility test template:

   ```typescript
   // tests/accessibility/wcag.spec.ts
   import { test, expect } from "@playwright/test";
   import AxeBuilder from "@axe-core/playwright";

   test("Dashboard meets WCAG 2.1 AA requirements", async ({ page }) => {
     await page.goto("/dashboard");

     const accessibilityScanResults = await new AxeBuilder({ page })
       .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
       .analyze();

     expect(accessibilityScanResults.violations).toEqual([]);
   });
   ```

3. Document manual accessibility checklist (Mode Lansia TTS, screen reader)

**Owner:** QA  
**Timeline:** Sprint 0 (Week 1-2)

---

## 8. NFR Gate Criteria

**Release Gate:** Before production deployment (Epic 10), validate all NFR criteria.

### 8.1 Security Gate

- [ ] ✅ Auth/authz tests green (unauthenticated redirect, RBAC enforced)
- [ ] ✅ Secrets never logged or exposed in errors
- [ ] ✅ OWASP Top 10 validated (SQL injection blocked, XSS sanitized)
- [ ] ✅ RLS policies tested (multi-tenancy data isolation verified)
- [ ] ✅ npm audit shows no critical/high vulnerabilities

**Verdict:** ✅ PASS (all criteria met) | ⚠️ CONCERNS (minor gaps with mitigation plans) | ❌ FAIL (critical exposure)

---

### 8.2 Performance Gate

- [ ] ✅ k6 load test: p95 latency <3s (NFR-P1)
- [ ] ✅ k6 spike test: Error rate <1% during 100 concurrent transactions
- [ ] ✅ Real-time sync: <5s propagation (NFR-P5)
- [ ] ✅ Core Web Vitals: LCP <2.5s, FID <100ms (mobile)
- [ ] ✅ Endurance test: No memory leaks after 30 minutes sustained load

**Verdict:** ✅ PASS (all SLO/SLA met) | ⚠️ CONCERNS (trending toward limits) | ❌ FAIL (SLO/SLA breached)

---

### 8.3 Reliability Gate

- [ ] ✅ Error handling graceful (500 → user-friendly message + retry)
- [ ] ✅ Retries implemented (3 attempts on transient failures)
- [ ] ✅ Health checks monitored (/api/health endpoint)
- [ ] ✅ Offline handling validated (network disconnection graceful)
- [ ] ✅ Daily reconciliation job detects balance drift

**Verdict:** ✅ PASS (all recovery paths validated) | ⚠️ CONCERNS (partial coverage) | ❌ FAIL (no recovery path)

---

### 8.4 Accessibility Gate

- [ ] ✅ WCAG 2.1 AA compliance: axe-core audit green
- [ ] ✅ Mode Lansia TTS: Manual testing passed (3 accessibility consultants)
- [ ] ✅ Touch targets: ≥88pt for Mode Lansia, ≥44pt for standard UI
- [ ] ✅ Screen reader: VoiceOver/TalkBack navigation validated
- [ ] ✅ High contrast: ≥7:1 for Mode Lansia (WCAG AAA)

**Verdict:** ✅ PASS (full WCAG compliance) | ⚠️ CONCERNS (minor gaps documented) | ❌ FAIL (critical accessibility blocker)

---

### 8.5 Maintainability Gate

- [ ] ✅ Test coverage ≥80% (from CI coverage report)
- [ ] ✅ Code duplication <5% (from jscpd CI job)
- [ ] ✅ No critical/high vulnerabilities (from npm audit)
- [ ] ✅ Sentry error tracking validated (exceptions captured)
- [ ] ✅ Structured logging: Trace IDs in headers (Server-Timing)

**Verdict:** ✅ PASS (clean code, observability) | ⚠️ CONCERNS (coverage 60-79%) | ❌ FAIL (<60% coverage, no observability)

---

## 9. Test Design Summary

**Total Risks Identified:** 8 ASRs (3 Critical, 3 High, 2 Medium)

**Critical Risks (Score 9):**

- ASR-1: Transaction Accuracy (NFR-S1) - 100% accuracy required

**High Risks (Score 6):**

- ASR-2: Data Integrity (NFR-S2) - Dual ledger atomicity
- ASR-3: Authentication Security (NFR-S3) - RLS policy enforcement
- ASR-6: Mode Lansia Accessibility (NFR-A1) - TTS voice guidance

**Medium Risks (Score 4):**

- ASR-4: Transaction Latency (NFR-P1) - p95 <3s
- ASR-5: Real-Time Sync (NFR-P5) - <5s propagation
- ASR-8: Concurrent Transactions (NFR-SC2) - 100 concurrent without degradation

**Test Coverage Estimate:**

- **Unit Tests:** ~150 tests (pricing, badge rules, streak logic, XP progression, validators)
- **Integration Tests:** ~100 tests (Edge Functions, database operations, real-time sync, RLS policies)
- **E2E Tests:** ~50 tests (critical user journeys: transaction flow, withdrawal, gamification unlocks)
- **Manual Tests:** ~20 tests (Mode Lansia TTS, screen reader, QR scanning, camera, accessibility)

**Total Tests:** ~320 tests

**Estimated Test Development Effort:**

- Unit tests: 150 × 0.5 hours = 75 hours (~10 days)
- Integration tests: 100 × 1 hour = 100 hours (~12 days)
- E2E tests: 50 × 2 hours = 100 hours (~12 days)
- Manual tests: 20 × 1 hour = 20 hours (~3 days)
- **Total:** ~295 hours (~37 days, ~2 months for solo dev)

**Test Execution Time:**

- Unit tests: <1 minute (fast feedback)
- Integration tests: ~5 minutes (moderate)
- E2E tests: ~30 minutes (full suite, parallelized)
- Manual tests: ~4 hours (accessibility audit)
- **Total:** <40 minutes automated + 4 hours manual

**Quality Gate Criteria:**

- P0 pass rate: 100% (no exceptions)
- P1 pass rate: ≥95% (waivers required for failures)
- High-risk mitigations: 100% complete or approved waivers
- Coverage: ≥80%

---

## 10. Next Steps

**Immediate Actions (Sprint 0):**

1. ✅ **Accept testability assessment:** Architecture supports testing with minor concerns (RLS policies, FCM sandbox, TTS voice)
2. ✅ **Set up test framework:** Jest (unit), Playwright (integration), Maestro (E2E mobile), k6 (performance)
3. ✅ **Configure CI pipeline:** GitHub Actions with automated quality gates (coverage, security audit, integration tests)
4. ✅ **Create test data factories:** Consistent seed data for reproducible tests
5. ✅ **Document manual test protocols:** Mode Lansia TTS, screen reader, accessibility audit

**Before Epic 3 Implementation:**

1. ⚠️ **Mitigate RLS policy testing concern:** Set up local Supabase instance with RLS integration tests
2. ⚠️ **Mitigate dual ledger atomicity concern:** Implement row-level locking + concurrency tests
3. ⚠️ **Engage accessibility consultant:** Schedule Mode Lansia TTS validation (Sprint 9)

**Gate Check Decision:**
**PASS WITH CONCERNS** - Architecture supports automated testing. 3 testability concerns require mitigation before Epic 3. Recommended to proceed with implementation, address concerns in parallel during Sprint 1-2.

---

**Approval:**

- [ ] **Technical Lead:** Architecture testability approved
- [ ] **QA Lead:** Test strategy approved
- [ ] **Product Manager:** Accessibility testing approach approved
- [ ] **Architect:** NFR validation approach approved

**Sign-off Date:** ******\_******

---

**Document Version:** 1.0  
**Last Updated:** 2026-01-02  
**Review Status:** Draft → Awaiting Approval
