---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - "/Users/irsyadpahlapi/Documents/BankSampah/docs_engginering/analysis/product-brief-BankSampah-2025-12-24.md"
  - "/Users/irsyadpahlapi/Documents/BankSampah/docs_engginering/analysis/research/market-competitive-analysis-bank-sampah-research-2025-12-24.md"
  - "/Users/irsyadpahlapi/Documents/BankSampah/docs_engginering/analysis/brainstorming-session-2025-12-23.md"
documentCounts:
  briefs: 1
  research: 1
  brainstorming: 1
  projectDocs: 0
workflowType: "prd"
lastStep: 11
project_name: "BankSampah"
user_name: "TselTeam"
date: "2025-12-24"
---

# Product Requirements Document - BankSampah

**Author:** TselTeam
**Date:** 2025-12-24

---

## Executive Summary

BankSampah adalah platform digital yang menggabungkan **ledger system + marketplace ecosystem + gamification** untuk menciptakan circular economy yang complete dan rewarding di ekosistem bank sampah Indonesia.

### The Problem

Sistem bank sampah saat ini TIDAK MEMBERIKAN PENGALAMAN YANG MUDAH, TRANSPARAN, DAN REWARDING. Breakdown masalah spesifik:

1. **Friction tinggi**: Harus datang ke bank sampah fisik, jam operasional terbatas, antri
2. **Opacity**: Tidak tahu harga fair, tidak tahu impact sebenarnya, tidak tahu ke mana sampah mereka
3. **Low perceived value**: Dapat Rp 5,000 setelah kumpulin sampah sebulan = not worth the effort
4. **No habit formation**: Tidak ada sistem yang bikin sorting & depositing jadi habit
5. **Isolated experience**: Tidak ada community, tidak ada comparison, tidak ada recognition

**Result**: Low engagement (1-2 transaksi per bulan), high dropout rate, dan waste management yang tidak sustainable.

### The Solution

Platform digital dengan evolusi 3-phase:

**Phase 1 (Year 0-1): Foundation - Nasabah → Bank Sampah**

- Core transaction infrastructure dengan dual ledger (kg + rupiah)
- Gamification & habit building (badges, levels, daily impact tracking)
- Progressive UX (4 levels: simple onboarding → power user features)
- **Goal**: Prove unit economics & user retention

**Phase 2 (Year 1-2): Marketplace - Bank Sampah → Buyers/Industry**

- Buyer-supplier matching dengan price transparency
- Dynamic pricing with price protection mechanisms
- Bulk ordering & logistics optimization
- **Goal**: Unlock Rp 1.87B GMV potential per cluster

**Phase 3 (Year 2-3): Circular Economy - Industry → Products → Nasabah**

- Partnership dengan brands untuk "Made from Your Waste" products
- Traceability dengan blockchain/QR code
- Closed loop rewards
- **Goal**: Complete circular narrative - emotional & tangible proof

### Target Users

**Primary Users (MVP Focus):**

- **Ibu Siti** (Pilot Phase): Existing bank sampah user, 35-45 tahun, motivated by pride & identity
- **Rina** (Scale Phase): Eco-conscious millennial, 25-35 tahun, tech-savvy, new market creation
- **Pak Budi** (Enabler): Bank sampah operator, 30-50 tahun, needs operational efficiency

**Secondary Users:**

- **Bapak Joko**: Retired environmentalist, 55-70 tahun, LOW digital literacy (hybrid model)
- **PT Maju Jaya** (Phase 2): Industrial buyer, recycling facility seeking reliable supply

### What Makes This Special

**The Blue Ocean Opportunity**: **ZERO competitors** memiliki kombinasi sophisticated ledger + marketplace + circular economy traceability.

**Key Differentiators:**

1. **"Terdepan" = User Experience + Scale (70%)**

   - Progressive Disclosure UX (4 levels dari simple → power user)
   - Gamification that works (habit streaks, achievement system, daily challenges, social competition)
   - Crisis Communication Framework (price volatility handling dengan 4 defense layers)
   - Network effects toward 200,000 MAU target

2. **"Memberdayakan" = Hierarchy of Empowerment (30%)**

   - Financial: Rp 150K-300K/month average, investment mindset
   - Knowledge: Gamified education, waste sorting mastery
   - Identity: Environmental hero positioning, leaderboards, impact certificates
   - Community: Team competitions, neighborhood challenges, collective impact

3. **"Ekonomi Sirkular" = End-to-End Loop (Vision)**
   - Complete circular flow: Waste → Industry → Products → Nasabah
   - "Made from Your Waste" partnerships (50 brands target)
   - Traceability with blockchain/QR tracking
   - TRUE circular economy, not just buzzword

**Critical Aha Moments (All Equally Important for MVP Success):**

- **Ibu Siti**: "Dashboard 3 bulan showing 87.5kg waste, 218kg CO₂, Rp 247K earned" → screenshot viral
- **Rina**: "5 menit onboarding smooth, pickup 2 tap, Rp 35K + badge" → Instagram story brings 5 DMs
- **Pak Budi**: "2 jam jadi 30 menit! Revenue naik 2x + commission marketplace"

### Success Metrics (3-Year North Star)

