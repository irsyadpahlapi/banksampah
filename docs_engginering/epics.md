---
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - "/Users/irsyadpahlapi/Documents/BankSampah/docs_engginering/prd.md"
  - "/Users/irsyadpahlapi/Documents/BankSampah/docs_engginering/architecture.md"
  - "/Users/irsyadpahlapi/Documents/BankSampah/docs_engginering/ux-design-specification.md"
workflowType: "epics-and-stories"
lastStep: 4
workflowComplete: true
validationPassed: true
project_name: "BankSampah"
user_name: "TselTeam"
date: "2026-01-02"
requirementsValidated: true
totalFRs: 48
totalNFRs: 24
epicsApproved: true
totalEpics: 10
storiesCompleted: true
totalStories: 52
---

# BankSampah - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for BankSampah, decomposing the requirements from the PRD, UX Design, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

**FR1:** Users can register using Google OAuth (1-tap sign up)  
**FR2:** Users can register using phone number with OTP verification  
**FR3:** Users can select their kelurahan and bank sampah unit during onboarding  
**FR4:** Users can complete 3-screen onboarding tutorial in under 60 seconds  
**FR5:** Operators can verify and approve new nasabah accounts  
**FR6:** System can assign role-based permissions (Nasabah, Operator, Buyer, Admin)  
**FR7:** Users can enable Mode Lansia accessibility interface

**FR8:** Nasabah can request waste deposit transaction with photo upload  
**FR9:** Nasabah can select waste types from predefined categories (Plastik PET/HDPE, Kertas, Logam, Kaca)  
**FR10:** Nasabah can schedule pickup time window (2-hour slots)  
**FR11:** Operators can scan nasabah QR code to identify user  
**FR12:** Operators can enter weight measurements and confirm transaction  
**FR13:** System can calculate transaction value based on admin-configured price table (kg × price/kg)  
**FR14:** System can update nasabah balance in real-time upon transaction confirmation  
**FR15:** Users can view transaction history with photos, timestamps, and breakdowns

**FR16:** Nasabah can view balance in dual ledger format (Rupiah + kg waste)  
**FR17:** Nasabah can view environmental impact metrics (CO₂ prevented, trees equivalent)  
**FR18:** Nasabah can access Progressive UX levels (Level 1 Simple → Level 2 Detailed → Level 3 Power User)  
**FR19:** Nasabah can unlock higher UX levels based on transaction count (Level 2 after 3 transactions, Level 3 after 10 transactions)  
**FR20:** Nasabah can export shareable achievement cards as PNG images  
**FR21:** Operators can view business intelligence dashboard with daily/weekly/monthly stats  
**FR22:** Operators can access revenue forecasting, commission tracking, and top contributors analytics

**FR23:** Nasabah can earn badges for milestones (First Hero, Week Warrior, Month Champion)  
**FR24:** Nasabah can maintain daily/weekly streaks with visual streak counter  
**FR25:** Nasabah can view leaderboards (neighborhood ranking and Jakarta-wide ranking)  
**FR26:** Nasabah can opt-out of public leaderboard visibility  
**FR27:** Nasabah can create or join squads for team competitions  
**FR28:** Nasabah can generate and share referral codes with bonus tracking  
**FR29:** System can calculate and display XP/leveling progression (Beginner → Apprentice → Hero → Legend)  
**FR30:** System can auto-generate Instagram story templates with user stats

**FR31:** Nasabah can request cash withdrawal with minimum amount threshold (Rp 50K)  
**FR32:** Operators can view pending withdrawal requests queue  
**FR33:** Operators can approve withdrawals and mark as paid  
**FR34:** System can generate digital receipt for withdrawal transactions  
**FR35:** System can track and display commission earnings for operators

**FR36:** Operators can access transaction processing interface (QR scan → weight → confirm workflow)  
**FR37:** Operators can view real-time inventory levels by waste type  
**FR38:** Operators can access training video library  
**FR39:** Operators can view waste type breakdown analytics  
**FR40:** Operators can track active vs dormant nasabah metrics  
**FR41:** Operators can view marketplace opportunity listings (Phase 2B preview in MVP)

**FR42:** System can send push notifications for transaction confirmations, streak reminders, and achievement unlocks  
**FR43:** System can send SMS notifications as fallback for Mode Lansia users  
**FR44:** System can send price alert notifications when commodity prices change significantly  
**FR45:** System can manage notification frequency limits (max 3 notifications per day per user)

**FR46:** B2B Buyers can view real-time inventory aggregation across all bank sampah units  
**FR47:** B2B Buyers can place bulk orders selecting multiple sources with quality grading (A/B/C)  
**FR48:** System can generate blockchain-verified traceability reports with QR codes for ESG compliance

### Non-Functional Requirements

**NFR-P1: Transaction Recording Latency (Critical - Tier 2)**

- Requirement: Transaction recording must complete within 3 seconds (p95) from operator confirmation
- Rationale: Operator stands with nasabah waiting; delays create awkward social friction
- Target: <3 seconds p95 (acceptable: <5 seconds during pilot, optimize post-pilot)

**NFR-P2: App Launch Time (Tier 3 - Post-Pilot)**

- Requirement: Mobile app cold start completes within 2 seconds
- Target: <2 seconds on mid-range Android devices (2-year-old specs)

**NFR-P3: Dashboard Refresh Time (Tier 3 - Post-Pilot)**

- Requirement: Dashboard data refresh completes within 1 second
- Target: <1 second with good connectivity

**NFR-P4: Image Upload Speed (Tier 3 - Post-Pilot)**

- Requirement: Photo upload for transaction completes within 5 seconds
- Target: <5 seconds on 4G connectivity

**NFR-P5: Real-Time Sync Latency**

- Requirement: Balance updates propagate to all user devices within 5 seconds
- Target: <5 seconds using Supabase real-time subscriptions

**NFR-S1: Transaction Accuracy (Critical - Tier 1 - Trust-Breaking)**

- Requirement: Zero tolerance for lost or incorrect transactions (100% accuracy)
- Implementation: Dual-write pattern, immutable audit logs, daily reconciliation checks
- Kill Switch: ANY lost transaction = halt pilot, fix root cause, re-launch

**NFR-S2: Data Integrity (Critical - Tier 1 - Trust-Breaking)**

- Requirement: Balance calculations must be 100% accurate (dual ledger kg + rupiah)
- Implementation: Database constraints, transaction atomicity, reconciliation scripts
- Kill Switch: Balance corruption = immediate halt until fixed

**NFR-S3: Authentication Security (Critical - Tier 1 - Trust-Breaking)**

- Requirement: No unauthorized access to user accounts (99.99% security)
- Implementation: Supabase Auth (battle-tested), session management, MFA for withdrawals Phase 2A
- Kill Switch: Security breach = immediate lockdown, user notification, forensic investigation

**NFR-S4: Data Encryption**

- Requirement: All sensitive data encrypted at rest and in transit
- Implementation: HTTPS for all API calls, Supabase encryption at rest, no plaintext sensitive data

**NFR-S5: Role-Based Access Control**

- Requirement: Users can only access data permitted by their role (Nasabah/Operator/Buyer/Admin)
- Implementation: Row-Level Security policies, JWT token role claims, admin god-mode only via Retool

**NFR-R1: System Uptime (Tier 2 - Important)**

- Requirement: 99.5% uptime (downtime <3.6 hours/month)
- Target: 99.5% acceptable for solo/duo dev with PaaS (Supabase/Vercel managed infrastructure)

**NFR-R2: Push Notification Delivery (Tier 2 - Important)**

- Requirement: 95% push notification delivery rate
- Implementation: Firebase Cloud Messaging, SMS fallback for Mode Lansia, retry logic

**NFR-R3: Data Backup & Recovery**

- Requirement: Daily automated backups with 30-day retention, <24 hour recovery time
- Implementation: Supabase managed backups (Point-In-Time Recovery), transaction audit logs

**NFR-SC1: User Growth Support**

- Requirement: System supports 10x user growth without architectural changes
- Threshold: Monitor at 10K MAU, plan migration at 50K MAU

**NFR-SC2: Concurrent Transaction Processing**

- Requirement: System handles 100 concurrent transactions without performance degradation
- Target: Saturday morning peak (500 operators × 20% active = 100 concurrent)

**NFR-SC3: Storage Scaling**

- Requirement: Photo storage costs remain <Rp 5M/month at 200K MAU scale
- Implementation: Image compression (reduce to 500 KB max), delete photos after 90 days

**NFR-A1: Mode Lansia Interface (MVP Critical)**

- Requirement: Accessibility mode supports users 60+ years old with visual impairment
- Implementation: Font size 24pt (3x larger), 3-button simplified UI, high contrast colors (WCAG AAA), voice guidance text-to-speech, SMS confirmations

**NFR-A2: WCAG 2.1 Level AA Compliance**

- Requirement: Mobile app meets WCAG 2.1 Level AA standards for standard interface
- Implementation: Semantic HTML, proper ARIA labels, keyboard navigation support, color contrast ratios

**NFR-U1: Onboarding Completion Time**

- Requirement: 80% of users complete onboarding in <60 seconds
- Implementation: 3-screen onboarding, Google 1-tap OAuth, location auto-detect, skip optional fields

**NFR-U2: Progressive UX Discoverability**

- Requirement: 60% of users unlock Level 2 (Detailed View) within first month
- Implementation: Clear unlock triggers, celebratory animations, tooltips explaining new features

**NFR-U3: Internationalization (i18n)**

- Requirement: All user-facing text supports Bahasa Indonesia localization
- Implementation: i18n library, separate language files

**NFR-U4: Responsive Design**

- Requirement: Mobile app supports screen sizes from 4.7" (iPhone SE) to 6.7" (iPhone Pro Max) and Android equivalents
- Implementation: Responsive React Native layouts, scalable font sizes, adaptive image assets

**NFR-C1: PDP Indonesia (Personal Data Protection)**

- Requirement: Full compliance with Indonesia's data privacy law
- Implementation: User consent, privacy policy in-app, data retention policies, encryption, breach notification 72-hour

**NFR-C2: App Store Compliance**

- Requirement: Meet Google Play Store and Apple App Store guidelines
- Implementation: Privacy policy URL, data safety declarations, target API level Android 13+

**NFR-C3: OJK License (Phase 2A Only - Not MVP)**

- Requirement: Obtain OJK license before launching e-wallet integration
- Timeline: 6-month application process starting Month 6 (for Phase 2A Month 12 launch)

### Additional Requirements

**Architecture - Starter Template:**

- Initialize project using `npx create-expo-app@latest BankSampah --template blank-typescript`
- Expo SDK 52 with TypeScript strict mode configuration
- File-based routing with expo-router
- EAS Build configuration (eas.json) for cloud builds