1. **Scale**: 200,000 MAU (0.4% Jakarta's 50M population)
2. **Impact**: 24,000 tons waste diverted per year
3. **Economic**: Rp 50B GMV, Rp 72B income distributed to nasabah
4. **Engagement**: 65% MAU/DAU ratio (daily habit formed)
5. **Circular**: 50 brand partnerships with "made from your waste" products

## Project Classification

**Technical Type**: Hybrid - SaaS Platform (marketplace) + Mobile App (React Native + Expo) + Web App (Retool admin)

**Domain**: General (sustainability/civic tech) with Fintech elements (e-wallet integration Phase 2A)

**Complexity**: Medium-to-High

- **Medium aspects**: Core MVP flows (CRUD, ledger, gamification) are standard patterns
- **High aspects**:
  - Marketplace liquidity (two-sided network, chicken-egg bootstrapping)
  - Dual ledger architecture with real-time price calculations
  - Multi-stakeholder coordination (Nasabah, Operator, Buyer, Admin)
  - Hybrid digital-analog model (SMS/USSD/WhatsApp for inclusion)
  - Regulatory considerations (waste management per daerah, potential OJK license for e-wallet Phase 2A)

**Project Context**: Greenfield - new project

**Technology Stack**:

- **Mobile**: React Native + Expo (iOS + Android)
- **Backend**: Supabase (PostgreSQL + auth + storage + functions)
- **Admin**: Retool (drag-drop dashboard)
- **Infrastructure**: Vercel (web), Supabase (backend), Firebase (push notifications), PostHog (analytics)

**Development Approach**: Solo/duo developer with 6-month MVP timeline, leveraging PaaS and no-code tools for speed.

---

## Success Criteria

### User Success

**Primary Success Indicator: Daily Habit Formation**

- **North Star Metric:** MAU/DAU Ratio = 65% (16x improvement from 4% baseline)
- **Measurement:** Daily active usage becomes habitual behavior, not occasional transaction

**User Success Moments (Persona-Specific Aha Moments):**

1. **Ibu Siti (Pilot Phase):**

   - Aha Moment: "Dashboard 3 bulan showing 87.5kg waste, 218kg CO₂, Rp 247K earned" → Screenshot viral ke WhatsApp group
   - Success Metric: 3 transactions in first 30 days = 80% retention

2. **Rina (Scale Phase):**

   - Aha Moment: "5 menit onboarding smooth, pickup 2 tap, Rp 35K + badge" → Instagram story brings 5 DMs asking for link
   - Success Metric: Viral coefficient >1.2 (each user brings 1.2+ new users)

3. **Pak Budi (Operator - All Phases):**
   - Aha Moment: "2 jam jadi 30 menit! Revenue naik 2x + commission marketplace"
   - Success Metric: 50% willingness to pay Rp 100K/month SaaS by Month 6

**Daily Return Drivers (to achieve 65% MAU/DAU):**

_Tier 1 - Must-Have (Drive 80% of daily returns):_

- **Gamification Streaks:** 40% users maintain 7+ day streaks, driven by loss aversion psychology
- **Daily Impact Dashboard:** Fresh daily impact calculations with shareable cards, 70% users check min 1x/week

_Tier 2 - Important (Drive 15% of daily returns):_

- **Price Alerts:** Push notifications for significant price movements, 60% open rate target

_Tier 3 - Nice-to-Have (Drive 5% of daily returns):_

- **Social Features:** Weekly leaderboard movement digest, 30% engagement

**User Outcome Success:**

- Users walk away feeling: **"Saya environmental hero"** (identity transformation)
- Emotional success: Pride > Money > Community (hierarchy aligned with persona motivations)
- Tangible outcome: Average Rp 150K-300K/month income + measurable environmental impact

### Business Success

**The Rule of 3-3-3 Framework:**

**3 Obsessive Metrics (Monitor Daily):**

1. **MAU/DAU Ratio** (65% target) - THE NORTH STAR
2. **Transaction Frequency** (average per user per month) - BEHAVIOR PROOF
3. **Net Promoter Score** (>50 target) - QUALITY GATE

**3 Leading Indicators (Early Warning System):**

1. **App Session Frequency Drop:** 5x/week → 1x/week = STRONGEST churn predictor
2. **Transaction Downtrend:** 4x → 2x → 1x/month = decay pattern requiring intervention
3. **Inactivity Alerts:** 14-day = Yellow Alert, 30-day = Red Alert

**3 Strategic Metrics (Review Quarterly):**

1. **Path to 200K MAU:** North Star progress tracking
2. **Path to Rp 50B GMV:** Revenue trajectory validation
3. **Path to Break-Even:** Month 18-24 milestone tracking

**Phase-Based Business Milestones:**

_Pilot Phase (Month 0-6) - PROVE CONCEPT:_

- ✅ Adoption Rate ≥60% (300 dari 500 nasabah in pilot cluster)
- ✅ Weekly Active Users ≥70%
- ✅ Net Promoter Score ≥50
- ✅ MAU/DAU Ratio ≥50% (improving toward 65%)
- ✅ Operator Willingness to Pay ≥50% (Rp 100K/month SaaS validation)

_Scale Phase (Month 6-18) - PROVE MODEL:_

- ✅ 2,000 MAU from 5 kelurahan
- ✅ 65% MAU/DAU achieved
- ✅ CAC < Rp 50K, LTV > Rp 500K (10x economics)
- ✅ 20-30% MoM growth

_Regional Phase (Month 18-30) - PROVE MARKETPLACE:_

- ✅ 50,000 MAU across Jakarta
- ✅ Rp 5B GMV through marketplace
- ✅ 5-10% marketplace take rate
- ✅ 10+ active industrial buyers

_National Phase (Month 30-42) - PROVE CIRCULAR ECONOMY:_

- ✅ 200,000 MAU
- ✅ 24,000 tons/year waste diverted
- ✅ Rp 50B GMV
- ✅ Rp 72B income distributed to nasabah
- ✅ 50 brand partnerships
- ✅ 65% MAU/DAU maintained at scale

**Revenue & Break-Even Timeline:**

_Phase 1 (Month 0-12): VALIDATE - Zero Revenue Expected_

- Focus: Prove PMF, NOT monetization
- Funding: Bootstrap with personal savings + freelance
- Burn: -Rp 15M/year
- Success: 2K MAU, 65% MAU/DAU, NPS >50

_Phase 2 (Month 12-18): APPROACHING Break-Even_

- **Primary Revenue (70%):** Marketplace commission (Rp 2B GMV × 5% = Rp 10M/month)
- **Secondary Revenue (20%):** SaaS subscriptions (30 operators × Rp 200K = Rp 6M/month)
- **Tertiary Revenue (10%):** Premium features (200 users × Rp 10K = Rp 2M/month)
- **Total Revenue:** Rp 18M/month (approaching Rp 25M break-even target)
- Funding: Angel/pre-seed Rp 500M-1B at Month 12

_Phase 3 (Month 18-24): BREAK-EVEN ACHIEVED_ 🎉

- Revenue: Rp 25M/month
- Cost: Rp 25M/month (team 5-7)
- Burn: Rp 0 (sustainable!)

_Phase 4 (Month 24-42): PROFITABLE - Scale Mode_

- Revenue: Rp 200M/month (Rp 50B GMV × 5%)
- Cost: Rp 100M/month (team 15-20)
- Profit: Rp 100M/month = Rp 1.2B/year

**Critical Success Path:** Marketplace commission is THE revenue driver. Marketplace must launch by Month 12-14 to achieve break-even Month 18-24.

**Decision Gates (Go/No-Go at Month 6):**

| Scenario  | Product Gates | Financial Gate      | Decision                       |
| --------- | ------------- | ------------------- | ------------------------------ |
| Best Case | All 4 ≥ GO    | ≥50% willing to pay | SCALE with confidence          |
| Strong    | 3/4 ≥ GO      | ≥50% willing        | SCALE with minor adjustments   |
| Moderate  | 2/4 ≥ GO      | 25-49% willing      | EXTEND PILOT 3 months, iterate |
| Weak      | ≥2 KILL       | <25% willing        | PIVOT - major changes needed   |
| Failure   | ≥3 KILL       | <25% willing        | SHUTDOWN - no PMF              |

**Kill Switch Criteria (Personal Thresholds):**

- ✋ Burn Rp 15M with zero traction (<100 active users OR <20% adoption)
- ✋ 12 months with churn >20% monthly (leaky bucket)
- ✋ 100+ negative feedback patterns (same critical issue, unfixed 3 months)
- ✋ Opportunity cost (better opportunity emerges with 3x faster PMF)
- ✋ Lost passion 6+ months (founder burnout)

### Technical Success

**Tier 1 - CRITICAL (Trust-Breaking if Failed):**

1. **Transaction Accuracy = 100.0%**

   - Zero tolerance for lost transactions
   - Implementation: Dual-write pattern, audit logs, transaction reconciliation
   - Monitoring: Real-time transaction count validation
   - Kill switch: ANY lost transaction = halt pilot, fix, re-launch

2. **Data Integrity = 100.0%**

   - Balance calculations must be precise (dual ledger kg + rupiah)
   - Implementation: Database constraints, automated reconciliation tests
   - Monitoring: Daily balance integrity checks
   - Kill switch: Balance corruption = immediate halt

3. **Authentication Security = 99.99%**
   - No unauthorized access to nasabah accounts
   - Implementation: Supabase Auth (battle-tested), session management
   - Monitoring: Failed login attempts, anomaly detection
   - Kill switch: Security breach = immediate lockdown

**Tier 2 - IMPORTANT (Frustration if Failed, but Recoverable):**

4. **Transaction Recording Latency < 3 seconds (p95)**

   - Operator stands with nasabah, waiting = awkward
   - Implementation: Optimistic UI updates, async processing
   - Acceptable MVP: < 5 seconds during pilot, optimize to 3s post-pilot

5. **Uptime Target = 99.5%** (downtime < 3.6 hours/month)

   - Realistic for solo/duo dev with PaaS (Supabase/Vercel)
   - Acceptable: Scheduled maintenance windows announced
   - Implementation: Leverage PaaS reliability, not self-managed

6. **Push Notification Delivery = 95%**
   - Critical for daily engagement (streaks, price alerts)
   - Implementation: Firebase FCM (proven reliability)
   - Monitoring: Delivery receipts, bounce rates

**Tier 3 - PERFORMANCE OPTIMIZATION (Post-Pilot):**

7. **App Load Time < 2 seconds**
8. **Image Upload < 5 seconds**
9. **Dashboard Refresh < 1 second**

**MVP Technical Baseline:**

- **Tier 1 = Non-negotiable before pilot launch** (build right from day 1)
- **Tier 2 = Target these, acceptable to miss by 10-20%** during pilot, iterate based on feedback
- **Tier 3 = Optimize post-pilot** if users complain

**Technical Debt Strategy:**

- Month 0-6: Acceptable technical debt to ship fast
- Month 6-12: Pay down critical debt before scale
- Month 12+: Clean architecture required for marketplace complexity

### Measurable Outcomes

**3-Month Pilot Success (Month 6 Gate):**

- 300+ active users from 5-10 bank sampah units
- 60% adoption rate (300 dari 500 nasabah in pilot area)
- 70% weekly active users
- 50% MAU/DAU ratio (progressing toward 65%)
- NPS ≥50
- 50% operators willing to pay Rp 100K/month

**12-Month Scale Success:**

- 2,000 MAU across 30-50 bank sampah units
- 65% MAU/DAU ratio achieved
- 20-30% MoM growth sustained
- CAC < Rp 50K, LTV > Rp 500K
- Marketplace MVP launched (Month 12-14)

**24-Month Regional Success:**

- 50,000 MAU across Jakarta
- Rp 5B GMV through marketplace
- 10+ active industrial buyers
- Break-even achieved (Rp 25M revenue = Rp 25M cost)

**36-Month National Success:**

- 200,000 MAU nationally
- Rp 50B GMV
- 50 brand partnerships (circular economy)
- Rp 1.2B/year profit

**Impact Metrics (Non-Financial Success):**

- 24,000 tons/year waste diverted from TPA
- 60,000 tons/year CO₂ prevented (waste_kg × 2.5 formula)
- Rp 72B total income distributed to nasabah (financial empowerment)
- 70% users view impact dashboard min 1x/month (awareness)

## Product Scope

### MVP - Minimum Viable Product (Month 0-6)

**Philosophy:** Ruthless prioritization for 6-month solo/duo dev timeline. Prove concept with 5-10 units, 300-500 users.

**The Essential 5 Core Flows:**

1. **Registration & Onboarding**

   - Nasabah: Sign up Google/phone (1-tap), 3-screen onboarding (<60 sec), select kelurahan/unit
   - Operator: Verification, unit profile setup, operator app, training (<10 min assisted)
   - Tech: Supabase Auth (Google OAuth, phone OTP), user roles

2. **Deposit Transaction (Core Value Loop)**

   - Nasabah: Photo sampah → Select types → Estimate weight → Request pickup/drop-off
   - Operator: Scan QR → Timbang → Confirm → Auto-receipt
   - Notification: "Transaksi berhasil! +Rp 25,000 (7.5kg). Impact: 18.75kg CO₂ prevented!"
   - Success: 2 hours manual → 30 minutes digital
   - Tech: Mobile camera QR scan, realtime Supabase sync, dual ledger, admin price table

3. **Balance & Impact Dashboard**

   - Simple View (Level 1): Saldo, Total Sampah, Impact, [Setor] [Tarik] buttons
   - Detailed View (Level 2): Breakdown by type, transaction history, impact metrics, shareable card
   - Operator Dashboard (Retool): Transactions, active nasabah, revenue forecast
   - Tech: React Native UI, Supabase queries, Retool admin, PNG export

4. **Withdrawal (Financial Empowerment)**

   - Nasabah: Check balance → Choose method (cash pickup primary) → Enter amount (min Rp 50K) → Request
   - Operator: View requests → Verify identity (QR) → Approve & mark paid → Receipt
   - Tech: Withdrawal queue Supabase, manual cash MVP, audit trail

5. **Basic Gamification (Essential for Retention)**
   - Badges: "First Hero", "Week Warrior" (7-day streak), profile showcase, shareable
   - Leaderboards: Neighborhood ranking, Top 10 month, privacy opt-out
   - Streak Counter: Daily/weekly streak, "7-day streak! Bonus +10%", push notification
   - Why IN MVP: 65% MAU/DAU requires habit formation, adds 2-3 weeks but critical
   - Tech: Badge system Supabase (JSON field), leaderboard queries, Firebase push

**MVP Technical Stack:**

- Frontend: React Native + Expo (iOS/Android single codebase)
- Backend: Supabase (PostgreSQL + realtime + auth + storage)
- Admin: Retool drag-drop panel
- Infrastructure: Vercel (web future), Supabase (backend), Firebase (notifications), PostHog (analytics)

**Database Strategy:** "Dormant Features" - build extensible schema NOW (Phase 2-3 fields as NULL), activate features later to avoid painful migrations.

**OUT OF SCOPE for MVP (Prevent Scope Creep):**

- ❌ Dynamic pricing (fixed price table MVP, Phase 2A)
- ❌ IoT timbangan integration (manual weighing MVP, Phase 2A)
- ❌ E-wallet auto-transfer (manual withdrawal MVP, Phase 2A)
- ❌ Advanced gamification (achievement trees, AI challenges → Phase 2A)
- ❌ Machine learning (photo recognition, churn prediction → Phase 2A)

### Growth Features (Post-MVP - Phase 2A: Month 6-18)

**After PMF Proven at Month 6:**

1. **Dynamic Pricing Engine**

   - Real-time market price updates
   - AI price predictions
   - "Best time to sell" recommendations
   - Price protection mechanisms

2. **IoT Integration**

   - Smart timbangan with RFID tags
   - Automatic weight capture
   - Sensor-based quality verification

3. **E-wallet Integration**

   - GoPay, OVO, DANA instant disbursement
   - Auto-transfer rules
   - Digital payment ecosystem

4. **Advanced Gamification**

   - Achievement trees (skill progression)
   - AI-powered daily challenges
   - NFT badges (blockchain verification)
   - Squad battles & team competitions

5. **Machine Learning Features**
   - Photo recognition (auto-detect waste types)
   - Churn prediction (proactive intervention)
   - Price forecasting (investment optimization)

**Phase 2B: Marketplace Launch (Month 12-18)**

6. **B2B Marketplace**

   - Buyer-supplier matching algorithm
   - Bulk ordering system
   - Logistics coordination
   - Escrow payment protection

7. **Advanced Analytics**

   - Predictive insights dashboard
   - Cohort analysis
   - Custom reporting for operators
   - Impact modeling

8. **Platform Expansion**
   - Multi-language support (English, Javanese, Sundanese)
   - White-label platform for other regions
   - API for third-party integrations

### Vision (Future - Phase 3: Month 18-42)

**Circular Economy Features:**

1. **Traceability System**

   - Blockchain/QR waste-to-product tracking
   - "Made from Your Waste" brand partnerships (50 brands target)
   - Closed-loop rewards program

2. **Carbon Credit Trading**

   - Verified carbon offsets (ISO 14064 certified)
   - Corporate buyers for net-zero goals
   - Nasabah earn tradeable carbon tokens
   - Revenue: Rp 100-500M/year from corporate sales

3. **Platform API & Ecosystem**
   - Public API for third-party developers
   - Developer marketplace
   - Fintech integrations (waste balance as asset)
   - E-commerce acceptance (waste credits as payment)

**Geographic Expansion (All THREE Paths in Parallel):**

- **Path A:** Jakarta dominance (200K MAU = 2% penetration)
- **Path B:** Java Island expansion (Surabaya, Bandung, Semarang, Yogyakarta, Malang)
- **Path C:** National scale (33 provinces, 275M population)

**Execution enabled by:** Cloud scalability, operator franchise model, digital-first marketing, government partnerships.

**Exit Strategy - Triple Optionality:**

- **Option A:** Lifestyle business (Rp 1-2B/year profit, 15-20 team)
- **Option B:** Acquisition (Rp 50-300B by BankSampah.id, Waste4Change, or GoTo/Grab)
- **Option C:** Unicorn ambition (Rp 15T valuation, IPO, regional SEA expansion)

**Philosophy:** Build for Option C (most ambitious), remain open to Option B (strategic fit), be comfortable with Option A (mission-first sustainability).

---

## User Journeys

### Journey 1: Ibu Siti - From Manual Frustration to Digital Champion (Warm/Assisted Onboarding)

**Opening Scene: Saturday Morning Chaos**

Ibu Siti stands in her living room at 7:45 AM, surrounded by neatly sorted plastic bags of waste. Her heart sinks - the bank sampah opens at 8:00 AM, but her son just reminded her about his math tutoring at 8:30. "Aduh, ketinggalan lagi..." she sighs. This is the third time this month she's missed the narrow 2-hour window. The sorted waste will sit another week, and her motivation to continue recycling is slowly fading.

She's been a loyal nasabah for 2 years, but the friction is wearing her down. When she does manage to deposit, the experience is confusing - harga berubah tanpa penjelasan, buku tabungan fisik sering salah catat, and she has no idea if her efforts actually make any environmental difference. Last month she received only Rp 12,000 for 3kg of carefully sorted plastic. "Segini doang?" she thought. "Tidak worth the effort."

**Discovery: The WhatsApp Announcement**

On Monday evening, Pak Budi (her local bank sampah operator) sends a message to the neighborhood WhatsApp group: "Ibu-ibu, ada app baru untuk bank sampah! Bisa setor kapan aja, lihat harga realtime, dan impact kita!" He offers to help everyone install and set up this weekend.

Ibu Siti is intrigued but skeptical. "App? Saya kurang pandai... takut ribet." But several neighbors are interested, and she doesn't want to be left behind.

**Rising Action: Assisted Setup & First Transaction**

Saturday afternoon, Pak Budi visits her home with his tablet. The onboarding takes only 5 minutes:

- Sign up with Google (her Gmail account - no password to remember!)
- 3 simple screens explaining how it works (she understands immediately)
- Select her kelurahan and bank sampah unit
- Import her existing Rp 45,000 balance from the manual book (verified by Pak Budi)
- Watch a 2-minute tutorial video in simple Bahasa

She receives a "Welcome Badge" and Rp 5,000 bonus. "Lumayan!" she smiles.

That evening, she has 2kg of plastic bottles ready. Instead of waiting until Saturday, she opens the app and taps "Setor Sampah" → Takes a photo → Selects "Plastik PET" → Chooses "Pickup Besok Pagi."

The next morning at 9 AM (her preferred time!), Pak Budi arrives. He scans her QR code from the app, weighs the plastic on his timbangan (7.5kg total - she added more overnight!), and taps "Selesai" on his operator app.

**Climax: The Dashboard Revelation**

Instantly, her phone buzzes with a notification:

> "Transaksi berhasil! +Rp 25,000 (7.5kg Plastik PET @ Rp 3,333/kg). Impact: 18.75kg CO₂ dicegah! 🌱"

But the real magic happens when she opens the app and sees her new dashboard:

**Simple View (Level 1):**

- **Saldo**: Rp 70,000 (naik dari Rp 45K!)
- **Total Sampah**: 7.5kg (minggu ini)
- **Impact**: 18.75kg CO₂ dicegah = 1.4 pohon setara
- Two big buttons: [Setor Lagi] [Tarik Uang]

She taps on "Lihat Detail" and unlocks **Level 2 View**:

- Breakdown: 7.5kg Plastik PET @ Rp 3,333/kg
- Transaction history with timestamps and photos
- "Total Impact 3 Bulan" section showing: 87.5kg waste diverted, 218kg CO₂ prevented, Rp 247,500 total earned
- Shareable achievement card with beautiful infographic

Her eyes widen. "Selama ini saya sudah selamatkan segini banyak?"

She immediately takes a screenshot and shares to her RT/RW WhatsApp group with caption: "Ibu-ibu lihat dong! Ternyata kita bisa bikin dampak sebesar ini! 💚"

Within 30 minutes, 5 neighbors reply: "Wow! Download dimana?", "Saya juga mau!", "Ajarin dong Bu Siti!"

**Resolution: The New Normal**

Three months later, Ibu Siti has transformed:

- She deposits 3-4x per month (vs 1-2x before) - flexible scheduling fits her life
- She maintains a 21-day streak and earned "Month Hero" badge
- She's ranked #47 dari 2,847 heroes di Jakarta Selatan (she checks daily!)
- Her kelurahan is ranked #3 in the monthly challenge - community pride activated
- She earned Rp 287,500 total - tangible income that matters
- Most importantly: She FEELS like an environmental hero, not just "tukang sampah"

When her neighbors ask "Gimana caranya?", she confidently teaches them - she's now the local champion for digital recycling. Her skepticism about "app ribet" has completely transformed into advocacy.

The old pain points have vanished:

- ✅ No more friction - deposit on HER schedule
- ✅ Total transparency - she knows exactly why prices change
- ✅ High perceived value - Rp 287K in 3 months + pride
- ✅ Habit formed - 21-day streak makes it automatic
- ✅ Community connected - competing & collaborating with neighbors

**Requirements Revealed by This Journey:**

- Google/phone authentication (1-tap signup)
- Assisted onboarding flow with progress tracking
- QR code generation for nasabah identity
- Photo upload for waste documentation
- Flexible pickup scheduling (vs fixed hours)
- Real-time transaction processing with instant notifications
- Dual ledger balance display (Rupiah + kg)
- Progressive UX disclosure (Level 1 → Level 2 → Level 3)
- Impact calculation engine (CO₂, trees equivalent)
- Shareable achievement cards (PNG export)
- Gamification: Badges, streaks, leaderboards
- Push notifications for daily engagement
- Transaction history with photos and breakdowns
- Community features (neighborhood rankings, challenges)

---

### Journey 2: Rina - From Guilty Scrolling to Viral Advocate (Cold/Self-Service Onboarding)

**Opening Scene: Late Night Climate Anxiety**

It's 11 PM on a Wednesday. Rina (28, digital marketing specialist) is scrolling Instagram in bed when she sees a viral post from @ecoindonesia about ocean plastic pollution. The image of a sea turtle trapped in plastic bags hits her hard. She feels a familiar wave of guilt wash over her.

"I talk about sustainability at work, I buy bamboo toothbrushes, I have 5 reusable bags... but I still throw everything in the trash mixed together," she thinks. "What am I actually DOING?"

She screenshots the post, shares it to her Instagram story with caption "We need to do better 😔", and continues scrolling. But the guilt lingers. She opens Google: "cara recycle Jakarta" → Finds bank sampah info → "Harus datang Sabtu pagi jam 8? Jauh banget... next time deh."

She closes the browser. The motivation fades. This cycle has repeated every few months for the past year.

**Discovery: The Instagram Ad**

Two days later, during her morning commute, she sees a sponsored post on Instagram:

> "Turn your trash into investment. Be environmental hero. Join 10K+ eco warriors making real impact. 🌱📈"

The visual is stunning - clean UI, Gen Z aesthetic, showing a portfolio-like interface with waste types and values. One testimonial catches her eye: "5 menit setup, pickup di rumah, Rp 35K minggu pertama + badge. Finally, action > talk!"

She clicks. The landing page is equally polished. She thinks: "Okay, this looks legit. Mari kita coba..."

**Rising Action: Frictionless Onboarding**

She downloads the app. The onboarding is exactly what she expects from modern apps:

**Screen 1**: "Turn trash to treasure" with sleek animation  
**Screen 2**: "Track your impact like investment portfolio" with charts  
**Screen 3**: "Join 10,483 eco warriors in Jakarta" with social proof

She taps "Sign Up with Google" - 1 tap, no password, no forms. Done in 3 seconds.

Next screen: "Where are you?" - Location permission granted, automatically selects "Jakarta Selatan, Kemang" - accurate!

"What waste do you usually have?" - She selects: Plastik botol, kardus, kertas. The app shows estimated earnings: "~Rp 120K/bulan based on average 5kg/week."

Final screen: "Complete your first transaction within 24 hours = DOUBLE points!" - Urgency created. Challenge accepted.

Onboarding completed in **4 minutes and 38 seconds**. She's impressed.

**The First Transaction: Instant Gratification**

She looks at her apartment - there's actually 2 bags of sorted bottles and cardboard by the door (she's been "meaning to deal with them" for 2 weeks).