**Architecture - Infrastructure:**

- Supabase client setup with AsyncStorage session persistence
- React Navigation (bottom tabs + stack navigation)
- Zustand state management (feature-based stores: authStore, balanceStore, transactionStore, gamificationStore)
- NativeBase UI component library with custom theme (Emerald Green primary, Inter typography, 8pt grid spacing)
- Expo modules: expo-notifications, expo-device, expo-image-picker, expo-barcode-scanner

**Architecture - Database:**

- SQL migrations with Supabase CLI for schema management
- PostgreSQL Row-Level Security (RLS) policies for multi-tenancy
- Dual ledger accounting (Rupiah + kg waste, atomic updates)
- Immutable audit trail for all transactions (append-only log)

**Architecture - Security:**

- Supabase Auth (Google OAuth + Phone OTP)
- JWT-based authentication with role claims (Nasabah/Operator/Buyer/Admin)
- Row-Level Security policies as defense-in-depth layer
- Session management with token refresh strategy

**Architecture - State Management:**

- Optimistic UI updates for transaction flows (instant feedback, eventual consistency)
- Offline queue for failed requests with automatic retry
- Supabase Realtime subscriptions for balance updates (<5s propagation)
- Progressive UX level stored in uiStore (accessible across all features)

**Architecture - API Design:**

- Hybrid approach: Direct Supabase client for reads, Edge Functions for complex writes
- Standardized error shape with user-friendly messages
- Shared Zod validation schemas between mobile + Edge Functions

**Architecture - Monitoring:**

- Sentry for error tracking and crash reporting
- PostHog for user behavior analytics and funnel analysis
- Firebase Cloud Messaging for push notification delivery tracking

**UX Design - Design System:**