She opens the app → Taps "Setor Sampah" → Takes photo of both bags → App AI recognizes: "5 plastik botol, 2kg kardus terdeteksi"

She confirms: Yes, that's right! → Selects pickup time: "Besok 10-12" (2-hour window works for her remote work schedule) → Submit.

Notification appears: "Pickup dijadwalkan untuk besok 10-12. Estimasi Rp 35,000. You're on your way to Hero status! 🌟"

The next morning at 10:47 AM, her doorbell rings. A friendly petugas wearing "BankSampah" vest confirms her name, scans her QR code from the app, weighs the waste on a portable scale (actually 3.2kg total - more than expected!), and taps his tablet.

Instantly, her phone buzzes:

> "🎉 First transaction complete! Rp 35,250 earned + 12kg CO₂ prevented. You've unlocked 'Beginner Hero' badge!"

**Climax: The Shareable Moment**

She opens the app. The UI is beautiful - exactly the fintech-style portfolio view she expected:

**Investment-Style Dashboard:**

- **Your Portfolio**: 2.5kg Plastik PET (value: +15% this week 📈), 0.7kg Cardboard (-5% hold or sell?)
- **Total Earnings This Week**: Rp 35,250
- **Impact Stats**: 12kg CO₂ prevented = 0.9 trees planted equivalent
- **Your Level**: Beginner Hero (47/100 XP to Apprentice)
- **Streak**: Day 1 🔥 (keep it going!)

But the killer feature: The app auto-generates an Instagram story template with her stats in aesthetic gradient design:

> "Just joined the circular economy movement 🌱  
> First week: Rp 35K earned + 12kg CO₂ prevented  
> Waste = Investment 📈 Who knew?  
> @BankSampahApp"

She posts it immediately. Within 2 hours:

- 34 friends like it
- 5 DMs asking: "Link app-nya dong!", "Ini legit?", "Gimana caranya?"
- 2 friends download and use her referral code (she gets Rp 20K bonus!)

That moment, she realizes: "This is going viral. This is how we scale impact."

**Resolution: From User to Advocate**

Two months later, Rina has become a micro-influencer for sustainability:

- She maintains 58-day streak (addiction formed!)
- She's recruited 12 friends via referrals (Rp 120K bonus earned)
- Her "squad" (with 5 close friends) is ranked #7 in weekly challenges
- She's earned Rp 420,000 total - but money is secondary now
- Primary metric she cares about: **156kg CO₂ prevented = 12 trees equivalent**
- She's achieved "Legend" tier with exclusive jade badge
- She regularly shares achievement milestones on Instagram (300+ engagements per post)

Her identity has shifted. She's no longer "guilty talker" - she's "environmental hero with receipts." When colleagues discuss sustainability at work, she shows her app dashboard. When friends ask about climate action, she has one answer: "Download this app. Takes 5 minutes. Let's compete."

The old barriers have completely dissolved:

- ✅ No awareness gap - Instagram ads met her where she scrolls
- ✅ No perceived complexity - onboarding was frictionless
- ✅ High accessibility - pickup at her doorstep, her schedule
- ✅ No stigma - rebranded as investment, not "sampah"
- ✅ Social validation unlocked - viral Instagram content + squad challenges

**Requirements Revealed by This Journey:**

- Instagram-optimized ad campaigns with Gen Z aesthetics
- Google 1-tap OAuth integration
- Location-based auto-detection (GPS permission)
- AI photo recognition for waste type estimation
- Pickup scheduling with 2-hour windows
- Portfolio-style investment UI (fintech language)
- Real-time price change indicators (% up/down)
- Achievement/badge unlock animations
- Streak tracking with fire emoji 🔥
- XP/leveling system (Beginner → Apprentice → Hero → Legend)
- Auto-generated Instagram story templates (aesthetic PNG)
- Referral code system with bonus tracking
- Squad/team creation and management
- Weekly challenge leaderboards with squad rankings
- Social sharing deep links
- Push notifications for streak maintenance ("Don't break your 58-day streak!")

---

### Journey 3: Bapak Joko - Proving Lansia Can Digital (Hybrid Assisted)

**Opening Scene: The Family Gathering Moment**

It's Sunday lunch at Pak Joko's home in Jakarta Timur. At 67, he's retired from his government job and now spends his time as coordinator for his neighborhood bank sampah. He's proud of this role - it gives him purpose and keeps him connected to the community.

His daughter and 15-year-old grandson are visiting. Over lunch, his grandson excitedly shows TikTok videos on his phone. Pak Joko watches, smiling, but inside he feels a familiar pang: "Dunia digital ini... saya sudah ketinggalan."

He mentions to his daughter: "Pak Budi bilang ada app baru untuk bank sampah. Tapi saya... takut salah pencet. Tulisan di HP saya kecil-kecil, mata sudah rabun. Lebih enak buku tabungan fisik, bisa lihat catatan tangan."

His daughter exchanges a glance with his grandson. "Mungkin cucu bisa bantu install, Pa?"

Pak Joko hesitates. He doesn't want to burden them. But deep down, he wants to prove - to himself and his community - that lansia juga bisa digital.

**Discovery: The Cucu's Offer**

After lunch, his grandson (Dimas) says: "Kakek, ayo kita coba app-nya sekarang. Aku bantu setup. Katanya ada 'Mode Lansia' khusus untuk kakek-kakek dan nenek-nenek. Super simple!"

Pak Joko agrees, nervously. "Kalau ribet, berhenti ya. Kakek nggak mau bikin kamu repot."

"Nggak ribet kok, Kek. Kakek cuma perlu tahu 3 tombol. Itu aja."

**Rising Action: Family-Assisted Setup**

Dimas downloads the app on Pak Joko's Android phone. During onboarding, he selects: **"Mode Lansia"** - a special accessibility mode.

The UI transforms:

- Font size: 24pt (3x larger than standard)
- 3 large buttons only: **[LIHAT SALDO]** **[SETOR SAMPAH]** **[TARIK UANG]**
- Voice guidance option (Dimas enables this): "Selamat datang di BankSampah. Tekan tombol hijau untuk lihat saldo Anda."
- High contrast colors (dark text on light background)
- No complex menus or nested navigation

Dimas helps with signup:

- Uses Pak Joko's phone number (sends SMS OTP)
- Dimas reads the 6-digit code aloud, Pak Joko types it carefully
- Profile setup: Nama, bank sampah unit, existing balance import
- Dimas takes Pak Joko's photo for profile (makes it personal!)

Setup complete. Pak Joko looks at the screen. **Three giant buttons.** That's it. He can remember this.

"Ini aja, Kek. Tombol hijau = lihat saldo. Tombol biru = setor sampah. Tombol kuning = tarik uang. Kakek bisa, nggak perlu baca manual."

Pak Joko nods slowly. "Coba saya... tekan yang hijau?"

He presses **[LIHAT SALDO]**. A single number appears in HUGE font:

> **Rp 125,000**  
> (Saldo Anda saat ini)

He smiles. "Ini... mudah ya?"

**The First Transaction: SMS Confirmation**

Two days later, Pak Joko collects 5kg of plastic from his neighbors during his morning rounds. Normally he'd record this in his buku besar. But now... he decides to try the app.

He opens it. Three buttons. He remembers: **Blue = Setor Sampah**.

He presses it. A simple form appears:

- **"Berapa kg?"** → He types: 5
- **"Jenis apa?"** → Large icons: [Plastik] [Kertas] [Logam] [Kaca] - He taps [Plastik]
- **"Konfirmasi?"** → [YA] [TIDAK] - He taps [YA]

The app processes. He gets nervous - "Did I break it?"

Then, his phone buzzes with an **SMS message** (not just app notification!):

> "BankSampah: Transaksi berhasil! 5kg Plastik = Rp 15,000. Saldo Anda: Rp 140,000. Total impact: 12.5kg CO₂ dicegah. Terima kasih Pak Joko! 🌱"

He reads the SMS twice. Then shows it to his wife. "Lihat, saya bisa! Nggak susah kok!"

**Climax: Community Champion Moment**

The next week, during the monthly RT meeting, Pak Joko is invited to share about the bank sampah program. Normally he brings printed reports. But this time, he brings his phone.

He opens the app → Presses **[LIHAT SALDO]** → Shows the screen to the room:

> **Rp 140,000**

"Ini saldo saya. Digital. Saya yang input sendiri!" He says proudly.

Then he shows the SMS history on his phone - 4 transactions this week, each with confirmation. The bapak-bapak and ibu-ibu in the room are impressed. Several approach him after: "Pak Joko, ajarin dong!"

The RT head asks: "Pak Joko, bisa bantu sosialisasi app ini ke warga lansia? Kalau Bapak bisa, pasti yang lain juga bisa."

Pak Joko agrees, beaming. He's no longer "the lansia who can't use apps" - he's **the lansia champion who proves digital inclusion is possible**.

**Resolution: Elder Advocate**

Three months later, Pak Joko has onboarded 15 lansia neighbors (ages 60-75) using the same family-assisted approach. He created a simple guide on paper: "3 Tombol, 3 Langkah, Selesai!"

His routine:

- He uses Mode Lansia daily - checks balance every morning (habit formed!)
- He receives SMS confirmations for every transaction (saves them as proof)
- When confused, he asks Dimas via WhatsApp voice message (hybrid support model works!)
- He earned "Community Champion" badge (50 referrals milestone!) - displayed on his profile with pride
- The app featured him in a testimonial: "67 tahun, 15 warga dibimbing. Lansia bisa digital!" with his photo

Most importantly: He's proven to himself and his community that age is not a barrier. His identity has shifted from "ketinggalan zaman" to "pioneer digital inclusion."

The hybrid model has removed all barriers:

- ✅ Family-assisted setup (not solo onboarding)
- ✅ Mode Lansia UI (3 buttons, large font, high contrast)
- ✅ SMS confirmations (not just app notifications)
- ✅ Voice guidance optional (audio reinforcement)
- ✅ WhatsApp voice support (not email/tickets)
- ✅ Community recognition (Champion badge matters!)

**Requirements Revealed by This Journey:**

- Mode Lansia accessibility toggle (onboarding and settings)
- Ultra-simplified 3-button UI (alternative to standard interface)
- Font size override (24pt minimum)
- High contrast color scheme (WCAG AAA compliance)
- Voice guidance system (text-to-speech)
- SMS fallback notifications (not just push notifications)
- Phone number authentication (not just email/Google)
- SMS OTP verification (accessible for non-email users)
- WhatsApp integration for customer support
- Family-assisted onboarding flow (multi-device setup)
- "Community Champion" badge for referral milestones
- Testimonial feature system (user-generated content)
- Simple transaction form (minimal fields)
- Large icon selectors (visual, not text-heavy)
- Confirmation dialogs with [YA] [TIDAK] only

---

### Journey 4: Pak Budi - From Paperwork Hell to Digital Entrepreneur (Operator Journey)

**Opening Scene: Saturday Morning Chaos**

It's 8:00 AM on Saturday. Pak Budi (42) stands at his small bank sampah unit in Kelurahan Tebet with a growing line of 12 nasabah waiting impatiently. He's surrounded by:

- 3 massive buku besar (ledger books) filled with handwritten transactions
- A battered calculator
- Plastic bags of unsorted waste
- A manual timbangan (scale)
- Cash box with mixed denominations
- Worried look on his face

It's going to be a long morning. Each nasabah transaction takes 5-7 minutes:

1. Find their name in the buku besar (sometimes misspelled, hard to find)
2. Weigh the waste (write down on paper)
3. Look up price from crumpled price list taped to wall
4. Calculate by hand: 2.5kg × Rp 3,500 = Rp 8,750 (double-check with calculator)
5. Write transaction in ledger book: Date, name, waste type, kg, price, total
6. Update their balance (previous balance + today's amount)
7. Give them physical receipt (handwritten carbon copy)
8. Count cash (if they're withdrawing)

After 2.5 hours, he's exhausted, hand cramping, and he's made at least 3 calculation errors that nasabah caught ("Pak, kok hasilnya beda?"). One ledger page is smudged because someone spilled water. He has 50+ nasabah recorded across 3 books - finding anyone quickly is impossible.

His commission today: maybe Rp 50,000 for 4 hours of work. But the paperwork, the errors, the complaints... "Apa worth it?" he wonders.

**Discovery: The Competitive Threat**

The following week, Pak Budi hears from his network: Pak Hasan (another operator 2 kelurahan away) is using some new app. His nasabah are happier, he's processing 2x more transactions, and he's even getting commission from some "marketplace" thing.

Pak Budi is worried. "Kalau nasabah saya pindah ke dia karena sistemnya lebih modern... income saya habis."

He messages Pak Hasan on WhatsApp: "Pak, app apa itu? Bisa bantu saya?"

Pak Hasan shares: "Namanya BankSampah. Gratis untuk operator. Ada training online 30 menit. Hidup saya berubah total, Pak. Coba deh!"

Pak Budi downloads the **Operator App** that night. He's skeptical but desperate.

**Rising Action: The 30-Minute Training**

He watches the training video series (5 videos × 6 minutes each):

**Video 1**: Setup operator profile (unit name, location, operating hours)  
**Video 2**: Add nasabah (scan QR code or manual entry)  
**Video 3**: Process transactions (the core workflow)  
**Video 4**: Manage withdrawals (approval flow)  
**Video 5**: Read dashboard reports (business insights)

The UI looks simple. He decides to try with 5 pilot nasabah next Saturday.

**Saturday Morning Transformation:**

At 8 AM, Pak Budi announces to the waiting line: "Ibu-ibu, Bapak-bapak, hari ini kita coba sistem baru. Lebih cepat, lebih akurat. Yang mau coba duluan?"

5 brave nasabah volunteer. He helps them install the Nasabah App on their phones (Google sign up, 3-minute onboarding).

Then the magic happens:

**New Transaction Flow (Digital):**

1. Nasabah opens their app → Shows QR code on screen
2. Pak Budi scans QR with his Operator App → Nasabah identity confirmed
3. He weighs the waste → Enters: 3.2kg Plastik PET → Tap [Konfirmasi]
4. App automatically calculates: 3.2kg × Rp 3,500 = Rp 11,200 (zero mental math!)
5. App auto-updates nasabah balance in realtime
6. Nasabah receives instant push notification + digital receipt
7. Transaction recorded in cloud database (no ledger book!)
8. **Total time: 45 seconds**

He blinks. "Cuma... 45 detik? Biasanya 5 menit!"

By 9:30 AM, he's processed 25 nasabah (vs usual 12). His hand doesn't hurt. No calculation errors. No complaints. The nasabah are amazed: "Pak Budi, cepat banget! Dan saya langsung dapat notifikasi di HP!"

**Climax: The Dashboard Discovery**

After the morning rush, Pak Budi opens the **Operator Dashboard** on his tablet (Retool admin interface):

**Business Intelligence That Blows His Mind:**

- **Today's Stats**: 25 transaksi, 67.5kg total waste processed, Rp 225,000 total disbursed
- **Weekly Revenue Forecast**: Based on this week's pattern, estimated Rp 1,200,000 processed this month
- **Commission Earned**: Rp 125,000 (5% of Rp 2,500,000 GMV this month)
- **Top Contributors Leaderboard**: Ibu Siti #1 (12kg this week), shows her contact
- **Active Nasabah**: 50 registered, 38 active this month (76% retention)
- **Waste Type Breakdown**: Plastik 60%, Kertas 25%, Logam 10%, Kaca 5%
- **Inventory Summary**: 350kg stock, needs pickup by pengepul this week

He's never had these insights before. With the manual buku besar, he just... recorded things. Now he can actually RUN A BUSINESS.

But the most exciting part: A new tab appears: **"Marketplace Opportunities"**

He clicks it. A list appears:

- PT Maju Jaya Recycling wants 50kg PET Plastik, will pay Rp 4,500/kg (vs usual Rp 3,500 from pengepul!) - +28% premium!
- Expected commission for Pak Budi: Rp 25,000 (10% of Rp 250,000 markup)

His eyes widen. "Ini... serious? Saya bisa dapat harga lebih tinggi PLUS commission?"

He accepts the offer. His stock of PET plastic is matched, pickup scheduled for Monday. Easy.

**Resolution: The Digital Entrepreneur**

Three months later, Pak Budi's life has completely changed:

**Operational Transformation:**

- Saturday mornings: 2.5 hours → 45 minutes (3x productivity gain!)
- Nasabah served: 50 → 120 (expanded to 2 kelurahan, word-of-mouth growth)
- Errors: 3-5 per week → ZERO (system handles all calculations)
- Paperwork: 3 ledger books → Digital cloud (searchable, backed up)

**Financial Transformation:**

- Base commission: Rp 200K/month → Rp 400K/month (2x volume)
- Marketplace commission: Rp 150K/month additional (new revenue stream!)
- Total income: Rp 200K → Rp 550K/month (**2.75x increase!**)
- Time investment: Same hours, but much less stress

**Business Intelligence:**

- He now checks dashboard daily (morning ritual)
- He proactively contacts top 10 contributors via WhatsApp to thank them (retention strategy!)
- He uses inventory forecasts to schedule pengepul pickup (no overflow issues)
- He experiments with operating hours based on traffic patterns in dashboard

Most importantly: His identity has shifted from "pencatat manual" to "digital entrepreneur." He's considering expanding to 2 more kelurahan. He's even thinking about hiring an assistant because the system makes training easy.

The old pain points are completely solved:

- ✅ Manual paperwork → Paperless cloud operations
- ✅ Limited reach → Serving 2x nasabah in less time
- ✅ Cash flow issues → Digital tracking, better planning
- ✅ No pricing power → Marketplace access = premium prices
- ✅ No business insights → Dashboard reveals growth opportunities

**Requirements Revealed by This Journey:**

- Operator-specific mobile app (separate from Nasabah app)
- QR code scanner for Operator app
- Transaction processing workflow (weight entry, type selection, confirmation)
- Real-time price lookup from admin-configured table
- Auto-calculation engine (kg × price, no manual math)
- Real-time balance updates (Supabase sync)
- Cloud-based transaction database (no local storage)
- Digital receipt generation (PDF or push notification)
- Retool-based Operator Dashboard with:
  - Daily/weekly/monthly stats
  - Revenue forecasting based on trends
  - Commission tracking and calculation
  - Top contributors leaderboard with contact info
  - Active vs dormant nasabah tracking
  - Waste type breakdown analytics
  - Inventory management with alerts
  - Marketplace opportunity listings
- Marketplace matching algorithm (operator stock → buyer demand)
- Marketplace offer acceptance workflow
- Commission calculation system (% of GMV or markup)
- Training video library (embedded or YouTube links)
- Operator onboarding checklist
- WhatsApp integration for nasabah outreach

---

### Journey 5: PT Maju Jaya - From Pengepul Chaos to Supply Chain Clarity (B2B Buyer - Phase 2)

**Opening Scene: The Monday Morning Fire Drill**

Pak Teguh, Procurement Manager at PT Maju Jaya Recycling (plastic pellet manufacturer in Bekasi), sits in his office staring at an angry email from Production:

> "URGENT: PET plastik stock HABIS. Production line stopped. Need 10 ton by Wednesday or we miss client delivery deadline!"

He sighs heavily. This is the third time this month. His supply chain is a constant nightmare:

**Current Sourcing Process (Via Pengepul):**

- He works with 7 pengepul (middlemen collectors)
- Pengepul prices fluctuate wildly: Last month Rp 3,800/kg, this month Rp 5,200/kg (+37% spike!)
- Quality is inconsistent: Sometimes clean sorted PET, sometimes mixed with labels/caps/contamination
- No visibility: He orders 5 tons, pengepul delivers 3 tons, says "Stock lagi susah pak"
- Payment is sketchy: Cash on delivery, no invoice, no traceability
- ESG nightmare: His company just signed contract with Unilever requiring waste traceability for sustainability report - pengepul can't provide ANY documentation

When Production stops, the company loses Rp 50 million per day. His boss is furious. "Pak Teguh, fix this or we find new supplier!"

He needs: **reliable supply, quality assurance, price stability, and traceability for ESG.**

None of his pengepul can deliver this.

**Discovery: The Industry WhatsApp Group Alert**

That evening, in the "Recycling Indonesia" WhatsApp group (250+ industry members), someone shares a screenshot:

> "Guys, ada platform baru - BankSampah Marketplace. Bisa order langsung dari 500+ bank sampah units, realtime inventory, bulk ordering. Ada yang udah coba?"

Another member responds: "Gue udah 2 bulan pakai. GAME CHANGER. Harga lebih stabil, quality verified, dapat ESG traceability report. Highly recommend!"

Pak Teguh screenshots this. Monday morning, he visits the website: banksampah.com/buyers

A landing page shows:

- **Access 500+ Verified Collection Points**
- **Realtime Inventory Dashboard**
- **Quality Grading System (A/B/C)**
- **Bulk Ordering & Logistics Coordination**
- **ESG Traceability Blockchain-Verified**

He clicks "Request Buyer Account" → Fills form: Company name, NPWP, contact, waste types needed → Submit.

Within 24 hours, he receives an email: "Account approved! Welcome to BankSampah Marketplace." with login credentials.

**Rising Action: The First Browse**

He logs into the **B2B Buyer Portal**. The interface looks professional - similar to B2B platforms he's used before.

**Marketplace Dashboard Shows:**

**Available Inventory (Realtime):**

- **Plastik PET Botol**: 12,500kg available across 83 units
  - Grade A (clean, sorted, labels removed): 4,200kg @ Rp 4,200/kg avg
  - Grade B (sorted, some labels): 6,800kg @ Rp 3,800/kg avg
  - Grade C (mixed, needs sorting): 1,500kg @ Rp 2,900/kg avg
- **Plastik HDPE**: 3,200kg available
- **Kertas Kardus**: 8,700kg available
- **Aluminium Kaleng**: 890kg available

He clicks on **"Plastik PET Grade A"** → A detailed view appears:

**Breakdown by Source:**

- Kelurahan Tebet (Pak Budi's unit): 350kg available, quality score 4.8/5.0, photos show clean sorted bottles
- Kelurahan Menteng: 520kg available, quality score 4.6/5.0
- Kelurahan Kemang: 410kg available, quality score 4.9/5.0
- (... 80 more units listed)

He can filter by: Location (proximity to Bekasi), Quality grade, Price range, Availability date.

This is **exactly** what he needs. Transparency at scale.

**The First Order: Bulk Purchase**

He needs 10 tons PET (remember, Production is waiting!). He uses the bulk ordering feature:

1. **Select Multiple Sources**: He checks 25 units that have Grade A/B PET plastic (total 10,200kg)
2. **Review Order Summary**:
   - Total: 10,200kg
   - Weighted average price: Rp 4,050/kg (lower than pengepul's Rp 5,200!)
   - Total cost: Rp 41,310,000
   - Platform fee: 3% (Rp 1,239,300) - reasonable for the service
   - Grand total: Rp 42,549,300
3. **Logistics Options**:
   - Self-pickup from 25 locations (tedious!)
   - Platform-coordinated pickup (Rp 2,500,000 flat fee) - truck visits all 25 units, consolidates, delivers to Bekasi factory
4. **Payment**: Escrow system - payment held until delivery confirmed (reduces risk!)
5. **Delivery**: Wednesday 10 AM (meets Production deadline!)

He clicks **[Place Order]**. Order confirmation appears with tracking number.

**Climax: The ESG Report Unlock**

Wednesday morning, a truck arrives at PT Maju Jaya factory with consolidated 10.2 tons of PET plastic. The driver hands over:

- Physical delivery receipt (signed by all 25 unit operators)
- Quality inspection report (photos, weight verification)
- **QR code for traceability**

Pak Teguh scans the QR code with his phone. A webpage opens:

**Waste Traceability Report (Blockchain-Verified):**

**Supply Chain Journey:**

- **Source**: 25 community bank sampah units across Jakarta (list with GPS coordinates)
- **Collection Dates**: Dec 20-24, 2025
- **Total Households Contributing**: 1,247 nasabah documented
- **Environmental Impact**: 25,500kg CO₂ prevented (10,200kg waste × 2.5 formula)
- **Blockchain Hash**: 0x7f3a9b... (immutable record)
- **Download PDF Report**: [Button] - formatted for ESG compliance documentation

He immediately forwards this to the Sustainability Team: "This is what Unilever needs! Full traceability from household to factory!"

The Sustainability Manager replies within 10 minutes: "Pak Teguh, THIS IS PERFECT! Can we get this for all future plastic procurement? Our ESG score will skyrocket!"

**Resolution: Supply Chain Transformation**

Six months later, PT Maju Jaya has completely shifted procurement strategy:

**Operational Transformation:**

- Pengepul dependency: 100% → 20% (only for specialty waste)
- BankSampah Marketplace: 0% → 80% of total procurement
- Average order: 15 tons per week, consistently delivered
- Price volatility: ±37% monthly → ±8% monthly (platform dampens speculation)

**Financial Benefits:**

- Average procurement cost: DOWN 18% (cutting middleman markup)
- Production downtime: 12 days/year → 1 day/year (reliable supply!)
- Savings: Rp 600 million/year (reduced downtime + lower prices)

**ESG Strategic Advantage:**

- Secured Unilever contract extension (traceability was dealbreaker - now solved!)
- Won tender from Danone (ESG report differentiation!)
- Featured in corporate sustainability report: "80% recycled plastic now fully traceable to source communities"
- Carbon credit opportunity: Exploring selling verified offsets to corporate buyers

**Quality Improvement:**

- Defect rate: 12% (pengepul era) → 3% (marketplace era) - quality grading works!
- Production efficiency: UP 15% (consistent input quality)

Most importantly: Pak Teguh's job stress has decreased dramatically. No more fire drills. No more cash-in-bag handoffs. No more "stock lagi susah pak" excuses. He now plans procurement 2 weeks ahead with confidence.

His identity has shifted from "firefighter" to "strategic sourcing manager."

**Requirements Revealed by This Journey:**

- B2B Buyer Portal (separate from consumer app)
- Buyer account application workflow with verification (NPWP, company docs)
- Real-time inventory aggregation dashboard across all units
- Quality grading system (A/B/C with photo documentation)
- Advanced filtering (location, quality, price, availability)
- Bulk ordering interface (multi-source selection)
- Order summary with cost breakdown (unit prices, platform fee, logistics)
- Logistics coordination system:
  - Self-pickup option
  - Platform-coordinated consolidation (route optimization for truck)
  - Delivery scheduling
- Escrow payment system (hold funds until delivery confirmed)
- Delivery confirmation workflow (operator signs, photo evidence)
- QR code generation for traceability
- Blockchain integration for immutable supply chain records
- Traceability report generation:
  - Source locations with GPS
  - Contributing households count
  - Environmental impact calculation
  - PDF export for ESG compliance
- Order tracking system (status updates, notifications)
- Buyer dashboard with:
  - Purchase history
  - Recurring order setup
  - Price trend analytics
  - ESG impact cumulative reports
- Quality dispute resolution workflow
- Supplier rating system (buyers rate operators)

---

### Journey Requirements Summary

The 5 user journeys reveal distinct capability areas needed for the MVP and growth phases:

**Core Platform Capabilities (MVP - All Journeys):**

- Multi-role authentication (Nasabah, Operator, Admin roles)
- QR code generation and scanning
- Real-time transaction processing with dual ledger (kg + rupiah)
- Push notifications + SMS fallback
- Photo upload and storage
- Balance management and transaction history
- Dashboard interfaces (user-specific views)

**Nasabah-Specific Features (Journeys 1, 2, 3):**

- Progressive UX disclosure (3 levels: Simple → Detailed → Power User)
- Mode Lansia accessibility (Journey 3)
- Gamification engine (badges, streaks, leaderboards) - critical for 65% MAU/DAU
- Impact calculation and visualization (CO₂, trees equivalent)
- Shareable achievement cards (social proof driver - Journey 2)
- Referral system with bonus tracking
- Squad/team features for social competition
- Flexible pickup scheduling
- Google OAuth + Phone OTP authentication
- WhatsApp voice support integration

**Operator-Specific Features (Journey 4):**

- Operator mobile app (transaction processing)
- Retool admin dashboard with business intelligence:
  - Revenue forecasting
  - Commission tracking
  - Top contributors leaderboard
  - Inventory management
  - Waste analytics
- Training video library
- Marketplace opportunity listings (Phase 2 bridge)

**Marketplace/B2B Features (Journey 5 - Phase 2):**

- B2B Buyer Portal
- Real-time inventory aggregation across units
- Quality grading system (A/B/C with photos)
- Bulk ordering with multi-source selection
- Logistics coordination (route optimization)
- Escrow payment system
- Blockchain traceability with QR codes
- ESG compliance report generation
- Order tracking and delivery confirmation

**Cross-Journey Technical Requirements:**

- Cloud database with real-time sync (Supabase)
- Admin-configurable price tables
- Automated calculation engines (pricing, commissions, impact metrics)
- Audit trail and transaction reconciliation
- Analytics and reporting infrastructure (PostHog)
- Multi-channel notification system (Push, SMS, WhatsApp)
- File storage for photos and receipts
- API infrastructure for future integrations

**Phasing Strategy Based on Journeys:**

- **MVP (Month 0-6)**: Journeys 1, 2, 3, 4 (Nasabah + Operator focus)
- **Phase 2A (Month 6-12)**: Enhanced gamification, dynamic pricing, IoT
- **Phase 2B (Month 12-18)**: Journey 5 (Marketplace + B2B buyer onboarding)
- **Phase 3 (Month 18+)**: Full circular economy features, API platform

---

## Innovation & Novel Patterns

### The Blue Ocean Positioning

BankSampah occupies a **blue ocean market space** validated by competitive research showing **ZERO competitors have the complete combination** of:

1. **Sophisticated Digital Ledger** (bank sampah modernization)
2. **B2B Marketplace** (waste liquidity platform connecting operators → industrial buyers)
3. **Circular Economy Traceability** (blockchain supply chain for ESG compliance)
4. **Gamification Engine** (habit formation driving 65% MAU/DAU)

**Market Validation:**

- **Waste4Change**: Has corporate pickup + ledger, but NO marketplace
- **Mallsampah**: Has basic ledger, but NO marketplace
- **Octopus**: Has mobile app + gamification, but NO marketplace
- **Manual Bank Sampah** (300+ units Jakarta): Paper ledgers, NO digital, NO marketplace
- **Pengepul (middlemen)**: Fragmented supply chain, NO transparency, NO traceability

**The Gap We're Filling:** Industrial buyers (PT Maju Jaya) currently rely on unreliable pengepul with ±37% monthly price volatility, inconsistent quality, zero traceability, and frequent supply shortages. Bank sampah operators (Pak Budi) sell to pengepul at low prices with no pricing power. The marketplace creates liquidity where none exists, connecting supply (500+ bank sampah units) directly to demand (industrial buyers) while cutting out middleman markup.

### Innovation Architecture

**1. UX Innovation: Progressive Disclosure + Inclusion Design**

**Progressive Disclosure (4 Levels):**

- **Level 1 (Simple)**: 2 metrics, 2 buttons - onboarding default (Journey 1: Ibu Siti)
- **Level 2 (Detailed)**: Transaction history, impact breakdown - unlocked after 3 transactions
- **Level 3 (Power User)**: Price charts, portfolio optimization - unlocked after 10 transactions (Journey 2: Rina)
- **Mode Lansia (Accessibility)**: 3 giant buttons, 24pt font, SMS confirmations, voice guidance (Journey 3: Bapak Joko)

**Why Novel:** Most apps choose ONE complexity level. We adapt to user sophistication dynamically, enabling both digital-savvy Gen Z (Rina) and 67-year-old lansia (Bapak Joko) to succeed in the same platform.

**Crisis Communication Framework (4 Defense Layers):**
When prices drop suddenly (PET Rp 3,500/kg → Rp 2,800/kg):

- **Layer 1**: In-app notification explaining market context ("Global oil prices down → plastic demand decreased")
- **Layer 2**: Impact reframe ("Your environmental impact UNCHANGED: still saved 12.5kg CO₂!")
- **Layer 3**: Community solidarity messaging ("You + 2,846 heroes kept going this week despite price drop")
- **Layer 4**: Gamification buffer (streaks, badges, leaderboards distract from price as primary motivation)

**Why Novel:** Addresses the #1 failure mode of existing bank sampah (users quit when prices drop). We're designing for volatility as a feature, not ignoring it.

**2. Business Model Innovation: Dual Ledger + Marketplace Liquidity**

**Dual Ledger Philosophy:**

- **Traditional fintech**: Only rupiah matters (money in/out)
- **Traditional sustainability**: Only kg/CO₂ matters (impact tracking)
- **BankSampah innovation**: Both matter equally in UX hierarchy

Dashboard shows: **Rp 70,000** (financial) AND **87.5kg waste, 218kg CO₂** (impact) with equal visual weight. Identity transformation requires BOTH metrics visible.

**Marketplace Liquidity Creation:**

**Phase 1 (MVP Month 0-6)**: Build supply side

- 300 pilot users → 2,000 MAU → Proven unit economics
- Operator dashboard previews marketplace opportunities (Journey 4: Pak Budi sees "PT Maju Jaya wants 50kg PET @ Rp 4,500/kg +28% premium")
- Creates demand anticipation before marketplace launches

**Phase 2B (Month 12-18)**: Launch demand side

- B2B Buyer Portal opens (Journey 5: PT Maju Jaya)
- Real-time inventory aggregation (500+ units, 12,500kg PET available)
- Quality grading (A/B/C) + ESG traceability reports
- Escrow payments + logistics coordination

**Why Novel:** Most marketplaces launch both sides simultaneously (chicken-egg problem). We sequence intentionally: Build supply first (operators + nasabah), then add buyers when liquidity exists. Reduces risk.

**Revenue Model Innovation:**

- **Month 0-12**: Zero revenue (validation phase, all features free)
- **Month 12-18**: Marketplace commission only (70% of revenue = Rp 10M/month primary path)
- **Month 18-24**: Add SaaS subscriptions (operators pay Rp 100K/month for premium dashboard)
- **Month 24+**: Add premium features (nasabah pay for advanced analytics)

**Why Novel:** Willing to delay monetization for 12 months to validate product-market fit first. Counter to typical SaaS "charge from day 1" approach.

**3. Social Innovation: Hierarchy of Empowerment**

**Empowerment Progression:**

1. **Financial** (Entry): Rp 150K-300K/month tangible income
2. **Knowledge** (Retention): Gamified education, waste sorting mastery, environmental literacy
3. **Identity** (Advocacy): "Environmental hero" positioning, not "tukang sampah"
4. **Community** (Network Effects): Squad competitions, neighborhood challenges, collective impact visualization

**Why Novel:** Most sustainability apps stop at financial incentives (cashback, rewards) or impact tracking (CO₂ counters). We design for identity transformation - users become advocates because it's core to self-concept, not just for money.

**Gamification Strategy (65% MAU/DAU Target):**

- **Tier 1 drivers (80%)**: Streaks (loss aversion), daily impact dashboard (fresh content)
- **Tier 2 drivers (15%)**: Price alerts (FOMO on high-value moments)
- **Tier 3 drivers (5%)**: Social features (weekly leaderboard digest)

**Why Novel:** We've reverse-engineered the 65% MAU/DAU target (16x improvement from 4% baseline) into specific game mechanics with expected contribution %. Most apps add gamification as decoration; we're designing habit formation as core retention engine.

**4. Circular Economy Vision: End-to-End Traceability**

**Phase 3 Innovation (Month 18+):**

- Blockchain-verified supply chain from household → bank sampah → buyer → manufacturer → product
- QR code on final product: "Made from waste collected by 1,247 households in Jakarta, verified blockchain hash 0x7f3a9b..."
- Brand partnerships: "This Adidas shoe contains plastic from YOUR waste" (Journey 5: PT Maju Jaya supplies to brands)
- Carbon credit marketplace: Buyers can purchase verified offsets from BankSampah's documented CO₂ prevention

**Why Novel:** True circular economy with full traceability. Current recycling industry is opaque - no one knows where waste goes or what it becomes. We're creating radical transparency that enables:

- **ESG compliance** for corporate buyers (Unilever contract requirement solved)
- **Consumer connection** to circular products (brand marketing goldmine)
- **Carbon credit trading** (new revenue stream)

### Innovation Validation Strategy

**1. Marketplace Liquidity Risk (Biggest Innovation Risk)**

**The Chicken-Egg Problem:**

- Operators won't use platform if no buyers
- Buyers won't join if insufficient inventory
- Classic two-sided marketplace cold start

**Our Validation Approach:**

**Month 0-12 (De-Risk Supply Side):**

- Focus 100% on nasabah + operator adoption
- Validate unit economics WITHOUT marketplace
- Target: 2K MAU, 50+ active operators, 20+ tons waste/month processed
- Success criteria: Operators willing to pay Rp 100K/month SaaS (proves value without marketplace)

**Month 12 (Buyer Pre-Validation):**

- Manually recruit 3-5 industrial buyers (PT Maju Jaya type)
- Show them real-time inventory dashboard (12,500kg PET available across 83 units)
- Ask: "Would you purchase at ±10% markup from platform vs pengepul?"
- Success criteria: 3/5 buyers say YES, willing to pilot → Proceed to build
- Failure criteria: 0-1 buyers interested → Pivot to SaaS-only model (operators pay for efficiency tool)

**Month 12-18 (Marketplace MVP):**

- Launch with 3-5 pre-validated buyers
- Manual logistics coordination initially (not automated)
- Target: 10 successful transactions, Rp 50M GMV
- Success criteria: Buyers re-order, operators see premium prices → Scale marketplace
- Failure criteria: <3 transactions, no repeat orders → Marketplace is optional nice-to-have, focus on SaaS

**Fallback Strategy:**
If marketplace fails to achieve liquidity by Month 18:

- **Plan B**: SaaS business model (operators pay Rp 100K-200K/month for efficiency tool)
- **Revenue target**: 500 operators × Rp 150K/month = Rp 75M/month (sustainable without marketplace)
- **Value prop shifts**: From "premium prices via marketplace" to "operational efficiency + business intelligence"

**2. Gamification Effectiveness Validation**

**The Retention Risk:**

- MAU/DAU = 65% is 16x improvement from 4% baseline
- Gamification might not drive daily returns as predicted
- Habit formation could fail

**Our Validation Approach:**

**Month 0-3 (Pilot Metrics):**

- Track daily: Streak maintenance rate, badge unlock engagement, leaderboard check frequency
- Measure: What % users maintain 7+ day streaks? (Target: 40%)
- A/B test: Different gamification intensities (high/medium/low badge frequency)

**Decision Gate Month 6:**

- **Success**: MAU/DAU ≥35% (halfway to 65% target) → Continue current strategy
- **Moderate**: MAU/DAU 20-35% → Iterate gamification (more frequent rewards, social competition emphasis)
- **Failure**: MAU/DAU <20% → Gamification not working, pivot to transactional model (accept lower engagement, focus on transaction frequency)

**3. Progressive UX Validation**

**The Complexity Risk:**

- 4 levels of UI might confuse users
- Mode Lansia might stigmatize accessibility
- Progressive disclosure could feel patronizing

**Our Validation Approach:**

**Month 0-6 (Pilot Testing):**

- Track: What % users unlock Level 2? Level 3? Mode Lansia adoption among 60+ age group?
- Measure: Confusion metrics (help button clicks, rage taps, session abandonment)
- Interview: 10 users from each persona (Ibu Siti, Rina, Bapak Joko) about UX progression

**Decision Gate Month 6:**

- **Success**: >60% users unlock Level 2, Mode Lansia adopted by 30%+ lansia users → UX working
- **Moderate**: 40-60% Level 2 unlock → Simplify unlock triggers, make more obvious
- **Failure**: <40% Level 2 unlock, Mode Lansia ignored → Simplify to 2 levels only (Simple + Power), make accessibility always-available

### Risk Mitigation Summary

**Innovation Risks Ranked by Impact:**

**1. Marketplace Liquidity Failure (HIGHEST RISK)**

- **Impact**: Loses 70% of projected revenue (Rp 10M/month primary path)
- **Mitigation**: 12-month delay to validate supply side first, pre-validate buyers before build, fallback to SaaS model
- **Kill Switch**: If <3 marketplace transactions Month 12-18, pivot to SaaS-only

**2. Gamification Doesn't Drive 65% MAU/DAU**

- **Impact**: Retention suffers, growth slows, harder to scale
- **Mitigation**: A/B test game mechanics early, iterate based on pilot data, accept lower target if needed
- **Kill Switch**: If MAU/DAU <20% Month 6, pivot to transactional model (low engagement acceptable)

**3. Progressive UX Confuses Users**

- **Impact**: Onboarding friction, user complaints, accessibility stigma
- **Mitigation**: User testing with all personas, iteration based on confusion metrics, simplify if needed
- **Kill Switch**: If <40% Level 2 unlock, simplify to 2 levels only

**4. Circular Economy Vision Too Ambitious**

- **Impact**: Phase 3 delayed, brand partnerships don't materialize
- **Mitigation**: Phase 3 is 18+ months out, optional if marketplace succeeds, not critical to MVP/Phase 2
- **Kill Switch**: If marketplace works, circular economy is natural extension; if marketplace fails, circular economy not pursued

**Strategic Philosophy:**
We're betting on **marketplace liquidity as the primary innovation moat**. Everything else (gamification, UX, circular economy) supports this core bet. If marketplace fails, we have viable fallback (SaaS efficiency tool). If marketplace succeeds, we have defensible blue ocean position.

---

## Technical Architecture & Platform Requirements

### Mobile Application Technical Specifications

**Platform Strategy:**

- **Framework**: React Native + Expo
- **Target Platforms**: iOS (13+) and Android (8.0+)
- **Single Codebase**: Unified development for both platforms, reducing 6-month MVP timeline pressure for solo/duo dev team
- **Expo Benefits**: Over-the-air updates, simplified build process, managed workflow for rapid iteration

**Offline Capabilities:**

- **View-Only Offline Mode**: Users can view balance, transaction history, and impact dashboard when offline
- **Online-Required Operations**: All transaction submissions, withdrawals, QR scanning, and real-time features require connectivity
- **Sync Strategy**: Local cache with Supabase real-time sync when connection restored
- **Justification**: Jakarta urban areas have strong connectivity; full offline transaction recording adds complexity not justified for MVP

**Push Notification Architecture:**

- **Primary Channel**: Firebase Cloud Messaging (FCM) for iOS + Android
- **Critical Notifications** (High Priority):
  - Transaction confirmations (immediate delivery required)
  - Streak reminders (daily at 7 PM: "Don't break your 21-day streak!")
  - Withdrawal approvals (operator confirms cash pickup)
- **Engagement Notifications** (Standard Priority):
  - Price alerts (PET plastic +15% this week)
  - Achievement unlocks (new badge earned)
  - Weekly leaderboard digest (you moved up 5 spots)
- **SMS Fallback** (Lansia Mode): Mode Lansia users receive SMS duplicates of critical notifications
- **Frequency Limits**: Max 3 notifications/day to prevent fatigue, unless user-initiated transactions

**Device Permissions Required:**

1. **Camera** (Required): Waste photo upload for transaction documentation (Journeys 1, 2, 4)
2. **Location** (Optional): Auto-detect kelurahan/bank sampah unit during onboarding (Journey 2: Rina)
3. **Push Notifications** (Required): Critical for 65% MAU/DAU gamification engagement
4. **QR Scanner** (Camera-based): Nasabah displays QR for operator scan (Journey 4: Pak Budi)
5. **Photo Library** (Optional): Select existing photos instead of taking new ones
6. **Biometric Auth** (Optional - Phase 2A): Fingerprint/Face ID for withdrawal confirmations (security enhancement)

**App Store Compliance:**

- **Google Play Store**:
  - Privacy policy URL required (documented data collection: name, phone, location, photos, transaction history)
  - Data safety declaration (encryption in transit, user can delete account, no third-party data sharing)
  - Target API level: Android 13+ (compliance requirement)
- **Apple App Store**:
  - Privacy nutrition labels (location, photos, contact info collected)
  - No in-app purchases for MVP (Phase 1 zero revenue), will add IAP for Phase 2A subscriptions
  - App Store review considerations: Clearly communicate waste recycling purpose, not financial trading (avoid FinTech scrutiny for MVP)
- **Monetization Compliance**: Phase 2A subscriptions will use native IAP (30% Apple/Google commission), marketplace commission processed outside app (direct bank transfer, no IAP commission)

### SaaS Platform Technical Specifications

**Multi-Tenancy Architecture:**

- **Data Model**: Shared database with `unit_id` partitioning
  - Each bank sampah unit = logical tenant (Pak Budi's unit = `unit_id: "tebet-001"`)
  - Supabase Row-Level Security (RLS) policies enforce data isolation
  - Nasabah can only see their own transactions; Operator can see all transactions for their unit; Admin sees all units
- **Cross-Tenant Features**:
  - **Leaderboards**: Cross-unit rankings for gamification (Jakarta-wide leaderboard shows all users)
  - **Marketplace**: Phase 2B inventory aggregation across all 500+ units (buyers see combined stock)
  - **Price Tables**: Centralized admin-managed pricing (all units use same base prices, optional per-unit markup)
- **Scalability**: Single Supabase PostgreSQL instance supports 500 units × 400 nasabah = 200K users (within Supabase limits)

**Role-Based Access Control (RBAC):**

| Role                     | Create                                         | Read                                                            | Update                               | Delete                                | Notes                         |
| ------------------------ | ---------------------------------------------- | --------------------------------------------------------------- | ------------------------------------ | ------------------------------------- | ----------------------------- |
| **Nasabah**              | Own profile, transaction requests              | Own data only (balance, history, achievements)                  | Own profile settings                 | Own account (soft delete)             | Cannot see other users        |
| **Operator**             | Transactions for their unit, nasabah accounts  | All nasabah in their unit, inventory, marketplace opportunities | Transaction status, nasabah balances | Transactions (void within 24hrs)      | Unit-scoped access            |
| **B2B Buyer** (Phase 2B) | Bulk orders, quality ratings                   | Marketplace inventory (all units), order history                | Order status                         | Own orders (cancel before processing) | Cross-unit read for inventory |
| **Admin**                | Units, operators, price tables, system configs | All data (users, transactions, analytics)                       | All system settings                  | Users (ban), units (suspend)          | God-mode access via Retool    |

**Permission Matrix Implementation:**

- Supabase RLS policies enforce read/write permissions at database level
- Auth tokens include role claim: `{ role: "operator", unit_id: "tebet-001" }`
- Retool admin dashboard bypasses RLS with service role key (admin god-mode)

**Subscription Tier Strategy:**

| Tier                | Target                      | Price         | Features                                                                        | Launch              |
| ------------------- | --------------------------- | ------------- | ------------------------------------------------------------------------------- | ------------------- |
| **Free (MVP)**      | All nasabah, all operators  | Rp 0          | Core ledger, gamification, transactions, basic dashboard                        | Month 0             |
| **Operator Pro**    | Active operators (Pak Budi) | Rp 100K/month | Advanced analytics, revenue forecasting, marketplace priority, training library | Month 12 (Phase 2A) |
| **Nasabah Premium** | Power users (Rina types)    | Rp 25K/month  | Ad-free, advanced portfolio analytics, price prediction, exclusive badges       | Month 18 (Phase 2B) |
| **Enterprise**      | Multi-unit operators        | Rp 500K/month | White-label branding, API access, custom reports, dedicated support             | Month 24+ (Phase 3) |

**Marketplace Commission Structure** (Phase 2B):

- B2B buyers pay 3% platform fee on GMV (Rp 50M order = Rp 1.5M fee)
- Operators receive 10% bonus on marketplace sales vs pengepul sales (incentive to list inventory)
- No subscription required for marketplace participation (commission-only model)

### Integration Architecture

**MVP Integrations (Month 0-6):**

1. **Supabase** (Core Backend):

   - **Auth**: Google OAuth, phone OTP, email/password
   - **Database**: PostgreSQL with real-time subscriptions (live balance updates)
   - **Storage**: Photo uploads for transactions (10 MB limit per photo)
   - **Edge Functions**: Price calculations, impact metrics, notification triggers
   - **RLS**: Role-based data isolation

2. **Retool** (Admin Dashboard):

   - Embedded iframe in web admin portal
   - Operator Dashboard: Transaction processing, business intelligence, inventory management
   - Super Admin: System config, price tables, user management, analytics
   - Authentication: Supabase JWT token passed to Retool for SSO

3. **Firebase Cloud Messaging** (Push Notifications):

   - FCM SDK integrated in React Native app
   - Supabase Edge Function triggers send notifications via FCM API
   - Token storage in Supabase `user_devices` table
   - Topic subscriptions for broadcast messages (e.g., "price_alerts_pet_plastic")

4. **PostHog** (Analytics):
   - Event tracking: Transaction completed, badge unlocked, streak maintained, leaderboard viewed
   - Funnel analysis: Onboarding completion rate, transaction frequency, retention cohorts
   - Feature flags: A/B test gamification intensity, progressive UX unlock thresholds
   - Session recordings for UX debugging (opt-in only)

**Phase 2A Integrations (Month 6-12):**

5. **E-Wallet SDKs** (Payment Options):
   - GoPay SDK: Withdrawal via GoPay balance transfer
   - OVO SDK: Withdrawal via OVO transfer
   - DANA SDK: Withdrawal via DANA transfer
   - MVP uses manual cash pickup; Phase 2A adds instant digital withdrawals
   - Requires OJK license application (6-month lead time, start Month 6)

**Phase 2B Integrations (Month 12-18):**

6. **Logistics API** (Marketplace Fulfillment):
   - Route optimization for multi-unit pickup (25 units → 1 truck route)
   - Delivery tracking and confirmation
   - Manual coordination MVP, automated Phase 2B

**Phase 3 Integrations (Month 18+):**

7. **Blockchain API** (Traceability):
   - Supply chain immutable records (household → unit → buyer → manufacturer)
   - QR code generation with blockchain hash verification
   - Carbon credit tokenization (optional future revenue stream)

### Compliance & Legal Requirements

**MVP Compliance (Month 0-6):**

1. **Privacy Policy** (Required for App Stores):

   - Data collected: Name, phone number, email, location (city), photos, transaction history
   - Data usage: Service delivery, gamification, impact calculation, customer support
   - Data retention: Active accounts indefinitely, deleted accounts purged within 30 days
   - Third-party sharing: None (analytics anonymized)
   - User rights: Access, correction, deletion (GDPR/PDP compliance)

2. **Terms of Service**:

   - Platform rules: No fraudulent transactions, accurate waste sorting, respectful community behavior
   - Liability: Platform facilitates transactions, not responsible for operator errors or pricing disputes
   - Dispute resolution: 7-day appeal window, admin mediation, ban policy for abuse
   - Termination: Users can delete accounts anytime, operators require 30-day notice

3. **PDP Indonesia** (Data Privacy Law):

   - User consent for data collection (onboarding checkbox)
   - Encryption in transit (HTTPS) and at rest (Supabase encryption)
   - Data localization: Supabase Southeast Asia region (Singapore) acceptable for MVP
   - Breach notification: 72-hour disclosure to users if data leak occurs

4. **Waste Management Regulations**:
   - Local government (kelurahan-level): Informal coordination, no formal license required for digital platform
   - Bank sampah units already operate under local permits; app doesn't change legal status
   - MVP positioned as "digital ledger tool" not "waste management operator"

**Phase 2A Compliance (Month 6-12):**

5. **OJK License** (E-Wallet Integration):
   - Application timeline: 6 months approval process
   - Requirements: Business entity (PT), paid-up capital Rp 1B minimum, AML/KYC procedures
   - Scope: Only for e-wallet withdrawals; marketplace commission doesn't require license (B2B transfer)
   - Fallback: If OJK delayed, continue manual cash pickup until approved

**Compliance Monitoring:**

- Monthly review of privacy policy adherence
- Quarterly security audit (penetration testing)
- Annual compliance report for transparency

### Technical Risk Mitigation

**Key Technical Risks:**

1. **Supabase Scalability** (200K MAU target):

   - Risk: Single PostgreSQL instance hits connection limits
   - Mitigation: Supabase connection pooling (PgBouncer), read replicas Phase 2, consider sharding by region if needed
   - Threshold: Monitor at 10K MAU, plan migration at 50K MAU

2. **Real-Time Sync Performance**:

   - Risk: 500 operators processing transactions simultaneously creates database contention
   - Mitigation: Optimistic UI updates, eventual consistency acceptable for non-critical data, row-level locks for balance updates
   - Threshold: Load testing with 100 concurrent transactions, optimize queries before pilot launch

3. **Photo Storage Costs**:

   - Risk: 200K users × 10 transactions/month × 2 MB photos = 4 TB/month storage
   - Mitigation: Image compression (reduce to 500 KB max), delete photos after 90 days (keep metadata), CDN caching
   - Threshold: Budget Rp 5M/month storage (Supabase pricing), implement cleanup policy at pilot launch

4. **Push Notification Delivery**:

   - Risk: FCM delivery rate <95% breaks streak gamification
   - Mitigation: SMS fallback for critical notifications, retry logic, track delivery metrics
   - Threshold: Monitor delivery rate weekly, escalate if <90% for 3 consecutive days

5. **App Store Rejection**:
   - Risk: Apple rejects app due to unclear purpose or policy violations
   - Mitigation: Clear waste recycling messaging, no financial trading language, detailed privacy disclosures, soft launch Android first (Google less strict)
   - Timeline: Submit Apple review 2 weeks before launch, buffer for revisions

---

## Strategic Scoping Summary

### MVP Philosophy & Approach

**Chosen Strategy: Experience MVP**

BankSampah follows an "Experience MVP" approach rather than minimal problem-solving MVP. This strategic decision prioritizes:

1. **Complete User Experience**: Delivering the full habit-formation loop (transaction + impact dashboard + gamification) to achieve 65% MAU/DAU target
2. **Multi-Stakeholder Value**: Serving both nasabah (Journeys 1-3) and operators (Journey 4) in MVP to prove unit economics
3. **Foundation for Scale**: Building extensible architecture (dormant features in schema) to enable Phase 2-3 without painful migrations

**Rationale:**

- North Star metric (65% MAU/DAU) requires gamification in MVP, not post-launch addition
- Marketplace success (Phase 2B) depends on proven supply side (operators + nasabah adoption)
- Solo/duo dev constraint demands PaaS leverage (Supabase/Retool/Expo) to ship 5 core flows in 6 months

### MVP Scope Consolidation

**Timeline: Month 0-6 (6-month development + pilot launch)**

**Resource Constraints:**

- Team: Solo/duo developer
- Budget: Bootstrap Rp 100M (personal savings + freelance income)
- Timeline: 6 months to pilot launch with 300 users from 5-10 bank sampah units

**The 5 Essential Core Flows (MVP Feature Set):**

1. **Registration & Onboarding**

   - User Journey Support: All journeys (1-4)
   - Nasabah: Google/phone 1-tap auth, 3-screen onboarding <60sec, kelurahan/unit selection
   - Operator: Assisted verification, unit profile setup, 10-minute training
   - Success Criteria: 80% complete onboarding, <5 minute time to first transaction

2. **Deposit Transaction (Core Value Loop)**

   - User Journey Support: Journeys 1 (Ibu Siti), 2 (Rina), 4 (Pak Budi)
   - Nasabah: Photo waste → Select types → Request pickup
   - Operator: QR scan → Weight → Confirm → Auto-receipt
   - Success Criteria: 2 hours manual → 30 minutes digital (Journey 4: Pak Budi's transformation)

3. **Balance & Impact Dashboard**

   - User Journey Support: All journeys
   - Progressive UX: Level 1 (Simple 2 metrics) → Level 2 (Detailed breakdown) → Level 3 (Power user)
   - Mode Lansia: 3-button UI, 24pt font, SMS confirmations (Journey 3: Bapak Joko)
   - Operator Dashboard: Retool admin with business intelligence
   - Success Criteria: Dashboard screenshot viral (Journey 1: Ibu Siti's aha moment)

4. **Withdrawal (Financial Empowerment)**

   - User Journey Support: Journeys 1, 2, 3
   - Flow: Check balance → Request (min Rp 50K) → Operator approval → Cash pickup
   - Manual MVP: Operator handles cash disbursement, no e-wallet automation
   - Success Criteria: Withdrawal request processed within 24 hours

5. **Basic Gamification (Habit Formation Engine)**
   - User Journey Support: Journeys 1, 2 (retention critical)
   - Features: Badges, streaks (7/21/60 day), leaderboards (neighborhood + Jakarta-wide), achievement cards
   - Push notifications: Streak reminders ("Don't break your 21-day streak!")
   - Success Criteria: 40% users maintain 7+ day streaks (drives 65% MAU/DAU target)

**MVP Technical Deliverables:**

- **Mobile App**: React Native + Expo (iOS + Android single codebase)
- **Backend**: Supabase (auth, database, storage, functions, real-time sync)
- **Admin Dashboard**: Retool (operator dashboard with BI)
- **Infrastructure**: Firebase (push notifications), PostHog (analytics)
- **Database**: Extensible schema with "dormant features" (Phase 2-3 fields as NULL)

**Explicitly OUT OF SCOPE for MVP:**

- ❌ Dynamic pricing (fixed admin price table MVP, automated pricing Phase 2A)
- ❌ IoT smart scales (manual weighing MVP, IoT integration Phase 2A)
- ❌ E-wallet auto-transfer (manual cash MVP, GoPay/OVO/DANA Phase 2A)
- ❌ Advanced gamification (achievement trees, AI challenges → Phase 2A)
- ❌ ML photo recognition (manual waste type selection MVP, AI Phase 2A)
- ❌ Marketplace B2B (Journey 5 deferred to Phase 2B Month 12-18)
- ❌ Circular economy traceability (blockchain Phase 3)

### Post-MVP Phased Roadmap

**Phase 2A: Growth Features (Month 6-18)**

**Prerequisite:** PMF validated at Month 6 decision gate (300 users, 60% adoption, 50% operators willing to pay)

**Focus:** Enhance core product with automation and intelligence

1. **Dynamic Pricing Engine**: Real-time market prices, AI predictions, price protection
2. **IoT Integration**: Smart scales with RFID tags, automatic weight capture
3. **E-wallet Integration**: GoPay/OVO/DANA instant disbursement (requires OJK license)
4. **Advanced Gamification**: Achievement trees, AI challenges, NFT badges, squad battles
5. **Machine Learning**: Photo recognition, churn prediction, price forecasting

**Success Criteria Phase 2A:**

- 2K MAU with 65% MAU/DAU achieved
- 20-30% MoM growth sustained
- CAC < Rp 50K, LTV > Rp 500K
- 30 operators paying Rp 100K-200K/month SaaS

**Phase 2B: Marketplace Launch (Month 12-18)**

**Prerequisite:** Supply side validated (2K MAU, 50+ operators, 20+ tons/month processed), 3-5 buyers pre-validated

**Focus:** Activate marketplace innovation (Journey 5: PT Maju Jaya B2B buyer)

1. **B2B Buyer Portal**: Account verification, real-time inventory aggregation dashboard, quality grading (A/B/C)
2. **Bulk Ordering System**: Multi-source selection, order summary, escrow payments
3. **Logistics Coordination**: Route optimization for multi-unit pickup, delivery tracking
4. **Supply Chain Traceability**: QR codes linking household → unit → buyer → manufacturer

**Success Criteria Phase 2B:**

- 10+ active industrial buyers
- Rp 2B GMV through marketplace (10 successful bulk transactions)
- Operators see +28% premium prices vs pengepul (Journey 4: Pak Budi marketplace discovery)
- Break-even approaching (Rp 18M/month revenue, 70% from marketplace commission)

**Phase 3: Circular Economy Vision (Month 18-42)**

**Prerequisite:** Marketplace liquidity proven, break-even achieved at Month 18-24

**Focus:** Complete circular economy loop

1. **Blockchain Traceability**: Immutable supply chain records, ESG compliance reports (Journey 5: PT Maju Jaya QR scan)
2. **Brand Partnerships**: "Made from Your Waste" consumer products (50 brand target)
3. **Carbon Credit Trading**: Verified CO₂ prevention sold as offsets
4. **Platform API Ecosystem**: Third-party integrations, developer ecosystem
5. **Geographic Expansion**: Jakarta → Java → National (200K MAU target)

**Success Criteria Phase 3:**

- 200K MAU nationally
- Rp 50B GMV annual
- 50 brand partnerships with circular products
- Rp 100M/month profit (Rp 1.2B/year)
- Exit optionality: Strategic acquisition (Option B) or Unicorn path (Option C)

### Risk-Based Scoping Decisions

**Technical Risks & Mitigation:**

1. **Marketplace Liquidity Risk (HIGHEST IMPACT)**

   - **Scoping Decision**: Delay marketplace to Phase 2B (Month 12-18), not MVP
   - **Mitigation**: Validate supply side first (MVP/Phase 2A), pre-validate buyers Month 12 before building
   - **Fallback**: If marketplace fails, pivot to SaaS-only model (operators pay for efficiency tool)

2. **Gamification Effectiveness Risk**

   - **Scoping Decision**: Include basic gamification in MVP despite adding 2-3 weeks development
   - **Mitigation**: A/B test mechanics during pilot, iterate based on data
   - **Fallback**: If MAU/DAU <20% Month 6, simplify gamification and accept transactional engagement

3. **Solo/Duo Dev Resource Risk**
   - **Scoping Decision**: Leverage PaaS tools (Supabase/Retool/Expo) to reduce custom development
   - **Mitigation**: "Dormant features" in schema to avoid migrations, manual operations acceptable for MVP
   - **Fallback**: If 6-month timeline slips, launch with 3 core flows only (defer gamification to Phase 2A)

**Market Risks & Mitigation:**

1. **Adoption Risk (Nasabah Won't Use Digital)**

   - **Scoping Decision**: Hybrid model (assisted onboarding, SMS fallback, Mode Lansia accessibility)
   - **Mitigation**: Journey 3 (Bapak Joko) proves lansia can use digital with family assistance
   - **Validation**: 60% adoption rate in pilot (300 of 500 nasabah in pilot units)

2. **Operator Willingness to Pay Risk**
   - **Scoping Decision**: MVP free for all, monetization deferred to Phase 2A (Month 12+)
   - **Mitigation**: 12 months validation before charging, prove 2.5x income increase (Journey 4: Pak Budi)
   - **Validation**: 50% operators willing to pay Rp 100K/month at Month 6 gate

**Resource Risks & Contingency:**

1. **Timeline Slip (6 Months → 9 Months)**

   - **Contingency Plan**: Launch with 3 core flows (defer Withdrawal + Gamification)
   - **Minimum Launch**: Registration + Transaction + Dashboard only
   - **Justification**: Transaction loop proves value, can add gamification post-launch

2. **Budget Overrun (Rp 100M → Rp 150M)**

   - **Contingency Plan**: Extend pilot timeline (reduce burn rate), freelance to fund, delay Phase 2A
   - **Kill Switch**: If burn exceeds Rp 15M with <100 active users, shutdown per criteria

3. **Solo Dev Burnout**
   - **Contingency Plan**: Hire part-time contractor for specific tasks (UI design, testing)
   - **Scope Reduction**: Cut Mode Lansia (Journey 3 simplified), cut Operator Dashboard advanced BI

### Decision Gate Framework (Month 6 Go/No-Go)

**Product Health Gates:**

| Gate         | Metric                                   | GO Threshold              | KILL Threshold |
| ------------ | ---------------------------------------- | ------------------------- | -------------- |
| Adoption     | % nasabah using app in pilot units       | ≥60%                      | <30%           |
| Engagement   | MAU/DAU ratio                            | ≥50% (progressing to 65%) | <25%           |
| Satisfaction | NPS (Net Promoter Score)                 | ≥50                       | <30            |
| Economics    | % operators willing to pay Rp 100K/month | ≥50%                      | <25%           |

**Decision Matrix:**

- **4/4 GO**: Scale with confidence, proceed to Phase 2A
- **3/4 GO**: Scale with minor adjustments
- **2/4 GO**: Extend pilot 3 months, iterate based on feedback
- **≥2 KILL**: Pivot required, major product changes
- **≥3 KILL**: Shutdown, no product-market fit

**Kill Switch Criteria (Shutdown Triggers):**

1. Burn Rp 15M with <100 active users OR <20% adoption
2. 12 months with churn >20% monthly (leaky bucket)
3. 100+ negative feedback patterns (same critical issue unfixed 3 months)
4. Opportunity cost (better opportunity emerges with 3x faster PMF path)
5. Founder burnout 6+ months (lost passion, unsustainable)

### Scope Validation & Stakeholder Alignment

**User Journey Coverage:**

| Journey   | Persona                    | MVP Support                   | Phase 2B              | Phase 3              |
| --------- | -------------------------- | ----------------------------- | --------------------- | -------------------- |
| Journey 1 | Ibu Siti (warm/assisted)   | ✅ Full support               | Enhanced gamification | Circular products    |
| Journey 2 | Rina (cold/self-service)   | ✅ Full support               | Instagram integration | Influencer program   |
| Journey 3 | Bapak Joko (lansia hybrid) | ✅ Full support (Mode Lansia) | WhatsApp bot          | Community champions  |
| Journey 4 | Pak Budi (operator)        | ✅ Full support               | Marketplace preview   | Multi-unit expansion |
| Journey 5 | PT Maju Jaya (B2B buyer)   | ❌ Deferred                   | ✅ Full support       | ESG traceability     |

**Success Criteria Traceability:**

- **User Success (65% MAU/DAU)**: Requires MVP gamification ✅ In scope
- **Business Success (Break-even Month 18-24)**: Requires Phase 2B marketplace ✅ Phased appropriately
- **Technical Success (Tier 1 baselines)**: Requires MVP quality standards ✅ Non-negotiable

**Innovation Validation:**

- **UX Innovation (Progressive Disclosure)**: MVP delivers 3 levels + Mode Lansia ✅
- **Business Model Innovation (Dual Ledger)**: MVP delivers kg + rupiah equally ✅
- **Marketplace Innovation**: Phase 2B after supply validated ✅ Risk-mitigated sequencing
- **Circular Economy**: Phase 3 optional if marketplace succeeds ✅ Long-term vision preserved

### Final Scoping Statement

**BankSampah MVP Scope is strategically designed to:**

1. **Validate Core Hypothesis**: Can digital transformation of bank sampah achieve 65% MAU/DAU (habit formation)?
2. **Prove Unit Economics**: Operators earn 2.5x income, nasabah engage daily, 60% adoption in pilot units
3. **Build Foundation for Scale**: Extensible architecture enables Phase 2-3 without rebuilding
4. **Mitigate Marketplace Risk**: Validate supply side (MVP/Phase 2A) before investing in marketplace (Phase 2B)
5. **Preserve Exit Optionality**: Can pivot to SaaS-only if marketplace fails, or scale to unicorn if succeeds

**This scoping balances ambition (blue ocean innovation) with pragmatism (solo/duo dev feasibility) while maintaining clear decision gates and fallback strategies at each phase.**

---

## Functional Requirements

### User Management & Authentication

**FR1:** Users can register using Google OAuth (1-tap sign up)  
**FR2:** Users can register using phone number with OTP verification  
**FR3:** Users can select their kelurahan and bank sampah unit during onboarding  
**FR4:** Users can complete 3-screen onboarding tutorial in under 60 seconds  
**FR5:** Operators can verify and approve new nasabah accounts  
**FR6:** System can assign role-based permissions (Nasabah, Operator, Buyer, Admin)  
**FR7:** Users can enable Mode Lansia accessibility interface

### Transaction Management

**FR8:** Nasabah can request waste deposit transaction with photo upload  
**FR9:** Nasabah can select waste types from predefined categories (Plastik PET/HDPE, Kertas, Logam, Kaca)  
**FR10:** Nasabah can schedule pickup time window (2-hour slots)  
**FR11:** Operators can scan nasabah QR code to identify user  
**FR12:** Operators can enter weight measurements and confirm transaction  
**FR13:** System can calculate transaction value based on admin-configured price table (kg × price/kg)  
**FR14:** System can update nasabah balance in real-time upon transaction confirmation  
**FR15:** Users can view transaction history with photos, timestamps, and breakdowns

### Dashboard & Visualization

**FR16:** Nasabah can view balance in dual ledger format (Rupiah + kg waste)  
**FR17:** Nasabah can view environmental impact metrics (CO₂ prevented, trees equivalent)  
**FR18:** Nasabah can access Progressive UX levels (Level 1 Simple → Level 2 Detailed → Level 3 Power User)  
**FR19:** Nasabah can unlock higher UX levels based on transaction count (Level 2 after 3 transactions, Level 3 after 10 transactions)  
**FR20:** Nasabah can export shareable achievement cards as PNG images  
**FR21:** Operators can view business intelligence dashboard with daily/weekly/monthly stats  
**FR22:** Operators can access revenue forecasting, commission tracking, and top contributors analytics

### Gamification & Engagement

**FR23:** Nasabah can earn badges for milestones (First Hero, Week Warrior, Month Champion)  
**FR24:** Nasabah can maintain daily/weekly streaks with visual streak counter  
**FR25:** Nasabah can view leaderboards (neighborhood ranking and Jakarta-wide ranking)  
**FR26:** Nasabah can opt-out of public leaderboard visibility  
**FR27:** Nasabah can create or join squads for team competitions  
**FR28:** Nasabah can generate and share referral codes with bonus tracking  
**FR29:** System can calculate and display XP/leveling progression (Beginner → Apprentice → Hero → Legend)  
**FR30:** System can auto-generate Instagram story templates with user stats

### Financial Operations

**FR31:** Nasabah can request cash withdrawal with minimum amount threshold (Rp 50K)  
**FR32:** Operators can view pending withdrawal requests queue  
**FR33:** Operators can approve withdrawals and mark as paid  
**FR34:** System can generate digital receipt for withdrawal transactions  
**FR35:** System can track and display commission earnings for operators

### Operator Tools

**FR36:** Operators can access transaction processing interface (QR scan → weight → confirm workflow)  
**FR37:** Operators can view real-time inventory levels by waste type  
**FR38:** Operators can access training video library  
**FR39:** Operators can view waste type breakdown analytics  
**FR40:** Operators can track active vs dormant nasabah metrics  
**FR41:** Operators can view marketplace opportunity listings (Phase 2B preview in MVP)

### Notifications & Communication

**FR42:** System can send push notifications for transaction confirmations, streak reminders, and achievement unlocks  
**FR43:** System can send SMS notifications as fallback for Mode Lansia users  
**FR44:** System can send price alert notifications when commodity prices change significantly  
**FR45:** System can manage notification frequency limits (max 3 notifications per day per user)

### Marketplace (Phase 2B)

**FR46:** B2B Buyers can view real-time inventory aggregation across all bank sampah units  
**FR47:** B2B Buyers can place bulk orders selecting multiple sources with quality grading (A/B/C)  
**FR48:** System can generate blockchain-verified traceability reports with QR codes for ESG compliance

---

## Functional Requirements Summary

**Total Functional Requirements: 48**

- **MVP Scope (Month 0-6)**: FR1-FR45 (45 requirements)
- **Phase 2B Scope (Month 12-18)**: FR46-FR48 (3 requirements)

**Capability Area Distribution:**

1. User Management & Authentication: 7 FRs
2. Transaction Management: 8 FRs
3. Dashboard & Visualization: 7 FRs
4. Gamification & Engagement: 8 FRs
5. Financial Operations: 5 FRs
6. Operator Tools: 6 FRs
7. Notifications & Communication: 4 FRs
8. Marketplace (Phase 2B): 3 FRs

**Traceability to User Journeys:**

- **Journey 1 (Ibu Siti - Warm/Assisted)**: FR1-FR7, FR8-FR15, FR16-FR22, FR23-FR30, FR31-FR35, FR42-FR45
- **Journey 2 (Rina - Cold/Self-Service)**: FR1-FR4, FR8-FR10, FR16-FR20, FR23-FR30, FR42, FR44
- **Journey 3 (Bapak Joko - Lansia Hybrid)**: FR2, FR4, FR7, FR8, FR11-FR15, FR16-FR17, FR31-FR34, FR43
- **Journey 4 (Pak Budi - Operator)**: FR5, FR11-FR13, FR21-FR22, FR32-FR33, FR35-FR41
- **Journey 5 (PT Maju Jaya - B2B Buyer Phase 2B)**: FR46-FR48

**Coverage Validation:**

- ✅ All 5 MVP core flows covered (Registration, Transaction, Dashboard, Withdrawal, Gamification)
- ✅ Progressive UX disclosure mechanism (FR18-FR19)
- ✅ Mode Lansia accessibility (FR7, FR43)
- ✅ Dual ledger tracking (FR16)
- ✅ Crisis communication through price alerts (FR44)
- ✅ Multi-tenancy and RBAC (FR6)
- ✅ Operator business intelligence (FR21-FR22, FR36-FR41)
- ✅ Phase 2B marketplace capabilities (FR46-FR48)

**Implementation Notes:**

- Each FR is testable: "Does this capability exist in the product? Yes/No"
- Each FR is implementation-agnostic: Could be built with various technical approaches
- FRs specify WHAT capabilities exist, not HOW they're implemented (no UI details, no performance specs, no technology choices)
- Non-functional requirements (performance, security, scalability) will be addressed in Step 10

---

## Non-Functional Requirements

### Performance

**NFR-P1: Transaction Recording Latency (Critical - Tier 2)**

- **Requirement**: Transaction recording must complete within 3 seconds (p95) from operator confirmation
- **Rationale**: Operator stands with nasabah waiting; delays create awkward social friction (Journey 4: Pak Budi)
- **Measurement**: p95 latency from tap "Confirm" to balance update visible
- **Target**: <3 seconds p95 (acceptable: <5 seconds during pilot, optimize post-pilot)
- **Failure Impact**: Frustration but recoverable (operator can explain "processing...")

**NFR-P2: App Launch Time (Tier 3 - Post-Pilot)**

- **Requirement**: Mobile app cold start completes within 2 seconds
- **Rationale**: First impression matters for user retention (Journey 2: Rina self-service)
- **Measurement**: Time from tap icon to first interactive screen
- **Target**: <2 seconds on mid-range Android devices (2-year-old specs)
- **Failure Impact**: Annoyance but not blocking (optimize after pilot feedback)

**NFR-P3: Dashboard Refresh Time (Tier 3 - Post-Pilot)**

- **Requirement**: Dashboard data refresh completes within 1 second
- **Rationale**: Users check impact dashboard frequently (Journey 1: Ibu Siti daily habit)
- **Measurement**: Time from pull-to-refresh gesture to data update visible
- **Target**: <1 second with good connectivity
- **Failure Impact**: Minor UX degradation (optimize after pilot feedback)

**NFR-P4: Image Upload Speed (Tier 3 - Post-Pilot)**

- **Requirement**: Photo upload for transaction completes within 5 seconds
- **Rationale**: Transaction flow includes photo documentation (Journey 1, 2, 4)
- **Measurement**: Time from photo taken to upload confirmation
- **Target**: <5 seconds on 4G connectivity
- **Failure Impact**: Slows transaction but not blocking (optimize after pilot)

**NFR-P5: Real-Time Sync Latency**

- **Requirement**: Balance updates propagate to all user devices within 5 seconds
- **Rationale**: Nasabah may check balance on phone while operator processes transaction
- **Measurement**: Time from operator confirmation to nasabah device balance update
- **Target**: <5 seconds using Supabase real-time subscriptions
- **Failure Impact**: Confusion if nasabah sees stale balance

### Security

**NFR-S1: Transaction Accuracy (Critical - Tier 1 - Trust-Breaking)**

- **Requirement**: Zero tolerance for lost or incorrect transactions (100% accuracy)
- **Rationale**: Financial ledger requires absolute trust; one lost transaction destroys confidence
- **Measurement**: Transaction count validation (submitted = recorded), audit trail verification
- **Implementation**: Dual-write pattern, immutable audit logs, daily reconciliation checks
- **Kill Switch**: ANY lost transaction = halt pilot, fix root cause, re-launch
- **Failure Impact**: Trust-breaking, reputation damage, pilot failure

**NFR-S2: Data Integrity (Critical - Tier 1 - Trust-Breaking)**

- **Requirement**: Balance calculations must be 100% accurate (dual ledger kg + rupiah)
- **Rationale**: Balance corruption loses user trust and creates financial disputes
- **Measurement**: Automated daily balance integrity checks (sum of transactions = current balance)
- **Implementation**: Database constraints, transaction atomicity, reconciliation scripts
- **Kill Switch**: Balance corruption = immediate halt until fixed
- **Failure Impact**: Trust-breaking, financial liability, pilot failure

**NFR-S3: Authentication Security (Critical - Tier 1 - Trust-Breaking)**

- **Requirement**: No unauthorized access to user accounts (99.99% security)
- **Rationale**: Unauthorized access to financial account enables fraud
- **Measurement**: Failed login attempt monitoring, anomaly detection, zero breaches
- **Implementation**: Supabase Auth (battle-tested), session management, MFA for withdrawals Phase 2A
- **Kill Switch**: Security breach = immediate lockdown, user notification, forensic investigation
- **Failure Impact**: Trust-breaking, legal liability, reputational damage

**NFR-S4: Data Encryption**

- **Requirement**: All sensitive data encrypted at rest and in transit
- **Rationale**: PDP Indonesia compliance, user privacy protection
- **Measurement**: Encryption audit (database, API traffic, file storage)
- **Implementation**: HTTPS for all API calls, Supabase encryption at rest, no plaintext sensitive data
- **Failure Impact**: Compliance violation, data breach risk

**NFR-S5: Role-Based Access Control**

- **Requirement**: Users can only access data permitted by their role (Nasabah/Operator/Buyer/Admin)
- **Rationale**: Data isolation between tenants (bank sampah units), privacy protection
- **Measurement**: Access control audit, Supabase RLS policy testing
- **Implementation**: Row-Level Security policies, JWT token role claims, admin god-mode only via Retool
- **Failure Impact**: Privacy violation, cross-unit data leakage

### Reliability

**NFR-R1: System Uptime (Tier 2 - Important)**

- **Requirement**: 99.5% uptime (downtime <3.6 hours/month)
- **Rationale**: Users expect access to financial ledger anytime; downtime breaks trust
- **Measurement**: Monthly uptime percentage, incident tracking
- **Target**: 99.5% acceptable for solo/duo dev with PaaS (Supabase/Vercel managed infrastructure)
- **Implementation**: Leverage Supabase 99.9% SLA, Vercel CDN redundancy, status page monitoring
- **Failure Impact**: Frustration during downtime, but recoverable if rare and communicated

**NFR-R2: Push Notification Delivery (Tier 2 - Important)**

- **Requirement**: 95% push notification delivery rate
- **Rationale**: Streak reminders critical for 65% MAU/DAU gamification (Journey 1, 2)
- **Measurement**: FCM delivery reports, weekly delivery rate monitoring
- **Implementation**: Firebase Cloud Messaging, SMS fallback for Mode Lansia, retry logic
- **Kill Switch**: If delivery rate <90% for 3 consecutive days, escalate to Firebase support
- **Failure Impact**: Reduced engagement, broken streaks, user churn

**NFR-R3: Data Backup & Recovery**

- **Requirement**: Daily automated backups with 30-day retention, <24 hour recovery time
- **Rationale**: Financial ledger data must be recoverable in case of data loss
- **Measurement**: Backup success rate, recovery time testing
- **Implementation**: Supabase managed backups (Point-In-Time Recovery), transaction audit logs
- **Failure Impact**: Data loss would be catastrophic (trust-breaking)

### Scalability

**NFR-SC1: User Growth Support**

- **Requirement**: System supports 10x user growth without architectural changes
- **Rationale**: Growth from 300 pilot → 2K MAU (Phase 2A) → 20K MAU (Phase 2B) → 200K MAU (Phase 3)
- **Measurement**: Load testing at 10x current users, performance degradation <10%
- **Implementation**: Supabase connection pooling, read replicas at 50K MAU, consider sharding by region at 100K+ MAU
- **Threshold**: Monitor at 10K MAU, plan migration at 50K MAU
- **Failure Impact**: Performance degradation, need architectural re-work

**NFR-SC2: Concurrent Transaction Processing**

- **Requirement**: System handles 100 concurrent transactions without performance degradation
- **Rationale**: Saturday morning peak (500 operators × 20% active = 100 concurrent)
- **Measurement**: Load testing with 100 concurrent operator transaction submissions
- **Implementation**: Optimistic UI updates, eventual consistency for non-critical data, row-level locks for balance updates
- **Failure Impact**: Slow response times during peak hours

**NFR-SC3: Storage Scaling**

- **Requirement**: Photo storage costs remain <Rp 5M/month at 200K MAU scale
- **Rationale**: 200K users × 10 transactions/month × 2 MB photos = 4 TB/month storage cost
- **Measurement**: Monthly storage cost monitoring
- **Implementation**: Image compression (reduce to 500 KB max), delete photos after 90 days (keep metadata), CDN caching
- **Failure Impact**: Budget overrun, unsustainable unit economics

### Accessibility

**NFR-A1: Mode Lansia Interface (MVP Critical)**

- **Requirement**: Accessibility mode supports users 60+ years old with visual impairment
- **Rationale**: Journey 3 (Bapak Joko) proves digital inclusion for lansia is MVP differentiator
- **Measurement**: 30%+ lansia users (60+) successfully adopt Mode Lansia
- **Implementation**:
  - Font size 24pt (3x larger than standard)
  - 3-button simplified UI ([LIHAT SALDO] [SETOR SAMPAH] [TARIK UANG])
  - High contrast colors (WCAG AAA compliance)
  - Voice guidance text-to-speech
  - SMS confirmations (not just push notifications)
- **Failure Impact**: Excludes lansia demographic, loses community champion advocates

**NFR-A2: WCAG 2.1 Level AA Compliance**

- **Requirement**: Mobile app meets WCAG 2.1 Level AA standards for standard interface (non-Lansia mode)
- **Rationale**: Broad accessibility for users with disabilities, app store requirements
- **Measurement**: Automated accessibility audit tools, manual testing with screen readers
- **Implementation**: Semantic HTML, proper ARIA labels, keyboard navigation support, color contrast ratios
- **Failure Impact**: App store rejection, accessibility complaints

### Usability

**NFR-U1: Onboarding Completion Time**

- **Requirement**: 80% of users complete onboarding in <60 seconds
- **Rationale**: Onboarding friction kills adoption (Journey 2: Rina expects 4min 38sec, target <60sec)
- **Measurement**: Onboarding funnel analytics (PostHog), time from signup to first transaction request
- **Implementation**: 3-screen onboarding, Google 1-tap OAuth, location auto-detect, skip optional fields
- **Failure Impact**: High drop-off rate, low adoption

**NFR-U2: Progressive UX Discoverability**

- **Requirement**: 60% of users unlock Level 2 (Detailed View) within first month
- **Rationale**: Progressive UX must feel natural, not patronizing (Innovation validation)
- **Measurement**: % users who unlock Level 2 (after 3 transactions) and Level 3 (after 10 transactions)
- **Implementation**: Clear unlock triggers, celebratory animations, tooltips explaining new features
- **Kill Switch**: If <40% Level 2 unlock, simplify to 2 levels only (Simple + Power)
- **Failure Impact**: UX innovation doesn't deliver value, users stuck in simple mode

**NFR-U3: Internationalization (i18n)**

- **Requirement**: All user-facing text supports Bahasa Indonesia localization
- **Rationale**: Target market is Indonesia (Jakarta → Java → National)
- **Measurement**: 100% UI strings externalized to language files
- **Implementation**: i18n library, separate language files, RTL support not needed
- **Failure Impact**: Cannot expand to non-Indonesian markets (acceptable for MVP)

**NFR-U4: Responsive Design**

- **Requirement**: Mobile app supports screen sizes from 4.7" (iPhone SE) to 6.7" (iPhone Pro Max) and Android equivalents
- **Rationale**: Wide range of device capabilities in target market (Ibu Siti vs Rina different phones)
- **Measurement**: Visual testing on 5 device sizes (small, medium, large, XL Android, tablet)
- **Implementation**: Responsive React Native layouts, scalable font sizes, adaptive image assets
- **Failure Impact**: Poor UX on smaller/larger devices, excludes users

### Compliance

**NFR-C1: PDP Indonesia (Personal Data Protection)**

- **Requirement**: Full compliance with Indonesia's data privacy law
- **Rationale**: Legal requirement for handling personal data
- **Implementation**:
  - User consent for data collection (onboarding checkbox)
  - Privacy policy accessible in-app
  - Data retention: Active accounts indefinite, deleted accounts purged within 30 days
  - Encryption at rest and in transit
  - Data localization: Supabase Southeast Asia region (Singapore acceptable)
  - Breach notification: 72-hour disclosure to users if data leak
  - User rights: Access, correction, deletion (account deletion feature)
- **Failure Impact**: Legal liability, fines, app store removal

**NFR-C2: App Store Compliance**

- **Requirement**: Meet Google Play Store and Apple App Store guidelines
- **Rationale**: Required for distribution
- **Implementation**:
  - Privacy policy URL in app listing
  - Data safety declarations (Google) / Privacy nutrition labels (Apple)
  - Target API level: Android 13+ (Google requirement)
  - No IAP for MVP (Phase 2A will add native IAP for subscriptions)
  - Clear waste recycling purpose (avoid FinTech scrutiny for MVP)
- **Failure Impact**: App rejection, launch delay

**NFR-C3: OJK License (Phase 2A Only - Not MVP)**

- **Requirement**: Obtain OJK (Otoritas Jasa Keuangan) license before launching e-wallet integration
- **Rationale**: Legal requirement for electronic money services in Indonesia
- **Timeline**: 6-month application process starting Month 6 (for Phase 2A Month 12 launch)
- **Requirements**: Business entity (PT), paid-up capital Rp 1B minimum, AML/KYC procedures
- **Scope**: Only for e-wallet withdrawals (GoPay/OVO/DANA); marketplace commission doesn't require license (B2B transfer)
- **Fallback**: If OJK delayed, continue manual cash pickup until approved
- **Failure Impact**: Cannot launch e-wallet feature, remain manual withdrawal only

---

## Non-Functional Requirements Summary

**Total Non-Functional Requirements: 24 across 7 categories**

**Category Distribution:**

1. **Performance**: 5 NFRs (transaction latency, app launch, dashboard refresh, image upload, real-time sync)
2. **Security**: 5 NFRs (transaction accuracy, data integrity, authentication, encryption, RBAC)
3. **Reliability**: 3 NFRs (uptime, push delivery, backup & recovery)
4. **Scalability**: 3 NFRs (user growth, concurrent transactions, storage scaling)
5. **Accessibility**: 2 NFRs (Mode Lansia, WCAG compliance)
6. **Usability**: 4 NFRs (onboarding time, progressive UX, i18n, responsive design)
7. **Compliance**: 3 NFRs (PDP Indonesia, app store, OJK license Phase 2A)

**Prioritization by Criticality:**

**Tier 1 - Trust-Breaking (Kill Switch if Failed):**

- NFR-S1: Transaction Accuracy 100%
- NFR-S2: Data Integrity 100%
- NFR-S3: Authentication Security 99.99%

**Tier 2 - Important (Frustration but Recoverable):**

- NFR-P1: Transaction Latency <3s p95
- NFR-R1: System Uptime 99.5%
- NFR-R2: Push Notification Delivery 95%

**Tier 3 - Optimization (Post-Pilot):**

- NFR-P2: App Launch <2s
- NFR-P3: Dashboard Refresh <1s
- NFR-P4: Image Upload <5s

**MVP Critical NFRs:**

- All Tier 1 and Tier 2 NFRs must be met before pilot launch
- Mode Lansia accessibility (NFR-A1) is MVP differentiator
- PDP compliance (NFR-C1) and app store compliance (NFR-C2) required for launch

**Measurement & Monitoring:**

- PostHog for performance metrics and funnel analytics
- Supabase monitoring for database performance and uptime
- Firebase FCM for push notification delivery rates
- Manual accessibility testing for Mode Lansia and WCAG compliance
- Monthly security audits and penetration testing (quarterly)

**Decision Gates:**

- If NFR-P1 transaction latency >5s consistently: Optimize before scaling beyond pilot
- If NFR-R2 push delivery <90% for 3 days: Escalate to Firebase support
- If NFR-U2 progressive UX unlock <40%: Simplify to 2 levels (Simple + Power)
- If NFR-SC1 scalability issues at 50K MAU: Plan architectural migration (read replicas, sharding)

---