- NativeBase 3.x as design system foundation
- Primary color: Emerald Green (#10B981) - environmental trust
- Typography: Inter font, 16pt base font size, 24pt Mode Lansia
- Spacing: 8pt grid system (4, 8, 12, 16, 24, 32, 48, 64)
- Touch target minimum: 44x44pt for accessibility
- WCAG 2.1 AA compliance (color contrast ratios, semantic labels)

**UX Design - Progressive UX Levels:**

- Level 1 (Simple): Saldo, Total Sampah, Impact, [Setor] [Tarik] buttons only
- Level 2 (Detailed): Unlock after 3 transactions - breakdown by type, transaction history, impact metrics, shareable card
- Level 3 (Power User): Unlock after 10 transactions - advanced analytics, leaderboards, squad management
- Mode Lansia: 3-button UI ([LIHAT SALDO] [SETOR SAMPAH] [TARIK UANG]), 24pt font, high contrast, voice guidance

**UX Design - Interaction Patterns:**

- Hero section with dual ledger + environmental narrative immediately comprehensible
- Celebration modals with animation for milestone achievements
- Timeline transparency for withdrawals (24h expectation, status tracking)
- Auto-generated shareable achievement cards (PNG export for Instagram)
- Push notification timing critical (daily reminder before usual drop-off time)

**UX Design - Gamification:**

- Badge unlock celebrations with visual animations
- Streak counter with loss aversion psychology ("Don't break your 7-day streak!")
- Leaderboard rankings feel rewarding, not patronizing
- Social features (squad competitions, neighborhood challenges) for community engagement

### FR Coverage Map

**Epic 1: Project Foundation & Developer Setup**

- Architecture Requirements: Starter template (`npx create-expo-app`), Supabase setup, Zustand stores, NativeBase, Expo modules, database schema with RLS policies

**Epic 2: User Authentication & Onboarding**

- FR1: Google OAuth registration
- FR2: Phone number + OTP registration
- FR3: Kelurahan & bank sampah unit selection
- FR4: 3-screen onboarding tutorial
- FR5: Operator verification & approval
- FR6: Role-based permissions (Nasabah, Operator, Buyer, Admin)
- FR7: Mode Lansia accessibility toggle

**Epic 3: Core Transaction Workflow**

- FR8: Waste deposit request with photo
- FR9: Waste type selection (Plastik, Kertas, Logam, Kaca)
- FR10: Pickup time window scheduling
- FR11: Operator QR code scanning
- FR12: Weight measurement & confirmation
- FR13: Dynamic pricing calculation
- FR14: Real-time balance updates
- FR15: Transaction history with photos

**Epic 4: Dashboard & Impact Visualization**

- FR16: Dual ledger balance display (Rupiah + kg)
- FR17: Environmental impact metrics (CO₂, trees)
- FR18: Progressive UX levels access
- FR19: UX level unlock triggers (3 tx → Level 2, 10 tx → Level 3)
- FR20: Shareable achievement cards (PNG export)

**Epic 5: Gamification & Social Engagement**

- FR23: Badge system (First Hero, Week Warrior, Month Champion)
- FR24: Streak tracking (daily/weekly counter)
- FR25: Leaderboards (neighborhood + Jakarta-wide)
- FR26: Leaderboard opt-out privacy
- FR27: Squad creation & team competitions
- FR28: Referral code system with bonus tracking
- FR29: XP/leveling progression (Beginner → Legend)
- FR30: Auto-generated Instagram story templates

**Epic 6: Financial Operations (Withdrawals)**

- FR31: Cash withdrawal request (minimum Rp 50K)
- FR32: Operator pending withdrawal queue
- FR33: Withdrawal approval & mark as paid
- FR34: Digital receipt generation
- FR35: Operator commission tracking

**Epic 7: Operator Business Intelligence Dashboard**

- FR21: Business intelligence dashboard (daily/weekly/monthly stats)
- FR22: Revenue forecasting, commission tracking, top contributors analytics
- FR36: Transaction processing interface (QR scan → weight → confirm)
- FR37: Real-time inventory levels by waste type
- FR38: Training video library
- FR39: Waste type breakdown analytics
- FR40: Active vs dormant nasabah metrics
- FR41: Marketplace opportunity listings preview (Phase 2B)

**Epic 8: Notification & Communication System**

- FR42: Push notifications (transaction, streak, achievement)
- FR43: SMS fallback for Mode Lansia users
- FR44: Price alert notifications (>10% commodity change)
- FR45: Notification frequency limits (max 3/day/user)

**Epic 9: Accessibility & Mode Lansia**

- FR7: Mode Lansia toggle implementation (UI layer)
- NFR-A1: Mode Lansia interface (3-button UI, 24pt font, voice guidance, SMS confirmations, WCAG AAA)
- NFR-A2: WCAG 2.1 Level AA compliance for standard interface

**Epic 10: Production Deployment & Monitoring**

- Infrastructure Requirements: EAS Build, App Store/Play Store submission, Sentry, PostHog
- NFR-C1: PDP Indonesia compliance
- NFR-C2: App Store compliance
- NFR-R1: 99.5% uptime monitoring
- NFR-R3: Backup & recovery validation

**Coverage Validation:**

- ✅ All 48 FRs mapped to epics
- ✅ Critical NFRs (Trust-Breaking Tier 1) addressed in Epic 3 (Transaction Accuracy, Data Integrity, Auth Security)
- ✅ Performance NFRs addressed across Epic 3, 4, 8
- ✅ Accessibility NFRs addressed in Epic 9
- ✅ Compliance NFRs addressed in Epic 10

## Epic List

### Epic 1: Project Foundation & Developer Setup

**User Outcome:** Developers can initialize the project and set up core infrastructure to begin building features.

**Goal:** Establish the technical foundation (Expo project, Supabase, state management, UI library) so all subsequent epics can build features on solid ground.

**FRs Covered:** Architecture requirements (starter template: `npx create-expo-app`, Supabase setup, Zustand stores, NativeBase, Expo modules, database schema with RLS policies)

**Implementation Notes:**

- Story 1: Initialize Expo project with `npx create-expo-app@latest BankSampah --template blank-typescript`
- Story 2: Configure Supabase client with AsyncStorage session persistence
- Story 3: Setup React Navigation (bottom tabs + stack)
- Story 4: Install Zustand + create base stores (authStore, balanceStore, transactionStore, gamificationStore)
- Story 5: Configure NativeBase theme (Emerald Green #10B981, Inter font, 8pt grid)
- Story 6: Install Expo modules (expo-notifications, expo-device, expo-image-picker, expo-barcode-scanner)
- Story 7: Setup database schema with SQL migrations (users, transactions, balances, prices tables with RLS policies)

**Why Standalone:** Complete dev environment enables all feature development. No user-facing value yet, but essential foundation.

---

### Epic 2: User Authentication & Onboarding

**User Outcome:** Nasabah and Operators can register, login, and complete onboarding to access the platform with role-based permissions.

**Goal:** Users dapat masuk ke platform dengan Google OAuth atau phone OTP, menyelesaikan onboarding <60 seconds, dan sistem assign role yang sesuai.

**FRs Covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR7

**Implementation Notes:**

- Google OAuth 1-tap signup
- Phone number + OTP verification
- 3-screen onboarding tutorial (<60 seconds)
- Kelurahan & bank sampah unit selection
- Operator verification & approval workflow
- Role-based permissions (Nasabah, Operator, Buyer, Admin)
- Mode Lansia accessibility toggle
- NFR-U1 (80% users complete onboarding <60s)
- NFR-S3 (Authentication Security 99.99%)

**Why Standalone:** Complete auth system. Users can register, login, manage profiles. Enables all subsequent user-specific features.

---

### Epic 3: Core Transaction Workflow (Nasabah → Operator)

**User Outcome:** Nasabah can deposit waste with photo documentation, Operators can process transactions via QR scan + weight entry, and balances update in real-time with dual ledger (Rupiah + kg).

**Goal:** The CORE VALUE LOOP - Nasabah setor sampah, Operator confirm, balance update instantly. This is the MVP heart.

**FRs Covered:** FR8, FR9, FR10, FR11, FR12, FR13, FR14, FR15

**Implementation Notes:**

- Photo upload for waste documentation
- Waste type selection (Plastik PET/HDPE, Kertas, Logam, Kaca)
- 2-hour pickup time window scheduling
- QR code generation for nasabah identity
- Operator QR scan + weight measurement workflow
- Dynamic pricing calculation (kg × admin price/kg)
- Real-time dual ledger updates (Rupiah + kg)
- Transaction history with photos and breakdowns
- NFR-P1 (Transaction latency <3s p95)
- NFR-S1 (Transaction Accuracy 100%)
- NFR-S2 (Data Integrity 100% for dual ledger)
- NFR-P5 (Real-time sync <5s)

**Why Standalone:** Complete transaction flow from request to confirmation. Nasabah can see balance grow, Operator can process transactions. Delivers immediate tangible value.

---

### Epic 4: Dashboard & Impact Visualization

**User Outcome:** Nasabah can view balance (dual ledger Rupiah + kg), environmental impact metrics (CO₂, trees equivalent), and export shareable achievement cards for social media.

**Goal:** Transform transaction data into meaningful impact visualization yang trigger aha moment: "My waste has value!"

**FRs Covered:** FR16, FR17, FR18, FR19, FR20

**Implementation Notes:**

- Dual ledger balance display (Rupiah + kg waste)
- Environmental impact calculation (CO₂ prevented = waste_kg × 2.5, trees equivalent)
- Progressive UX levels implementation:
  - Level 1 Simple (default): Saldo, Total Sampah, Impact, [Setor] [Tarik] buttons
  - Level 2 Detailed (unlock after 3 transactions): Breakdown by type, transaction history, impact metrics
  - Level 3 Power User (unlock after 10 transactions): Advanced analytics
- Shareable achievement cards (PNG export for Instagram viral loop)
- NFR-U2 (60% users unlock Level 2 within first month)

**Why Standalone:** Uses transaction data from Epic 3. Nasabah can understand their impact and share achievements. Critical for retention (65% MAU/DAU target).

---

### Epic 5: Gamification & Social Engagement

**User Outcome:** Nasabah can earn badges, maintain streaks, compete on leaderboards, join squads, and earn referral bonuses to build daily recycling habits.

**Goal:** Drive 65% MAU/DAU ratio through gamification that creates habit formation + social competition.

**FRs Covered:** FR23, FR24, FR25, FR26, FR27, FR28, FR29, FR30

**Implementation Notes:**

- Badge system (First Hero, Week Warrior, Month Champion) with unlock celebrations
- Streak tracking (daily/weekly with visual counter, loss aversion psychology)
- Leaderboards (neighborhood + Jakarta-wide ranking, opt-out privacy)
- Squad/team creation for competitions
- Referral code system with bonus tracking
- XP/leveling progression (Beginner → Apprentice → Hero → Legend)
- Auto-generated Instagram story templates with user stats
- NFR-R2 (Push notification delivery 95% for streak reminders)

**Why Standalone:** Uses transaction data from Epic 3, user profiles from Epic 2. Adds engagement layer on top of core transaction flow. Critical for retention but not blocking core value.

---

### Epic 6: Financial Operations (Withdrawals)

**User Outcome:** Nasabah can request cash withdrawals (minimum Rp 50K), Operators can approve and process withdrawals, and digital receipts are generated for audit trails.

**Goal:** Enable financial empowerment - nasabah dapat tarik uang yang sudah mereka kumpulkan.

**FRs Covered:** FR31, FR32, FR33, FR34, FR35

**Implementation Notes:**

- Withdrawal request form (minimum Rp 50K threshold)
- Pending withdrawal queue for operators
- Operator approval + mark as paid workflow
- Digital receipt generation
- Commission tracking for operators
- Timeline transparency (24h expectation, status tracking per UX Design)

**Why Standalone:** Uses balance data from Epic 3, auth from Epic 2. Nasabah can complete full cycle: deposit → accumulate → withdraw. Critical for trust building.

---

### Epic 7: Operator Business Intelligence Dashboard

**User Outcome:** Operators can access business intelligence dashboard with daily/weekly/monthly stats, revenue forecasting, commission tracking, and nasabah analytics to optimize operations.

**Goal:** Transform Pak Budi from manual paperwork hell (2 hours Saturday morning) to digital entrepreneur (30 minutes + 2x revenue).

**FRs Covered:** FR21, FR22, FR36, FR37, FR38, FR39, FR40, FR41

**Implementation Notes:**

- Business intelligence dashboard (Retool admin interface)
- Daily/weekly/monthly transaction stats
- Revenue forecasting based on patterns
- Commission tracking and earnings display
- Real-time inventory levels by waste type
- Training video library
- Waste type breakdown analytics
- Active vs dormant nasabah metrics
- Marketplace opportunity preview (Phase 2B teaser)

**Why Standalone:** Uses transaction data from Epic 3, operator profiles from Epic 2. Operators get business insights to grow their operations. Critical for operator retention (50% willing to pay Rp 100K/month SaaS target).

---

### Epic 8: Notification & Communication System

**User Outcome:** Users receive timely push notifications (transaction confirmations, streak reminders, achievement unlocks, price alerts) with SMS fallback for Mode Lansia users, respecting frequency limits.

**Goal:** Keep users engaged daily through intelligent notification orchestration (max 3/day, context-aware triggers).

**FRs Covered:** FR42, FR43, FR44, FR45

**Implementation Notes:**

- Push notification integration (Firebase Cloud Messaging)
- Transaction confirmation notifications (instant)
- Streak reminder notifications (8 PM daily, before usual drop-off time)
- Achievement unlock notifications (instant with celebration)
- Price alert notifications (>10% commodity price change)
- SMS fallback for Mode Lansia users
- Frequency limiting algorithm (max 3 notifications/day/user)
- Delivery tracking and retry logic
- NFR-R2 (95% push delivery rate)

**Why Standalone:** Uses transaction data from Epic 3, gamification data from Epic 5, user preferences from Epic 2. Enables daily engagement loop. Critical for 65% MAU/DAU target.

---

### Epic 9: Accessibility & Mode Lansia

**User Outcome:** Users 60+ years old can use simplified Mode Lansia interface (3-button UI, 24pt font, voice guidance, SMS notifications) to access all core features with high accessibility compliance.

**Goal:** Digital inclusion for lansia demographic (Bapak Joko journey) - prove that "Lansia bisa digital!"

**FRs Covered:** FR7 (Mode Lansia toggle implementation), NFR-A1 (Mode Lansia critical), NFR-A2 (WCAG 2.1 AA)

**Implementation Notes:**

- Mode Lansia toggle in settings (prominent, persistent)
- 3-button simplified UI: [LIHAT SALDO] [SETOR SAMPAH] [TARIK UANG]
- Font size override (24pt minimum)
- High contrast color scheme (WCAG AAA compliance)
- Voice guidance system (text-to-speech)
- SMS confirmation fallback (not just push notifications)
- Large icon selectors (visual, minimal text)
- Touch target minimum 44x44pt
- WCAG 2.1 Level AA compliance for standard interface

**Why Standalone:** Alternative UI layer on top of Epic 2-6 features. Lansia users can access same core value (auth, transaction, dashboard, withdrawal) through accessible interface. Critical for community champion advocates.

---

### Epic 10: Production Deployment & Monitoring

**User Outcome:** Developers can deploy the app to App Store and Google Play Store, monitor errors with Sentry, track user behavior with PostHog, and manage releases with EAS Build.

**Goal:** Ship MVP to production with proper monitoring, error tracking, and release management.

**FRs Covered:** Infrastructure requirements, NFR-C1 (PDP Indonesia), NFR-C2 (App Store Compliance), NFR-R1 (99.5% uptime), NFR-R3 (backup & recovery)

**Implementation Notes:**

- EAS Build profiles (development, preview, production)
- App Store / Play Store submission (privacy policies, data safety declarations)
- Sentry error tracking integration
- PostHog analytics setup (funnel analysis, A/B testing)
- Environment configuration (.env local + EAS secrets production)
- PDP Indonesia compliance checklist (user consent, privacy policy, data retention, encryption, breach notification 72-hour)
- Supabase backup & recovery validation (daily automated backups, 30-day retention, <24h recovery)
- Monitoring dashboards for uptime/performance

**Why Standalone:** Uses complete app from Epic 2-9. Enables production launch and post-launch monitoring. Final gate before pilot users.

---

## Epic Summary

**Total Epics:** 10  
**Total FRs Covered:** 48 (all FRs mapped)  
**Epic Flow:** Foundation → Auth → Transaction → Visualization → Engagement → Finance → Operator → Notifications → Accessibility → Production

**Critical Path (MVP Blocking):**

1. Epic 1: Foundation (enables all development)
2. Epic 2: Auth (enables user-specific features)
3. Epic 3: Transaction (core value loop)
4. Epic 4: Dashboard (aha moment trigger)
5. Epic 6: Withdrawal (complete financial cycle)
6. Epic 10: Production (launch gate)

**High-Value Enhancers (Critical for 65% MAU/DAU but not blocking):**

- Epic 5: Gamification (habit formation)
- Epic 8: Notifications (daily engagement)
- Epic 9: Mode Lansia (digital inclusion differentiator)

**Operator Enablement:**

- Epic 7: Business Intelligence (operator retention, SaaS validation)

---

## Epic 1: Project Foundation & Developer Setup

**User Outcome:** Developers can initialize the project and set up core infrastructure to begin building features.

**Goal:** Establish the technical foundation (Expo project, Supabase, state management, UI library) so all subsequent epics can build features on solid ground.

**FRs Covered:** Architecture requirements (starter template: `npx create-expo-app`, Supabase setup, Zustand stores, NativeBase, Expo modules, database schema with RLS policies)

### Story 1.1: Initialize Expo Project with TypeScript

As a **developer**,
I want **to initialize the Expo project using the official blank-typescript template**,
So that **I have a clean TypeScript foundation to build all features**.

**Acceptance Criteria:**

**Given** I have Node.js 18+ installed
**When** I run `npx create-expo-app@latest BankSampah --template blank-typescript`
**Then** A new Expo project is created with TypeScript configuration
**And** The project includes tsconfig.json with strict mode enabled
**And** The project structure has app/, assets/, components/ directories
**And** EAS Build configuration (eas.json) is present
**And** I can run `npm start` successfully to launch Metro bundler

### Story 1.2: Configure Supabase Client with Session Persistence

As a **developer**,
I want **to configure the Supabase client with AsyncStorage session persistence**,
So that **user authentication sessions persist across app restarts**.

**Acceptance Criteria:**

**Given** Expo project is initialized from Story 1.1
**When** I install @supabase/supabase-js and @react-native-async-storage/async-storage
**Then** lib/supabase.ts file is created with Supabase client initialization
**And** Supabase client uses AsyncStorage for session storage
**And** Environment variables (SUPABASE_URL, SUPABASE_ANON_KEY) are configured in .env file
**And** Client connects successfully to Supabase Southeast Asia region (Singapore)
**And** I can import and use supabase client in components

### Story 1.3: Setup React Navigation Infrastructure

As a **developer**,
I want **to setup React Navigation with bottom tabs and stack navigation**,
So that **I can build multi-screen flows for authentication and main app features**.

**Acceptance Criteria:**

**Given** Expo project has Supabase client from Story 1.2
**When** I install @react-navigation/native, @react-navigation/bottom-tabs, @react-navigation/stack
**Then** Navigation container is configured in app/\_layout.tsx
**And** Bottom tab navigator is set up with placeholder screens: Home, Transactions, Profile
**And** Stack navigator is configured for authentication flow
**And** Protected route mechanism is ready (authenticated vs public screens)
**And** Navigation transitions work smoothly on both iOS and Android

### Story 1.4: Install Zustand and Create Base State Stores

As a **developer**,
I want **to install Zustand and create base state stores for auth, balance, transactions, and gamification**,
So that **I have centralized state management ready for all features**.

**Acceptance Criteria:**

**Given** Project has navigation setup from Story 1.3
**When** I install zustand package
**Then** stores/ directory is created with 4 base store files
**And** stores/authStore.ts is created with user, session, and role state
**And** stores/balanceStore.ts is created with dual ledger (rupiah, kg) placeholders
**And** stores/transactionStore.ts is created with transaction list and offline queue placeholders
**And** stores/gamificationStore.ts is created with badges, streaks, XP placeholders
**And** Each store has proper TypeScript types defined
**And** I can import and use stores in components

### Story 1.5: Configure NativeBase UI Theme

As a **developer**,
I want **to install NativeBase and configure custom theme matching BankSampah design system**,
So that **all UI components follow consistent Emerald Green brand and accessibility standards**.

**Acceptance Criteria:**

**Given** Project has Zustand stores from Story 1.4
**When** I install native-base and required peer dependencies
**Then** NativeBase provider is wrapped around app in app/\_layout.tsx
**And** Custom theme is configured with primary color Emerald Green (#10B981)
**And** Typography uses Inter font family (16pt base font size)
**And** Spacing follows 8pt grid system (4, 8, 12, 16, 24, 32, 48, 64)
**And** Color contrast ratios meet WCAG 2.1 AA compliance
**And** I can use NativeBase components (Button, Input, Text) in screens

### Story 1.6: Install Required Expo Modules

As a **developer**,
I want **to install Expo modules for notifications, image picking, and barcode scanning**,
So that **core features like transaction photos and QR codes are enabled**.

**Acceptance Criteria:**

**Given** Project has NativeBase theme from Story 1.5
**When** I run `npx expo install expo-notifications expo-device expo-image-picker expo-barcode-scanner`
**Then** All 4 Expo modules are installed successfully
**And** expo-notifications is configured with Firebase Cloud Messaging
**And** expo-image-picker permissions are configured in app.json (camera, photo library)
**And** expo-barcode-scanner permissions are configured in app.json (camera)
**And** I can import and use these modules in components
**And** Modules work on both iOS and Android simulators/devices

### Story 1.7: Setup Database Schema with SQL Migrations

As a **developer**,
I want **to create initial database schema with SQL migrations using Supabase CLI**,
So that **I have tables ready for users, transactions, balances, and prices with RLS policies**.

**Acceptance Criteria:**

**Given** Project has all Expo modules from Story 1.6
**When** I install Supabase CLI and run `supabase init`
**Then** supabase/ directory is created with migrations/ folder
**And** Migration file 001_create_users_table.sql creates users table with columns: id, email, phone, role, kelurahan, unit_id, created_at
**And** Migration file 002_create_transactions_table.sql creates transactions table with columns: id, user_id, operator_id, waste_type, weight_kg, price_per_kg, total_rupiah, photo_url, status, created_at
**And** Migration file 003_create_balances_table.sql creates balances table with columns: user_id, rupiah_balance, kg_balance, updated_at
**And** Migration file 004_create_prices_table.sql creates prices table with columns: id, waste_type, price_per_kg, region, updated_at
**And** Row-Level Security (RLS) policies are enabled on all tables
**And** RLS policy: Users can only read their own data (user_id = auth.uid())
**And** RLS policy: Operators can read all data for their unit_id
**And** I can run `supabase db push` to apply migrations to cloud database
**And** Tables are visible in Supabase dashboard with correct schema

---

## Epic 2: User Authentication & Onboarding

**User Outcome:** Nasabah and Operators can register, login, and complete onboarding to access the platform with role-based permissions.

**Goal:** Users dapat masuk ke platform dengan Google OAuth atau phone OTP, menyelesaikan onboarding <60 seconds, dan sistem assign role yang sesuai.

**FRs Covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR7

### Story 2.1: Google OAuth Registration

As a **nasabah or operator**,
I want **to register using Google 1-tap sign up**,
So that **I can quickly create an account without remembering passwords**.

**Acceptance Criteria:**

**Given** The app is launched and I'm on the welcome screen
**When** I tap "Sign Up with Google" button
**Then** Google OAuth consent screen appears
**And** I select my Google account
**And** My user record is created in users table with email, role='nasabah' (default)
**And** Session is stored in authStore and AsyncStorage
**And** I'm redirected to onboarding screen
**And** NFR-S3: Authentication uses Supabase Auth (99.99% security)

### Story 2.2: Phone Number + OTP Registration

As a **nasabah or operator**,
I want **to register using my phone number with OTP verification**,
So that **I can create an account without email access**.

**Acceptance Criteria:**

**Given** I'm on the welcome screen
**When** I tap "Sign Up with Phone" and enter my phone number (+62 format)
**Then** An OTP code is sent via SMS to my phone number
**And** I receive a 6-digit OTP within 30 seconds
**And** I can enter the OTP code in the verification screen
**And** If OTP is correct, my user record is created in users table with phone, role='nasabah'
**And** If OTP is incorrect, I see an error message "Kode OTP salah, coba lagi"
**And** Session is stored in authStore and AsyncStorage
**And** I'm redirected to onboarding screen

### Story 2.3: 3-Screen Onboarding Tutorial

As a **new user**,
I want **to complete a 3-screen onboarding tutorial in under 60 seconds**,
So that **I quickly understand how the app works**.

**Acceptance Criteria:**

**Given** I just registered and I'm on the onboarding screen
**When** I see Screen 1: "Turn trash to treasure" with visual animation
**And** I swipe to Screen 2: "Track your impact like investment portfolio" with charts example
**And** I swipe to Screen 3: "Join 10,000+ eco warriors in Jakarta" with social proof
**Then** Each screen has "Skip" button to bypass tutorial
**And** Each screen has "Next" button to proceed
**And** Screen 3 has "Get Started" button that completes onboarding
**And** NFR-U1: 80% of users complete all 3 screens in <60 seconds
**And** After completion, I'm redirected to kelurahan selection screen

### Story 2.4: Kelurahan and Bank Sampah Unit Selection

As a **nasabah**,
I want **to select my kelurahan and bank sampah unit during onboarding**,
So that **I'm connected to the correct local operator**.

**Acceptance Criteria:**

**Given** I completed the 3-screen tutorial from Story 2.3
**When** I'm on the kelurahan selection screen
**Then** I see a dropdown list of kelurahan in Jakarta (populated from database)
**And** After selecting kelurahan, I see available bank sampah units for that kelurahan
**And** I can select my preferred unit from the list
**And** My selection is saved to users table (kelurahan, unit_id columns)
**And** After confirmation, I'm redirected to the main Home screen
**And** My authStore is updated with kelurahan and unit_id

### Story 2.5: Operator Verification Workflow

As an **operator**,
I want **to be verified and approved by admin before I can access operator features**,
So that **only legitimate operators can process transactions**.

**Acceptance Criteria:**

**Given** I registered as a user (via Google or Phone from Story 2.1/2.2)
**When** I request operator role upgrade in Profile settings
**Then** My verification request is created in operator_requests table with status='pending'
**And** Admin receives notification in Retool admin dashboard
**And** Admin can view my profile, phone, and unit assignment request
**And** Admin can approve or reject my request
**And** If approved, my users.role is updated to 'operator' and I receive push notification "Akun operator Anda telah diaktifkan!"
**And** If rejected, I receive push notification with rejection reason
**And** After approval, I can access operator-specific screens (transaction processing, dashboard)

### Story 2.6: Role-Based Permissions System

As a **system**,
I want **to assign and enforce role-based permissions (Nasabah, Operator, Buyer, Admin)**,
So that **users only access features appropriate for their role**.

**Acceptance Criteria:**

**Given** A user is authenticated and has a role in users table
**When** User's role is 'nasabah'
**Then** User can access: Home dashboard, Transaction request, Profile, Leaderboards
**And** User CANNOT access: Operator transaction processing, Business intelligence dashboard
**And** When User's role is 'operator'
**Then** User can access: All nasabah features + Operator dashboard + Transaction processing + Withdrawal approvals
**And** When User's role is 'admin'
**Then** User can access: All features + Retool admin panel + User management + Price configuration
**And** Role is stored in authStore.user.role
**And** Navigation menu items are conditionally rendered based on role
**And** API requests include JWT token with role claim for RLS policy enforcement

### Story 2.7: Mode Lansia Accessibility Toggle

As a **user 60+ years old**,
I want **to enable Mode Lansia in settings**,
So that **I can use a simplified interface with larger fonts and fewer buttons**.

**Acceptance Criteria:**

**Given** I'm authenticated and on the Profile/Settings screen
**When** I see "Mode Lansia" toggle switch (prominent position, not buried)
**Then** I can tap the toggle to enable Mode Lansia
**And** My preference is saved to users table (mode_lansia boolean column)
**And** UI instantly transitions to Mode Lansia layout (no app restart required)
**And** Font size increases to 24pt minimum (3x larger than standard 16pt)
**And** Navigation shows only 3 buttons: [LIHAT SALDO] [SETOR SAMPAH] [TARIK UANG]
**And** High contrast color scheme is applied (WCAG AAA compliance)
**And** I can toggle back to standard mode anytime
**And** Preference persists across app restarts

### Story 2.8: User Login Flow

As a **returning user**,
I want **to login with my Google account or phone number**,
So that **I can access my account and data**.

**Acceptance Criteria:**

**Given** I previously registered and I'm on the login screen
**When** I tap "Login with Google" and select my account
**Then** Supabase Auth validates my Google session
**And** My user data is loaded from users table into authStore
**And** My session is restored in AsyncStorage
**And** I'm redirected to Home screen (bypassing onboarding)
**And** When I tap "Login with Phone" and enter my phone number
**Then** OTP is sent, I verify, and I'm logged in successfully
**And** If session exists in AsyncStorage on app launch, I'm auto-logged in (no login screen)
**And** NFR-S3: Authentication Security 99.99% maintained

---

## Epic 3: Core Transaction Workflow (Nasabah → Operator)

**User Outcome:** Nasabah can deposit waste with photo documentation, Operators can process transactions via QR scan + weight entry, and balances update in real-time with dual ledger (Rupiah + kg).

**Goal:** The CORE VALUE LOOP - Nasabah setor sampah, Operator confirm, balance update instantly. This is the MVP heart.

**FRs Covered:** FR8, FR9, FR10, FR11, FR12, FR13, FR14, FR15

### Story 3.1: Nasabah Request Deposit with Photo Upload

As a **nasabah**,
I want **to request a waste deposit transaction by uploading a photo of my waste**,
So that **I can document what I'm depositing and initiate the transaction**.

**Acceptance Criteria:**

**Given** I'm authenticated and on the Home screen
**When** I tap the large "Setor Sampah" button
**Then** I'm redirected to the transaction request screen
**And** I can tap "Ambil Foto" to launch the camera (expo-image-picker)
**And** I can take a photo of my sorted waste bags
**And** Photo is compressed to max 500KB (from original ~2MB)
**And** Photo preview is shown with "Gunakan Foto" or "Foto Ulang" options
**And** After confirmation, photo is uploaded to Supabase Storage (bucket: transaction-photos)
**And** Photo URL is stored in transactionStore.currentRequest.photoUrl
**And** I can proceed to waste type selection screen

### Story 3.2: Waste Type Selection

As a **nasabah**,
I want **to select waste types from predefined categories**,
So that **the operator knows what type of waste I'm depositing**.

**Acceptance Criteria:**

**Given** I uploaded a photo in Story 3.1
**When** I'm on the waste type selection screen
**Then** I see 4 waste type options with icons: Plastik PET, Plastik HDPE, Kertas, Logam, Kaca
**And** I can select one or multiple waste types (multi-select checkboxes)
**And** Each selected type shows an input field for estimated weight in kg
**And** I can enter estimated weight for each type (e.g., "Plastik PET: 2.5 kg")
**And** My selections are saved to transactionStore.currentRequest.wasteTypes array
**And** I can proceed to pickup scheduling screen

### Story 3.3: Pickup Time Window Scheduling

As a **nasabah**,
I want **to schedule a pickup time window (2-hour slots)**,
So that **the operator knows when to collect my waste**.

**Acceptance Criteria:**

**Given** I selected waste types in Story 3.2
**When** I'm on the pickup scheduling screen
**Then** I see available time slots for today and tomorrow (2-hour windows: 08:00-10:00, 10:00-12:00, 13:00-15:00, 15:00-17:00)
**And** I can select one time slot by tapping the radio button
**And** My selection is saved to transactionStore.currentRequest.pickupTimeSlot
**And** I see a summary: Photo, Waste types, Estimated weight, Pickup time
**And** I can tap "Konfirmasi Permintaan" to submit the transaction request
**And** Transaction request is saved to transactions table with status='pending'
**And** Operator receives push notification: "Permintaan baru dari [Nasabah Name]"
**And** I see a confirmation screen: "Permintaan berhasil! Operator akan datang pada [pickup time]"

### Story 3.4: Nasabah QR Code Generation

As a **nasabah**,
I want **to have a unique QR code for my identity**,
So that **the operator can quickly identify me during transaction**.

**Acceptance Criteria:**

**Given** I'm authenticated and have a user account
**When** I navigate to Profile screen
**Then** I see my unique QR code displayed prominently
**And** QR code contains my user_id encoded
**And** I can tap "Perbesar QR" to show full-screen QR code for scanning
**And** QR code is also accessible from Home screen via "Tampilkan QR Saya" button
**And** Operator can scan this QR code using their barcode scanner to identify me

### Story 3.5: Operator QR Code Scanning

As an **operator**,
I want **to scan nasabah's QR code to identify them**,
So that **I can quickly start processing their transaction**.

**Acceptance Criteria:**

**Given** I'm an authenticated operator
**When** I tap "Proses Transaksi" on my Operator Dashboard
**Then** Camera view opens with barcode scanner overlay (expo-barcode-scanner)
**And** I point camera at nasabah's QR code from their phone
**And** QR code is scanned and decoded to extract user_id
**And** Nasabah's profile loads: Name, pending transaction requests
**And** I see the pending transaction details: Photo, Waste types, Estimated weight
**And** I can proceed to weight measurement screen

### Story 3.6: Operator Weight Measurement and Confirmation

As an **operator**,
I want **to enter actual weight measurements and confirm the transaction**,
So that **the nasabah's balance is updated accurately**.

**Acceptance Criteria:**

**Given** I scanned nasabah's QR code in Story 3.5
**When** I'm on the weight measurement screen
**Then** I see the pending transaction details (waste types selected by nasabah)
**And** For each waste type, I can enter actual weight measured on my timbangan
**And** I can edit waste types if nasabah estimation was incorrect
**And** I tap "Konfirmasi Transaksi" after weighing all waste
**And** Transaction status is updated to 'completed' in transactions table
**And** Transaction record stores: user_id, operator_id, waste_type, weight_kg, photo_url, timestamp
**And** I see a confirmation screen: "Transaksi berhasil! Rp [total] telah ditambahkan ke saldo nasabah"

### Story 3.7: Dynamic Pricing Calculation Engine

As a **system**,
I want **to calculate transaction value based on admin-configured price table (kg × price/kg)**,
So that **nasabah receives accurate payment for their waste**.

**Acceptance Criteria:**

**Given** Operator confirmed transaction in Story 3.6 with actual weight measurements
**When** Transaction is being processed
**Then** System fetches current price_per_kg from prices table for each waste type and region
**And** For each waste type: transaction_value = weight_kg × price_per_kg
**And** Total transaction value is calculated: sum of all waste type values
**And** Calculation is stored in transactions.price_per_kg and transactions.total_rupiah columns
**And** Prices are locked at transaction timestamp (not retroactively changed)
**And** If price data is missing for a waste type, system shows error: "Harga belum dikonfigurasi untuk [waste_type]"
**And** NFR-P1: Calculation completes in <1 second

### Story 3.8: Real-Time Dual Ledger Balance Updates

As a **nasabah**,
I want **my balance (Rupiah + kg) to update in real-time when operator confirms transaction**,
So that **I see my earnings immediately**.

**Acceptance Criteria:**

**Given** Operator confirmed transaction in Story 3.6
**When** Transaction is completed and pricing calculated in Story 3.7
**Then** balances table is updated atomically for the nasabah:
**And** rupiah_balance += transaction.total_rupiah
**And** kg_balance += transaction.weight_kg
**And** Balance update triggers Supabase Realtime event
**And** Nasabah's balanceStore is updated via Realtime subscription (<5 seconds)
**And** Nasabah's Home screen balance display refreshes automatically
**And** NFR-S1: Transaction Accuracy 100% (dual-write pattern, immutable audit log)
**And** NFR-S2: Data Integrity 100% (atomic update, balance = sum of all transactions)
**And** NFR-P5: Real-time sync completes in <5 seconds

### Story 3.9: Transaction Confirmation Notifications

As a **nasabah**,
I want **to receive instant notification when my transaction is completed**,
So that **I'm informed immediately about my earnings**.

**Acceptance Criteria:**

**Given** Operator completed transaction in Story 3.6 and balance updated in Story 3.8
**When** Transaction status changes to 'completed'
**Then** Push notification is sent to nasabah's device via Firebase Cloud Messaging
**And** Notification title: "Transaksi berhasil!"
**And** Notification body: "+Rp [total_rupiah] ([weight_kg] kg). Impact: [co2_prevented] kg CO₂ dicegah! 🌱"
**And** Notification is delivered within 5 seconds of transaction completion
**And** Tapping notification opens Transaction History screen
**And** If nasabah has Mode Lansia enabled, SMS is also sent as fallback
**And** NFR-R2: 95% push notification delivery rate

### Story 3.10: Transaction History with Photos and Breakdowns

As a **nasabah**,
I want **to view my complete transaction history with photos, timestamps, and breakdowns**,
So that **I can track all my deposits and verify accuracy**.

**Acceptance Criteria:**

**Given** I have completed at least one transaction
**When** I navigate to "Riwayat Transaksi" screen from bottom tab navigation
**Then** I see a list of all my transactions sorted by date (newest first)
**And** Each transaction card shows: Date, Time, Waste type(s), Weight (kg), Total (Rupiah), Photo thumbnail, Operator name
**And** I can tap a transaction card to view full details
**And** Detail view shows: Full-size photo, Breakdown by waste type (Plastik PET: 2.5 kg × Rp 3,500/kg = Rp 8,750), Environmental impact (CO₂ prevented), Operator info, Timestamp
**And** I can filter transactions by date range (This week, This month, All time)
**And** I can search transactions by waste type or operator name
**And** Transaction photos are loaded from Supabase Storage with CDN caching

---

## Epic 4: Dashboard & Impact Visualization

**User Outcome:** Nasabah can view balance (dual ledger Rupiah + kg), environmental impact metrics (CO₂, trees equivalent), and export shareable achievement cards for social media.

**Goal:** Transform transaction data into meaningful impact visualization yang trigger aha moment: "My waste has value!"

**FRs Covered:** FR16, FR17, FR18, FR19, FR20

### Story 4.1: Dual Ledger Balance Display

As a **nasabah**,
I want **to view my balance in dual ledger format (Rupiah + kg waste)**,
So that **I understand both my financial earnings and environmental contribution**.

**Acceptance Criteria:**

**Given** I have completed at least one transaction
**When** I'm on the Home screen
**Then** I see a prominent balance card showing Rupiah balance (large font, primary display)
**And** I see kg waste balance displayed below (secondary, smaller font)
**And** Both values sync from balanceStore in real-time
**And** Progressive UX Level 1: Simple view only shows total Rupiah and total kg
**And** Balances update automatically when new transactions complete

### Story 4.2: Environmental Impact Metrics Calculation

As a **nasabah**,
I want **to view environmental impact metrics (CO₂ prevented, trees equivalent)**,
So that **I see the tangible environmental value of my actions**.

**Acceptance Criteria:**

**Given** I have deposited waste and have kg_balance > 0
**When** I view the Home dashboard
**Then** Impact is calculated using formula: CO₂ prevented = waste_kg × 2.5
**And** Trees equivalent = CO₂ prevented / 20
**And** Impact displayed with green tree icon: "218 kg CO₂ dicegah = 10.9 pohon setara"
**And** Impact metrics update in real-time when balance changes
**And** Progressive UX Level 1: Shows current month impact only

### Story 4.3: Progressive UX Level System Implementation

As a **nasabah**,
I want **to unlock higher UX levels (Level 1 → 2 → 3) based on my transaction count**,
So that **I get more features as I become a power user**.

**Acceptance Criteria:**

**Given** I'm a nasabah with transaction history
**When** I have 0-2 transactions completed
**Then** I see Level 1 (Simple): Saldo, Total Sampah, Impact, [Setor] [Tarik] buttons only
**And** When I have 3-9 transactions completed
**Then** I automatically unlock Level 2 (Detailed): Breakdown by type, transaction history, impact metrics, shareable card
**And** When I have 10+ transactions completed
**Then** I automatically unlock Level 3 (Power User): Advanced analytics, leaderboards, squad management
**And** UX level stored in uiStore.progressiveLevel and users.ui_level column
**And** NFR-U2: System tracks that 60% of users unlock Level 2 within first month

### Story 4.4: Progressive UX Unlock Triggers and Celebrations

As a **nasabah**,
I want **to see celebration animations when I unlock new UX levels**,
So that **the progression feels rewarding and motivates continued use**.

**Acceptance Criteria:**

**Given** I just completed my 3rd transaction
**When** Transaction confirmation completes
**Then** Celebration modal appears with animation: "Level Up! Anda sekarang Hero Level 2!"
**And** Modal shows preview of new features: "Akses riwayat transaksi lengkap, statistik detail, dan kartu pencapaian"
**And** I can tap "Jelajahi Fitur Baru" to see tutorial
**And** When I complete my 10th transaction
**Then** Level 3 celebration modal appears with advanced features preview
**And** Celebration includes confetti animation and badge icon

### Story 4.5: Shareable Achievement Cards (PNG Export)

As a **nasabah**,
I want **to export shareable achievement cards as PNG images for Instagram**,
So that **I can share my impact and drive viral growth**.

**Acceptance Criteria:**

**Given** I'm in Level 2+ (unlocked after 3 transactions)
**When** I tap "Bagikan Pencapaian" button on dashboard
**Then** System generates PNG card (1080x1920px Instagram story format) with:
**And** My stats: Total kg deposited, Total Rupiah earned, CO₂ prevented (with tree icon)
**And** Beautiful gradient design (Emerald Green #10B981 theme)
**And** Social proof text: "Join me on @BankSampahApp 🌱"
**And** Card exports to device camera roll automatically
**And** Share sheet opens with Instagram/WhatsApp/Facebook options
**And** I can tap "Simpan Saja" to save without sharing

---

## Epic 5: Gamification & Social Engagement

**User Outcome:** Nasabah can earn badges, maintain streaks, compete on leaderboards, join squads, and earn referral bonuses to build daily recycling habits.

**Goal:** Drive 65% MAU/DAU ratio through gamification that creates habit formation + social competition.

**FRs Covered:** FR23, FR24, FR25, FR26, FR27, FR28, FR29, FR30

### Story 5.1: Badge System with Milestone Achievements

As a **nasabah**,
I want **to earn badges for milestones (First Hero, Week Warrior, Month Champion)**,
So that **my achievements are recognized and displayed**.

**Acceptance Criteria:**

**Given** I complete certain milestones
**When** Milestone is reached
**Then** Badge is unlocked and stored in gamificationStore.badges array
**And** Badge definitions: First Hero (1st transaction), Week Warrior (7-day streak), Month Champion (30 transactions in month), Eco Legend (100kg total waste)
**And** Badge unlock triggers push notification: "🎉 Badge baru: Week Warrior!"
**And** Celebration modal shows badge with unlock date
**And** All my badges displayed on Profile screen with unlock dates
**And** Locked badges shown as grayed out with unlock requirements

### Story 5.2: Daily and Weekly Streak Tracking

As a **nasabah**,
I want **to maintain daily/weekly streaks with visual counter**,
So that **I'm motivated to deposit waste consistently**.

**Acceptance Criteria:**

**Given** I have completed transactions on consecutive days
**When** I view Home dashboard
**Then** Streak counter shows current streak: "7 hari berturut-turut 🔥"
**And** Streak increments if transaction completed within 24h of last transaction timestamp
**And** Streak resets to 0 if >24h gap between transactions
**And** Visual flame icon intensity increases with streak length (small flame 1-6 days, large flame 7+ days)
**And** Loss aversion notification sent at 8 PM daily: "Don't break your 7-day streak! Setor sampah hari ini?"
**And** Streak data stored in gamificationStore.currentStreak and users.streak_count

### Story 5.3: Neighborhood and Jakarta-Wide Leaderboards

As a **nasabah**,
I want **to view leaderboards (neighborhood ranking and Jakarta-wide ranking)**,
So that **I can compete with others and feel pride in my rank**.

**Acceptance Criteria:**

**Given** I'm in Progressive UX Level 3 (10+ transactions)
**When** I navigate to Leaderboards tab
**Then** I see two leaderboard views: Neighborhood (top 10 in my kelurahan), Jakarta-wide (top 100 across all kelurahan)
**And** Rankings based on total kg deposited this month (resets monthly)
**And** My rank is highlighted with green background
**And** Ranking text: "Anda #47 dari 2,847 heroes di Jakarta Selatan!"
**And** Leaderboard updates in real-time when transactions complete
**And** Each leaderboard entry shows: Rank, Name, kg deposited, Badge icons

### Story 5.4: Leaderboard Privacy Opt-Out

As a **nasabah**,
I want **to opt-out of public leaderboard visibility**,
So that **my privacy is protected if I prefer anonymity**.

**Acceptance Criteria:**

**Given** I'm on Profile/Settings screen
**When** I see "Tampilkan di Leaderboard Publik" toggle
**Then** I can disable the toggle to opt-out
**And** If disabled, my name shows as "Anonymous Hero" on public leaderboards
**And** My rank and stats still visible to me in private view
**And** My opt-out preference saved to users.leaderboard_visible boolean column
**And** Default setting: enabled (visible on leaderboards)

### Story 5.5: Squad Creation and Team Competitions

As a **nasabah**,
I want **to create or join squads for team competitions**,
So that **I can collaborate with friends toward collective goals**.

**Acceptance Criteria:**

**Given** I'm in Progressive UX Level 3
**When** I tap "Buat Squad" button
**Then** I can enter squad name (max 20 characters)
**And** System generates unique 6-digit invite code (e.g., "BSQ472")
**And** I can share invite code via share sheet
**And** Friends can join by entering code in "Gabung Squad" screen
**And** Squad members see collective stats: Total kg (sum of all members), Total members count, Squad rank (compared to other squads)
**And** Weekly squad challenge displays: "Deposit 50kg as a team this week = bonus badge for all members"
**And** Squad data stored in squads table and squad_members table

### Story 5.6: Referral Code System with Bonus Tracking

As a **nasabah**,
I want **to generate and share referral codes with bonus tracking**,
So that **I earn rewards for bringing friends to the platform**.

**Acceptance Criteria:**

**Given** I'm on Profile screen
**When** I see "Ajak Teman" section
**Then** My unique referral code is displayed: "IRAH2024" (derived from name + year)
**And** "Bagikan Kode" button opens share sheet with message: "Join BankSampah dengan kode IRAH2024 dan kita berdua dapat bonus Rp 20,000! 🌱"
**And** When friend signs up and enters my referral code during onboarding
**Then** I earn Rp 20,000 bonus (auto-added to rupiah_balance)
**And** Friend also earns Rp 20,000 bonus (signup incentive)
**And** Referral count displayed: "12 teman diajak"
**And** Referral history shows: Friend name, Date joined, Bonus earned

### Story 5.7: XP and Leveling Progression System

As a **nasabah**,
I want **to see XP/leveling progression (Beginner → Apprentice → Hero → Legend)**,
So that **I have long-term progression goals**.

**Acceptance Criteria:**

**Given** I complete transactions
**When** Transaction is confirmed
**Then** I earn 10 XP per transaction completed
**And** XP levels defined: Beginner (0-99 XP), Apprentice (100-499 XP), Hero (500-999 XP), Legend (1000+ XP)
**And** Progress bar shows: "485 / 500 XP to Hero level"
**And** Level title displayed on Profile with colored badge: Beginner (gray), Apprentice (blue), Hero (green), Legend (gold)
**And** Level up triggers celebration modal: "Congratulations! Anda sekarang Hero level! 🌟"
**And** XP stored in gamificationStore.xp and users.xp_total

### Story 5.8: Auto-Generated Instagram Story Templates

As a **nasabah**,
I want **system to auto-generate Instagram story templates with my stats**,
So that **sharing is frictionless and drives viral growth**.

**Acceptance Criteria:**

**Given** I reach milestone achievements (first transaction, 10th transaction, 50kg total)
**When** Milestone is reached
**Then** System auto-generates Instagram story template (1080x1920px) with:
**And** Aesthetic gradient design (Emerald Green to Teal gradient)
**And** My stats: "[X] kg waste diverted, Rp [Y] earned, [Z] kg CO₂ prevented"
**And** CTA: "Join me @BankSampahApp 🌱"
**And** Template saved to camera roll automatically
**And** "Share to Instagram" direct link button (deep link to Instagram app)
**And** I can tap "Nanti Saja" to dismiss without sharing

---

## Epic 6: Financial Operations (Withdrawals)

**User Outcome:** Nasabah can request cash withdrawals (minimum Rp 50K), Operators can approve and process withdrawals, and digital receipts are generated for audit trails.

**Goal:** Enable financial empowerment - nasabah dapat tarik uang yang sudah mereka kumpulkan.

**FRs Covered:** FR31, FR32, FR33, FR34, FR35

### Story 6.1: Nasabah Withdrawal Request

As a **nasabah**,
I want **to request cash withdrawal with minimum Rp 50K threshold**,
So that **I can access my earnings**.

**Acceptance Criteria:**

**Given** I have rupiah_balance >= Rp 50,000
**When** I tap "Tarik Uang" button from Home screen
**Then** Withdrawal form opens with current balance displayed
**And** I can enter withdrawal amount
**And** Validation: Minimum Rp 50,000, Maximum = current rupiah_balance
**And** If amount < Rp 50K, error message: "Penarikan minimum Rp 50,000"
**And** If amount > balance, error message: "Saldo tidak cukup"
**And** Confirmation screen shows: Amount, Estimated processing time (24 hours), Bank sampah unit for pickup
**And** Tap "Konfirmasi Penarikan" saves request to withdrawals table with status='pending'
**And** Push notification sent to operator: "Permintaan penarikan baru: [Nasabah Name] Rp [amount]"
**And** Success message: "Permintaan penarikan Rp [amount] akan diproses dalam 24 jam"

### Story 6.2: Operator Pending Withdrawal Queue

As an **operator**,
I want **to view pending withdrawal requests queue**,
So that **I can process withdrawals efficiently**.

**Acceptance Criteria:**

**Given** I'm authenticated as operator
**When** I open Operator Dashboard
**Then** I see "Permintaan Penarikan" section with pending requests list
**And** Each request shows: Nasabah name, Amount, Request timestamp, Days pending, "Proses" button
**And** Requests sorted by oldest first (FIFO)
**And** Badge count on section header: "Permintaan Penarikan (3)"
**And** Tapping "Proses" opens withdrawal processing screen with nasabah details

### Story 6.3: Operator Withdrawal Approval and Payment

As an **operator**,
I want **to approve withdrawals and mark as paid**,
So that **nasabah receives their cash and system records the payment**.

**Acceptance Criteria:**

**Given** I selected a pending withdrawal request
**When** I'm on withdrawal processing screen
**Then** I tap "Scan QR Nasabah" to verify identity
**And** QR scan confirms nasabah identity matches withdrawal request
**And** I see withdrawal details: Amount requested, Current balance, Transaction history
**And** I count cash and enter amount given (validation: must match requested amount exactly)
**And** I tap "Tandai Lunas" to complete withdrawal
**And** Withdrawal status updated to 'completed' in withdrawals table
**And** Nasabah's rupiah_balance deducted atomically (balance -= withdrawal_amount)
**And** Digital receipt auto-generated with transaction_id
**And** Push notification to nasabah: "Penarikan Rp [amount] berhasil! Saldo tersisa: Rp [new_balance]"
**And** Confirmation screen: "Penarikan berhasil diproses"

### Story 6.4: Digital Receipt Generation

As a **nasabah**,
I want **to receive digital receipt for withdrawal transactions**,
So that **I have proof of payment for audit trail**.

**Acceptance Criteria:**

**Given** My withdrawal was completed by operator
**When** I navigate to "Riwayat Penarikan" screen
**Then** I see list of all withdrawal transactions (completed + pending)
**And** Each completed withdrawal has "Lihat Struk" button
**And** Receipt displays: Transaction ID (unique), Date/time (timestamp), Amount withdrawn (Rp), Operator name, Remaining balance (after withdrawal), QR code (for verification)
**And** I can tap "Bagikan PDF" to export receipt as PDF
**And** Receipt stored in withdrawals table with receipt_url

### Story 6.5: Operator Commission Tracking

As an **operator**,
I want **to track commission earnings from transactions and withdrawals**,
So that **I understand my revenue from the platform**.

**Acceptance Criteria:**

**Given** I'm on Operator Dashboard
**When** I view "Komisi Anda" card
**Then** I see this month's commission total: "Rp 125,000"
**And** Commission rate displayed: "5% dari GMV"
**And** Breakdown shows: Transactions commission (5% of sum(transactions.total_rupiah)), Withdrawals commission (Rp 1,000 per withdrawal processed)
**And** Commission auto-calculated: sum(transactions.total_rupiah × 0.05) for my unit_id
**And** Historical view: "Komisi 3 bulan terakhir" trend chart
**And** Commission payable monthly (paid by admin via bank transfer)

---

## Epic 7: Operator Business Intelligence Dashboard

**User Outcome:** Operators can access business intelligence dashboard with daily/weekly/monthly stats, revenue forecasting, commission tracking, and nasabah analytics to optimize operations.

**Goal:** Transform Pak Budi from manual paperwork hell (2 hours) to digital entrepreneur (30 minutes + 2x revenue).

**FRs Covered:** FR21, FR22, FR36, FR37, FR38, FR39, FR40, FR41

### Story 7.1: Operator Business Intelligence Dashboard (Retool)

As an **operator**,
I want **to access business intelligence dashboard with daily/weekly/monthly stats**,
So that **I can monitor my operations and make data-driven decisions**.

**Acceptance Criteria:**

**Given** I'm authenticated as operator
**When** I open Retool admin dashboard (web interface)
**Then** I see "Today's Operations" card with: Transactions count (25), Total kg processed (67.5), Total Rupiah disbursed (Rp 225,000), Active nasabah count (38)
**And** I can toggle views: Today, This Week, This Month
**And** Weekly view shows trend chart: kg processed per day (line chart)
**And** Monthly view shows: Total transactions (120), Total GMV (Rp 1,200,000), Average transaction value (Rp 10,000)
**And** Revenue forecast displayed: "Estimated Rp 1.2M this month based on current 30-day pattern"

### Story 7.2: Revenue Forecasting and Commission Analytics

As an **operator**,
I want **to access revenue forecasting and commission tracking**,
So that **I can plan my cash flow and understand earnings potential**.

**Acceptance Criteria:**

**Given** I'm on Operator Dashboard (Retool)
**When** I view "Revenue Insights" section
**Then** Projected monthly revenue shown: "Rp 1,200,000 (based on last 30 days trend)"
**And** Commission breakdown: "Your 5% commission = Rp 60,000"
**And** Top 10 contributors leaderboard: Nasabah name, kg deposited this month, contact info
**And** I can click "Hubungi" to send reminder notification to inactive nasabah
**And** Export button: "Download CSV" for monthly accounting report

### Story 7.3: Real-Time Inventory Levels by Waste Type

As an **operator**,
I want **to view real-time inventory levels by waste type**,
So that **I know when to contact buyers for pickup**.

**Acceptance Criteria:**

**Given** I'm on Operator Dashboard
**When** I view "Inventory" card
**Then** I see current inventory by waste type: Plastik PET (125 kg), Plastik HDPE (45 kg), Kertas (78 kg), Logam (34 kg), Kaca (12 kg)
**And** Color-coded indicators: Red (>200kg = urgent sale needed), Yellow (100-200kg = plan sale soon), Green (<100kg = accumulating)
**And** Last sale date displayed: "Plastik PET terakhir dijual 5 hari lalu"
**And** Inventory updates in real-time as transactions complete
**And** Alert notification when any waste type >200kg: "Inventory Plastik PET penuh (215kg). Hubungi pembeli segera!"

### Story 7.4: Training Video Library

As an **operator**,
I want **to access training video library**,
So that **I can learn best practices and troubleshoot issues**.

**Acceptance Criteria:**

**Given** I'm on Operator Dashboard
**When** I tap "Pelatihan" tab
**Then** I see 5 training videos with thumbnails:
**And** Video 1: "Setup Operator Profile" (6 minutes)
**And** Video 2: "Process Transactions" (8 minutes)
**And** Video 3: "Handle Withdrawals" (5 minutes)
**And** Video 4: "Read Dashboard Reports" (10 minutes)
**And** Video 5: "Contact Support" (4 minutes)
**And** Videos hosted on YouTube, embedded in app (no external redirect)
**And** Playback controls: Play/pause, speed adjustment (0.5x, 1x, 1.5x, 2x)
**And** Progress tracked: Checkmark shows completed videos

### Story 7.5: Waste Type Breakdown Analytics

As an **operator**,
I want **to view waste type breakdown analytics**,
So that **I understand which waste types are most profitable**.

**Acceptance Criteria:**

**Given** I'm on Operator Dashboard Analytics tab
**When** I view "Waste Type Analytics"
**Then** Pie chart shows waste type distribution by kg: Plastik PET (45%), Kertas (30%), Logam (15%), Kaca (10%)
**And** Bar chart shows revenue by waste type: Plastik PET (Rp 540K), Kertas (Rp 360K), etc.
**And** Top waste type highlighted: "Plastik PET = 45% of your revenue this month"
**And** Trend over time: Week-by-week comparison chart
**And** Insight text: "Plastik PET naik 15% minggu ini. Demand tinggi!"

### Story 7.6: Active vs Dormant Nasabah Metrics

As an **operator**,
I want **to track active vs dormant nasabah metrics**,
So that **I can re-engage inactive users**.

**Acceptance Criteria:**

**Given** I'm on Operator Dashboard
**When** I view "Nasabah Activity" section
**Then** I see summary: Total registered (150), Active this month (98), Dormant >30 days (52)
**And** Active rate percentage: "65% active rate" with trend (up/down from last month)
**And** List of dormant nasabah with last transaction date
**And** Each dormant nasabah has "Kirim Reminder" button
**And** Tapping reminder sends push notification: "Kami rindu sampahmu! 🌱 Yuk setor lagi dan raih badge baru!"
**And** Active rate trend chart: 6-month view showing monthly active percentage

---

## Epic 8: Notification & Communication System

**User Outcome:** Users receive timely push notifications (transaction confirmations, streak reminders, achievement unlocks, price alerts) with SMS fallback for Mode Lansia users, respecting frequency limits.

**Goal:** Keep users engaged daily through intelligent notification orchestration (max 3/day, context-aware triggers).

**FRs Covered:** FR42, FR43, FR44, FR45

### Story 8.1: Push Notification Infrastructure Setup

As a **developer**,
I want **to integrate Firebase Cloud Messaging for push notifications**,
So that **all notification features can be built on reliable infrastructure**.

**Acceptance Criteria:**

**Given** Expo project has expo-notifications installed from Epic 1
**When** I configure Firebase FCM in Firebase Console
**Then** Firebase project created with FCM enabled
**And** google-services.json (Android) and GoogleService-Info.plist (iOS) downloaded and added to project
**And** FCM configured in app.json with Firebase credentials
**And** Device token registration implemented on user signup (stored in users.fcm_token)
**And** Background notification handling implemented (app can receive notifications when closed)
**And** Notification permissions requested on first app launch
**And** NFR-R2: Infrastructure supports 95% delivery rate target

### Story 8.2: Transaction, Streak, and Achievement Notifications

As a **nasabah**,
I want **to receive push notifications for transaction confirmations, streak reminders, and achievement unlocks**,
So that **I stay engaged with the app daily**.

**Acceptance Criteria:**

**Given** I'm a registered nasabah with notifications enabled
**When** Transaction is completed by operator
**Then** I receive push notification (instant): "Transaksi berhasil! +Rp 25,000 (7.5kg). Impact: 18.75kg CO₂ dicegah! 🌱"
**And** When it's 8 PM daily and I haven't transacted today
**Then** Streak reminder notification sent: "Don't break your 7-day streak! Setor sampah hari ini? 🔥"
**And** When I unlock a badge or level up
**Then** Achievement notification (instant): "🎉 Badge baru: Week Warrior! Anda hebat!"
**And** Tapping notification opens relevant screen (transaction history, home, profile)
**And** Notifications appear in system notification tray

### Story 8.3: Price Alert Notifications

As a **nasabah**,
I want **to receive price alert notifications when commodity prices change significantly (>10%)**,
So that **I know the best time to deposit high-value waste**.

**Acceptance Criteria:**

**Given** Admin updates price in prices table
**When** Price change delta >10% for any waste type
**Then** Price alert notification sent to all nasabah: "Harga Plastik PET naik 15%! Rp 3,000 → Rp 3,500/kg. Best time to setor! 📈"
**And** Alert sent only once per price change (not repeated)
**And** Frequency capped at 1 price alert per day maximum
**And** Tapping notification opens transaction request screen with highlighted waste type
**And** If price drops >10%, notification: "Harga Plastik PET turun 12%. Tunggu harga naik lagi!"

### Story 8.4: Notification Frequency Limiting and SMS Fallback

As a **nasabah**,
I want **system to respect frequency limits (max 3/day) and use SMS for Mode Lansia**,
So that **I'm not spammed and lansia users receive reliable notifications**.

**Acceptance Criteria:**

**Given** Multiple notification triggers occur in a day
**When** System prepares to send notification
**Then** Frequency limiter checks: max 3 push notifications per user per day
**And** Priority queue determines which to send: Transaction (highest priority) > Achievement > Streak reminder > Price alert (lowest priority)
**And** If limit reached, lower priority notifications queued for next day
**And** If user has Mode Lansia enabled (users.mode_lansia = true)
**Then** SMS sent in parallel to push notification (via Twilio API)
**And** SMS format concise: "BankSampah: Transaksi +Rp25K. Saldo Rp140K. Terima kasih!"
**And** SMS limited to critical notifications only: Transaction confirmations, Withdrawal approvals

---

## Epic 9: Accessibility & Mode Lansia

**User Outcome:** Users 60+ years old can use simplified Mode Lansia interface (3-button UI, 24pt font, voice guidance, SMS notifications) to access all core features with high accessibility compliance.

**Goal:** Digital inclusion for lansia demographic (Bapak Joko journey) - prove that "Lansia bisa digital!"

**FRs Covered:** FR7 (Mode Lansia implementation), NFR-A1 (Mode Lansia critical), NFR-A2 (WCAG 2.1 AA)

### Story 9.1: Mode Lansia 3-Button Simplified UI

As a **lansia user (60+)**,
I want **to use 3-button simplified UI ([LIHAT SALDO] [SETOR SAMPAH] [TARIK UANG])**,
So that **I can access core features without complexity**.

**Acceptance Criteria:**

**Given** I enabled Mode Lansia from Settings (Story 2.7)
**When** I navigate the app
**Then** Bottom tab navigation is replaced with 3 large vertical buttons (full screen height divided by 3)
**And** Button 1: [LIHAT SALDO] (green background) - navigates to Balance screen
**And** Button 2: [SETOR SAMPAH] (blue background) - navigates to Transaction request screen
**And** Button 3: [TARIK UANG] (orange background) - navigates to Withdrawal request screen
**And** Each button minimum 88pt height (double standard 44pt tap target for easier tapping)
**And** High contrast: Dark colored buttons on white background (no gradients)
**And** No nested menus or secondary navigation (direct navigation only)
**And** Large icons accompany button text (wallet icon, trash icon, money icon)

### Story 9.2: 24pt Font Size and High Contrast Theme

As a **lansia user**,
I want **24pt minimum font size and WCAG AAA high contrast colors**,
So that **I can read all text easily despite visual impairment**.

**Acceptance Criteria:**

**Given** Mode Lansia is enabled
**When** UI renders
**Then** All body text uses 24pt minimum font size (3x standard 16pt)
**And** Headings use 32pt font size
**And** Button text uses 28pt font size
**And** Color contrast ratio ≥7:1 for all text (WCAG AAA compliance)
**And** No gradients or decorative low-contrast design elements
**And** All icons accompanied by text labels (no icon-only buttons)
**And** Background: Pure white (#FFFFFF), Text: Dark blue (#003366)

### Story 9.3: Voice Guidance System (Text-to-Speech)

As a **lansia user**,
I want **voice guidance to read screen content aloud**,
So that **I can navigate without reading text**.

**Acceptance Criteria:**

**Given** Mode Lansia is enabled
**When** I tap "Suara Panduan" toggle in Settings
**Then** Text-to-speech (TTS) is activated using device's TTS engine
**And** TTS reads aloud: Button labels when focused (e.g., "Lihat Saldo"), Screen titles on navigation (e.g., "Beranda"), Transaction amounts on confirmation (e.g., "Rp 25,000 telah ditambahkan")
**And** Indonesian language TTS used (Google TTS API)
**And** Volume control accessible in Settings: Low, Medium, High
**And** Speech rate adjustable: Normal (default), Slow
**And** I can tap any button to hear it read aloud before executing action

### Story 9.4: WCAG 2.1 AA Compliance for Standard Interface

As a **developer**,
I want **to ensure standard interface meets WCAG 2.1 Level AA compliance**,
So that **users with disabilities can access the app**.

**Acceptance Criteria:**

**Given** App is in standard mode (non-Lansia)
**When** Accessibility audit is performed
**Then** All UI components meet WCAG 2.1 Level AA standards:
**And** Color contrast ratio ≥4.5:1 for normal text (≥3:1 for large text)
**And** Touch targets minimum 44x44pt for all interactive elements
**And** Semantic labels for screen readers (accessibility labels on all buttons, inputs)
**And** Keyboard navigation support (external keyboard can navigate all screens)
**And** Focus indicators visible (blue outline on focused elements)
**And** Alt text for all images and icons
**And** Tested with iOS VoiceOver and Android TalkBack (all screens navigable)
**And** Form inputs have proper labels and error messages announced by screen readers

---

## Epic 10: Production Deployment & Monitoring

**User Outcome:** Developers can deploy the app to App Store and Google Play Store, monitor errors with Sentry, track user behavior with PostHog, and manage releases with EAS Build.

**Goal:** Ship MVP to production with proper monitoring, error tracking, and release management.

**FRs Covered:** Infrastructure requirements, NFR-C1 (PDP Indonesia), NFR-C2 (App Store Compliance), NFR-R1 (99.5% uptime), NFR-R3 (backup & recovery)

### Story 10.1: EAS Build Configuration and Profiles

As a **developer**,
I want **to configure EAS Build profiles (development, preview, production)**,
So that **I can build and distribute the app to different environments**.

**Acceptance Criteria:**

**Given** Expo project is complete with all features from Epic 1-9
**When** I configure eas.json
**Then** 3 build profiles defined: Development (internal testing, debug build), Preview (external beta testers, release build with staging environment), Production (App Store/Play Store, release build with production environment)
**And** Each profile specifies: Bundle identifier (com.banksampah.app), Environment variables (SUPABASE_URL, API keys), Build type (debug/release), Distribution method
**And** I can run `eas build --profile development` to build debug version
**And** I can run `eas build --profile production --platform all` to build iOS + Android release versions
**And** Build artifacts (.ipa for iOS, .aab for Android) generated successfully

### Story 10.2: App Store and Play Store Submission

As a **developer**,
I want **to submit the app to App Store and Google Play Store with compliance requirements**,
So that **users can download the app publicly**.

**Acceptance Criteria:**

**Given** Production builds generated from Story 10.1
**When** I prepare store listings
**Then** NFR-C2: Privacy policy URL added to app listing (hosted at banksampah.app/privacy)
**And** Data safety declarations completed (PDP Indonesia compliance): Data collected (email, phone, location, photos), Data usage (account creation, transactions), Data sharing (none with third parties)
**And** App screenshots created (5 per platform) with Indonesian captions showing: Onboarding flow, Transaction process, Dashboard, Leaderboards, Mode Lansia
**And** App description optimized for SEO with keywords: "bank sampah", "recycle", "waste management", "circular economy"
**And** Target Android 13+ API level (Play Store requirement)
**And** I can run `eas submit --platform ios` and `eas submit --platform android`
**And** Apps submitted to review and approved within 7-14 days
**And** Apps live and downloadable from stores

### Story 10.3: Sentry Error Tracking Integration

As a **developer**,
I want **to integrate Sentry for error tracking and crash reporting**,
So that **I can monitor production issues and fix bugs quickly**.

**Acceptance Criteria:**

**Given** App is deployed to production
**When** I configure Sentry SDK
**Then** @sentry/react-native package installed and initialized
**And** Sentry project created in Sentry.io dashboard
**And** Source maps uploaded automatically during EAS Build (for error stack traces)
**And** Error alerts configured: Email sent to developer when crash rate >5%
**And** Sentry dashboard shows: Crash-free users percentage, Error frequency chart, Affected users count, Top errors list
**And** Errors tagged with metadata: Release version (e.g., "1.0.0"), User role (nasabah/operator), Device type (iOS/Android), OS version
**And** Breadcrumbs captured: Navigation events, API calls, User actions

### Story 10.4: PostHog Analytics and Funnel Tracking

As a **developer**,
I want **to integrate PostHog for user behavior analytics and funnel analysis**,
So that **I can optimize conversion rates and user engagement**.

**Acceptance Criteria:**

**Given** App is deployed to production
**When** I configure PostHog SDK
**Then** posthog-react-native package installed and initialized
**And** PostHog project created in PostHog dashboard
**And** Key events tracked: Signup (method: Google/Phone), Onboarding completion (time: seconds), First transaction (time from signup), Balance view, Withdrawal request, Badge unlock, Level up, Leaderboard view
**And** Funnels configured: Signup → Onboarding → First transaction (target: 80% completion per NFR-U1)
**And** Cohort analysis for retention: Day 1, Day 7, Day 30 retention rates
**And** A/B testing framework ready: Feature flags for progressive UX unlock thresholds (test 3 tx vs 5 tx for Level 2)
**And** Dashboard accessible at posthog.banksampah.app

### Story 10.5: Production Monitoring and Backup Validation

As a **developer**,
I want **to validate uptime monitoring and backup recovery**,
So that **NFR-R1 (99.5% uptime) and NFR-R3 (backup recovery) are met**.

**Acceptance Criteria:**

**Given** App is live in production
**When** I configure monitoring
**Then** Supabase uptime monitoring dashboard accessed at dashboard.supabase.com
**And** Uptime tracked: 99.5%+ uptime month-to-date (NFR-R1 validated)
**And** Backup validation test performed: Restore Point-In-Time Recovery (PITR) from Supabase automatic backup
**And** Test recovery completes in <24 hours (NFR-R3 validated)
**And** Status page created: status.banksampah.app shows real-time service health (API, Database, Storage, Notifications)
**And** PDP Indonesia compliance checklist validated: User consent during onboarding ✓, Privacy policy accessible in-app ✓, Data encrypted at rest and in transit ✓, 72-hour breach notification process documented ✓, Data retention policy implemented (active accounts indefinite, deleted accounts purged within 30 days) ✓
**And** Incident response plan documented: On-call developer, escalation path, communication template
