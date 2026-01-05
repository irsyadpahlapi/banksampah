---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
inputDocuments:
  - "/Users/irsyadpahlapi/Documents/BankSampah/docs_engginering/prd.md"
  - "/Users/irsyadpahlapi/Documents/BankSampah/docs_engginering/analysis/product-brief-BankSampah-2025-12-24.md"
workflowType: "ux-design"
lastStep: 13
project_name: "BankSampah"
user_name: "TselTeam"
date: "2025-12-26"
---

# UX Design Specification - BankSampah

**Author:** TselTeam  
**Date:** 2025-12-26

---

## Executive Summary

### Project Vision

BankSampah adalah platform hybrid (SaaS + Mobile App + Web Admin) untuk transformasi digital pengelolaan sampah. Ini bukan sekadar digitalisasi buku tabungan, melainkan ekosistem lengkap yang mengintegrasikan: transaksi digital + ledger ganda (Rupiah & kg) + gamifikasi habit-forming + marketplace (Phase 2B) + traceability blockchain (Phase 3).

**Value Proposition Unik:** ZERO kompetitor memiliki kombinasi digital ledger + marketplace + gamification + blockchain traceability. Positioning blue ocean yang clear.

**Masalah yang Dipecahkan:**

- **Friction tinggi sistem manual** - Buku hilang, data chaos, harga tidak transparan
- **Opacity value** - Nasabah tidak memahami worth of waste, tidak ada identity transformation
- **Infrequent returns** - MAU/DAU saat ini 4% vs target 65%
- **Isolated impact** - Tidak ada social reinforcement, gamification tidak ada

### Target Users

Platform ini melayani 5 persona utama dengan kebutuhan dan tech literacy yang berbeda:

1. **Ibu Siti (40an, warm/assisted)**

   - Ibu rumah tangga yang membutuhkan onboarding personal dari operator
   - Comfort level: Perlu hand-holding di awal, gradual confidence building
   - Goal: Transaksi rutin sampah rumah tangga dengan mudah

2. **Rina (Gen Z, cold/self-service)**

   - Digital native yang menemukan app via Instagram
   - Ekspektasi: UX modern setara app marketplace/sosmed
   - Goal: Self-service complete, shareable social moments

3. **Bapak Joko (67 tahun, lansia hybrid)**

   - Pengguna lansia first-time smartphone
   - Needs: Mode Lansia dengan 3 tombol besar, SMS konfirmasi, voice guidance
   - Goal: Membuktikan lansia bisa digital, independence

4. **Pak Budi (operator)**

   - Mitra yang perlu transisi dari sistem manual (buku + kalkulator) ke digital
   - Needs: Efficient transaction processing, business intelligence dashboard
   - Goal: Operasional lebih efisien, data-driven decisions

5. **PT Maju Jaya (B2B buyer, Phase 2B)**
   - Perusahaan manufaktur yang butuh supply chain transparency
   - Needs: Bulk ordering, inventory visibility, traceability
   - Goal: Reliable supply dengan material origin clarity

### Key Design Challenges

**1. Progressive Disclosure (4 Levels)**

Sistem harus mendukung 4 level kompleksitas UI yang berbeda:

- **Level 1 Simple**: 2 metrik, 2 tombol (default untuk Ibu Siti)
- **Level 2 Detailed**: Transaction history + impact breakdown (unlock after 3 transactions)
- **Level 3 Power**: Price charts + portfolio optimization (unlock after 10 transactions)
- **Mode Lansia**: 3 tombol giant, font 24pt, high contrast (untuk Bapak Joko)

**Challenge:** Bagaimana transisi antar level terasa natural tanpa overwhelming users? Bagaimana unlock mechanism yang rewarding bukan frustrating?

**2. Multi-Persona Navigation**

5 persona dengan tech literacy dan goals yang sangat berbeda:

- Nasabah app vs Operator app vs B2B portal (3 separate navigation flows)
- Warm onboarding (Ibu Siti dengan operator) vs Cold self-service (Rina) harus equally smooth
- Unified design language tapi personalized journey untuk setiap persona

**Challenge:** Bagaimana menciptakan consistency tanpa mengorbankan personalization? Bagaimana single codebase (React Native + Expo) support divergent flows?

**3. Gamification yang Matang**

Gamification adalah 80% retention driver (critical untuk mencapai 65% MAU/DAU):

- Badges, streaks, leaderboards must feel rewarding bukan patronizing
- Target user: Ibu rumah tangga 40an, bukan Gen Z gamers
- Balance competition vs community solidarity (tidak boleh toxic)

**Challenge:** Gamification yang terasa mature dan meaningful, bukan childish. Bagaimana visual language yang aspirational tapi humble?

**4. Dual Ledger Visualization**

Dashboard harus menampilkan Rupiah AND kg waste dengan emphasis yang seimbang:

- Identity transformation membutuhkan BOTH metrics visible
- "Anda sudah selamatkan 100kg sampah = Rp 150,000" narrative
- Hierarchy visual yang memberi prominence sama ke dua value

**Challenge:** Bagaimana layout yang tidak overwhelm tapi tetap showcase dual value proposition? Bagaimana transisi dari "waste = Rupiah" mindset ke "waste = environmental impact"?

**5. Accessibility untuk Lintas Generasi**

Platform harus serve:

- Gen Z Rina (ekspektasi UX Instagram-level, gestures, micro-interactions)
- Bapak Joko 67 tahun (first-time smartphone, butuh Mode Lansia)
- WCAG 2.1 AA compliance untuk semua modes
- Voice guidance + SMS confirmations untuk lansia

**Challenge:** Bagaimana design system yang scalable dari simple mode ke power mode, dari lansia mode ke Gen Z expectations?

### Design Opportunities

**1. Viral Social Moments**

Leverage social proof untuk organic growth:

- Share ke Instagram Story saat unlock badge baru (Rina journey)
- "Sudah selamatkan 100kg sampah = 50 pohon ditanam" - shareable visual cards
- Community leaderboard yang foster solidarity bukan toxicity
- Social challenges: "Ajak 3 teman = unlock bonus badge"

**Opportunity:** Transform individual action menjadi community movement melalui designed social moments.

**2. Progressive Trust Building**

Gradual feature unlock menciptakan confidence building over time:

- First 3 transactions: Simple UI, operator hand-holding (Ibu Siti)
- After 3 tx: Unlock transaction history, impact breakdown (trust terbentuk)
- After 10 tx: Unlock advanced features, price charts, optimization tips
- Eventually: Self-service complete, user menjadi power user

**Opportunity:** Onboarding bukan one-time event, tapi continuous journey yang build mastery dan confidence.

**3. Identity Transformation Visual**

Dashboard sebagai mirror of transformation:

- Narrative: "Anda sudah menyelamatkan..." vs "Saldo anda..."
- Visual storytelling: Progress bars, milestone badges, impact metrics
- From "ibu rumah tangga yang buang sampah" → "environmental champion dengan 500kg impact"
- Social proof: "Anda di top 10% champions di kelurahan ini"

**Opportunity:** UI bukan hanya functional tool, tapi emotional reinforcement dari identity shift yang sedang terjadi.

---

## Core User Experience

### Defining Experience

Core action yang mendefinisikan BankSampah adalah **"Setor sampah → Lihat impact langsung (Rupiah + kg + environmental story)"**. Ini adalah loop utama yang harus completely effortless dan terjadi dengan frequency tinggi untuk mencapai target 65% MAU/DAU.

**Anatomy of Core Loop:**

1. User datang dengan sampah ke operator/drop-off point
2. Operator scan QR code / input data transaksi
3. **Dashboard real-time update** dengan dual ledger + impact narrative
4. Push notification sent (jika user tidak membuka app)
5. Gamification elements update (streak, badge progress, leaderboard)

**Success Metrics:**

- Transaction completion: <3 seconds
- Dashboard refresh latency: <1 second
- Notification delivery: Within 30 seconds
- Frequency target: Daily return untuk engaged users

**Why This Matters:**

- Journey Ibu Siti: Viral moment adalah melihat "Sudah selamatkan 50kg = 25 pohon" di dashboard
- Journey Rina: Share-worthy moment adalah real-time update dengan shareable visual card
- Gamification dependency: Setiap transaksi = streak continuation, badge progress unlock, leaderboard movement
- Identity transformation: Repeat visibility dari dual value (Rupiah + environmental impact)

Jika kita nail interaction ini, semua behavior lain (retention, sharing, withdrawal) akan follow naturally.

### Platform Strategy

**Primary Platform: Mobile App (React Native + Expo)**

Mobile adalah primary touchpoint karena:

- On-the-go access (users bawa sampah kapan saja)
- Push notifications critical untuk habit formation (streak reminders, price alerts, badge unlocks)
- Camera untuk QR scan, GPS untuk lokasi drop-off
- Shareable moments ke Instagram/WhatsApp

**Technical Implementation:**

- React Native + Expo (cross-platform iOS + Android dari single codebase)
- Touch-first interface optimization
- Offline mode: View-only dashboard, transactions require connectivity
- Progressive Web App capabilities: Installable, app-like experience
- Device permissions: Camera, notifications, GPS (optional)

**Secondary Platform: Web Admin (Retool)**

Web untuk operational efficiency:

- **Operator Dashboard**: Transaction processing, inventory management, business intelligence
- **B2B Portal (Phase 2B)**: Bulk ordering interface untuk PT Maju Jaya, supply chain visibility
- Mouse/keyboard optimization untuk data entry speed
- Desktop screen real estate untuk multi-view dashboards

**Platform Considerations:**

- Design system shared between mobile & web (consistency)
- Solo/duo dev constraint: Component reusability critical
- Mobile-first design philosophy (desktop adalah stretched version)

### Effortless Interactions

Yang HARUS zero-friction dan zero-thought:

**A. Transaction Completion (3-second target)**

**Operator Flow:**

- QR scan → Auto-populate user data → Confirm weight/price (3 taps max)
- No manual username entry, no form filling, no multi-step wizard

**Nasabah Experience:**

- Notification instant → Open app → Dashboard updated (0 taps required)
- Passive experience: Transaction happens, impact automatically visible

**Competitive Advantage:** Kompetitor butuh manual data entry, kita QR scan only.

**B. Dashboard Glance Comprehension (1-second target)**

User buka app → Instantly understand status:

- Dual ledger prominent di atas fold: **"Rp 150,000 | 100kg"** (hero section)
- Latest impact subtext: **"= 50 pohon ditanam"** (narrative always present)
- Gamification at-a-glance: Badge count + current streak (visual first, not buried in menu)

No scrolling required untuk core information. Progressive disclosure untuk detail.

**C. Progressive Feature Unlock (Automatic, Zero Configuration)**

**After 3 Transactions:**

- Modal: "Fitur baru tersedia! Transaction History unlocked"
- No manual enable, no settings toggle, no tutorial required
- Level 1 Simple → Level 2 Detailed (seamless transition)

**After 10 Transactions:**

- Modal: "Unlock Power User Mode! Price charts & optimization tips now available"
- Level 2 Detailed → Level 3 Power (automatic)

**Mode Lansia:**

- Settings → Toggle 1x → Persistent across sessions
- No repeat selection, no per-session configuration

**D. Social Sharing (2-tap maximum)**

**Flow:**

- Tap badge/achievement → Share card auto-generated → Pick Instagram/WhatsApp → Done
- No manual screenshot, no image editing, no copy-paste text
- Visual card pre-formatted: Brand consistent, shareable dimensions, narrative text included

**Competitive Advantage:** Kompetitor tidak provide share functionality, user harus screenshot manually (high friction).

**E. Withdrawal Request (Minimal Friction)**

**Flow:**

- Tap "Tarik Saldo" → Confirm amount → Confirmation modal with 24h timeline
- Push notification when processed: "Saldo Rp 50,000 masuk rekening anda"
- No form filling (bank account dari registration), no multi-step verification

### Critical Success Moments

Make-or-break interactions yang determine user retention atau churn:

**Moment 1: First Transaction Impact Visibility (Ibu Siti - Warm Onboarding)**

**Context:** Ibu Siti baru registrasi, first-time setor sampah dengan Pak Budi (operator).

**Critical Moment:** Dashboard pertama kali menampilkan angka **"Rp 15,000 | 10kg = 5 pohon"**

**Success Outcome:**

- Reaction: "Wah, ternyata sampah saya ada harganya segitu!"
- Identity shift begins: From "ibu rumah tangga buang sampah" → "Saya contribute ke lingkungan"
- Behavior: Return dalam 3 hari (habit formation begins)

**Failure Outcome:**

- Dashboard confusing/empty → "Kok ribet ya, buku aja deh"
- Uninstall atau tidak return lagi

**Design Requirement:** Hero section dual ledger + environmental narrative MUST be immediately comprehensible tanpa explanation.

---

**Moment 2: First Week Streak Reminder (Rina - Cold Self-Service)**

**Context:** Rina install app via Instagram ad, self-service registration, sudah 2 transaksi.

**Critical Moment:** Day 3 push notification **"Streak kamu 3 hari! Jangan sampai putus 🔥"**

**Success Outcome:**

- Reaction: "Oh iya, hari ini setor lagi ah"
- Habit formation triggered by streak mechanic
- Gamification working: User return karena don't want to lose progress

**Failure Outcome:**

- No reminder/motivation → Drop off after initial curiosity
- 4% MAU/DAU repeat (current industry baseline)

**Design Requirement:** Push notification timing critical (daily reminder before usual drop-off time), copy tone playful not annoying.

---

**Moment 3: Mode Lansia Activation (Bapak Joko)**

**Context:** Bapak Joko 67 tahun struggling dengan standard UI (too many buttons).

**Critical Moment:** Settings → Toggle **"Mode Lansia"** → UI transform ke 3 tombol giant dengan 24pt font

**Success Outcome:**

- Reaction: "Ini jauh lebih gampang! Saya bisa sendiri nih"
- Confidence boost → Independence
- Behavior: Daily usage tanpa perlu bantuan anak/operator

**Failure Outcome:**

- Mode Lansia hard to find/activate → Frustration
- "Aplikasi ini tidak untuk orang tua" → Give up, kembali ke sistem manual

**Design Requirement:** Mode Lansia toggle must be prominent di settings (not buried), transition must be instant dan persistent.

---

**Moment 4: Badge Unlock Celebration (Cross-Persona)**

**Context:** User mencapai milestone (100kg total waste deposited).

**Critical Moment:** Modal **"Selamat! Anda unlock 'Environmental Champion 100kg'"** + shareable visual card

**Success Outcome:**

- Reaction: "Wow, achievement ini keren!"
- Share ke Instagram Story (viral moment)
- Social proof → Attract new users

**Failure Outcome:**

- Badge unlock tidak terasa rewarding (just notification, no celebration)
- Gamification feels flat → No emotional engagement
- Retention drop

**Design Requirement:** Celebration modal dengan animation, visual card auto-generated untuk share, narrative compelling (not just "100kg" tapi "= 50 pohon ditanam").

---

**Moment 5: First Withdrawal Success (Financial Trust)**

**Context:** User accumulate Rp 50,000, initiate first withdrawal.

**Critical Moment:**

- Tap "Tarik Saldo" → 24h process → Push notification **"Saldo Rp 50,000 masuk rekening anda"**

**Success Outcome:**

- Reaction: "Sistemnya reliable! Uang benar-benar masuk"
- Trust established → Platform credibility confirmed
- Behavior: More aggressive waste collection (increase deposit frequency)

**Failure Outcome:**

- Withdrawal delayed/unclear status → "Uang saya mana?"
- Distrust platform → Fear of scam
- Churn + negative word-of-mouth

**Design Requirement:** Timeline transparency (24h expectation set upfront), push notification when processed, transaction history shows withdrawal status clearly.

### Experience Principles

Guiding principles untuk semua UX design decisions di BankSampah:

**Principle 1: Instant Gratification Loop**

Setiap user action harus have **immediate visible feedback**. Habit formation requires instant reinforcement, bukan delayed gratification.

**Application:**

- Transaction → Real-time dashboard update (not "data will sync later")
- Badge unlock → Celebration modal instant (not "check your profile")
- Withdrawal request → Confirmation modal with timeline (not silent processing)
- Streak continuation → Visual + push notification same-day

**Anti-pattern:** Generic "Success!" toast tanpa specific impact shown.

---

**Principle 2: Progressive Complexity**

UI complexity harus scale dengan user mastery. Default simple untuk first-time users, unlock advanced features setelah trust builds.

**Application:**

- **Level 1 Simple** (default): 2 metrik, 2 tombol → For Ibu Siti first 3 transactions
- **Level 2 Detailed** (unlock after 3 tx): Transaction history, impact breakdown → Trust established
- **Level 3 Power** (unlock after 10 tx): Price charts, portfolio optimization → For engaged power users
- **Mode Lansia** (always accessible): 3 giant buttons, 24pt font → For Bapak Joko

**Anti-pattern:** Show all features upfront → Overwhelm first-time users → High churn.

---

**Principle 3: Dual Value Visibility**

Rupiah AND kg waste harus **always equally prominent**. Identity transformation dari "waste = money" ke "waste = money + environmental impact" requires both metrics front-and-center.

**Application:**

- Dashboard hero section: **"Rp 150,000 | 100kg"** (same font size, same hierarchy)
- Impact narrative always present: **"= 50 pohon ditanam"** (not buried in detail page)
- Transaction history: Both columns visible (not Rupiah-only default)
- Gamification: Badges untuk Rupiah milestones AND kg milestones

**Anti-pattern:** Rupiah prominent, kg waste buried → Reinforces "waste = money" mindset only.

---

**Principle 4: Effortless Social Proof**

Every achievement harus **share-ready dengan 1-2 taps maximum**. Community solidarity over toxic competition. Viral moments designed into flow, not afterthought.

**Application:**

- Badge unlock → Shareable visual card auto-generated (no manual screenshot)
- Leaderboard → "Top 10% di kelurahan ini" (solidarity framing, not "Beat your neighbors")
- Impact milestones → Instagram Story format ready
- Social challenges → "Ajak 3 teman = bonus badge" (community growth incentive)

**Anti-pattern:** No share functionality → User harus screenshot manually → High friction → No viral growth.

---

**Principle 5: Zero-Friction Transactions**

Core action (setor sampah) harus **<3 seconds completion**. Every friction point removed adalah retention improvement.

**Application:**

- QR scan > manual username input
- Auto-populate > form filling
- Push notification > in-app manual check
- 1-tap confirmation > multi-step wizard

**Metric:** Transaction completion time <3s target. If flow takes >5s, redesign required.

**Anti-pattern:** Multi-step forms, manual data entry, unclear confirmation states.

---

## Desired Emotional Response

### Primary Emotional Goals

**Primary Emotional Goal: "Saya Penting, Saya Berkontribusi"**

BankSampah tidak sekadar tentang efficiency atau productivity - ini tentang **identity transformation**:

- **From:** "Saya cuma ibu rumah tangga yang buang sampah"
- **To:** "Saya environmental champion yang menyelamatkan lingkungan"

Setiap interaction harus reinforce narrative ini. Users tidak hanya complete transactions, mereka sedang membangun identity baru sebagai environmental champions.

**Supporting Emotional States:**

- **Empowered (bukan helpless):** "Waste saya ada value, saya bisa action untuk lingkungan"
- **Proud (bukan malu):** "Achievement saya worthy untuk dishare ke sosmed"
- **Belonging (bukan isolated):** "Saya bagian dari community yang peduli lingkungan"
- **Confident (bukan confused):** "Saya ngerti cara pakai, saya bisa sendiri tanpa bantuan"

**Emotions to Avoid:**

- **Patronized:** Gamification jangan terasa childish atau condescending untuk ibu rumah tangga 40an
- **Overwhelmed:** Progressive disclosure prevent information overload, especially untuk first-time users
- **Guilty:** Bukan "kamu harus recycle!" tapi "look what you've achieved!"
- **Skeptical:** Financial trust critical - withdrawal process must be transparent dan reliable

### Emotional Journey Mapping

**Stage 1: First Discovery (Instagram Ad / Operator Introduction)**

**Desired Emotion: Curiosity + Hope**

- Rina (Gen Z): "Wah ada app waste management yang UI-nya bagus? Coba ah"
- Ibu Siti (warm): "Pak Budi bilang pakai app ini lebih gampang. Semoga saya bisa..."

**Design Support:** Visual marketing yang modern (attract Rina), operator hand-holding protocol (comfort Ibu Siti)

**Avoid:** Skepticism ("App bank sampah? Pasti ribet"), Intimidation ("Kayaknya susah nih")

---

**Stage 2: First Transaction + Dashboard View (Aha Moment)**

**Desired Emotion: Surprise + Delight**

- "Wah, ternyata sampah saya ada harganya **segini**!"
- "100kg = 50 pohon? Wow, kontribusi saya besar juga ya!"

**Design Support:** Dual ledger prominent (Rupiah + kg), environmental narrative immediately visible, impact storytelling compelling

**Critical Success:** This is the moment identity transformation begins. Dashboard must trigger realization: "My waste has value."

**Avoid:** Confusion ("Kok angkanya banyak banget? Ini apaan?"), Disappointment ("Cuma segini doang?")

---

**Stage 3: First Week (Habit Formation Critical Period)**

**Desired Emotion: Motivation + Commitment**

- "Streak 3 hari, jangan sampai putus! 🔥"
- "Tinggal 20kg lagi unlock badge Champion!"

**Design Support:** Push notifications dengan timing optimal, progress bars visible, milestone proximity shown

**Gamification Tone:** FOMO yang positive (achievement desire), bukan guilt-tripping

**Avoid:** Guilt ("Kok gak setor-setor?"), Toxic pressure ("Teman-teman kamu sudah 100kg, kamu?")

---

**Stage 4: Badge Unlock / Milestone Achievement**

**Desired Emotion: Pride + Accomplishment**

- "Wow! 100kg tercapai! Share ah ke Instagram"
- Celebration must feel **significant**, not trivial

**Design Support:**

- Celebration modal dengan confetti animation
- Shareable visual card auto-generated (Instagram Story format)
- Copy aspirational: "Environmental Champion 100kg = 50 pohon ditanam"

**Social Proof Integration:** "Top 10% di kelurahan" (solidarity framing, bukan toxic competition)

**Avoid:** Embarrassment (badge terasa cheesy/childish), Isolation (solo achievement tanpa community context)

---

**Stage 5: First Withdrawal (Trust Establishment)**

**Desired Emotion: Trust + Relief**

- "Uang benar-benar masuk rekening! Sistemnya reliable"

**Design Support:**

- Timeline transparency: "24 jam proses" expectation set upfront
- Transaction history clarity: Status visible
- Push notification confirmation: "Saldo Rp 50,000 masuk rekening anda" (closure)

**Critical Success:** Financial trust adalah foundation untuk long-term engagement. Withdrawal harus flawless.

**Avoid:** Anxiety ("Uang saya mana? Kok belum masuk?"), Distrust ("Jangan-jangan scam")

---

**Stage 6: Long-term Return User (Identity Reinforcement)**

**Desired Emotion: Belonging + Identity Confirmation**

- "Saya sudah bagian dari community environmental champions"
- "Total 500kg impact, identity saya confirmed"

**Design Support:**

- Leaderboard community solidarity ("Kelurahan kita top 3 se-kota!")
- Cumulative impact storytelling ("500kg = 250 pohon dalam 6 bulan")
- Social challenges collaborative ("Kelurahan challenge: Target 10 ton bulan ini")

**Avoid:** Boredom (gamification must evolve, tidak flat), Burnout (streak pressure too high)

### Micro-Emotions

**Confidence vs. Confusion**

**Critical for:** Bapak Joko (67 tahun, first-time smartphone user)

**Design Solution:**

- Mode Lansia: 3 tombol giant dengan 24pt font, high contrast
- SMS confirmations untuk reassurance
- Voice guidance (Phase 2A) untuk step-by-step help

**Emotional Payoff:** "Saya bisa sendiri, tidak perlu bantuan anak terus"

**Failure Mode:** Confusion → Frustration → "Aplikasi ini tidak untuk orang tua" → Give up

---

**Trust vs. Skepticism**

**Critical for:** First withdrawal moment (all personas)

**Design Solution:**

- Timeline transparency ("24 jam proses" upfront)
- Transaction history detailed (date, amount, status)
- Push notification confirmation dengan amount exact
- Support contact visible (jika ada issue)

**Emotional Payoff:** "Platform ini legitimate, bukan scam, saya bisa trust"

**Failure Mode:** Skepticism → Distrust → Withdraw all money → Never return

---

**Excitement vs. Anxiety**

**Critical for:** Badge unlock, level transition (Progressive UX)

**Design Solution:**

- Celebration modal dengan animation (excitement trigger)
- New features introduced gradually, NOT info dump
- Tutorial overlay optional (bukan mandatory)

**Emotional Payoff:** "Wow! Achievement baru!" (positive excitement)

**Failure Mode:** "Kok banyak fitur baru? Overwhelming!" (anxiety) → Abandon new features

---

**Accomplishment vs. Frustration**

**Critical for:** Transaction completion, goal progress tracking

**Design Solution:**

- Real-time feedback instant (dashboard update <1s)
- Progress bars towards badges/milestones always visible
- Milestone proximity shown: "Tinggal 20kg lagi!"

**Emotional Payoff:** "Saya making progress, I'm getting somewhere!"

**Failure Mode:** "Kok gak ada perubahan? Usaha saya sia-sia" (frustration) → Drop off

---

**Delight vs. Satisfaction**

**Critical for:** Micro-interactions, shareable moments

**Design Solution:**

- Confetti animations untuk badge unlock (not just toast notification)
- Shareable visual cards beautifully designed (Instagram-worthy)
- Impact narrative storytelling: "100kg = 50 pohon = 2 ton CO2 dikurangi"

**Emotional Payoff:** "This is special! I want to share this!" (delight)

**Failure Mode:** "OK, done" (mere satisfaction) → No viral growth, no emotional connection

---

**Belonging vs. Isolation**

**Critical for:** Community features, social proof, long-term retention

**Design Solution:**

- Leaderboard solidarity framing: "Top 10% di kelurahan" (inclusive)
- Community milestones: "Kelurahan kita sudah 10 ton!" (collective achievement)
- Social challenges: "Ajak 3 teman = bonus badge" (community growth)

**Emotional Payoff:** "Saya bagian dari something bigger than myself"

**Failure Mode:** "Saya sendirian nih, gak ada community" (isolation) → Low retention

### Design Implications

**Emotion: EMPOWERED → UX Design Choices**

**Design Approach:**

- Dual ledger equally prominent (Rupiah + kg sama-sama hero section)
- Impact narrative always visible (not buried in detail page)
- Every transaction = immediate visible impact (real-time dashboard update)

**Avoid:**

- Hidden metrics (user harus scroll/tap untuk lihat impact)
- Delayed feedback (dashboard update lambat)
- Rupiah-only emphasis (reinforces "waste = money" mindset only)

**Why It Works:** Visibility of dual value (financial + environmental) empowers users to see their complete impact.

---

**Emotion: PROUD → UX Design Choices**

**Design Approach:**

- Shareable visual cards auto-generated untuk badges, milestones, impact totals
- 1-2 tap share flow (Instagram/WhatsApp picker)
- Copy aspirational: "Environmental Champion 100kg" bukan "Good job!"

**Avoid:**

- Manual screenshot requirement (high friction)
- No share functionality (missed viral opportunity)
- Childish badge design (embarrassing untuk share)

**Why It Works:** Effortless sharing enables social proof, viral growth, dan reinforces pride in achievement.

---

**Emotion: CONFIDENT → UX Design Choices**

**Design Approach:**

- Progressive disclosure (Level 1 Simple default untuk first 3 transactions)
- Mode Lansia accessible di settings (prominent, not buried)
- Gradual feature unlock dengan tutorial overlay optional

**Avoid:**

- All features upfront (overwhelming new users)
- Complex navigation for basic tasks
- Mandatory tutorials (feels patronizing)

**Why It Works:** Complexity scales dengan user mastery. Confidence builds as competence grows.

---

**Emotion: TRUST → UX Design Choices**

**Design Approach:**

- Transaction history detailed dan always accessible
- Withdrawal timeline transparent ("24 jam proses" upfront expectation)
- Push notification confirmations untuk critical events (withdrawal complete, badge unlock)
- Status clarity (processing, completed, failed)

**Avoid:**

- Silent processing (no feedback)
- Unclear timelines ("We'll contact you")
- No confirmation feedback (user left wondering)

**Why It Works:** Transparency reduces anxiety, builds trust, enables users to feel safe with financial operations.

---

**Emotion: BELONGING → UX Design Choices**

**Design Approach:**

- Community leaderboard solidarity framing: "Top 10% di kelurahan" (not "Rank #15")
- Collective milestones: "Kelurahan kita sudah 10 ton!" (community celebration)
- Social challenges collaboration-focused (not just individual competition)

**Avoid:**

- Toxic competition ("Beat your neighbors!")
- Individual-only focus (no community context)
- Shame-based motivation ("Kamu paling belakang!")

**Why It Works:** Community solidarity creates belonging, which drives long-term retention lebih kuat dari individual competition.

---

**Emotion: NOT PATRONIZED → UX Design Choices**

**Design Approach:**

- Gamification mature: Badge names aspirational ("Environmental Champion") bukan cutesy ("Super Recycler!")
- Celebration copy respectful: "Selamat! Anda telah..." bukan "Yay! Good job!"
- Visual design professional, bukan cartoon-style

**Avoid:**

- Overly playful tone (feels condescending untuk ibu rumah tangga 40an)
- Childish graphics (embarrassing untuk share)
- Patronizing copy ("Wow, kamu hebat sekali!")

**Why It Works:** Target user adalah adults dengan agency. Respectful tone maintains dignity sambil tetap rewarding.

### Emotional Design Principles

**Principle 1: Celebrate Identity, Not Just Transactions**

Every interaction reinforces **"Saya environmental champion"** narrative, bukan sekadar "transaction successful".

**Application:**

- Dashboard header: "Anda sudah menyelamatkan..." (identity framing, bukan "Saldo anda...")
- Badge copy: "Environmental Champion 100kg" (aspirational identity label)
- Impact narrative: "= 50 pohon ditanam" (concrete contribution storytelling)
- Transaction history: Show impact column alongside Rupiah (dual identity reinforcement)

**Why It Matters:** Identity transformation adalah core value proposition. UI harus constantly reinforce new identity, bukan hanya show transactions.

**Anti-pattern:** Generic "Transaction completed" toast with no identity reinforcement. User sees system confirmation, not personal transformation.

---

**Principle 2: Positive FOMO, Not Guilt**

Gamification creates motivation through **achievement desire** (positive pull), bukan guilt-tripping (negative push).

**Application:**

- Streak reminder: "Streak 3 hari! Jangan sampai putus 🔥" (playful urgency, not guilt)
- Badge progress: "Tinggal 20kg lagi unlock Champion!" (so close! motivating)
- Social challenges: "Ajak 3 teman = bonus badge" (opportunity framing)
- Leaderboard: "Top 10% di kelurahan" (achievement highlight, not rank shame)

**Why It Matters:** Guilt creates negative emotion → Burnout → Churn. FOMO creates desire → Engagement → Retention.

**Anti-pattern:** "Kok gak setor-setor?" (guilt), "Teman-teman kamu sudah 100kg, kamu baru 20kg" (toxic comparison). Users feel shame, not motivation.

---

**Principle 3: Progressive Confidence Building**

UI complexity grows WITH user mastery. First interaction simple → Trust builds → Advanced features unlock.

**Application:**

- **Level 1 Simple (default):** 2 metrik, 2 tombol → For Ibu Siti first 3 transactions
- **Level 2 Detailed (unlock after 3 tx):** Transaction history, impact breakdown → Confidence established
- **Level 3 Power (unlock after 10 tx):** Price charts, portfolio optimization → Mastery proven
- **Mode Lansia (always accessible):** 3 giant buttons → For Bapak Joko

**Why It Matters:** Overwhelming new users with features = high churn. Progressive unlock = confidence scales with competence.

**Anti-pattern:** Show all features upfront (dashboards with 10+ metrics, navigation with 8 tabs) → New user confusion → "Kok ribet ya?" → Uninstall.

---

**Principle 4: Transparency Builds Trust**

Financial operations must have **complete visibility**: Timeline, status, confirmation. No black boxes.

**Application:**

- Withdrawal: "24 jam proses" expectation set upfront (not "We'll process this")
- Transaction history: Detailed log always accessible (date, amount, status, receipt)
- Push notification: Confirmation saat saldo masuk rekening dengan amount exact
- Status indicators: Processing, completed, failed (clear states)

**Why It Matters:** Financial trust adalah foundation for engagement. Opacity creates anxiety → Skepticism → Withdrawal all money → Never return.

**Anti-pattern:** Silent processing, "We'll contact you" (vague), no status updates (user left wondering "Uang saya mana?").

---

**Principle 5: Social Proof Creates Belonging**

Community features foster **solidarity, bukan competition**. "We're all environmental champions together."

**Application:**

- Leaderboard: "Top 10% di kelurahan" (inclusive framing, not "Rank #15")
- Community milestones: "Kelurahan kita sudah 10 ton bersama!" (collective achievement celebration)
- Social challenges: Collaboration over competition ("Kelurahan challenge: Target 10 ton bulan ini")
- Impact aggregation: "Total impact kelurahan: 50 ton = 2500 pohon" (community scale)

**Why It Matters:** Belonging creates long-term retention lebih kuat dari individual achievement. Community = network effect = sustainable growth.

**Anti-pattern:** "Beat your neighbors!" (toxic), shame-based leaderboard ("Kamu paling belakang di RT"), individual-only metrics (no community context).

---

## UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

Untuk inform design decisions BankSampah, kita analisis UX patterns dari apps yang already proven successful dan relevant untuk target users:

#### Instagram - Social Sharing Excellence

**Target User Relevance:** Rina (Gen Z) adalah frequent Instagram user, UX expectations shaped by Instagram polish.

**Core Problem Solved:** Content creation & social sharing made effortless

**UX Success Factors:**

**Onboarding:** Skip-able tutorial, core value (browse feed) immediately accessible tanpa login requirement

**Navigation:** Bottom tab bar dengan 5 icons max, thumb-friendly positioning, consistent across all screens

**Innovative Interactions:**

- **Story format:** Vertical full-screen, swipe gestures intuitive, 24h expiry creates positive FOMO
- **1-tap share:** Share post/story dengan 2 taps max (pick story/feed → share destination)
- **In-app editing:** Filters, stickers, text overlay semua dalam one seamless flow

**Visual Design:** High contrast photography, photo-first (minimize UI chrome), generous white space

**Lessons for BankSampah:**

- Story format perfect untuk badge/impact sharing (24h viral moment creation)
- 1-tap share pattern directly applicable untuk achievement cards
- In-app visual card generation (no manual screenshot required)
- High polish expectations dari Gen Z users (Rina)

---

#### Duolingo - Gamification Mastery

**Target User Relevance:** All personas. Habit formation critical (daily return 4% → 65% MAU/DAU target).

**Core Problem Solved:** Language learning habit formation through effective gamification

**UX Success Factors:**

**Onboarding:** Immediate lesson (no lengthy theory), success achieved dalam 2 minutes, hook established instantly

**Gamification Elements:**

- **Streak mechanic:** Daily reminder push notification, lose streak = strong FOMO (proven daily return driver)
- **Badge system:** XP-based unlocks, visual progress bars always visible
- **Leaderboard:** Weekly reset (fresh starts prevent discouragement), friend-based (not toxic global rankings)

**Innovative Patterns:**

- **Streak freeze:** Buy protection (1 day miss = streak saved) - reduces anxiety while maintaining engagement
- **Friendly competition:** Friend leaderboards encourage participation, NOT toxic public rankings
- **Celebration moments:** Confetti animation, sound effects, level-up fanfare (delight creation)

**Visual Design:** Playful tapi mature (not childish), green brand color consistent, mascot Duo friendly not annoying

**Lessons for BankSampah:**

- Streak mechanic directly applicable (daily setor sampah streak)
- Friend/community leaderboards > toxic global rankings (kelurahan-based solidarity)
- Celebration moments template untuk badge unlocks (confetti + shareable card)
- Mature gamification tone (not childish untuk ibu rumah tangga 40an)
- Streak freeze concept (reduce anxiety, maintain engagement)

---

#### WhatsApp - Simplicity for All Ages

**Target User Relevance:** Bapak Joko (67 tahun lansia) dan Ibu Siti (40an) - lintas generasi adoption proven.

**Core Problem Solved:** Messaging accessible untuk lintas generasi (lansia friendly)

**UX Success Factors:**

**Onboarding:** Phone number only (no email/password complexity), SMS verification simple

**Navigation:** 3 bottom tabs only (Chats, Status, Calls), giant touch targets (thumb-friendly untuk lansia)

**Accessibility Features:**

- **Font size adjustable:** Lansia dapat enlarge text untuk readability
- **High contrast mode:** Vision impaired users dapat read clearly
- **Voice messages:** Alternative to typing (lansia prefer voice over typing)

**Visual Design:** Minimal UI chrome, conversation-focused hierarchy, green accent calming

**Lessons for BankSampah:**

- Mode Lansia inspiration (3 tabs = 3 giant buttons pattern)
- Adjustable font size pattern directly applicable
- Voice guidance (Phase 2A) similar to voice messages concept
- Proven lintas generasi adoption (Bapak Joko 67 tahun already uses WhatsApp daily)
- Simple navigation (3 main actions max untuk lansia mode)

---

#### Gojek - Marketplace Trust Model

**Target User Relevance:** All personas. Financial trust establishment critical. Phase 2B marketplace inspiration.

**Core Problem Solved:** Marketplace trust establishment through transparency

**UX Success Factors:**

**Onboarding:** Phone verification robust, GoPay wallet setup clear, driver rating system transparency

**Transaction Flow:**

- **Real-time tracking:** Order status always visible (trust building through transparency)
- **Transparent pricing:** Upfront estimate clear, no hidden fees surprise
- **Receipt automatic:** Transaction history accessible, dispute mechanism clear

**Financial Trust Patterns:**

- **GoPay balance prominent:** Always visible in hero section (top of screen)
- **Withdrawal transparent:** Timeline clear ("3 hari kerja"), fee structure shown upfront
- **Transaction history:** Detailed log dengan receipt untuk every transaction

**Lessons for BankSampah:**

- Financial trust model template (withdrawal transparency critical)
- Real-time status updates applicable untuk transactions (dashboard <1s latency)
- Receipt/history pattern for transaction log (detailed, always accessible)
- Balance prominence = dual ledger prominence pattern
- Timeline transparency prevents anxiety ("24 jam proses" upfront expectation)

---

#### BCA Mobile - Financial Simplicity

**Target User Relevance:** All personas. Banking app precedent untuk financial trust (users familiar with reliability expectations).

**Core Problem Solved:** Complex banking operations made simple untuk mass market

**UX Success Factors:**

**Onboarding:** Branch-assisted activation (similar to Ibu Siti warm onboarding pattern)

**Security Balance:**

- **2FA without friction:** PIN 6 digit (not complex password), biometric unlock option
- **Transaction limits:** Daily limits prevent major losses, reduce user anxiety
- **Confirmation screens:** Review before commit, clear cancel options always visible

**Information Hierarchy:**

- **Balance hero section:** Rupiah balance largest element di top fold
- **Quick actions:** 4-6 common actions above fold (transfer, pay, top-up)
- **Advanced features:** Buried in menu (progressive disclosure pattern)

**Lessons for BankSampah:**

- Financial app trust precedent (users expect banking-level reliability)
- Balance prominence pattern for dual ledger (hero section placement)
- Security without friction (biometric unlock Phase 2A)
- Progressive disclosure (simple default, advanced features buried)
- Confirmation screens for critical actions (withdrawal, withdrawal request)

### Transferable UX Patterns

Dari analysis di atas, patterns yang directly applicable untuk BankSampah:

#### Navigation Patterns

**Pattern 1: Bottom Tab Bar (Instagram/WhatsApp)**

**Source:** Instagram 5 tabs, WhatsApp 3 tabs

**Application for BankSampah:**

- **Standard Mode:** 4 main tabs (Dashboard, Transaksi, Community, Profile)
- **Mode Lansia:** 3 tabs only (Dashboard, Transaksi, Profile) - reduce complexity

**Why It Works:**

- Thumb-friendly positioning (bottom of screen)
- Consistent navigation (always visible)
- Proven untuk high-frequency apps (daily usage)

**Implementation Notes:**

- Icons + labels (not icons-only untuk clarity)
- Active state clearly indicated (color + underline)
- Touch target minimum 44x44pt (accessibility)

---

**Pattern 2: Progressive Disclosure (Tokopedia/BCA Mobile)**

**Source:** BCA Mobile (simple default, advanced menu buried), Tokopedia (beginner → power user features)

**Application for BankSampah:**

- **Level 1 Simple:** 2 metrik, 2 tombol (default untuk first 3 transactions)
- **Level 2 Detailed:** Transaction history, impact breakdown (unlock after 3 tx)
- **Level 3 Power:** Price charts, portfolio optimization (unlock after 10 tx)

**Why It Works:**

- New users tidak overwhelmed
- Advanced users dapat access power features
- Complexity scales dengan user mastery

**Implementation Notes:**

- Automatic unlock (not manual settings toggle)
- Modal announcement saat unlock ("Fitur baru tersedia!")
- Features remain unlocked permanently (not per-session)

#### Interaction Patterns

**Pattern 3: 1-Tap Share (Instagram Story)**

**Source:** Instagram Story share flow (tap story → pick destination → done)

**Application for BankSampah:**

- Tap badge/achievement → Share card auto-generated → Pick Instagram/WhatsApp → Done (2 taps total)

**Why It Works:**

- Effortless viral growth (remove friction dari sharing)
- User pride reinforcement (make achievement visible)
- Social proof attracts new users

**Implementation Notes:**

- Visual card pre-formatted (brand consistent, shareable dimensions 1080x1920)
- Copy pre-written ("Saya sudah selamatkan 100kg sampah = 50 pohon!")
- Native share sheet (iOS/Android standard)

---

**Pattern 4: Streak Mechanic + Push Notification (Duolingo)**

**Source:** Duolingo daily streak dengan push notification reminder

**Application for BankSampah:**

- Daily setor sampah streak tracking
- Push notification timing optimal (before usual drop-off time)
- FOMO messaging: "Streak 3 hari! Jangan sampai putus 🔥"

**Why It Works:**

- Proven daily return driver (Duolingo 65%+ DAU/MAU)
- FOMO positive (achievement desire), not guilt
- Habit formation through consistency reward

**Implementation Notes:**

- Notification timing: 1 day before usual transaction time
- Streak freeze option (Phase 2A): Reduce anxiety, maintain engagement
- Visual streak counter prominent di dashboard

---

**Pattern 5: Real-Time Status Updates (Gojek)**

**Source:** Gojek order tracking (real-time driver location, status updates)

**Application for BankSampah:**

- Transaction processing → Dashboard real-time update (<1s)
- Push notification confirmation ("Transaksi berhasil! Rp 15,000 | 10kg")
- Status always visible (processing, completed)

**Why It Works:**

- Transparency builds trust
- Immediate feedback reinforces behavior
- Reduces anxiety ("Apakah transaksi berhasil?")

**Implementation Notes:**

- WebSocket connection for real-time updates (Supabase Realtime)
- Push notification within 30 seconds of transaction
- Transaction history detailed (date, amount, status, receipt)

#### Visual Patterns

**Pattern 6: Balance Hero Section (BCA Mobile/Gojek)**

**Source:** BCA Mobile (Rupiah balance prominent), Gojek (GoPay balance hero section)

**Application for BankSampah:**

- Dual ledger prominent di atas fold: **"Rp 150,000 | 100kg"**
- Environmental narrative subtext: **"= 50 pohon ditanam"**
- Largest text element on dashboard (immediate comprehension)

**Why It Works:**

- Users immediately see value/status (no scrolling required)
- Primary information prioritized
- Banking app precedent (users expect balance visibility)

**Implementation Notes:**

- Font size hierarchy: Dual ledger 32pt, narrative 16pt
- Equal emphasis pada Rupiah dan kg (same font size, same color weight)
- Update real-time (not stale data)

---

**Pattern 7: Celebration Moments (Duolingo)**

**Source:** Duolingo level-up celebration (confetti animation, fanfare, congratulatory modal)

**Application for BankSampah:**

- Badge unlock → Confetti animation + shareable card + celebratory copy
- Milestone achievements (100kg, 500kg, 1 ton) → Full-screen celebration

**Why It Works:**

- Delight creates emotional connection
- Memorable moments (not just notifications)
- Encourages continued engagement

**Implementation Notes:**

- Confetti animation (Lottie animation lightweight)
- Shareable card auto-generated simultaneously
- Copy aspirational: "Selamat! Anda Environmental Champion 100kg" (not childish "Yay!")
- Dismissible (user can skip celebration jika ingin)

---

**Pattern 8: Adjustable Accessibility (WhatsApp)**

**Source:** WhatsApp font size adjustment, high contrast mode

**Application for BankSampah:**

- Mode Lansia toggle di settings → 3 giant buttons, 24pt font, high contrast
- Persistent across sessions (1x selection)

**Why It Works:**

- Lintas generasi adoption (Bapak Joko 67 tahun dapat use independently)
- Confidence building untuk lansia users
- Accessibility compliance (WCAG 2.1 AA)

**Implementation Notes:**

- Toggle prominent di settings (not buried)
- Instant UI transformation (no app restart)
- SMS confirmations untuk reassurance (Phase 2A)
- Voice guidance option (Phase 2A)

### Anti-Patterns to Avoid

Dari analysis competitor failures dan UX best practices, patterns yang harus avoid:

#### Anti-Pattern 1: Mandatory Tutorial

**Source:** Banking apps lama dengan lengthy tutorials upfront

**Why It Fails:**

- Users skip/ignore lengthy tutorials (attention span short)
- Creates friction di onboarding (delays core value access)
- Information not retained (users forget by the time they need it)

**BankSampah Strategy:**

- Optional tutorial overlay (contextual, just-in-time)
- Immediate access to core feature (dashboard view without tutorial barrier)
- Warm onboarding dengan operator untuk Ibu Siti (human hand-holding > tutorial)

---

#### Anti-Pattern 2: Hidden Primary Information

**Source:** Fintech apps yang require scroll/tap untuk lihat balance

**Why It Fails:**

- Users frustrated (primary info should be immediately visible)
- Creates anxiety ("Where's my balance?")
- Defeats purpose of quick-check (users open app untuk glance, not hunt)

**BankSampah Strategy:**

- Dual ledger hero section (above fold, no scroll required)
- Balance always visible (not hidden behind tap/menu)
- Hero section = largest text element (immediate comprehension)

---

#### Anti-Pattern 3: Toxic Leaderboards

**Source:** Gamification apps dengan public rankings yang shame losing users

**Why It Fails:**

- Shame-based motivation demotivates majority (users di bottom feel discouraged)
- Toxic competition harms community solidarity
- High churn among non-top-performers

**BankSampah Strategy:**

- Solidarity framing ("Top 10% di kelurahan", not "Rank #15")
- Community milestones ("Kelurahan kita 10 ton!") over individual rankings
- Friend/community leaderboards only (not toxic global rankings)
- Weekly/monthly resets (fresh starts, prevent permanent discouragement)

---

#### Anti-Pattern 4: Complex Onboarding Forms

**Source:** E-commerce lama dengan 10+ field registration forms

**Why It Fails:**

- High drop-off rate (users abandon before experiencing value)
- Friction delays aha moment (should be fast)
- Data collected upfront often unnecessary for initial value

**BankSampah Strategy:**

- Warm onboarding dengan operator untuk Ibu Siti (minimal form, human-assisted)
- Cold self-service minimal form untuk Rina (phone number + name only, skip optional fields)
- Progressive profiling (collect additional data over time, not upfront)

---

#### Anti-Pattern 5: Silent Processing

**Source:** Payment apps without feedback confirmation

**Why It Fails:**

- Users anxious ("Apakah transaksi berhasil? Uang saya kemana?")
- Distrust builds (opacity = suspicion)
- Support queries increase (users contact support untuk confirmation)

**BankSampah Strategy:**

- Real-time dashboard update (<1s latency)
- Push notification confirmation ("Transaksi berhasil! Rp 15,000 | 10kg")
- Transaction history detailed (status, receipt, date/time)
- Withdrawal timeline transparent ("24 jam proses" upfront expectation)

---

#### Anti-Pattern 6: Childish Gamification for Adults

**Source:** Game-like apps dengan cartoon graphics dan patronizing copy for adult users

**Why It Fails:**

- Adults feel patronized (condescending tone)
- Embarrassing untuk share (childish badges not shareable)
- Doesn't match user identity (ibu rumah tangga 40an, not kids)

**BankSampah Strategy:**

- Mature visual design (professional, not cartoon-style)
- Aspirational copy ("Environmental Champion 100kg", not "Super Recycler!")
- Respectful celebration tone ("Selamat! Anda telah...", not "Yay! Good job!")
- Professional badge design (shareable, Instagram-worthy)

### Design Inspiration Strategy

Actionable strategy untuk menggunakan insights dari inspiring products:

#### What to Adopt Directly

**1. Instagram Story Share Pattern**

**Rationale:** Rina journey requires effortless social sharing, Instagram pattern already proven viral mechanism.

**Implementation:**

- Badge unlock → 1-tap share flow
- Visual card auto-generated (1080x1920 Instagram Story format)
- Native share sheet (Instagram/WhatsApp picker)

**Expected Impact:**

- Organic growth through social proof
- User pride reinforcement
- Viral loops (shared card attracts new users)

**Timeline:** MVP (Month 1-6)

---

**2. Duolingo Streak Mechanic**

**Rationale:** Habit formation critical (4% → 65% MAU/DAU target), Duolingo proven daily return driver.

**Implementation:**

- Daily setor sampah streak tracking
- Push notification optimal timing (before usual transaction time)
- FOMO messaging positive ("Jangan sampai putus!", not guilt)

**Expected Impact:**

- Daily return behavior (65% MAU/DAU achievable)
- Habit formation through consistency reward
- Increased transaction frequency

**Timeline:** MVP (Month 1-6)

---

**3. WhatsApp Simplicity for Lansia**

**Rationale:** Bapak Joko journey requires lansia-friendly UI, WhatsApp proven lintas generasi adoption.

**Implementation:**

- Mode Lansia toggle (3 giant buttons, 24pt font, high contrast)
- Simple navigation (3 tabs max)
- SMS confirmations (Phase 2A) untuk reassurance

**Expected Impact:**

- Lansia confidence building
- Independence (tanpa perlu bantuan anak/operator)
- Daily usage across all age groups

**Timeline:** MVP Mode Lansia (Month 1-6), SMS/Voice Phase 2A (Month 7-12)

#### What to Adapt for BankSampah Context

**1. Gojek Real-Time Tracking → Transaction Status Transparency**

**Original Pattern:** Real-time driver location tracking untuk ride-hailing

**BankSampah Adaptation:** Real-time dashboard update (<1s), transaction status always visible, push notification confirmation

**Why Adapt:**

- Different context (waste transactions vs ride-hailing)
- Transparency principle sama (visibility builds trust)
- Real-time feedback reinforces behavior

**Implementation:**

- Supabase Realtime WebSocket connection
- Dashboard update <1s latency target
- Push notification within 30s

**Timeline:** MVP (Month 1-6)

---

**2. BCA Mobile Balance Prominence → Dual Ledger Hero Section**

**Original Pattern:** Rupiah balance dominant di hero section (financial-only emphasis)

**BankSampah Adaptation:** Dual ledger "Rp 150,000 | 100kg" equally prominent, environmental narrative subtext

**Why Adapt:**

- BankSampah unique value = dual value (financial + environmental), bukan financial-only
- Identity transformation requires both metrics visible
- Equal emphasis necessary (not Rupiah-dominant)

**Implementation:**

- Hero section dual ledger same font size (32pt)
- Environmental narrative subtext ("= 50 pohon ditanam", 16pt)
- Both values updated real-time

**Timeline:** MVP (Month 1-6)

---

**3. Duolingo Friend Leaderboards → Community Solidarity Leaderboards**

**Original Pattern:** Friend-based competition dengan weekly reset (individual rankings)

**BankSampah Adaptation:** Kelurahan-based solidarity framing ("Top 10% di kelurahan"), community milestones ("Kelurahan kita 10 ton!")

**Why Adapt:**

- BankSampah social context = community solidarity (not individual competition)
- Local community relevant (kelurahan = neighborhood scale)
- Solidarity > competition (environmental cause = collective effort)

**Implementation:**

- Leaderboard percentile framing (not absolute rank)
- Community milestones celebrated (collective achievement)
- Social challenges kelurahan-based ("Target 10 ton bulan ini")

**Timeline:** MVP (Month 1-6 individual, Phase 2A Month 7-12 community features)

#### What to Avoid

**1. LinkedIn Endorsement Spam → No Notification Spam**

**Why Avoid:** Excessive notifications create annoyance, users disable all notifications (loses critical channel).

**BankSampah Strategy:**

- Notification critical only (transaction complete, streak reminder, badge unlock)
- No vanity notifications (no "Someone viewed your profile")
- Timing optimal (not spammy)

---

**2. Facebook News Feed Complexity → Simple Dashboard Hierarchy**

**Why Avoid:** Information overload creates distraction, infinite scroll prevents task completion.

**BankSampah Strategy:**

- Dashboard simple (dual ledger + latest impact + gamification above fold)
- Detail pages progressive disclosure (not everything on homepage)
- No infinite scroll (finite content, clear endpoints)

---

**3. Complicated Referral Programs → Simple Social Challenges**

**Why Avoid:** Multi-step referrals high friction (users don't complete complex flows).

**BankSampah Strategy:**

- "Ajak 3 teman = bonus badge" simple mechanic
- 1-tap share referral link (no complex tracking)
- Reward immediate (not delayed)

---

## Design System Foundation

### Design System Choice

**Selected: NativeBase with Custom Theme**

NativeBase dipilih sebagai design system foundation untuk BankSampah karena optimal balance antara speed, flexibility, dan accessibility support.

**Design System Type:** Themeable System (customizable with strong foundation)

**Technology Stack:**

- **UI Library:** NativeBase 3.x
- **Platform:** React Native + Expo
- **Animation:** Lottie (lightweight animations)
- **Icons:** React Native Vector Icons (customizable)
- **Theme Management:** NativeBase Theme (token-based)

### Rationale for Selection

**1. React Native Native Architecture**

NativeBase built specifically untuk React Native (not web library adapted to mobile):

- Zero conversion overhead (no bridging complexity)
- Component performance optimized untuk mobile
- Native gesture support (swipe, pinch, touch)
- Consistent behavior across iOS & Android

**Why This Matters for BankSampah:**

- <1s dashboard latency target achievable (native performance)
- Smooth animations untuk celebrations (60fps)
- Gesture support untuk future features (swipe actions, pull-to-refresh)

---

**2. Accessibility Built-In (Mode Lansia Foundation)**

NativeBase provides WCAG 2.1 AA compliance out-of-box:

- Font scaling automatic (respects iOS/Android system settings)
- High contrast mode support (toggle-able)
- Screen reader compatible (VoiceOver, TalkBack)
- Touch target minimum enforced (44x44pt default)
- Color contrast ratios compliant (text readability)

**Why This Matters for BankSampah:**

- Bapak Joko journey (67 tahun lansia) requires accessibility
- Mode Lansia implementation faster (foundation already compliant)
- Legal compliance (PDP Indonesia, app store requirements)
- Future-proof (accessibility standards evolving)

---

**3. Theme System Supports Progressive UX (4 Levels)**

NativeBase theme system token-based dan runtime-switchable:

- Multiple themes simultaneously (Level 1 Simple, Level 2 Detailed, Level 3 Power, Mode Lansia)
- Token customization granular (fontSize, spacing, colors per level)
- Runtime theme switching instant (no app restart)
- Component variants per theme (same component, different styles)

**Why This Matters for BankSampah:**

- Progressive UX critical (4 levels: Simple → Detailed → Power → Lansia)
- User can toggle Mode Lansia instantly (1-tap settings switch)
- Gradual unlock smooth (Level 1 → 2 → 3 transitions seamless)
- Single codebase (not 4 separate UIs)

---

**4. Solo/Duo Dev Timeline Feasible (6-Month MVP)**

NativeBase accelerates development untuk small teams:

- Component library comprehensive (50+ components ready-to-use)
- Documentation excellent (learning curve manageable)
- Community large (Stack Overflow support, 19k+ GitHub stars)
- TypeScript support (type safety prevents bugs)
- Examples abundant (copy-paste starter code available)

**Why This Matters for BankSampah:**

- Solo/duo dev constraint critical (cannot build from scratch)
- 6-month MVP timeline tight (need proven components)
- Maintenance easier (community updates, bug fixes)
- Onboarding new devs faster (standard library vs custom system)

---

**5. Component Coverage Matches BankSampah Needs**

NativeBase includes components needed untuk core flows:

- **Bottom Tab Navigation:** Instagram/WhatsApp pattern (3-4 tabs)
- **Modal System:** Badge unlock celebrations, confirmations
- **Toast Notifications:** Transaction feedback instant
- **Progress Bars:** Streak counter, badge progress
- **Form Components:** Onboarding, settings, profile
- **Cards & Lists:** Dashboard elements, transaction history
- **Badges:** Gamification visual indicators

**Why This Matters for BankSampah:**

- 80%+ UI from library (20% custom only)
- Custom components build on NativeBase primitives (consistency)
- Design patterns proven (not reinventing navigation/modals)

---

**Alternative Considered: Tamagui (Not Selected)**

**Pros:** Performance exceptional, cross-platform true (Web + Mobile)

**Why Not Selected:**

- Newer library (smaller community, less Stack Overflow support)
- Learning curve steep (architecture unfamiliar)
- Solo dev risk (complexity might delay MVP)
- Documentation less mature (vs NativeBase 8+ years)

**Decision:** Speed to MVP prioritized over marginal performance gains. NativeBase proven, Tamagui promising but risky untuk tight timeline.

---

**Alternative Considered: React Native Paper (Not Selected)**

**Pros:** Material Design proven, community large

**Why Not Selected:**

- Material Design opinionated (generic look conflicts blue ocean positioning)
- Customization effort high (override Material defaults extensive)
- Mature gamification harder (Material default playful, kita need professional)
- Visual differentiation limited (looks like Google products)

**Decision:** Brand uniqueness critical untuk blue ocean. Material Design too generic.

---

**Alternative Considered: Custom Design System (Not Selected)**

**Pros:** Complete uniqueness, full control

**Why Not Selected:**

- Timeline prohibitive (6-month MVP cannot include design system + features)
- Accessibility manual (WCAG compliance from scratch = months)
- Maintenance burden (solo dev cannot maintain custom system long-term)
- Reinventing wheel (bottom tabs, modals, forms already solved)

**Decision:** Custom system deferred to Phase 2A/2B (after MVP validation). NativeBase provides 80% foundation, customize 20% critical components only.

### Implementation Approach

**Phase 1: Theme Foundation Setup (Week 1-2)**

**Objective:** Define design tokens untuk 4 UI levels (Simple, Detailed, Power, Lansia)

**Design Token Structure:**

```yaml
# Level 1 Simple (Default - Ibu Siti first 3 transactions)
level1:
  fontSize:
    hero: 32pt # Dual ledger "Rp 150,000 | 100kg"
    body: 16pt # Impact narrative
    caption: 12pt # Subtext, timestamps
  spacing:
    tight: 8px
    normal: 16px
    loose: 24px
  colors:
    primary: green.600 # Environmental brand
    secondary: gray.600 # Supporting text
    accent: gold.500 # Badges, highlights
  components:
    button: { height: 48px, fontSize: 16pt }
    card: { padding: 16px, borderRadius: 12px }

# Level 2 Detailed (Unlock after 3 transactions)
level2:
  fontSize:
    hero: 28pt
    body: 14pt
    caption: 10pt
  spacing:
    tight: 6px
    normal: 12px
    loose: 18px
  colors:
    primary: green.600
    secondary: blue.500 # Charts, analytics
    accent: gold.500
  components:
    button: { height: 44px, fontSize: 14pt }
    card: { padding: 12px, borderRadius: 10px }

# Level 3 Power (Unlock after 10 transactions)
level3:
  fontSize:
    hero: 24pt
    body: 12pt
    caption: 9pt
  spacing:
    tight: 4px
    normal: 8px
    loose: 12px
  colors:
    primary: green.700
    secondary: blue.600
    charts: [green, blue, gold, teal] # Multi-color charts
    accent: gold.600
  components:
    button: { height: 40px, fontSize: 12pt }
    card: { padding: 8px, borderRadius: 8px }

# Mode Lansia (Always accessible - Bapak Joko)
lansia:
  fontSize:
    hero: 48pt # Giant text
    body: 24pt
    caption: 18pt
  spacing:
    tight: 16px
    normal: 32px
    loose: 48px
  colors:
    primary: green.900 # High contrast
    secondary: black # Maximum contrast
    accent: gold.700
    background: white # Pure white (not off-white)
  components:
    button: { height: 88px, fontSize: 24pt, margin: 20px } # Double size
    card: { padding: 32px, borderRadius: 16px }
```

**Deliverables:**

- `theme/tokens.ts` - Design token definitions
- `theme/level1.ts` through `theme/lansia.ts` - Theme variants
- `theme/index.ts` - Theme provider dengan runtime switching

---

**Phase 2: Priority Component Customization (Week 3-6)**

**Objective:** Customize NativeBase components untuk BankSampah brand identity

**Priority Components List:**

**1. Dashboard Card (Hero Section)**

**Base:** NativeBase `Box` + `HStack`

**Customization:**

- Dual ledger layout (Rupiah | kg equally prominent)
- Environmental narrative subtext
- Real-time update indicator (pulse animation)
- 4 variants (Level 1/2/3/Lansia sizing)

**Design Specs:**

- Hero text: 32pt (Level 1) → 48pt (Lansia)
- Icon: Scale/leaf icon 40x40px
- Spacing: 16px padding (Level 1) → 32px (Lansia)
- Shadow: Subtle depth (elevation 2)

---

**2. Bottom Tab Navigation**

**Base:** NativeBase `BottomTabBar`

**Customization:**

- 4 tabs standard: Dashboard, Transaksi, Community, Profile
- 3 tabs lansia: Dashboard, Transaksi, Profile (hide Community untuk simplicity)
- Icon + label always visible (not icon-only)
- Active state: Primary color + bold text

**Design Specs:**

- Touch target: 56px height (standard) → 88px (Lansia)
- Icon size: 24x24px (standard) → 40x40px (Lansia)
- Label: 12pt (standard) → 18pt (Lansia)

---

**3. Badge Component (Gamification)**

**Base:** NativeBase `Badge` + `Icon`

**Customization:**

- Mature visual design (aspirational icons: leaf, tree, earth)
- Gold accent color (achievement highlight)
- 3 sizes: Small (16x16px), Medium (24x24px), Large (40x40px)
- Progress indicator (circular ring for "almost unlocked")

**Design Specs:**

- Icon: Vector graphics (scalable)
- Background: Gold gradient (not flat)
- Border: 2px solid gold.700 (definition)
- Shadow: Glow effect (celebratory feel)

---

**4. Celebration Modal (Badge Unlock)**

**Base:** NativeBase `Modal` + `VStack`

**Customization:**

- Confetti animation (Lottie)
- Badge icon prominent (80x80px center)
- Celebratory copy aspirational ("Environmental Champion 100kg!")
- Share button CTA (1-tap share flow)
- Dismiss button subtle (bottom)

**Design Specs:**

- Modal size: 80% screen width, auto height
- Animation: Confetti 2s loop (then static)
- Copy: 24pt bold title, 16pt body
- Button: "Bagikan Pencapaian" primary, "Tutup" secondary

---

**5. Transaction List Item**

**Base:** NativeBase `HStack` + `VStack`

**Customization:**

- Dual columns (Rupiah left, kg right)
- Date/time subtext
- Impact narrative expandable (tap to show "= X pohon")
- Separator subtle (divider)

**Design Specs:**

- Row height: 72px (standard) → 120px (Lansia)
- Font: 16pt amount (standard) → 24pt (Lansia)
- Icon: Waste type icon 32x32px
- Spacing: 12px padding vertical

---

**Deliverables:**

- `components/DashboardCard.tsx`
- `components/BottomTabs.tsx`
- `components/Badge.tsx`
- `components/CelebrationModal.tsx`
- `components/TransactionListItem.tsx`

---

**Phase 3: Custom Components (Week 7-10)**

**Objective:** Build BankSampah-specific components dari NativeBase primitives

**Custom Components List:**

**1. Dual Ledger Display (Compound Component)**

**Purpose:** Hero section dashboard dual value (Rupiah + kg)

**Structure:**

- Container: NativeBase `Box`
- Layout: NativeBase `HStack` (Rupiah | Divider | kg)
- Text: NativeBase `Text` custom styled

**Features:**

- Real-time update (WebSocket connected)
- Pulse animation on update (visual feedback)
- Responsive sizing (4 theme variants)

---

**2. Streak Counter (Animated Progress Ring)**

**Purpose:** Gamification streak tracking visual

**Structure:**

- Base: NativeBase `Circle` + SVG arc
- Animation: React Native Animated API
- Icon: Fire emoji/icon center

**Features:**

- Progress ring animates (0% → X% filled)
- Color gradient (green → gold as streak grows)
- Tap to view streak history

---

**3. Impact Narrative Card**

**Purpose:** Environmental storytelling ("100kg = 50 pohon")

**Structure:**

- Container: NativeBase `Card`
- Icon: Tree/leaf graphic
- Text: NativeBase `Text` + `Heading`

**Features:**

- Dynamic calculation (kg → pohon/CO2/impact)
- Shareable (tap to generate share card)
- Expandable (show detailed breakdown)

---

**4. Share Card Generator**

**Purpose:** Instagram Story format visual card generation

**Structure:**

- Canvas: React Native ViewShot (screenshot component)
- Layout: 1080x1920px (Instagram Story dimensions)
- Branding: BankSampah logo, colors

**Features:**

- Auto-generate from badge/impact data
- Preview before share
- Native share sheet (pick Instagram/WhatsApp)

---

**5. Mode Lansia Toggle (Settings Switch)**

**Purpose:** Instant theme switching untuk accessibility

**Structure:**

- Base: NativeBase `Switch`
- Label: "Mode Lansia" prominent
- Icon: Accessibility icon

**Features:**

- Toggle instant (no app restart)
- Persistent (saved to AsyncStorage)
- Preview modal (show before/after)

---

**Deliverables:**

- `components/DualLedgerDisplay.tsx`
- `components/StreakCounter.tsx`
- `components/ImpactNarrativeCard.tsx`
- `components/ShareCardGenerator.tsx`
- `components/LansiaToggle.tsx`

### Customization Strategy

**Visual Branding (BankSampah Identity)**

**Color Palette:**

**Primary: Green (Environmental Association)**

- green.600: `#16a34a` (Main brand color)
- green.700: `#15803d` (Hover/active states)
- green.900: `#14532d` (High contrast lansia mode)

**Rationale:** Green universal untuk environment, calming (not alarming), positive association (growth, nature).

**Secondary: Blue (Trust & Financial Reliability)**

- blue.500: `#3b82f6` (Charts, analytics)
- blue.600: `#2563eb` (Links, secondary actions)

**Rationale:** Blue banking precedent (BCA, BRI = blue), trust psychological association, financial credibility.

**Accent: Gold (Achievement & Gamification)**

- gold.500: `#f59e0b` (Badge highlights)
- gold.600: `#d97706` (Badge borders)
- gold.700: `#b45309` (Celebration accents)

**Rationale:** Gold = achievement, premium feel (not childish), mature gamification tone.

**Neutral: Gray (Supporting Elements)**

- gray.600: `#4b5563` (Body text standard)
- gray.800: `#1f2937` (Headings)
- black: `#000000` (Lansia mode high contrast)
- white: `#ffffff` (Backgrounds, lansia mode)

---

**Typography (Clarity & Readability)**

**Primary Font: Inter**

- **Why Inter:** Clean sans-serif, modern aesthetic (Instagram polish expectations), excellent readability di small sizes, open-source (no licensing cost)
- **Weights:** Regular (400), Medium (500), Bold (700)
- **Usage:** Body text, headings, UI elements

**Fallback: System Font**

- **iOS:** SF Pro (Apple default)
- **Android:** Roboto (Google default)
- **Why Fallback:** WhatsApp simplicity precedent, lansia familiarity, zero load time (native font)

**Font Scaling (4 Levels):**

- Level 1 Simple: 16pt body → Comfortable first-time users
- Level 2 Detailed: 14pt body → More content fits on screen
- Level 3 Power: 12pt body → Dense information for power users
- Mode Lansia: 24pt body → Maximum readability

---

**Component Visual Style**

**Cards:**

- Border radius: 12px (modern, friendly - not sharp corporate 0px or overly round 24px)
- Shadow: Subtle elevation (2dp) - depth without heavy drop shadow
- Padding: 16px standard → 32px lansia (generous spacing)
- Background: White (not off-white gray) - clean Instagram aesthetic

**Buttons:**

- Border radius: 8px (slightly rounded)
- Height: 48px standard → 88px lansia (thumb-friendly)
- Touch target: 44x44pt minimum (accessibility compliance)
- Feedback: Scale animation 0.95 on press (micro-interaction)

**Spacing:**

- Generous whitespace (WhatsApp simplicity, not cramped)
- Consistent 8px grid (8, 16, 24, 32, 48px multiples)
- Breathing room around interactive elements (prevent mis-taps)

**Shadows:**

- Subtle depth (not heavy Material Design shadows)
- Elevation 2dp standard, 4dp modals (hierarchy clear)
- No shadows lansia mode (high contrast priority over depth)

---

**Gamification Visual Language (Mature Design)**

**Objective:** Gamification terasa aspirational dan mature, NOT childish atau patronizing untuk ibu rumah tangga 40an.

**Badge Icon Design:**

- **Style:** Vector graphics clean (not cartoon illustrations)
- **Themes:** Nature iconography (leaves, trees, earth, waves)
- **Color:** Gold accent (achievement feel, not rainbow)
- **Size:** 40x40px standard → 64x64px lansia

**Examples:**

- "Champion 100kg" = Oak tree icon (strong, established)
- "Streak 7 Hari" = Flame icon (momentum, not childish fire emoji)
- "Community Leader" = Connected people icon (network, not trophy)

---

**Celebration Animations:**

- **Confetti:** Elegant fall (not chaotic explosion)
- **Color:** Green + gold (brand consistent, not rainbow)
- **Duration:** 2 seconds loop (celebratory not annoying)
- **Dismissible:** User can skip (respect user control)

**Library:** Lottie animations (lightweight JSON, 60fps smooth)

---

**Progress Bars:**

- **Style:** Gradient fills (green → gold as progress increases)
- **Shape:** Rounded ends (friendly, not sharp)
- **Background:** Light gray (subtle, not prominent)
- **Animation:** Smooth transition (not jumpy)

**Example:** Streak counter ring fills gradually (0% → 100% over 2s animation)

---

**Leaderboard Visual:**

- **Layout:** Card-based (not table rows)
- **Ranking:** Percentile text ("Top 10%") not absolute rank (#15)
- **Avatar:** Initial circle (colored, not photos)
- **Spacing:** Generous (not cramped list)
- **Tone:** Community solidarity (not competition aggression)

**Anti-Pattern Avoided:** Trophy icons, podium graphics (too competitive, not solidarity)

---

**Accessibility Customization (Mode Lansia)**

**Objective:** Bapak Joko (67 tahun) dapat use app independently dengan confidence.

**Visual Overrides:**

**1. Button Size Doubling**

- Standard: 48px height, 16pt text
- Lansia: 88px height, 24pt text
- Margin: 20px around buttons (prevent mis-taps)
- Width: Minimum 60% screen width (easy to hit)

**2. Font Size Increase**

- Hero: 32pt → 48pt (dual ledger massive)
- Body: 16pt → 24pt (all text readable)
- Caption: 12pt → 18pt (even subtext clear)
- Minimum: 18pt (nothing smaller)

**3. High Contrast Mode**

- Text: Black on white (not gray on light gray)
- Buttons: Primary green.900 (dark green, high contrast)
- Borders: 2px solid black (clear definition)
- No subtle grays (everything high contrast)

**4. Touch Target Expansion**

- Minimum: 88x88pt (double standard 44x44pt)
- Spacing: 20px margin around all interactive elements
- Visual: Large buttons naturally guide touch
- Feedback: Stronger haptic feedback (confirm press)

**5. Simplified Navigation**

- Tabs: 3 only (Dashboard, Transaksi, Profile)
- Hide: Community tab (reduce complexity)
- Icons: Paired with text labels (not icons-only)
- Active state: Very clear (bold text + color)

**6. Icon + Text Pairing**

- Never icons-only (always label alongside)
- Icon size: 40x40px (larger than standard 24x24px)
- Label: 18pt minimum (readable)
- Spacing: 8px between icon & text

**7. SMS Confirmations (Phase 2A)**

- Push notifications + SMS backup
- SMS text format: "Transaksi berhasil. Rp 15,000 | 10kg. BankSampah."
- Phone number validation (lansia familiarity)

**8. Voice Guidance (Phase 2A)**

- Text-to-speech for key actions
- "Transaksi berhasil" audio confirmation
- Optional enable/disable (settings)

---

**WCAG 2.1 AA Compliance Checklist:**

✅ **Color Contrast:** 4.5:1 minimum (text to background)
✅ **Touch Targets:** 44x44pt minimum (88x88pt lansia)
✅ **Font Scaling:** System font size respected
✅ **Focus Indicators:** Visible keyboard navigation (future desktop)
✅ **Screen Reader:** VoiceOver/TalkBack compatible labels
✅ **Non-Text Contrast:** 3:1 minimum (UI components)

---

## Core User Interaction Design

### Defining Experience

**BankSampah's Defining Experience:**

**"Setor sampah → Instantly see dual impact (Rupiah + Environmental story) → Feel identity transformation"**

Ini adalah core interaction yang, jika we nail it, everything else follows. Bukan sekadar "transaction complete" - ini adalah moment transformational dimana user realize:

- **Financial value:** "Sampah saya ada harganya"
- **Environmental impact:** "Saya contribute ke lingkungan"
- **Identity shift:** "Saya bukan cuma buang sampah, saya environmental champion"

**How Users Describe BankSampah to Friends:**

**Ibu Siti (40an warm):**
"Ada app ini lho, tiap setor sampah langsung kelihatan berapa rupiah sama sudah selamatkan berapa pohon!"

**Rina (Gen Z cold):**
"Gue setor sampah bisa dapet badge terus bisa di-share ke Instagram Story, keren banget visualnya"

**Bapak Joko (67 lansia):**
"Aplikasi bank sampah yang gampang banget, tombol gede-gede, baca jelas"

**Famous Product Analogy:**

- Like **Duolingo's streak:** Keep daily streak alive (habit formation)
- Like **Instagram's like:** Post photo → Instant likes/comments (immediate gratification)
- Like **WhatsApp's checkmark:** Message sent → Delivered → Read (status visibility)

**BankSampah = Deposit waste → Instant dual impact visibility → Identity reinforcement**

### User Mental Model

**Current Mental Model (Pre-BankSampah):**

#### Ibu Siti (40an Warm Onboarding)

**Mental Model:** "Bank sampah = buku tabungan fisik"

**Expectation:**

- Operator tulis di buku manual
- Saya lihat angka rupiah di buku
- Saldo final setelah operator hitung manual

**Pain Points:**

- Buku hilang = data loss
- Angka tidak clear (tulisan tangan)
- Harus nunggu operator hitung (slow)

**Current Success Definition:** "Saya tahu berapa saldo saya" (financial-only focus)

---

#### Rina (Gen Z Cold Self-Service)

**Mental Model:** "App = Instagram/Gojek level UX"

**Expectation:**

- Sign up 30 detik max
- Langsung bisa pakai (no waiting)
- UI modern, smooth animations
- Shareable ke sosmed (1-tap share)

**Pain Points:**

- Onboarding lama/complex (form panjang)
- UI jadul (tidak polish)
- Tidak ada gamification (boring)
- Not Instagram-worthy (tidak ada share feature)

**Current Success Definition:** "App ini worthy untuk di-share ke teman-teman"

---

#### Bapak Joko (67 Tahun Lansia)

**Mental Model:** "Teknologi itu ribet, anak-anak yang ngerti"

**Expectation:**

- Tombol jelas dan besar
- Tulisan readable (tidak kecil)
- Tidak banyak pilihan (confusing)
- Confirmation jelas (tidak silent)

**Pain Points:**

- Tulisan kecil (tidak bisa baca tanpa kacamata)
- Tombol kecil (sering salah pencet)
- Bingung harus ngapain (tidak ada guidance)
- Perlu minta tolong anak/operator terus

**Current Success Definition:** "Saya bisa sendiri tanpa bantuan"

---

**Transformation to New Mental Model (BankSampah Goal):**

**Fundamental Shift:**

**FROM:** "Bank sampah = tempat tukar sampah dapat uang"

**TO:** "BankSampah = platform untuk jadi environmental champion sambil dapat penghasilan"

**Key Mindset Shifts:**

**1. From Transaction to Identity**

- **Old:** "Dapat Rp 15,000" (transactional focus)
- **New:** "Saya sudah selamatkan 10kg = 5 pohon" (identity transformation)

**2. From Isolated to Community**

- **Old:** Individual setor sampah (no social context)
- **New:** "Saya bagian dari kelurahan yang peduli lingkungan" (community belonging)

**3. From Infrequent to Habit**

- **Old:** Monthly setor (4% MAU/DAU)
- **New:** Daily streak dengan gamification (65% MAU/DAU target)

**4. From Cash-Only to Dual Value**

- **Old:** Rupiah-only focus ("berapa duit saya?")
- **New:** Rupiah + environmental impact equally important ("berapa pohon saya selamatkan?")

---

**User Expectation Mapping (Based on App Experience):**

**From Banking Apps (BCA Mobile, BRImo):**

- ✅ Balance always visible (hero section)
- ✅ Transaction history detailed
- ✅ Withdrawal transparent timeline
- ✅ Security reliable (biometric unlock)
- ✅ Real-time updates (not delayed sync)

**From Social Apps (Instagram, WhatsApp):**

- ✅ Shareable moments (1-tap share flow)
- ✅ Notifications timely (not spam)
- ✅ Smooth animations (60fps)
- ✅ Bottom navigation consistent
- ✅ Stories format (vertical full-screen cards)

**From Gamification Apps (Duolingo, Strava):**

- ✅ Streak tracking visible
- ✅ Badge unlock celebratory
- ✅ Leaderboard friendly competition
- ✅ Progress bars motivating
- ✅ Daily reminders (push notifications)

**BankSampah Must Meet ALL These Expectations:**

- **Banking-level trust** (financial reliability)
- **Social-level polish** (Instagram UX expectations)
- **Gamification-level engagement** (Duolingo habit formation)

---

**Where Users Likely Get Confused (Mitigation Strategies):**

**Confusion Point 1: "Kenapa ada 2 angka? (Rupiah sama kg)"**

**Mitigation:**

- First-time tooltip: "Dual ledger: Nilai finansial + dampak lingkungan"
- Visual icons: Rupiah = 💰 wallet icon, kg = 🌿 leaf/scale icon
- Operator explains: Warm onboarding script includes dual ledger explanation
- Tutorial overlay: Optional "Tap untuk info" (not mandatory blocking modal)

---

**Confusion Point 2: "Badge ini buat apa? Kayak game anak-anak?"**

**Mitigation:**

- Copy aspirational: "Environmental Champion 100kg" (not cutesy "Super Recycler!")
- Visual mature: Gold accent, professional icons (leaf, tree, earth), not cartoon
- Context explanation: "Badge menunjukkan pencapaian lingkungan Anda" (meaningful achievement)
- Social proof: "Bagikan ke Instagram" button (validates badge as shareable/valuable)

---

**Confusion Point 3: "Cara setor sampah gimana? (Cold self-service users)"**

**Mitigation:**

- Onboarding screen: "Bawa sampah ke lokasi drop-off terdekat, tunjukkan QR code ke operator"
- Map integration: Nearby drop-off locations visible (Google Maps)
- Visual tutorial: Ilustrasi QR scan flow (3-step visual)
- Alternative: Cold drop-off self-scan (Phase 2A - QR scan waste bins)

---

**Confusion Point 4: "Mode Lansia itu apa? (Lansia users)"**

**Mitigation:**

- Settings prominent: "Mode untuk lansia - Tombol lebih besar, tulisan lebih jelas"
- Preview visual: Before/after comparison (side-by-side screenshots)
- Operator activation: Pak Budi helps Bapak Joko activate di first transaction (warm onboarding)
- Persistent toggle: Once enabled, stays enabled (no per-session re-selection)

### Success Criteria

**Core Experience Success = "This Just Works"**

#### Criteria 1: Instant Gratification (<3s Transaction)

**Benchmark:**

- Operator scan QR → Auto-populate → Confirm weight/price → Done
- Total time: <3 seconds (3 taps maximum)
- Dashboard update: <1 second latency (WebSocket real-time)
- Push notification: Within 30 seconds (Firebase Cloud Messaging)

**User Feeling:**
"Wah cepet banget! Gak perlu nunggu operator nulis-nulis di buku lagi kayak dulu"

**Technical Implementation:**

- Supabase Realtime (WebSocket) for instant dashboard sync
- Optimistic UI updates (show change immediately, confirm after)
- Push notification queue (Firebase reliable delivery)

---

#### Criteria 2: Dual Impact Immediately Visible (No Scrolling)

**Visual Hierarchy:**

- Hero section: **"Rp 150,000 | 100kg"** (above fold, largest text 32pt)
- Environmental narrative: **"= 50 pohon ditanam"** (subtext 16pt, immediate)
- No tap/scroll required untuk primary info (banking app precedent)

**User Feeling:**
"Langsung kelihatan total saldo sama impact lingkungan saya, gak perlu cari-cari"

**Technical Implementation:**

- Dashboard layout: Hero section fixed at top (no scroll hijack)
- Font hierarchy: Dual ledger 32pt, narrative 16pt (clear visual priority)
- Color coding: Rupiah = green, kg = blue, pohon = leaf icon

---

#### Criteria 3: Identity Transformation Reinforced (Every Interaction)

**Copy Strategy:**

**Dashboard Header:**

- ❌ Bad: "Saldo anda: Rp 150,000"
- ✅ Good: "Anda sudah menyelamatkan 100kg sampah = 50 pohon ditanam"

**Transaction Confirmation:**

- ❌ Bad: "Transaction successful"
- ✅ Good: "Kontribusi lingkungan bertambah! +10kg = 5 pohon"

**Badge Unlock:**

- ❌ Bad: "100kg reached"
- ✅ Good: "Environmental Champion 100kg - Anda telah menyelamatkan 50 pohon!"

**User Feeling:**
"Saya bukan cuma buang sampah dapat uang, saya champion lingkungan yang contribute nyata"

---

#### Criteria 4: Gamification Feels Mature (Not Childish)

**Visual Design:**

- Badge icons: Gold accent, vector graphics (leaf, tree, earth), professional not cartoon
- Celebration animation: Confetti elegant fall (not chaotic party poppers)
- Copy tone: "Selamat! Anda telah mencapai..." (respectful) vs "Yay! Good job!" (patronizing)

**User Feeling:**
"Badge ini worthy untuk di-share ke Instagram, gak malu-maluin"

**Anti-Pattern Avoided:**

- Cartoon graphics (childish)
- Patronizing copy ("Wow kamu hebat sekali!")
- Toy-like animations (rainbow colors, excessive sparkles)

---

#### Criteria 5: Accessibility Works (Lansia Independent Usage)

**Mode Lansia Specifications:**

- Button size: 88x88pt (double standard 44pt)
- Font size: 24pt body minimum (readable without glasses)
- Touch targets: 20px margin (prevent mis-taps)
- High contrast: Black text on white (not gray on light gray)
- Navigation: 3 tabs only (Dashboard, Transaksi, Profile)

**User Feeling (Bapak Joko):**
"Saya bisa sendiri, gak perlu minta tolong anak atau operator terus. Saya mandiri!"

---

**Speed Benchmarks Summary:**

| Action                     | Target | Measurement                |
| -------------------------- | ------ | -------------------------- |
| Transaction completion     | <3s    | Operator scan → confirm    |
| Dashboard load             | <1s    | Real-time WebSocket update |
| Badge unlock celebration   | 2s     | Confetti animation loop    |
| Share card generation      | <2s    | Visual card render ready   |
| Push notification delivery | <30s   | Firebase FCM delivery      |

**Automatic Actions (Zero User Effort):**

- ✅ Dashboard update (no manual refresh)
- ✅ Streak counting (no manual log)
- ✅ Badge unlock (no manual claim)
- ✅ Push notifications (no in-app check required)
- ✅ Impact calculation (kg → pohon/CO2 conversion)
- ✅ Transaction history logging (automatic entry)

### Novel UX Patterns

**Innovation Required for BankSampah's Unique Value Proposition:**

#### Innovation 1: Dual Ledger Display (Rupiah + kg Equally Prominent)

**Why Novel:**

- **Banking apps:** Rupiah-only (single value display)
- **Fitness apps:** kg-only (single metric tracking)
- **BankSampah:** Dual value equally prominent (financial + environmental)

**No Existing Precedent:** Zero apps show dual values dengan equal visual hierarchy.

**Teaching Strategy:**

**First-Time User Education:**

- Tooltip on dashboard: "Dual ledger menunjukkan nilai finansial + dampak lingkungan"
- Visual hierarchy: Same font size 32pt, same color weight (equal emphasis)
- Familiarity anchor: Rupiah left (banking precedent), kg right (new metric)

**Warm Onboarding (Ibu Siti):**

- Operator Pak Budi explains: "Bu, di app ini ada 2 angka ya. Yang kiri itu uang rupiah seperti biasa, yang kanan itu berat sampah dalam kg. Jadi Ibu bisa lihat total uang sama total sampah yang sudah disetor."

**Cold Self-Service (Rina):**

- Tooltip di first open: "💡 Tip: Angka kiri = saldo Rupiah, angka kanan = total kg sampah"
- Dismissible (user can close after reading)
- Never show again (don't annoy repeat users)

**Mode Lansia (Bapak Joko):**

- Simplified tooltip: "Uang kamu | Sampah kamu"
- Larger text (24pt)
- Operator helps activate & explain first time

---

#### Innovation 2: Progressive UX Unlocking (Level 1 → 2 → 3 → Lansia)

**Why Novel:**

- **Gaming:** Unlock features via gameplay (expected in games, but BankSampah is NOT game)
- **Most apps:** All features upfront (standard approach)
- **BankSampah:** Automatic unlock based on behavior (gamification hybrid for non-game app)

**No Direct Precedent:** Apps either show all features OR require manual settings. Automatic behavior-based unlocking rare.

**Teaching Strategy:**

**Modal Announcement (Celebrate Unlock):**

```
🎉 Fitur Baru Tersedia!

Transaction History
Lihat riwayat lengkap transaksi dan dampak lingkungan Anda.

[Jelajahi Sekarang]  [Nanti]
```

**Tutorial Overlay (Optional, Not Mandatory):**

- Contextual help: Appears when user taps new unlocked feature
- Skippable: "Lewati" button always visible (not blocking)
- Just-in-time: Shows when relevant, not upfront tutorial

**Level Indicator (Subtle Status):**

- Profile screen: "Level 2 User" badge (small, not prominent)
- Progress bar: "3 transaksi lagi unlock Level 3" (motivating)

**Familiar Metaphors (Reduce Novelty Friction):**

- Like **LinkedIn profile completion:** "% complete" bar familiar
- Like **credit card limit increases:** Automatic upgrade after usage proven
- Like **game level progression:** Leveling up familiar dari gaming

---

#### Innovation 3: Identity Transformation Language (Not Transactional)

**Why Novel:**

- **Banking apps:** "Transaction successful" (transactional tone, cold)
- **E-commerce:** "Order placed" (commercial tone, impersonal)
- **BankSampah:** "Anda sudah menyelamatkan..." (transformational tone, personal)

**Linguistic Shift Required:** From system confirmation → personal achievement narrative.

**Teaching Strategy:**

**Consistency = Familiarity:**

- Every interaction uses identity framing (not just one-off)
- Dashboard opening: "Anda sudah menyelamatkan 100kg = 50 pohon"
- Transaction confirm: "Kontribusi lingkungan bertambah!"
- Badge unlock: "Environmental Champion - Anda telah..."

**Why It Works Without Teaching:**

- Emotional resonance (identity > transaction = naturally appealing)
- User expectation shift happens organically (reinforcement every touchpoint)
- Narrative consistency (users adapt to new framing quickly)

**Psychological Principle:**

- Repeated exposure (every interaction) = new normal (users adopt new mental model)
- Positive framing (achievement not task) = no resistance (users want to feel accomplished)

---

#### Innovation 4: Community Solidarity Leaderboard (Not Competitive Ranking)

**Why Novel:**

- **Gaming apps:** Rank #1, #2, #3 (competitive, toxic for bottom 90%)
- **Fitness apps:** "Beat your friends" (individual competition, zero-sum)
- **BankSampah:** "Top 10% di kelurahan" + community milestones (solidarity, positive-sum)

**Framing Innovation:** Percentile + collective achievement (not absolute rank + individual competition).

**Teaching Strategy:**

**Framing from First Exposure:**

- Leaderboard header: "Kelurahan kita top 3 se-kota!" (collective achievement first)
- Individual position: "Anda di top 10%" (percentile inclusive, not "Rank #15" exclusive)
- Community milestone: "Bersama kita sudah 10 ton!" (emphasis on collective)

**Visual Design Supports Framing:**

- Card-based layout (not table rows = less competitive feel)
- Percentile text large (not rank number)
- Community section prominent (collective achievement hero)

**Familiar Metaphors:**

- Like **credit score percentile:** "Top 25%" familiar metric (not scary rank)
- Like **community fundraisers:** Collective goals natural (everyone contributes)
- **Unlike toxic gaming leaderboards:** Avoided shame-based rankings

**Why Users Accept New Framing:**

- Environmental cause = naturally collaborative (not competitive zero-sum)
- Local community scale (kelurahan) = solidarity natural (neighbors not strangers)
- Positive reinforcement (top 10%) = feels good (no shame for bottom users)

### Experience Mechanics

**Detailed Step-by-Step Flow for Core Defining Experience:**

#### Step 1: Initiation (How User Starts Transaction)

**Trigger:** User arrives at drop-off location/operator dengan sampah

---

**Scenario A: Warm Onboarding (Ibu Siti)**

**User Action:**

- Ibu Siti: "Pak Budi, saya mau setor sampah"

**Operator Action:**

- Pak Budi: "Baik Bu Siti, QR code-nya saya scan ya"
- Scan QR code dari Ibu Siti's app (Profile screen QR prominent)

**System Action:**

- Auto-open app di user phone (push notification deep link)
- OR user buka app manual (if notification missed)
- Dashboard screen loads (QR scan detected via WebSocket event)

**User Experience:**

- Passive (user just shows QR, operator handles rest)
- Reassurance: Pak Budi verbal confirmation "Sudah saya scan Bu"

---

**Scenario B: Cold Self-Service (Rina)**

**User Action:**

- Rina walks to drop-off location
- Opens BankSampah app on phone
- Dashboard screen is default (home screen)

**App Interface:**

- QR code icon top-right corner (prominent placement)
- Rina taps QR icon → Full-screen QR code displays

**Operator Action:**

- Scan Rina's QR code (no verbal interaction needed)

**System Action:**

- QR scanned event → Dashboard updates real-time
- Push notification sent (even though app already open, for confirmation)

**User Experience:**

- Active (Rina initiates flow herself)
- Self-service complete (no hand-holding needed)

---

**Scenario C: Mode Lansia (Bapak Joko)**

**User Action:**

- Bapak Joko: "Saya mau setor sampah"

**Operator Action:**

- Scan Bapak Joko's QR code (sama flow as Ibu Siti)

**System Action:**

- Dashboard update (lansia mode UI = 3 giant buttons, 24pt text)
- Push notification + SMS confirmation: "Transaksi berhasil Rp 15,000" (dual channel untuk reassurance)

**User Experience:**

- Passive + double confirmation (push + SMS)
- Simplified UI (lansia mode active)

---

**Invitation to Begin (Onboarding Context):**

**App Home Screen:**

- QR code icon prominent (top-right, always visible)
- First-time tooltip: "Tunjukkan QR code ini ke operator saat setor sampah"

**Onboarding Tutorial (Warm):**

- Operator guides: "Bu, nanti kalau mau setor sampah, buka app ini terus tunjukkan QR code-nya ke saya ya"
- Demo transaction: First transaction operator assists (learning by doing)

#### Step 2: Interaction (What Happens During Transaction)

**Operator Side (Behind-the-Scenes, Affects UX Speed):**

1. **Scan QR Code** (camera opens, scan user QR)
2. **Auto-Populate Data** (user name, ID, current balance loads automatically)
3. **Input Waste Details:**
   - Select waste type: Plastik, Kertas, Botol, Logam (dropdown)
   - Input weight: Number pad (kg)
   - OR scan waste barcode (Phase 2A - IoT integration)
4. **System Calculates Price** (waste type × weight × current rate per kg)
5. **Review Screen:**
   - User: Ibu Siti
   - Waste: Plastik 10kg
   - Price: Rp 15,000 (Rp 1,500/kg × 10kg)
6. **Confirm:** Tap "Konfirmasi Transaksi" button (green, prominent)

**Total Time:** <3 seconds (operator trained, flow optimized)

---

**User Side (Passive Experience):**

**What User Does:**

- Show QR code (single passive action)
- Wait 3-10 seconds (operator processing time)

**What User Experiences:**

- Operator verbal: "Terima kasih Bu, transaksi berhasil Rp 15,000"
- Phone vibrates: Push notification arrives
- Screen updates: Dashboard numbers change (if app open)

**Zero Input Required:**

- No manual data entry
- No form filling
- No confirmation taps from user side
- Operator handles all interaction

---

**System Response (Real-Time Backend):**

**Transaction Processing:**

- <3 seconds operator-side (UI optimized for speed)
- Supabase PostgreSQL write (transaction logged)
- WebSocket broadcast (Supabase Realtime channel)

**Dashboard Update:**

- <1 second latency (WebSocket push to mobile)
- Optimistic UI (show change immediately, confirm after)
- Pulse animation (2s) on updated numbers (visual attention)

**Push Notification:**

- Within 30 seconds (Firebase Cloud Messaging queue)
- Format: "Transaksi berhasil! Rp 15,000 | 10kg"
- Deep link: Tap notification → Open app to dashboard

**Transaction History:**

- New entry added automatically (top of list)
- Details: Date, time, Rupiah, kg, waste type, operator name
- Status: Green "Berhasil" badge

#### Step 3: Feedback (Success Indicators)

**Immediate Feedback (During Transaction):**

**Verbal Confirmation (Operator):**

- "Transaksi berhasil Bu, Rp 15,000" (human reassurance)
- Important for Ibu Siti & Bapak Joko (warm onboarding users trust human confirmation)

**Push Notification (30s later):**

- Title: "Transaksi Berhasil!"
- Body: "Rp 15,000 | 10kg - Kontribusi lingkungan bertambah"
- Sound: Default notification tone
- Vibration: Standard haptic feedback

**Haptic Feedback (Physical Confirmation):**

- Phone vibrates when push notification arrives
- Tactile signal (works even if phone on silent)

---

**Visual Feedback (Open App):**

**Dashboard Hero Section (Immediate Visibility):**

**Before Transaction:**

- Dual ledger: **"Rp 150,000 | 100kg"**
- Impact: **"= 50 pohon ditanam"**

**After Transaction (Updated Real-Time):**

- Dual ledger: **"Rp 165,000 | 110kg"** (Rp +15,000, kg +10)
- Impact: **"= 55 pohon ditanam"** (pohon +5)
- Pulse animation: 2s subtle pulse on updated numbers (draw attention)

**Transaction List (New Entry Top):**

- Latest transaction appears at top
- Details:
  - Date: "26 Des 2025, 14:30"
  - Amount: "Rp 15,000 | 10kg"
  - Type: "Plastik"
  - Operator: "Pak Budi"
  - Status: Green "✓ Berhasil" badge

**Gamification Elements Updated:**

**Streak Counter:**

- Fire icon with number: "🔥 3" (if daily transaction)
- Progress text: "Streak 3 hari berturut-turut!"

**Badge Progress:**

- Progress bar: Visual increment (fill animation)
- Text update: "Tinggal 40kg lagi unlock Champion 150kg!" (motivating proximity)

**Leaderboard (If Unlocked Level 2+):**

- Position might change: "Top 10% → Top 8%" (improvement highlighted)

---

**Success Indicators (Checklist for User):**

✅ **Green Checkmark Icon** (transaction confirmed visually)
✅ **Dual Ledger Increase** (numbers go up = money + kg added)
✅ **Environmental Impact Updated** (pohon count increases = tangible contribution)
✅ **Streak Continues** (fire icon +1 = daily habit maintained)
✅ **Transaction History Entry** (new row = logged permanently)

---

**Error Feedback (If Something Goes Wrong):**

**Operator-Side Error (Rare):**

- Toast notification: "Transaksi gagal. Coba lagi atau hubungi operator"
- Red × icon (failure indicator)
- Retry button: "Coba Lagi" (tap to reattempt)

**User-Side Support:**

- Support link: "Butuh bantuan?" button
- Deep link: WhatsApp operator (direct message)
- Phone number: Call operator (fallback)

**Status Indicator:**

- Transaction history: Red "✗ Gagal" badge (clear failure state)
- Retry option: Tap row → "Laporkan Masalah" button

---

**How Users Know It's Working:**

1. **Numbers change** (Rp 150k → 165k, 100kg → 110kg)
2. **Push notification arrives** (30s confirmation)
3. **Transaction appears in history** (logged proof)
4. **Streak continues** (gamification feedback)
5. **Badge progress updates** (visual increment)

**Multi-Channel Confirmation:**

- Visual (dashboard update)
- Audio (notification sound)
- Haptic (phone vibration)
- Verbal (operator confirmation)

#### Step 4: Completion (How Users Know They're Done)

**Successful Outcome Indicators:**

**Primary Signal: Dashboard Updated**

**Dual Ledger Change:**

- **Before:** Rp 150,000 | 100kg
- **After:** Rp 165,000 | 110kg
- **Visual:** Pulse animation (2s) on updated numbers (subtle, not jarring)

**Impact Narrative Updated:**

- **Before:** = 50 pohon ditanam
- **After:** = 55 pohon ditanam
- **Visual:** Leaf icon + text together (clear association)

---

**Secondary Signal: Push Notification**

**Notification Content:**

- **Title:** "Transaksi Berhasil!"
- **Body:** "Rp 15,000 | 10kg - Kontribusi lingkungan bertambah"
- **Action:** Tap notification → Deep link to dashboard

**User Behavior:**

- Some users tap notification (open app to see details)
- Others dismiss notification (already saw update in-app)

---

**Tertiary Signal: Transaction History Entry**

**New Entry Details:**

- **Position:** Top of list (most recent first)
- **Date/Time:** "26 Des 2025, 14:30"
- **Amount:** "Rp 15,000 | 10kg" (dual value)
- **Type:** "Plastik" (waste category)
- **Operator:** "Pak Budi" (accountability)
- **Status:** Green "✓ Berhasil" badge

**User Action:**

- Can tap entry to see receipt detail (optional)
- Receipt shows: Transaction ID, timestamp, breakdown, operator signature (digital)

---

**Gamification Confirmation:**

**Streak Counter Update:**

- Fire icon increments: 🔥 2 → 🔥 3
- Text: "Streak 3 hari!" (if daily transaction)
- Visual: Subtle animation on increment (celebrate milestone)

**Badge Progress Update:**

- Progress bar fills: 60% → 70% (visual increment)
- Text update: "Tinggal 40kg lagi unlock Champion 150kg!"
- Proximity motivates: "Almost there!" feeling

**Leaderboard Position (Level 2+ Only):**

- Position text: "Top 10% di kelurahan" (might improve to Top 8%)
- Community milestone: "Kelurahan kita 10.5 ton!" (collective progress)

---

**What Happens Next (Post-Transaction Flows):**

**Branch A: Badge Unlock Triggered (e.g., 100kg milestone)**

**Modal Appears:**

```
🎉 Selamat!

Environmental Champion 100kg

Anda telah menyelamatkan 50 pohon!

[🔗 Bagikan Pencapaian]  [Tutup]
```

**Confetti Animation:**

- 2-second loop (elegant fall, green + gold colors)
- Dismissible (user can skip if busy)

**Shareable Card Shown:**

- Preview: Instagram Story format (1080x1920px)
- Design: Brand colors, badge icon prominent, impact narrative
- CTA: "Bagikan ke Instagram" button (primary green)
- Alternative: "Bagikan ke WhatsApp" (secondary)

**User Action:**

- Share (Instagram/WhatsApp native picker) OR
- Dismiss modal (continue browsing app)

---

**Branch B: Streak Milestone (e.g., 7 Days Consecutive)**

**Modal Appears:**

```
🔥 Luar Biasa!

Streak 7 Hari Berturut-turut

Anda sangat konsisten! Pertahankan streak, jangan sampai putus!

[Oke, Saya Akan!]
```

**Visual:**

- Fire icon large (celebratory)
- Number prominent: "7"
- Encouragement copy (motivating not pressuring)

**User Action:**

- Dismiss modal (tap "Oke" button)
- Feel motivated (positive reinforcement)

---

**Branch C: Normal Transaction (No Special Event)**

**User Sees:**

- Updated dashboard (dual ledger + impact)
- Transaction history entry (new row)
- Badge progress updated (visual increment)

**Default Actions (Most Users):**

- Browse dashboard briefly (check balance)
- Close app (transaction complete, nothing else needed)

**Optional Actions (Engaged Users):**

- Browse transaction history (see past transactions)
- Check badge progress (see how close to next unlock)
- View leaderboard (if unlocked, check community position)
- View impact details (tap narrative to see detailed breakdown)

---

**Default Next Action:**

**Majority Users (70-80%):**

- Close app immediately (task complete)
- Return tomorrow/next setor (habit forming)

**Engaged Users (15-25%):**

- Browse dashboard briefly (1-2 minutes)
- Check gamification progress (badges, streaks)
- Maybe share achievement (if badge unlocked)

**Power Users (5-10%):**

- Explore advanced features (Level 3 users)
- Check price charts (optimize setor timing)
- View community leaderboard (solidarity)
- Engage with community challenges

---

## Visual Design Foundation

### Color System

**Foundation established in Design System (Step 6) - Extended with semantic mappings and accessibility compliance.**

#### Primary Color Palette

**Green (Environmental Brand Identity)**

Primary green represents environmental consciousness, growth, and positive action:

- **green.600** `#16a34a` - Main brand color
  - **Usage:** Primary buttons, active states, success indicators, brand elements
  - **Contrast ratio:** 4.52:1 on white (WCAG AA compliant)
  - **Emotional association:** Environmental action, growth, positive impact
- **green.700** `#15803d` - Hover/pressed states
  - **Usage:** Button hover states, active navigation, emphasis
  - **Contrast ratio:** 5.81:1 on white (WCAG AAA compliant)
- **green.900** `#14532d` - High contrast mode (Mode Lansia)
  - **Usage:** Lansia mode primary color, maximum readability
  - **Contrast ratio:** 11.2:1 on white (WCAG AAA compliant, high contrast)

**Rationale:** Green universal untuk environmental causes, calming (tidak alarming), positive psychological association dengan nature dan sustainability.

---

**Blue (Trust & Financial Reliability)**

Secondary blue provides trust and financial credibility (banking app precedent):

- **blue.500** `#3b82f6` - Charts, analytics features
  - **Usage:** Charts, graphs, data visualization, secondary actions
  - **Contrast ratio:** 4.58:1 on white (WCAG AA compliant)
  - **Emotional association:** Trust, reliability, financial stability
- **blue.600** `#2563eb` - Links, secondary CTAs
  - **Usage:** Hyperlinks, secondary buttons, informational elements
  - **Contrast ratio:** 5.96:1 on white (WCAG AAA compliant)

**Rationale:** Blue banking industry standard (BCA, BRI blue logos), psychological trust association, complements green (color harmony).

---

**Gold (Achievement & Gamification)**

Accent gold for gamification elements without childish feel:

- **gold.500** `#f59e0b` - Badge highlights, achievement indicators
  - **Usage:** Badge backgrounds, achievement highlights, streak indicators
  - **Contrast ratio:** 3.12:1 on white (WCAG AA for large text only)
  - **Emotional association:** Achievement, premium, success
- **gold.600** `#d97706` - Badge borders, emphasis
  - **Usage:** Badge borders, call-to-action accents, hover states
  - **Contrast ratio:** 4.21:1 on white (WCAG AA compliant)
- **gold.700** `#b45309` - Celebration accents (confetti, animations)
  - **Usage:** Confetti animations, celebration modals, highlight accents
  - **Contrast ratio:** 5.63:1 on white (WCAG AAA compliant)

**Rationale:** Gold mature feel (not childish yellow/orange), achievement psychological association, stands out from green/blue (visual hierarchy).

---

**Neutral (Supporting Elements)**

Gray scale for text, backgrounds, and UI chrome:

- **gray.600** `#4b5563` - Body text standard mode
  - **Usage:** Body text, captions, subtext
  - **Contrast ratio:** 7.23:1 on white (WCAG AAA compliant)
- **gray.800** `#1f2937` - Headings, emphasis text
  - **Usage:** Headings, important text, high emphasis
  - **Contrast ratio:** 13.1:1 on white (WCAG AAA compliant, maximum contrast)
- **black** `#000000` - Lansia mode high contrast
  - **Usage:** Mode Lansia text (maximum contrast on white)
  - **Contrast ratio:** 21:1 on white (Maximum possible contrast)
- **white** `#ffffff` - Backgrounds, lansia mode background
  - **Usage:** Card backgrounds, app background, lansia mode (pure white not off-white)

---

#### Semantic Color Mappings

**Success States** (Transaction successful, badge unlocked, streak continued):

- Primary: green.600 `#16a34a`
- Icon: ✓ green checkmark
- Background: green.50 `#f0fdf4` (light tint for success banners)

**Warning States** (Low balance, streak about to break, action needed):

- Primary: gold.600 `#d97706`
- Icon: ⚠️ warning triangle
- Background: gold.50 `#fffbeb` (light tint for warning banners)

**Error States** (Transaction failed, network error, validation error):

- Primary: red.600 `#dc2626`
- Icon: ✗ red X or ⊘ red circle-slash
- Background: red.50 `#fef2f2` (light tint for error banners)
- **Contrast ratio:** 5.51:1 on white (WCAG AAA compliant)

**Info States** (Tips, tutorials, feature announcements):

- Primary: blue.600 `#2563eb`
- Icon: ℹ️ info circle
- Background: blue.50 `#eff6ff` (light tint for info banners)

---

#### Accessibility Compliance (WCAG 2.1 AA/AAA)

**Contrast Ratios Achieved:**

| Element               | Color    | Background | Ratio  | WCAG Level       |
| --------------------- | -------- | ---------- | ------ | ---------------- |
| Body text (standard)  | gray.600 | white      | 7.23:1 | AAA ✅           |
| Headings              | gray.800 | white      | 13.1:1 | AAA ✅           |
| Primary button text   | white    | green.600  | 4.52:1 | AA ✅            |
| Secondary button text | white    | blue.600   | 5.96:1 | AAA ✅           |
| Error text            | red.600  | white      | 5.51:1 | AAA ✅           |
| Badge text            | gray.800 | gold.500   | 4.21:1 | AA ✅            |
| Lansia mode text      | black    | white      | 21:1   | AAA ✅ (Maximum) |

**Compliance Notes:**

- All text meets minimum WCAG AA standard (4.5:1 for normal text)
- Most text exceeds AAA standard (7:1) for enhanced readability
- Mode Lansia achieves maximum possible contrast (21:1)
- Large text (18pt+) can use lower ratios (3:1 minimum)

---

#### Color Usage Guidelines

**Do's:**
✅ Use green for primary actions (setor sampah, confirm, save)
✅ Use blue for secondary actions (view details, learn more)
✅ Use gold sparingly (badges, achievements only - maintain special feel)
✅ Use gray for supporting text (not competing with primary content)
✅ Maintain semantic consistency (green = success always, red = error always)

**Don'ts:**
❌ Don't use red for anything except errors (avoid confusion)
❌ Don't use gold for buttons (reserved for achievements)
❌ Don't use light grays for body text (contrast too low)
❌ Don't mix semantic meanings (e.g., green for warnings)
❌ Don't use pure black in standard mode (too harsh, use gray.800 instead)

---

### Typography System

**Foundation established in Design System (Step 6) - Extended with complete type scale and usage guidelines.**

#### Primary Typeface: Inter

**Why Inter:**

- Modern sans-serif (Instagram polish expectations)
- Excellent readability di small sizes (mobile-optimized)
- Wide weight range (Regular 400, Medium 500, Bold 700)
- Open-source (no licensing cost)
- Designed for screens (not print typeface adapted)

**Fallback Strategy:**

- iOS: SF Pro (Apple system font, zero load time)
- Android: Roboto (Google system font, zero load time)
- Rationale: WhatsApp simplicity precedent, lansia familiarity, native feel

---

#### Type Scale (4 Levels for Progressive UX)

**Level 1 Simple (Default - Ibu Siti first 3 transactions)**

Optimized for first-time users, comfortable reading:

| Element       | Size | Weight      | Line Height | Usage                                    |
| ------------- | ---- | ----------- | ----------- | ---------------------------------------- | ------------------- |
| Display       | 48pt | Bold 700    | 1.2         | Modal headers, celebration titles        |
| Hero          | 32pt | Bold 700    | 1.3         | Dual ledger (Rp                          | kg), dashboard hero |
| H1            | 24pt | Bold 700    | 1.4         | Section headers (Transaction History)    |
| H2            | 20pt | Bold 700    | 1.4         | Card titles, subsection headers          |
| H3            | 18pt | Medium 500  | 1.5         | List headers, tab labels                 |
| Body          | 16pt | Regular 400 | 1.6         | Paragraph text, descriptions             |
| Body Emphasis | 16pt | Medium 500  | 1.6         | Important body text, highlighted content |
| Caption       | 12pt | Regular 400 | 1.5         | Timestamps, subtext, helper text         |

**Button Text:** 16pt Medium 500 (clear, prominent)

---

**Level 2 Detailed (Unlock after 3 transactions)**

More content fits on screen, efficient layout:

| Element       | Size | Weight      | Line Height | Usage                       |
| ------------- | ---- | ----------- | ----------- | --------------------------- |
| Display       | 40pt | Bold 700    | 1.2         | Modal headers               |
| Hero          | 28pt | Bold 700    | 1.3         | Dual ledger, dashboard hero |
| H1            | 20pt | Bold 700    | 1.4         | Section headers             |
| H2            | 18pt | Bold 700    | 1.4         | Card titles                 |
| H3            | 16pt | Medium 500  | 1.5         | List headers                |
| Body          | 14pt | Regular 400 | 1.6         | Paragraph text              |
| Body Emphasis | 14pt | Medium 500  | 1.6         | Important text              |
| Caption       | 10pt | Regular 400 | 1.5         | Timestamps, subtext         |

**Button Text:** 14pt Medium 500

---

**Level 3 Power (Unlock after 10 transactions)**

Dense information for power users, charts/analytics:

| Element       | Size | Weight      | Line Height | Usage                    |
| ------------- | ---- | ----------- | ----------- | ------------------------ |
| Display       | 36pt | Bold 700    | 1.2         | Modal headers            |
| Hero          | 24pt | Bold 700    | 1.3         | Dual ledger              |
| H1            | 18pt | Bold 700    | 1.4         | Section headers          |
| H2            | 16pt | Bold 700    | 1.4         | Card titles              |
| H3            | 14pt | Medium 500  | 1.5         | List headers             |
| Body          | 12pt | Regular 400 | 1.6         | Paragraph text           |
| Body Emphasis | 12pt | Medium 500  | 1.6         | Important text           |
| Caption       | 9pt  | Regular 400 | 1.5         | Timestamps, chart labels |

**Button Text:** 12pt Medium 500

---

**Mode Lansia (Always accessible - Bapak Joko)**

Maximum readability for elderly users:

| Element       | Size | Weight      | Line Height | Usage                                         |
| ------------- | ---- | ----------- | ----------- | --------------------------------------------- |
| Display       | 64pt | Bold 700    | 1.2         | Celebration titles (very large)               |
| Hero          | 48pt | Bold 700    | 1.3         | Dual ledger (massive, readable from distance) |
| H1            | 32pt | Bold 700    | 1.4         | Section headers                               |
| H2            | 28pt | Bold 700    | 1.4         | Card titles                                   |
| H3            | 24pt | Medium 500  | 1.5         | List headers                                  |
| Body          | 24pt | Regular 400 | 1.6         | Paragraph text (minimum readable)             |
| Body Emphasis | 24pt | Medium 500  | 1.6         | Important text                                |
| Caption       | 18pt | Regular 400 | 1.5         | Timestamps (nothing smaller)                  |

**Button Text:** 24pt Medium 500 (giant buttons)

**Minimum Size:** 18pt (nothing smaller, unlike standard mode 9pt)

---

#### Typography Usage Guidelines

**Hierarchy Best Practices:**

✅ **Do:**

- Use bold (700) for all headings (clear hierarchy)
- Use medium (500) for emphasis within body text
- Use regular (400) for paragraph text (easy reading)
- Maintain consistent line heights (1.6 for body = comfortable)
- Pair heading with body text (contrast in size = clear structure)

❌ **Don't:**

- Use light weights (300 or below) - readability poor on mobile
- Use all caps excessively (harder to read, feels aggressive)
- Use italic for long text (readability decreases)
- Mix too many font sizes (creates visual chaos)
- Use decorative fonts (conflicts with professional tone)

---

**Responsive Typography:**

Mobile-first approach (BankSampah primary platform = mobile):

- Font sizes defined in `pt` (iOS) and `sp` (Android) - respect system font scaling
- Line heights unitless (relative to font size) - scales properly
- Touch targets minimum 44x44pt (accessibility requirement)
- Button text prominent (16pt minimum standard, 24pt lansia)

**Accessibility:**

- User can adjust system font size (iOS/Android settings)
- App respects system preferences (dynamic type)
- Mode Lansia overrides (fixed 24pt minimum, ignores system scaling for consistency)

---

### Spacing & Layout Foundation

**Foundation established in Design System (Step 6) - Extended with complete spacing scale and component rules.**

#### Spacing Scale (8px Grid System)

**Why 8px Grid:**

- Divisible by 2 and 4 (flexible for half/quarter increments)
- iOS/Android standard (native feel)
- Mathematical harmony (multiples create rhythm)
- Scalable (2x for lansia mode = clean 16px base)

**Base Spacing Units:**

| Token | Value | Usage                                                   |
| ----- | ----- | ------------------------------------------------------- |
| `xs`  | 4px   | Tight spacing (icon + text, badge padding)              |
| `sm`  | 8px   | Close relationships (list item vertical padding)        |
| `md`  | 16px  | Standard spacing (card padding, section margins)        |
| `lg`  | 24px  | Loose spacing (section separation, generous whitespace) |
| `xl`  | 32px  | Extra loose (modal padding, screen margins)             |
| `2xl` | 48px  | Major sections (hero section margin, large modals)      |

**Mode Lansia Spacing (Doubled):**

| Token | Value Lansia | Usage                                     |
| ----- | ------------ | ----------------------------------------- |
| `xs`  | 8px          | Tight spacing                             |
| `sm`  | 16px         | Close relationships                       |
| `md`  | 32px         | Standard spacing (doubled for visibility) |
| `lg`  | 48px         | Loose spacing                             |
| `xl`  | 64px         | Extra loose                               |
| `2xl` | 96px         | Major sections                            |

---

#### Layout Principles

**Principle 1: Hero Content Above Fold**

Primary information always visible without scrolling (banking app precedent):

**Implementation:**

- Dashboard: Dual ledger + impact narrative above fold (occupies top 30% screen)
- No scroll required untuk see balance (instant comprehension <1s)
- Supporting content below (transaction history, gamification) = progressive disclosure

**Rationale:** Users open app untuk quick balance check, immediate visibility critical.

---

**Principle 2: Generous Whitespace (WhatsApp Simplicity)**

Not dense/cramped layout, breathing room around elements:

**Implementation:**

- Card padding: 16px standard, 32px lansia (comfortable not tight)
- Section margins: 24px between major sections (clear separation)
- List item spacing: 12px vertical padding (tap targets clear)
- Screen margins: 16px left/right (content doesn't touch edges)

**Rationale:** WhatsApp inspiration = simplicity, not overwhelming with density.

---

**Principle 3: Touch-Friendly Targets (Accessibility First)**

Mobile-first = thumb-friendly, no tiny tap targets:

**Implementation:**

- Button minimum: 44x44pt (WCAG requirement)
- Button lansia: 88x88pt (double size, easy to hit)
- Touch target spacing: 8px minimum between interactive elements (prevent mis-taps)
- Icon buttons: 48x48pt (larger than minimum for comfort)

**Rationale:** Accessibility compliance + user comfort = better UX for all ages.

---

**Principle 4: Clear Visual Hierarchy (Card-Based Layout)**

Information grouped logically, cards create clear boundaries:

**Implementation:**

- Cards for distinct content (dashboard hero = card, transaction list = card)
- Shadows subtle (2dp elevation = depth without heavy)
- Card radius: 12px (modern, friendly - not sharp 0px or overly round 24px)
- Card spacing: 16px between cards (clear separation)

**Rationale:** Cards familiar pattern (Instagram, WhatsApp Status), clear content grouping.

---

**Principle 5: Progressive Disclosure (Level-Based Density)**

Layout density increases dengan user mastery:

**Implementation:**

- Level 1 Simple: Large elements, generous spacing (24px margins)
- Level 2 Detailed: More compact, efficient spacing (16px margins)
- Level 3 Power: Dense layout, charts/tables (12px margins)
- Mode Lansia: Extra loose, minimal elements (48px margins)

**Rationale:** New users need space to breathe, power users want efficiency.

---

#### Component Spacing Rules

**Buttons:**

- Internal padding: 12px vertical × 24px horizontal (standard)
- Internal padding lansia: 24px vertical × 48px horizontal (doubled)
- Button spacing: 12px horizontal gap (multiple buttons inline)
- Button to content: 16px margin above (clear separation from content)

**Cards:**

- Internal padding: 16px (standard), 32px (lansia)
- Card to card: 16px vertical spacing (stacked cards)
- Card to screen edge: 16px margin left/right
- Card shadow: 2dp elevation (subtle depth)

**Lists:**

- List item padding: 12px vertical (internal)
- List item separator: 1px gray.200 (subtle divider)
- List item to list item: 0px (divider handles separation)
- List icon to text: 12px horizontal gap

**Modals:**

- Modal padding: 24px (internal content)
- Modal to screen edge: 16px margin all sides (mobile)
- Modal header: 24px bottom margin (separate from body)
- Modal actions: 16px top margin (separate from content)

**Bottom Tab Navigation:**

- Tab height: 56px (standard), 88px (lansia)
- Icon size: 24x24px (standard), 40x40px (lansia)
- Icon to label: 4px vertical gap
- Label: 12pt (standard), 18pt (lansia)

---

#### Grid System

**Column Structure:** Single column mobile (primary platform)

**Rationale:** Mobile-first = single column default, no complex grid needed

**Responsive Breakpoints (Future Desktop - Phase 2A):**

- Mobile: 0-767px (single column)
- Tablet: 768-1023px (2 columns for dashboard cards)
- Desktop: 1024px+ (3 columns for dashboard, sidebar navigation)

**Current Focus:** Mobile single column (MVP Phase)

---

### Accessibility Considerations

**Visual accessibility built into foundation (not afterthought):**

#### Color Accessibility

✅ **Contrast Ratios:** All text meets WCAG AA minimum (4.5:1), most exceed AAA (7:1)
✅ **Color Independence:** Never rely on color alone (use icons + text)
✅ **Mode Lansia:** Maximum contrast (21:1 black on white)
✅ **Error States:** Red + icon + text (not just red = accessible for colorblind)

#### Typography Accessibility

✅ **Font Scaling:** System font size respected (user control)
✅ **Minimum Sizes:** 16pt body standard, 24pt body lansia (readable)
✅ **Line Height:** 1.6 body text (comfortable reading, not cramped 1.2)
✅ **Font Weight:** Bold 700 headings (clear hierarchy for low vision)

#### Spacing Accessibility

✅ **Touch Targets:** 44x44pt minimum (WCAG), 88x88pt lansia (generous)
✅ **Touch Spacing:** 8px minimum between targets (prevent mis-taps)
✅ **Whitespace:** Generous spacing (reduce cognitive load)
✅ **Clear Hierarchy:** Visual grouping via cards (easier scanning for cognitive disabilities)

#### Screen Reader Compatibility

✅ **Semantic HTML:** Proper heading hierarchy (h1 > h2 > h3)
✅ **Alt Text:** All icons have text labels (never icon-only)
✅ **ARIA Labels:** Buttons have descriptive labels ("Konfirmasi Transaksi" not "OK")
✅ **Focus Indicators:** Visible keyboard navigation (future desktop support)

#### Platform Accessibility Features

✅ **VoiceOver (iOS):** All elements properly labeled
✅ **TalkBack (Android):** Screen reader compatible
✅ **Dynamic Type:** Font scaling respected
✅ **Voice Control:** Button labels voice-command friendly
✅ **Reduce Motion:** Respect system preference (disable animations if user opts out)

---

## Design Direction Decision

### Design Directions Explored

During the design direction exploration phase, we generated and evaluated 6 comprehensive visual approaches for the BankSampah platform:

**Direction 1: Impact-First Hero**

- Environmental narrative leads all interactions
- Dual ledger inverted: kg → Rp (impact prioritized over financial value)
- Large emotional visual (tree icon) dominates hero section
- Transaction list shows environmental impact first (+5 pohon) before financial amount
- Streak gamification integrated in status bar
- **Strengths:** Strongest alignment with identity transformation mission, emotional resonance, mission-driven engagement
- **Considerations:** Cold leads may prefer financial information first, operators need quick Rp scanning

**Direction 2: Dual Ledger Balance**

- Equal visual weight to financial & environmental value
- Side-by-side display: Rupiah left, kg right (reading order preserved)
- Impact narrative as supporting context below dual ledger
- Dual CTA buttons (deposit/withdraw) prominent
- **Strengths:** Balanced approach, appeals to both warm and cold leads, quick scanning for both values
- **Considerations:** Less emotional punch, may feel transactional over transformational

**Direction 3: Gamification-Led**

- Level & badge system primary focus at top of dashboard
- Progress bars toward next level highly prominent
- Streak mechanic visible in status bar with fire emoji
- Badge showcase displayed prominently below ledger
- Gold accent color (#f59e0b) for all achievement states
- **Strengths:** Directly addresses 80% retention target via gamification, engagement optimization, social sharing motivation
- **Considerations:** May overwhelm cold leads initially, requires careful balance to keep gamification mature (not childish)

**Direction 4: Mode Lansia (Accessibility-Optimized)**

- All text minimum 24pt (body), 48-64pt (display/hero)
- Pure black text on white background (21:1 contrast ratio)
- 3 giant action buttons only (88x88pt touch targets)
- No bottom navigation - simplified single-screen approach
- Doubled spacing throughout (16px base grid)
- **Strengths:** Maximum accessibility compliance, serves Bapak Joko persona perfectly, WCAG AAA compliance
- **Considerations:** Requires mode toggle in settings, reduced feature density acceptable for target users

**Direction 5: Community Solidarity**

- Collective achievement hero (kelurahan milestone: "10 TON bersama")
- Individual contribution framed as part of community whole
- Percentile ranking (Top 10%) instead of absolute position (#47)
- Community leaderboard with top contributors prominent
- Social sharing integrated into every success moment
- **Strengths:** Viral growth driver, solidarity framing (not toxic competition), community-oriented engagement
- **Considerations:** Individual ledger less prominent, requires community context data aggregation

**Direction 6: Progressive Complexity**

- Adaptive UI that grows with user expertise: Simple → Detailed → Power → Lansia
- Mode indicator visible at top of screen
- Progressive unlock hints ("Setor 3x lagi untuk unlock Detailed mode")
- UI complexity increases with usage patterns
- Feature density and navigation tabs progressively revealed
- **Strengths:** Serves all user types over time, reduces initial overwhelm, grows with user mastery
- **Considerations:** Most complex to implement, requires sophisticated state management and clear mode transition UX

### Chosen Direction

**Primary Direction: Impact-First Hero (Direction 1)**  
**With Integration: Community Solidarity Leaderboard (Direction 5)**

This hybrid approach combines:

1. **Impact-First Hero Section** - Environmental transformation leads

   - Large emotional icon (🌳 tree, 48x48px) at top of dashboard
   - Primary metric: "50 Pohon Diselamatkan" (48pt display, green.600)
   - Secondary context: "= 100kg sampah dikelola" (16pt body, gray.600)
   - Tertiary context: "= Rp 150,000 tersimpan" (16pt body, gray.600)
   - Inverted value hierarchy: Environmental impact → Weight → Financial value

2. **Community Solidarity Integration** - Social proof and viral growth

   - Community achievement banner: "Kelurahan kita TOP 3 se-kota!" (collective milestone)
   - Percentile ranking: "Anda di TOP 10%" (not absolute rank to avoid toxic competition)
   - Community leaderboard card: Top contributors with mature card-based layout (not table rows)
   - Social sharing: "Bagikan Pencapaian" button integrated into badge unlock and milestone moments
   - Solidarity framing: "Bersama kita sudah 10 ton!" progress indicators

3. **Gamification Elements** (From Direction 3) - Retention driver

   - Streak counter in status bar: "🔥 5 hari" (subtle, not overwhelming)
   - Badge unlock celebrations: Elegant confetti (green + gold), 2-second loop, not childish
   - Level progress bar: Toward next achievement (83% to Level 6), placed below community section
   - Mature visual language: Professional icons, gold accents (#f59e0b), adult-friendly copy

4. **Progressive UX Support** (From Direction 6) - Multi-persona serving

   - Mode Lansia accessible via settings toggle
   - Simple mode default for first 5 transactions
   - Detailed mode unlocks with engagement
   - Power mode available for advanced users after 50+ transactions

5. **Accessibility Foundation** (From Direction 4)
   - All typography scales from foundation (16pt Simple → 24pt Lansia minimum)
   - Touch targets 44x44pt standard, 88x88pt in Lansia mode
   - Color contrast WCAG AA minimum (most AAA)
   - Screen reader compatible labels on all interactive elements

### Design Rationale

**Why Impact-First Hero:**

1. **Mission Alignment** - The platform's core mission is identity transformation: "Saya pelaku pemilah sampah" → "Saya environmental champion." Leading with environmental impact (50 pohon) directly reinforces this transformation every time the user opens the app.

2. **Emotional Resonance** - Our emotional journey mapping (Step 4) identified that the primary emotional goal is identity transformation, not financial gain. Users need to _feel_ like environmental champions, which requires environmental metrics to be visually dominant.

3. **Differentiation** - Every financial app shows money first. By inverting the hierarchy (pohon → kg → Rp), we differentiate BankSampah as a mission-driven platform that happens to have financial benefits, not a savings app that happens to involve waste.

4. **Warm Lead Optimization** - Our primary target persona (Ibu Siti, warm lead) is motivated by environmental consciousness first, financial secondary. This layout speaks directly to her values and decision-making criteria.

5. **Success Criteria Alignment** - Our Step 7 success criteria require "Identity Reinforcement on Every Visit" with the benchmark: "User sees/hears environmental champion language within 3s of dashboard load." Impact-first hero achieves this immediately.

**Why Community Solidarity Integration:**

1. **Viral Growth Driver** - The PRD specifies 200K MAU target with organic growth emphasis. Community solidarity framing creates natural social sharing moments ("Kelurahan kita TOP 3!") that drive word-of-mouth growth.

2. **Mature Gamification** - Percentile ranking (Top 10%) avoids toxic leaderboard competition (#1 vs #2 rivalry) while still providing social proof and motivation. This aligns with our "mature gamification" design principle from Step 4.

3. **Cultural Fit** - Indonesian culture values collective achievement ("gotong royong"). Community-first framing resonates culturally and reduces individualistic competition that can feel alienating.

4. **Retention Multiplier** - Community features drive 80% of retention target (per PRD gamification strategy). Combining individual environmental impact with collective community milestones creates dual motivation: personal transformation + social belonging.

5. **Social Sharing Optimization** - Every badge unlock and milestone includes "Bagikan Pencapaian" button that generates shareable Instagram Story cards showing both individual achievement and community context, optimizing viral potential.

**Why NOT Pure Directions 2, 3, or 6:**

- **Direction 2 (Dual Ledger Balance):** While balanced, it treats financial and environmental values equally, which doesn't reinforce our identity transformation mission as strongly. Financial-first users (Rina cold lead) will still see Rp value prominently, just in secondary position.

- **Direction 3 (Gamification-Led):** Leading with badges/levels risks feeling overwhelming or childish. Gamification should enhance the experience, not dominate it. By placing it below impact hero and community, we maintain mature professional tone while still driving engagement.

- **Direction 6 (Progressive Complexity):** While ideal for serving all user types, it's the most complex to implement with solo/duo dev constraint (6-month MVP timeline). We adopt progressive UX principles (Simple → Detailed → Power → Lansia) but use simpler implementation: settings-based mode switching rather than automatic adaptive UI.

**Trade-offs Accepted:**

1. **Cold Lead Friction** - Rina (cold lead, financially motivated) may experience initial friction seeing environmental impact first. Mitigation: Financial value still visible in hero section (tertiary position), and transaction list shows Rp amounts clearly.

2. **Operator Workflow** - Pak Budi (operator) needs to scan Rp values quickly during transactions. Mitigation: Transaction confirmation screen (operator-facing) uses financial-first layout, while user-facing dashboard uses impact-first. Different screens for different user contexts.

3. **Implementation Complexity** - Community leaderboard requires backend aggregation (kelurahan-level data, percentile calculations). Mitigation: Phase 1 MVP shows placeholder community data, Phase 2 (Month 3-4) implements full backend aggregation.

4. **Information Density** - Impact hero + community section + gamification + transaction list creates dense dashboard. Mitigation: Careful vertical spacing (24px between sections), progressive disclosure (only top 3 community contributors shown, "Lihat Semua" button for full leaderboard).

### Implementation Approach

#### Phase 1: Core Layout (Week 3-4 of MVP)

**Hero Section - Impact-First:**

```
Component: ImpactHeroCard (NativeBase Card component)
Layout:
  - Icon: 48x48px tree emoji (🌳) centered
  - Primary metric: "50 Pohon Diselamatkan" (48pt Inter Bold, green.600)
  - Secondary: "= 100kg sampah dikelola" (16pt Inter Regular, gray.600)
  - Tertiary: "= Rp 150,000 tersimpan" (16pt Inter Regular, gray.600)
  - Background: gradient-green (linear-gradient 135deg, green.600 to green.700)
  - Padding: 24px all sides
  - Border radius: 16px
  - Margin bottom: 24px

Interaction:
  - Tap to expand: Shows monthly trend graph (sparkline)
  - Long press: Share achievement card (Instagram Story format)
```

**Status Bar - Gamification:**

```
Component: StreakIndicator
Layout:
  - Position: Top right of screen (status bar area)
  - Content: "🔥 5 hari" (12pt Inter Medium, gray.600)
  - Tap to view: Streak calendar modal

State:
  - Active streak: Fire emoji + day count
  - Broken streak: Gray fire emoji + encouragement ("Mulai lagi!")
```

**Transaction List:**

```
Component: TransactionCard (repeating)
Layout per card:
  - Primary: Environmental impact "+5 pohon" (16pt Inter Bold, green.600)
  - Secondary: Waste type "Plastik Campur" (14pt Inter Medium, gray.900)
  - Tertiary: "10kg • Rp 15,000" (12pt Inter Regular, gray.600)
  - Background: white card with shadow
  - Padding: 16px
  - Margin bottom: 12px
  - Border radius: 12px

Sorting: Most recent first (reverse chronological)
Pagination: Show 5 transactions, "Lihat Semua" button loads full history
```

#### Phase 2: Community Integration (Week 5-6 of MVP)

**Community Achievement Banner:**

```
Component: CommunityHeroCard
Layout:
  - Header: "🎉 Kelurahan kita TOP 3 se-kota!" (16pt Inter Bold, white)
  - Metric: "10 TON" (40pt Inter Bold, white)
  - Context: "Bersama-sama mengelola sampah bulan ini" (14pt Inter Regular, white opacity 0.9)
  - Background: gradient-green (same as impact hero)
  - Padding: 20px
  - Border radius: 16px
  - Margin bottom: 16px
  - Position: Below impact hero, above transaction list

Tap action: Navigate to Community tab with full leaderboard
```

**Percentile Ranking:**

```
Component: UserRankCard
Layout:
  - Left side: User contribution (Rp 150K, 100kg)
  - Right side: "Anda di TOP 10%" (24pt Inter Bold, gold.600)
  - Bottom: Impact context "💚 50 pohon diselamatkan bersama"
  - Background: white card
  - Border: 2px green.600
  - Padding: 16px
  - Border radius: 12px
  - Margin bottom: 16px

Position: Below community banner, above transaction list
```

**Community Leaderboard Card:**

```
Component: TopContributorsCard
Layout:
  - Header: "Top Contributors" (14pt Inter SemiBold) + "Bulan ini" (12pt gray.600)
  - List: Top 3 contributors only (card-based, not table)
  - Per contributor:
    - Avatar: 40x40px circle (colored background + initials)
    - Name: 14pt Inter SemiBold
    - Contribution: "250kg bulan ini" (12pt gray.600)
    - Medal: 🥇🥈🥉 emoji (20px)
  - Footer: "Lihat Semua" button → Community tab
  - Background: white card
  - Padding: 16px
  - Border radius: 12px
  - Margin bottom: 16px

Position: Below user rank card
```

#### Phase 3: Gamification Polish (Week 7-8 of MVP)

**Badge Unlock Modal:**

```
Component: BadgeUnlockCelebration
Layout:
  - Confetti: Green + gold elegant particles (2s loop, 60fps)
  - Badge icon: 80x80px gold gradient circle with achievement icon
  - Title: "Environmental Champion 100kg" (24pt Inter Bold, gray.900)
  - Description: "Anda telah menyelamatkan 50 pohon!" (16pt Inter Regular, gray.600)
  - Share button: "Bagikan Pencapaian" (green.600, 48px height, full width)
  - Close button: X icon top-right

Trigger: On transaction complete if badge threshold reached
Animation: Modal slides up from bottom, confetti plays once
Shareable card: 1080x1920px Instagram Story format (auto-generated)
```

**Level Progress Bar:**

```
Component: LevelProgressIndicator
Layout:
  - Label: "Menuju Level 6" (11pt Inter Regular, gray.600)
  - Progress: "125kg / 150kg" (11pt gray.600)
  - Bar: 8px height, gray.200 background, gold.600 fill (linear gradient)
  - Border radius: 4px
  - Position: Below community section, above transaction list
  - Margin: 16px bottom

Visibility: Only shown after user reaches Level 2 (progressive disclosure)
```

#### Phase 4: Progressive UX Modes (Week 9-10 of MVP)

**Mode Lansia Toggle:**

```
Location: Settings > Tampilan > Mode Lansia (toggle switch)

Changes when enabled:
  - All body text: 16pt → 24pt
  - All hero/display text: 48pt → 64pt
  - All padding/margins: doubled (16px base grid)
  - Touch targets: 44x44pt → 88x88pt
  - Colors: High contrast variants (green.900, blue.600, black/white only)
  - Bottom nav: Hidden (replaced with 3 giant buttons on dashboard)

Persistence: User preference saved to local storage + Supabase profile
Default: Off (standard mode)
```

**Progressive Unlock Hints:**

```
Component: UnlockHintBanner
Layout:
  - Background: gold.50 (light yellow)
  - Border left: 4px gold.600
  - Icon: 💡 (20px)
  - Text: "Setor 3x lagi untuk unlock Mode Detailed" (13pt Inter Medium, gold.900)
  - Padding: 12px 16px
  - Border radius: 8px
  - Position: Above transaction list (temporarily)

Visibility rules:
  - Simple mode (0-5 transactions): Show hint for Detailed mode unlock
  - Detailed mode (6-50 transactions): Show hint for Power mode unlock
  - Power mode (51+ transactions): Hide hints

Dismissed: User can tap X to hide (saved to profile, don't show again)
```

#### Navigation Structure

**Bottom Tab Navigation:**

```
Tabs (left to right):
  1. Dashboard (🏠) - Impact hero, community, transactions
  2. Transaksi (📊) - Full transaction history, filters, export
  3. Community (👥) - Full leaderboard, kelurahan stats, social feed
  4. Profile (👤) - Settings, badges, account, withdrawal

Active state: green.600 color + bold weight
Inactive state: gray.600 color + regular weight
Tab bar height: 64px (56px + 8px safe area)
Icons: 24x24px
Labels: 11pt Inter Medium

Mode Lansia override: No bottom tabs, 3 giant buttons on dashboard only
```

#### Responsive Breakpoints

**Mobile (Primary - 100% MVP focus):**

- Screen width: 320px - 428px (iPhone SE to iPhone Pro Max)
- Single column layout
- Full-width cards
- Bottom navigation tabs
- Vertical scrolling

**Tablet (Future - Post-MVP):**

- Screen width: 768px+
- Two-column layout: Dashboard left, Community right
- Side navigation (left sidebar)
- Horizontal card grids for badges

**Web Admin (Retool - Operator View):**

- Desktop-optimized
- Transaction-first layout (financial value primary)
- Table views for bulk operations
- Different visual hierarchy than mobile (operator workflow optimized)

#### Accessibility Checklist

**Color:**

- ✅ All color combinations meet WCAG AA minimum (4.5:1 text, 3:1 graphics)
- ✅ Green.600 on white: 4.61:1 (AA compliant)
- ✅ Gray.600 on white: 4.54:1 (AA compliant)
- ✅ Mode Lansia uses AAA combinations only (7:1+)

**Typography:**

- ✅ Minimum body text: 16pt (Simple/Detailed/Power), 24pt (Lansia)
- ✅ Line height: 1.5 for body text (readable)
- ✅ Font scaling: Respects device text size settings (Dynamic Type)

**Touch Targets:**

- ✅ All buttons: 44x44pt minimum (WCAG 2.1 Level AA)
- ✅ Mode Lansia buttons: 88x88pt (double size)
- ✅ Spacing between touch targets: 8px minimum

**Screen Readers:**

- ✅ All icons have text labels (🏠 "Dashboard")
- ✅ All buttons have descriptive ARIA labels ("Konfirmasi Transaksi Rp 15,000")
- ✅ Heading hierarchy preserved (h1 > h2 > h3)
- ✅ Focus indicators visible for keyboard navigation

#### Design System Integration

**NativeBase Components Used:**

- `Card` - Hero sections, transaction cards, community cards
- `Button` - Primary actions (green.600), secondary (white with green border)
- `Box` - Layout containers, spacing wrappers
- `HStack`/`VStack` - Horizontal/vertical layouts
- `Text` - All typography with theme font scales
- `Progress` - Level progress bars
- `Badge` - Status indicators (streak, rank)
- `Avatar` - User initials in community leaderboard
- `Modal` - Badge unlock celebrations

**Custom Components (Built on NativeBase):**

- `ImpactHeroCard` - Impact-first hero section with gradient background
- `CommunityHeroCard` - Collective achievement banner
- `TransactionCard` - Transaction list item with impact-first layout
- `BadgeUnlockCelebration` - Modal with confetti animation
- `UserRankCard` - Percentile ranking display
- `TopContributorsCard` - Community leaderboard top 3
- `StreakIndicator` - Status bar streak counter

**Theme Customization (config.theme.js):**

```javascript
export const customTheme = {
  colors: {
    primary: {
      50: "#f0fdf4", // green.50
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a", // Primary green
      700: "#15803d", // Hover/pressed
      800: "#166534",
      900: "#14532d", // Lansia high contrast
    },
    secondary: {
      500: "#3b82f6", // Blue charts
      600: "#2563eb", // Blue links
    },
    accent: {
      500: "#f59e0b", // Gold badges
      600: "#d97706", // Gold borders
      700: "#b45309", // Gold celebrations
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
    mono: "Inter",
  },
  fontSizes: {
    // Simple mode (Level 1)
    xs: 12,
    sm: 14,
    md: 16, // Body text base
    lg: 20,
    xl: 24,
    "2xl": 32, // Hero text
    "3xl": 40,
    "4xl": 48, // Display text
    // Lansia mode scales added dynamically
  },
  space: {
    // 8px grid
    1: 4, // xs
    2: 8, // sm
    4: 16, // md
    6: 24, // lg
    8: 32, // xl
    12: 48, // 2xl
  },
};
```

---

## Component Strategy

Based on our NativeBase design system choice (Step 6) and user journey requirements (Step 10), I've analyzed component coverage and designed custom components to fill critical gaps.

### Design System Components (NativeBase Coverage)

**NativeBase 3.x provides solid foundation components that cover ~70% of our needs:**

#### Layout & Structure

- **Box** - Flexible container for spacing and positioning
- **HStack / VStack / ZStack** - Horizontal, vertical, and layered layouts
- **Center** - Centered content container
- **Container** - Responsive max-width container
- **Flex** - Flexbox layout utilities

**Usage in BankSampah:**

- Main screen containers (dashboard, transaction history)
- Card layouts (transaction cards, community cards)
- Modal content structure
- Bottom tab layout

#### Navigation

- **BottomTabNavigator** (React Navigation integration)
- **Drawer** - Side navigation drawer (future web admin)
- **Menu** - Dropdown menu component

**Usage in BankSampah:**

- Bottom tabs: Dashboard, Transaksi, Community, Profile
- Hamburger menu (Power mode only)
- Action menus (transaction options, export, share)

#### Data Display

- **Badge** - Status indicators and labels
- **Avatar** - User profile images (community leaderboard)
- **Progress** - Progress bars (level XP, community goals)
- **Divider** - Visual separators
- **List** - Scrollable list container

**Usage in BankSampah:**

- Status badges: "Top 10%", "Level 5", "🔥 5 hari"
- User avatars: Community leaderboard contributors
- Level progress bars: XP toward next level
- Transaction list: Scrolling history with dividers
- Community list: Top contributors

#### Forms & Input

- **Button** - Primary and secondary actions
- **Input** - Text input fields
- **Select** - Dropdown selection
- **Checkbox** - Multi-select options
- **Radio** - Single-select options
- **Switch** - Toggle states (Mode Lansia enable/disable)
- **FormControl** - Form layout with labels and validation

**Usage in BankSampah:**

- Primary CTAs: "Setor Sampah", "Tarik Uang"
- Transaction forms: Weight input, waste type selection
- Settings: Toggle Mode Lansia, notifications
- Onboarding: User preferences, waste types

#### Feedback

- **Alert** - System messages and warnings
- **Toast** - Temporary notifications
- **Spinner** - Loading indicators
- **Skeleton** - Content placeholders while loading

**Usage in BankSampah:**

- Success notifications: Transaction complete
- Error alerts: Upload failed, network issues
- Loading states: Photo upload, API calls
- Skeleton screens: Dashboard loading

#### Overlay

- **Modal** - Overlay dialogs
- **Actionsheet** - Bottom sheet for actions
- **Popover** - Contextual information bubbles
- **Tooltip** - Hover hints (web only)

**Usage in BankSampah:**

- Badge unlock celebrations: Full-screen modal
- Pickup scheduling: Bottom sheet with calendar
- Impact info: Popover explaining CO₂ calculation
- Tutorial hints: Tooltip overlays

#### Media

- **Image** - Optimized image display
- **Icon** - SVG icon library (Ionicons, FontAwesome)

**Usage in BankSampah:**

- Waste photos: Transaction documentation
- Icons: Navigation, waste types, badges
- Achievement graphics: Badge visuals
- Social share cards: Generated images

#### Typography

- **Text** - Text display with theme variants
- **Heading** - Heading levels (h1-h6)

**Usage in BankSampah:**

- All text content with consistent sizing
- Screen headings, section titles
- Responsive font scaling (Dynamic Type support)

---

### Custom Components (Gap Analysis)

**NativeBase covers foundation, but we need 8 custom components for BankSampah's unique requirements:**

#### 1. ImpactHeroCard (Critical - Phase 1)

**Purpose:** Display environmental impact with dual ledger in Impact-First layout

**Gap Reason:** NativeBase Card is generic. We need specific layout for impact narrative (pohon → kg → Rp hierarchy) with gradient background and emotional icon.

**Component Specification:**

**Anatomy:**

```
┌─────────────────────────────────────┐
│  gradient-green background          │
│                                     │
│        🌳 (48x48px icon)           │
│                                     │
│    50 Pohon Diselamatkan           │ ← 48pt Inter Bold, white
│    (Primary metric)                 │
│                                     │
│  = 100kg sampah dikelola           │ ← 16pt Inter Regular, white 0.9 opacity
│  (Secondary context)                │
│                                     │
│  = Rp 150,000 tersimpan            │ ← 16pt Inter Regular, white 0.9 opacity
│  (Tertiary context)                 │
│                                     │
└─────────────────────────────────────┘
```

**States:**

- Default: Static display
- Loading: Skeleton placeholder with shimmer
- Tap: Expands to show monthly trend sparkline
- Long-press: Opens share modal with achievement card
- Error: Shows "Data tidak tersedia" with retry button

**Variants:**

- **Simple mode**: Vertical stack (icon → metric → context)
- **Detailed mode**: Adds tap to expand sparkline
- **Power mode**: Adds long-press to share
- **Lansia mode**: Larger fonts (64pt primary), higher contrast (green.900 on white)

**Props:**

```typescript
interface ImpactHeroCardProps {
  pohonCount: number; // Primary metric: trees saved
  kgTotal: number; // Secondary: kg waste
  rupiah: number; // Tertiary: financial value
  mode: "simple" | "detailed" | "power" | "lansia";
  loading?: boolean;
  onTap?: () => void; // Expand sparkline
  onLongPress?: () => void; // Open share modal
}
```

**Accessibility:**

- ARIA label: "Impact Hero. {pohonCount} pohon diselamatkan dari {kgTotal} kilogram sampah, setara {rupiah} rupiah."
- Keyboard: Tab to focus, Enter to expand, Shift+Enter to share
- Screen reader: Reads metrics in hierarchy order (impact → weight → financial)
- Touch target: Entire card 48px minimum height

**Content Guidelines:**

- Primary metric: Always use "pohon" unit with friendly rounding (50, not 50.3)
- Secondary: Show actual kg with 1 decimal (100.5kg)
- Tertiary: Show Rupiah with K suffix (Rp 150K, not Rp 150,000)
- Icon: Rotate between 🌳 (tree), 🌱 (seedling), 🍃 (leaf) based on milestone

**Interaction Behavior:**

- Tap: 200ms debounce, animate expand sparkline (300ms ease-out)
- Long-press: 500ms hold triggers haptic feedback + share modal
- Sparkline: 7-day mini line chart, green.600 line, no axes, 120x40px

---

#### 2. DualLedgerBalance (Critical - Phase 1)

**Purpose:** Display side-by-side financial + environmental balance with equal visual weight

**Gap Reason:** NativeBase has no dual-column balanced metric display. We need custom layout for Direction 2 (Dual Ledger Balance) alternative view.

**Component Specification:**

**Anatomy:**

```
┌─────────────────────────────────────┐
│  white background, border gray.200  │
│                                     │
│  ┌────────────┬────────────┐       │
│  │ Saldo      │ Saldo      │       │
│  │ Rupiah     │ Sampah     │       │
│  │ (label)    │ (label)    │       │
│  │            │            │       │
│  │ Rp 150K    │   100kg    │       │ ← 28pt Inter Bold
│  │ (green.600)│ (blue.500) │       │
│  └────────────┴────────────┘       │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ 💚 50 pohon diselamatkan     │ │ ← Impact context below
│  │ (green.50 bg, green.900 text)│ │
│  └───────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

**States:**

- Default: Static display with both balances
- Loading: Skeleton placeholders for both columns
- Balance update: Animated number increment (800ms duration)
- Tap balance: Opens detailed breakdown modal

**Variants:**

- **Balanced layout**: 50/50 split (Rupiah | kg)
- **Financial-first**: 60/40 split (Rupiah larger)
- **Environmental-first**: 40/60 split (kg larger)
- **Lansia mode**: Stacked vertical (Rupiah top, kg bottom), 48pt text

**Props:**

```typescript
interface DualLedgerBalanceProps {
  rupiah: number;
  kg: number;
  pohonEquivalent: number;
  layout:
    | "balanced"
    | "financial-first"
    | "environmental-first"
    | "lansia-stacked";
  loading?: boolean;
  onTapRupiah?: () => void; // Open Rupiah breakdown
  onTapKg?: () => void; // Open kg breakdown
}
```

**Accessibility:**

- ARIA label: "Dual Ledger Balance. Saldo Rupiah: {rupiah} rupiah. Saldo Sampah: {kg} kilogram."
- Keyboard: Tab cycles through Rupiah → kg → impact context
- Screen reader: Announces both balances separately, then impact context
- Touch targets: Each column 44x44pt minimum

**Content Guidelines:**

- Rupiah: Use K/M suffix (Rp 150K, Rp 1.2M)
- Kg: Show 1 decimal precision (100.5kg)
- Impact: Dynamic phrasing (50 pohon, 1 ton CO₂, 500 L air)
- Labels: 12pt gray.600, centered above metrics

**Interaction Behavior:**

- Tap Rupiah: Opens modal with transaction breakdown by type
- Tap kg: Opens modal with waste composition chart (Plastik 60%, Kardus 30%, etc.)
- Balance update animation: Count-up effect from old to new value (easeOutCubic)

---

#### 3. TransactionCard (Critical - Phase 1)

**Purpose:** Display transaction history item with impact-first hierarchy

**Gap Reason:** NativeBase List/Card are generic. We need custom layout for impact → waste type → financial layout with timestamp and photo thumbnail.

**Component Specification:**

**Anatomy:**

```
┌─────────────────────────────────────────┐
│  white card, shadow-sm, rounded-12px    │
│  padding: 16px                           │
│                                          │
│  +5 pohon  ←─────────────────── 🌳     │ ← 16pt Bold green.600 (impact primary)
│  (impact)                       (icon)  │
│                                          │
│  Plastik Campur  ────────────────────   │ ← 14pt Medium gray.900 (waste type)
│                                          │
│  10kg • Rp 15,000  ──────── [📸]       │ ← 12pt Regular gray.600 + thumbnail
│  24 Des 2025 • 10:30                    │
│                                          │
└─────────────────────────────────────────┘
```

**States:**

- Default: Static display
- Tap: Opens transaction detail modal
- Swipe-left: Reveals "Bagikan" (share) action
- Swipe-right: Reveals "Detail" action (alternative to tap)
- Loading: Skeleton with shimmer

**Variants:**

- **Impact-first** (default): Impact primary, waste secondary, financial tertiary
- **Financial-first** (operator view): Rupiah primary, waste secondary, impact tertiary
- **Compact** (Power mode list): Single line with all info compressed
- **Lansia**: Stacked layout, 24pt text, no thumbnail

**Props:**

```typescript
interface TransactionCardProps {
  transactionId: string;
  impact: { pohon?: number; co2?: number };
  wasteType: string;
  kg: number;
  rupiah: number;
  timestamp: Date;
  photoUrl?: string;
  layout: "impact-first" | "financial-first" | "compact" | "lansia";
  onTap?: () => void;
  onShare?: () => void;
}
```

**Accessibility:**

- ARIA label: "Transaksi {wasteType}. {impact} pohon diselamatkan. {kg} kilogram. {rupiah} rupiah. {timestamp}"
- Keyboard: Tab to focus, Enter to open detail, S to share
- Screen reader: Reads in impact → type → details → timestamp order
- Touch target: Entire card 56px minimum height

**Content Guidelines:**

- Impact: "+5 pohon" (use + prefix for positive framing)
- Waste type: Title case (Plastik Campur, not PLASTIK CAMPUR)
- Weight/rupiah: Bullet separator "10kg • Rp 15,000" (not comma or dash)
- Timestamp: Relative time <24h ("2 jam lalu"), absolute after ("24 Des 2025")
- Photo: 40x40px rounded thumbnail (8px border-radius)

**Interaction Behavior:**

- Tap: Opens modal with full transaction details (photo, breakdown, operator info)
- Swipe: Gesture distance >40% card width triggers action
- Share: Generates shareable card (1080x1080px) with transaction stats
- Photo tap: Opens full-screen lightbox with zoom

---

#### 4. BadgeUnlockCelebration (Critical - Phase 2)

**Purpose:** Full-screen modal celebrating badge unlock with confetti animation

**Gap Reason:** NativeBase Modal is generic. We need specific celebration design with confetti, badge visual, shareable card generation.

**Component Specification:**

**Anatomy:**

```
┌─────────────────────────────────────┐
│  Full-screen overlay (rgba black)   │
│  Confetti animation (2s loop)       │
│                                     │
│         ✕ (close button)           │ ← Top-right
│                                     │
│       🏆 (badge icon 80x80px)      │ ← Gold gradient
│       with glow effect              │
│                                     │
│  Environmental Champion             │ ← 24pt Inter Bold
│       100kg                          │
│                                     │
│  Anda telah menyelamatkan          │ ← 16pt Inter Regular
│       50 pohon!                     │
│                                     │
│  ┌─────────────────────────────┐  │
│  │  [Shareable card preview]   │  │ ← 1080x1920 Instagram Story
│  │    (reduced size)            │  │
│  └─────────────────────────────┘  │
│                                     │
│  [  Bagikan Pencapaian  ] (CTA)   │ ← Green.600, 48px height
│                                     │
└─────────────────────────────────────┘
```

**States:**

- Entering: Slide up from bottom (300ms) + confetti starts
- Active: Confetti loops (60fps, 2s cycle), badge glow pulses
- Sharing: Generates PNG, opens share sheet
- Exiting: Fade out (200ms)

**Variants:**

- **First badge**: Extra confetti density, longer animation (4s)
- **Milestone badge** (10, 50, 100kg): Different confetti colors per tier
- **Legend badge**: Gold + green confetti, special glow effect
- **Lansia mode**: No confetti (reduce motion), simplified layout

**Props:**

```typescript
interface BadgeUnlockCelebrationProps {
  badge: {
    id: string;
    icon: string; // Emoji or image URL
    title: string; // "Environmental Champion 100kg"
    description: string; // "Anda telah menyelamatkan 50 pohon!"
    tier: "bronze" | "silver" | "gold" | "legend";
  };
  userStats: {
    totalKg: number;
    pohonSaved: number;
    co2Prevented: number;
  };
  onShare: (shareableCardUrl: string) => void;
  onClose: () => void;
}
```

**Accessibility:**

- ARIA label: "Badge Unlocked! {badge.title}. {badge.description}"
- Keyboard: Enter to share, Escape to close
- Screen reader: Announces badge unlock, reads title and description
- Reduce motion: Respects system preference (disables confetti if enabled)
- Touch target: Share button 48px height, close button 44x44px

**Content Guidelines:**

- Title: Max 3 words + metric (Environmental Champion 100kg)
- Description: One sentence, positive framing ("Anda telah menyelamatkan" not "Anda baru saja")
- Confetti colors: Tier-based (Bronze: orange, Silver: gray, Gold: gold.600, Legend: green.600 + gold.600 mix)
- Share card: Auto-generates with user name, badge icon, stats, QR code

**Interaction Behavior:**

- Confetti animation: Lottie file (JSON), green + gold particles, fall from top, 60fps
- Badge glow: CSS box-shadow pulse (0 → 16px → 0, 2s ease-in-out infinite)
- Share action: Generates PNG (1080x1920px), opens native share sheet (iOS/Android)
- Close: Tap X button or tap outside modal (dismiss gesture)

**Technical Implementation:**

- Confetti: `react-native-confetti-cannon` library
- Share card: `react-native-view-shot` captures component as PNG
- Share sheet: `react-native-share` for native sharing

---

#### 5. CommunityHeroCard (High Priority - Phase 2)

**Purpose:** Display collective community achievement with solidarity framing

**Gap Reason:** NativeBase has no community-specific card. We need custom layout for kelurahan milestone + percentile ranking.

**Component Specification:**

**Anatomy:**

```
┌─────────────────────────────────────┐
│  gradient-green background          │
│  rounded-16px, padding: 20px        │
│                                     │
│  🎉 Kelurahan kita TOP 3 se-kota!  │ ← 16pt Bold white (collective achievement)
│                                     │
│        10 TON                       │ ← 40pt Bold white (community metric)
│                                     │
│  Bersama-sama mengelola sampah     │ ← 14pt Regular white 0.9 opacity
│     bulan ini                       │
│                                     │
│  [Tap untuk lihat leaderboard]     │ ← Subtle link
│                                     │
└─────────────────────────────────────┘
```

**States:**

- Default: Static display with current ranking
- Loading: Skeleton with shimmer (while fetching leaderboard data)
- Tap: Navigates to Community tab with full leaderboard
- Rank improved: Celebration animation (particle burst)

**Variants:**

- **Top 3**: Green gradient + 🎉 emoji + "TOP 3" text
- **Top 10**: Blue gradient + 🌟 emoji + "TOP 10" text
- **Improving**: Yellow gradient + 📈 emoji + "Naik {n} peringkat" text
- **No rank**: Gray gradient + encouragement ("Ayo kita bisa TOP 10!")

**Props:**

```typescript
interface CommunityHeroCardProps {
  kelurahanName: string;
  cityRank: number; // 1-based rank
  totalCities: number;
  communityMetric: {
    value: number; // 10 (tons)
    unit: "kg" | "ton";
  };
  timeframe: "week" | "month" | "year";
  onTap?: () => void; // Navigate to full leaderboard
}
```

**Accessibility:**

- ARIA label: "Community Achievement. Kelurahan {name} ranked {rank} dari {total} se-kota. {metric} {unit} bersama-sama."
- Keyboard: Tab to focus, Enter to navigate
- Screen reader: Reads collective achievement, then metric, then action
- Touch target: Entire card 100px minimum height

**Content Guidelines:**

- Rank: Use "TOP {n}" for top 10, "Peringkat {n}" otherwise
- Metric: Use ton for >1000kg (10 TON, not 10,000kg)
- Timeframe: Dynamic ("bulan ini", "minggu ini", "tahun ini")
- Emoji: Rank-based (🎉 top 3, 🌟 top 10, 📈 improving, 💪 not ranked)
- Solidarity language: "Bersama-sama", "kita", "ayo" (not "you" or "your kelurahan")

**Interaction Behavior:**

- Tap: Smooth navigation to Community tab (200ms fade transition)
- Rank improvement: Confetti burst (1s), haptic feedback, toast "Naik ke TOP {n}!"
- Data refresh: Pull-to-refresh on dashboard updates community rank

---

#### 6. UserRankCard (High Priority - Phase 2)

**Purpose:** Display user's percentile ranking with individual contribution stats

**Gap Reason:** NativeBase has no percentile display. We need custom layout for "TOP 10%" framing (not absolute rank).

**Component Specification:**

**Anatomy:**

```
┌─────────────────────────────────────────┐
│  white card, border: 2px green.600      │
│  rounded-12px, padding: 16px            │
│                                          │
│  ┌──────────────┬──────────────────┐   │
│  │  Rp 150K     │   Anda di         │   │
│  │  100kg       │   TOP 10%         │   │ ← Right: 24pt Bold gold.600
│  │  (left stats)│   (percentile)    │   │
│  └──────────────┴──────────────────┘   │
│                                          │
│  💚 50 pohon diselamatkan bersama       │ ← Impact context
│                                          │
└─────────────────────────────────────────┘
```

**States:**

- Default: Static display with current percentile
- Loading: Skeleton placeholders
- Tap: Opens detailed rank breakdown modal
- Rank improved: Animated change (old → new percentile)

**Variants:**

- **Top tier** (TOP 10%): Gold.600 percentile text
- **Mid tier** (TOP 50%): Green.600 percentile text
- **Lower tier** (>50%): Gray.600 percentile text + encouragement
- **Lansia mode**: Larger text (28pt percentile), no border

**Props:**

```typescript
interface UserRankCardProps {
  userContribution: {
    rupiah: number;
    kg: number;
    pohonEquivalent: number;
  };
  percentile: number; // 0-100 (10 = TOP 10%)
  totalUsers: number;
  timeframe: "week" | "month" | "all-time";
  onTap?: () => void;
}
```

**Accessibility:**

- ARIA label: "Your Rank. You are in TOP {percentile}% dari {totalUsers} heroes. Contribution: {rupiah} rupiah, {kg} kilogram."
- Keyboard: Tab to focus, Enter to open detail
- Screen reader: Reads contribution stats, then percentile, then impact
- Touch target: Entire card 80px minimum height

**Content Guidelines:**

- Percentile: Always use "TOP {n}%" phrasing (not "Bottom 90%" or "#472 dari 5,000")
- Contribution: K/M suffix for rupiah, 1 decimal for kg
- Impact: Dynamic unit (pohon for <100, ton CO₂ for >100kg)
- Encouragement: If >50%, show "Ayo naik ke TOP 50%! {gap} kg lagi" (motivational gap)
- Color coding: Gold (<10%), Green (10-50%), Gray (>50%)

**Interaction Behavior:**

- Tap: Opens modal with detailed breakdown (rank history chart, comparison to avg user)
- Percentile change: Animated count (easeOutCubic), confetti if enters new tier
- Refresh: Pull-to-refresh updates percentile (debounced to avoid spam)

---

#### 7. StreakIndicator (Medium Priority - Phase 3)

**Purpose:** Display daily engagement streak in status bar

**Gap Reason:** NativeBase Badge doesn't support fire emoji + animated effects. We need custom component for streak psychology.

**Component Specification:**

**Anatomy:**

```
┌─────────────────┐
│  🔥 5 hari      │ ← 12pt Medium gray.600 (default)
└─────────────────┘

Variants:
│  🔥 21 hari     │ ← Larger fire emoji (16px) at 21+ days
│  🔥 100 hari    │ ← Animated fire (pulsing) at 100+ days
│  ⚪ 0 hari      │ ← Gray dot if streak broken
```

**States:**

- Active streak: Fire emoji + day count
- Broken streak (same day): Gray dot + "Broken today" tooltip
- Broken streak (past): Gray dot + "Start new streak" tooltip
- Milestone reached: Animated fire (pulse effect)

**Variants:**

- **Short streak** (1-20 days): Static fire 🔥 + count
- **Medium streak** (21-99 days): Larger fire (16px) + count
- **Long streak** (100+ days): Pulsing fire animation + count
- **Broken**: Gray dot ⚪ + encouragement

**Props:**

```typescript
interface StreakIndicatorProps {
  streakDays: number; // 0 = broken
  lastActivityDate: Date;
  longestStreak: number; // Historical max
  onTap?: () => void; // Open streak calendar modal
}
```

**Accessibility:**

- ARIA label: "{streakDays} hari streak. Terakhir aktif: {lastActivityDate}"
- Keyboard: Tab to focus, Enter to open calendar
- Screen reader: Reads streak count, encourages maintenance
- Touch target: 44x44px (even though visual is smaller, expand hit area)

**Content Guidelines:**

- Day count: "5 hari" (not "5 days" or "5d" - full word for clarity)
- Broken: "Mulai lagi!" (not "Streak broken" - positive framing)
- Milestone messages: 7 hari ("1 minggu!"), 21 hari ("3 minggu!"), 100 hari ("100 hari! Legend!")
- Fire size: 12px (default), 16px (21+), 20px (100+)

**Interaction Behavior:**

- Tap: Opens streak calendar modal showing activity heatmap (GitHub-style contribution graph)
- Milestone reached: Confetti burst (brief, 1s), haptic feedback
- Freeze day: If user misses 1 day but has freeze available, auto-uses it (notify via toast)
- Broken recovery: Show "Start new streak" CTA with motivational message

**Technical Implementation:**

- Animation: CSS keyframe pulse (scale 1 → 1.1 → 1, 2s infinite)
- Calendar modal: 7x5 grid (35 days), green squares for active days, gray for inactive

---

#### 8. PickupSchedulingCalendar (Medium Priority - Phase 3)

**Purpose:** Visual calendar for selecting pickup time slots with demand heatmap

**Gap Reason:** NativeBase has no calendar component. We need custom scheduling UI with availability indicators.

**Component Specification:**

**Anatomy:**

```
┌─────────────────────────────────────┐
│  Pilih Waktu Pickup                 │ ← Header
│                                     │
│  ◀  25 Desember 2025  ▶            │ ← Date navigation
│                                     │
│  ┌─────────────────────────────┐   │
│  │  Pagi (08:00 - 12:00)      │   │ ← Green bg (available)
│  │  2 slot tersisa            │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │  Siang (12:00 - 15:00)     │   │ ← Yellow bg (medium)
│  │  1 slot tersisa            │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │  Sore (15:00 - 18:00)      │   │ ← Red bg (full)
│  │  Penuh                     │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Konfirmasi Pickup]               │ ← Disabled until selection
│                                     │
└─────────────────────────────────────┘
```

**States:**

- Default: Shows next 7 days with availability
- Date selected: Shows time slots for that day
- Slot selected: Enables confirm button
- Loading: Skeleton for slot availability
- All full: Shows "Coba tanggal lain" message

**Variants:**

- **Day view** (default): 3-4 time slots per day
- **Week view**: Mini calendar showing next 7 days
- **Lansia mode**: Giant time slot buttons (88x88pt), only shows today + tomorrow

**Props:**

```typescript
interface PickupSchedulingCalendarProps {
  availableSlots: {
    date: Date;
    slots: {
      timeRange: string; // "08:00 - 12:00"
      slotsRemaining: number;
      operatorAvailable: boolean;
    }[];
  }[];
  selectedSlot?: {
    date: Date;
    timeRange: string;
  };
  onSelectSlot: (date: Date, timeRange: string) => void;
  onConfirm: () => void;
}
```

**Accessibility:**

- ARIA label: "Pickup Scheduling Calendar. {availableSlots.length} dates available. Select date and time."
- Keyboard: Arrow keys to navigate dates/slots, Enter to select, Tab to confirm button
- Screen reader: Reads date, then available slots with counts
- Touch target: Each slot 56px minimum height

**Content Guidelines:**

- Date format: "25 Desember 2025" (full date, not 25/12/2025)
- Time ranges: 12-hour format (08:00 - 12:00, not 08:00 - 12:00)
- Availability: "{n} slot tersisa" (1-5), "Penuh" (0), "Banyak slot" (6+)
- Demand colors: Green (<30% booked), Yellow (30-70%), Red (>70%)

**Interaction Behavior:**

- Date navigation: Swipe left/right to change dates (gesture support)
- Slot selection: Tap slot → highlights with green.600 border → enable confirm button
- Confirm: Shows booking summary modal → "Yakin?" confirmation → POST to API
- Full slots: Gray out + disable tap, show "Penuh" label
- Preferred times: Highlight user's historical preferred times (e.g., "Biasanya Anda pilih pagi")

**Technical Implementation:**

- Date library: `date-fns` for date manipulation
- Gesture: `react-native-gesture-handler` for swipe detection
- API: GET `/api/availability?kelurahan={id}&dates={range}` returns slot data

---

### Component Implementation Strategy

**Building Custom Components on NativeBase Foundation:**

#### 1. Use Design System Tokens

All custom components will use NativeBase theme tokens for consistency:

```typescript
// Example: ImpactHeroCard implementation
import { Box, Text, VStack, useTheme } from "native-base";

const ImpactHeroCard = ({ pohonCount, kgTotal, rupiah, mode }) => {
  const theme = useTheme();

  return (
    <Box
      bg="linear-gradient(135deg, green.600, green.700)" // Theme color
      borderRadius="16" // Theme radius
      padding="6" // Theme spacing (24px)
      shadow="2" // Theme shadow
    >
      <VStack space="4" alignItems="center">
        <Text fontSize="4xl" fontWeight="bold" color="white">
          {pohonCount} Pohon Diselamatkan
        </Text>
        <Text fontSize="md" color="white" opacity={0.9}>
          = {kgTotal}kg sampah dikelola
        </Text>
        <Text fontSize="md" color="white" opacity={0.9}>
          = Rp {rupiah.toLocaleString()}
        </Text>
      </VStack>
    </Box>
  );
};
```

**Token Categories Used:**

- **Colors**: `green.600`, `blue.500`, `gold.600`, `gray.600` (from customTheme)
- **Spacing**: `space.4` (16px), `space.6` (24px), `space.8` (32px)
- **Typography**: `fontSize.md` (16pt), `fontSize.2xl` (32pt), `fontSize.4xl` (48pt)
- **Shadows**: `shadow.2` (card elevation), `shadow.4` (modal elevation)
- **Radius**: `borderRadius.8` (8px), `borderRadius.12` (12px), `borderRadius.16` (16px)

#### 2. Compose with NativeBase Primitives

Build custom components by composing NativeBase foundation components:

**Example: DualLedgerBalance composition**

```typescript
// Uses NativeBase: Box, HStack, VStack, Text, Divider

<Box bg="white" borderWidth="2" borderColor="gray.200" borderRadius="12" p="4">
  <HStack space="4" divider={<Divider orientation="vertical" />}>
    {/* Left column: Rupiah */}
    <VStack flex={1} alignItems="center">
      <Text fontSize="xs" color="gray.600">
        Saldo Rupiah
      </Text>
      <Text fontSize="2xl" fontWeight="bold" color="green.600">
        Rp {rupiah}K
      </Text>
    </VStack>

    {/* Right column: kg */}
    <VStack flex={1} alignItems="center">
      <Text fontSize="xs" color="gray.600">
        Saldo Sampah
      </Text>
      <Text fontSize="2xl" fontWeight="bold" color="blue.500">
        {kg}kg
      </Text>
    </VStack>
  </HStack>

  {/* Impact context below */}
  <Box bg="green.50" borderRadius="8" p="3" mt="4">
    <Text fontSize="sm" color="green.900">
      💚 {pohon} pohon diselamatkan
    </Text>
  </Box>
</Box>
```

#### 3. Accessibility Best Practices

Every custom component follows WCAG 2.1 AA minimum:

**Checklist:**

- ✅ **Color contrast**: All text meets 4.5:1 minimum (7:1 for Lansia mode)
- ✅ **Touch targets**: 44x44pt minimum (88x88pt Lansia)
- ✅ **ARIA labels**: Descriptive labels for screen readers
- ✅ **Keyboard navigation**: Tab order logical, Enter/Space for actions
- ✅ **Focus indicators**: Visible focus state (2px green.600 outline)
- ✅ **Reduced motion**: Respects `prefers-reduced-motion` system setting

**Implementation pattern:**

```typescript
<TouchableOpacity
  accessible={true}
  accessibilityLabel="Impact Hero Card. 50 pohon diselamatkan dari 100 kilogram sampah."
  accessibilityRole="button"
  accessibilityHint="Tap to see detailed impact breakdown"
  style={{ minHeight: 44, minWidth: 44 }} // Touch target
  onPress={handleTap}
>
  {/* Component content */}
</TouchableOpacity>
```

#### 4. Progressive Mode Support

All custom components adapt to Progressive UX modes:

**Mode Mapping:**

```typescript
const getModeStyles = (mode: UXMode) => {
  switch (mode) {
    case "simple":
      return {
        fontSize: { body: "md", hero: "2xl", display: "4xl" },
        spacing: { card: 4, section: 6 },
        features: ["basic"],
      };

    case "detailed":
      return {
        fontSize: { body: "sm", hero: "xl", display: "3xl" },
        spacing: { card: 3, section: 5 },
        features: ["basic", "charts", "breakdown"],
      };

    case "power":
      return {
        fontSize: { body: "xs", hero: "lg", display: "2xl" },
        spacing: { card: 2, section: 4 },
        features: ["basic", "charts", "breakdown", "export", "analytics"],
      };

    case "lansia":
      return {
        fontSize: { body: "2xl", hero: "4xl", display: "6xl" },
        spacing: { card: 8, section: 12 },
        features: ["basic"],
        highContrast: true,
      };
  }
};
```

**Usage in component:**

```typescript
const ImpactHeroCard = ({ mode, ...props }) => {
  const styles = getModeStyles(mode);

  return (
    <Box p={styles.spacing.card}>
      <Text fontSize={styles.fontSize.display}>{props.pohonCount} Pohon</Text>
    </Box>
  );
};
```

#### 5. Animation & Micro-interactions

Use `react-native-reanimated` for performant animations:

**Animation patterns:**

- **Fade in**: 300ms ease-out (component mount)
- **Slide up**: 400ms spring (modal entrance)
- **Count up**: 800ms ease-out-cubic (number changes)
- **Confetti**: 2s loop (celebrations)
- **Pulse**: 2s infinite ease-in-out (streak fire, badge glow)

**Example: Badge unlock confetti**

```typescript
import LottieView from "lottie-react-native";

<LottieView
  source={require("./confetti-green-gold.json")}
  autoPlay
  loop={true}
  style={{ position: "absolute", width: "100%", height: "100%" }}
/>;
```

#### 6. Testing Strategy

Each custom component has test coverage:

**Test types:**

- **Unit tests**: Component renders correctly, props handled
- **Interaction tests**: Taps, swipes, gestures work
- **Accessibility tests**: Screen reader labels, keyboard navigation
- **Visual regression**: Screenshot comparison (Storybook)
- **Performance tests**: 60fps animations, fast render (<16ms)

**Example test:**

```typescript
describe("ImpactHeroCard", () => {
  it("renders impact metrics correctly", () => {
    const { getByText } = render(
      <ImpactHeroCard
        pohonCount={50}
        kgTotal={100}
        rupiah={150000}
        mode="simple"
      />
    );

    expect(getByText("50 Pohon Diselamatkan")).toBeTruthy();
    expect(getByText("= 100kg sampah dikelola")).toBeTruthy();
  });

  it("has accessible label", () => {
    const { getByLabelText } = render(<ImpactHeroCard {...props} />);
    expect(getByLabelText(/50 pohon diselamatkan/i)).toBeTruthy();
  });
});
```

---

### Implementation Roadmap

**Phased rollout prioritized by user journey criticality:**

#### Phase 1: Core MVP Components (Week 3-4)

**Must-have for first user transactions:**

1. **ImpactHeroCard** (2 days)

   - Critical path: Dashboard hero section
   - Users: Ibu Siti, Rina (warm + cold leads)
   - Blocks: Identity transformation messaging

2. **TransactionCard** (2 days)

   - Critical path: Transaction history list
   - Users: All user types
   - Blocks: Transaction visibility, trust building

3. **DualLedgerBalance** (1 day)
   - Critical path: Alternative dashboard view
   - Users: Rina (cold lead preference)
   - Blocks: Financial-first users

**Deliverable:** Users can complete first transaction and see impact (Week 4 end)

---

#### Phase 2: Engagement & Retention (Week 5-6)

**Gamification and community features:**

4. **BadgeUnlockCelebration** (3 days)

   - Critical path: Milestone celebrations
   - Users: All types (especially Rina for social sharing)
   - Blocks: 80% retention target via gamification

5. **CommunityHeroCard** (2 days)

   - Critical path: Collective achievement display
   - Users: Community-oriented (Ibu Siti)
   - Blocks: Viral growth via solidarity framing

6. **UserRankCard** (2 days)
   - Critical path: Percentile ranking display
   - Users: Competitive users (Rina)
   - Blocks: Social proof, leaderboard psychology

**Deliverable:** Full gamification loop functional (Week 6 end)

---

#### Phase 3: Optimization & Polish (Week 7-8)

**Enhanced UX features:**

7. **StreakIndicator** (1 day)

   - Enhancement: Daily engagement nudges
   - Users: All types (habit formation)
   - Benefit: Increases MAU/DAU ratio (target 65%)

8. **PickupSchedulingCalendar** (3 days)
   - Enhancement: Visual scheduling UI
   - Users: Ibu Siti, Rina (flexible pickup)
   - Benefit: Reduces pickup friction, increases transaction frequency

**Deliverable:** MVP feature-complete with polish (Week 8 end)

---

#### Phase 4: Future Enhancements (Post-MVP)

**Not critical for MVP, but valuable for scale:**

9. **SparklineChart** (Impact trend visualization)
10. **WasteCompositionPieChart** (Detailed breakdown)
11. **ReferralCodeCard** (Social sharing widget)
12. **OperatorLiveLocationMap** (Pickup tracking)
13. **ImpactCertificateGenerator** (Shareable annual report)

**Timeline:** Month 7-12 (based on user feedback and analytics)

---

### Component Development Guidelines

**Consistency checklist for every custom component:**

✅ **Design tokens**: Use NativeBase theme (colors, spacing, typography)  
✅ **Composition**: Build with NativeBase primitives (Box, Text, HStack, etc.)  
✅ **Accessibility**: ARIA labels, keyboard nav, 44x44pt touch targets  
✅ **Progressive modes**: Support Simple/Detailed/Power/Lansia variants  
✅ **Animations**: 60fps, respect prefers-reduced-motion  
✅ **Testing**: Unit + interaction + accessibility tests  
✅ **Documentation**: Storybook story with all variants  
✅ **TypeScript**: Full type safety with props interface

**File structure per component:**

```
src/components/[ComponentName]/
  ├── index.tsx                 # Component implementation
  ├── [ComponentName].stories.tsx  # Storybook stories
  ├── [ComponentName].test.tsx     # Jest tests
  ├── types.ts                    # TypeScript interfaces
  └── README.md                   # Usage documentation
```

---

## User Journey Flows

Building on the rich user narratives from our PRD, I've designed detailed interaction flows for the three critical user journeys. Each flow maps the complete experience from trigger to resolution, with decision points, error handling, and success criteria.

### Journey 1: Ibu Siti - Warm Lead Assisted Onboarding to First Transaction

**User Goal:** Transform from skeptical existing bank sampah user to confident digital champion

**Entry Point:** WhatsApp announcement from Pak Budi (operator) about new digital platform

**Flow Diagram:**

```mermaid
graph TD
    Start[WhatsApp Group Announcement] --> Decision1{Interested but skeptical?}

    Decision1 -->|Yes - "App? Takut ribet"| AssistOffer[Pak Budi offers assisted setup]
    Decision1 -->|No - Not ready| Exit1[Stays with manual system]

    AssistOffer --> ScheduleVisit[Schedule home visit with operator]
    ScheduleVisit --> AssistedOnboarding[Assisted Onboarding Session]

    AssistedOnboarding --> Step1[Sign up with Google - 1 tap]
    Step1 --> Step2[3 simple tutorial screens]
    Step2 --> Step3[Select kelurahan & bank sampah unit]
    Step3 --> Step4[Import existing balance from manual book]
    Step4 --> Step5[Watch 2-min tutorial video]
    Step5 --> WelcomeReward[Receive Welcome Badge + Rp 5K bonus]

    WelcomeReward --> OnboardingComplete{Understand basic flow?}
    OnboardingComplete -->|Yes| FirstTransactionTrigger[Evening - has 2kg plastic ready]
    OnboardingComplete -->|No - confused| OperatorHelps[Pak Budi clarifies, retries tutorial]
    OperatorHelps --> OnboardingComplete

    FirstTransactionTrigger --> OpenApp[Opens app independently]
    OpenApp --> TapSetor[Taps "Setor Sampah" button]
    TapSetor --> TakePhoto[Takes photo of waste]
    TakePhoto --> SelectType[Selects "Plastik PET" from list]
    SelectType --> SchedulePickup[Chooses "Pickup Besok Pagi" with time]
    SchedulePickup --> ConfirmBooking[Confirms booking]

    ConfirmBooking --> BookingSuccess[Booking confirmed notification]
    BookingSuccess --> WaitPickup[Waits for pickup next morning]

    WaitPickup --> PickupArrives[Operator arrives at scheduled time]
    PickupArrives --> ScanQR[Operator scans her QR code]
    ScanQR --> WeighWaste[Operator weighs: 7.5kg - more than expected!]
    WeighWaste --> OperatorConfirm[Operator taps "Selesai" on his app]

    OperatorConfirm --> InstantNotification[Push notification: Transaction successful!]
    InstantNotification --> OpenDashboard[Opens app to see dashboard]

    OpenDashboard --> SimpleView[Sees Simple View - Level 1]
    SimpleView --> SaldoUpdate[Saldo: Rp 70K - up from Rp 45K!]
    SaldoUpdate --> ImpactMetric[Impact: 18.75kg CO₂ prevented = 1.4 trees]

    ImpactMetric --> Revelation{Realizes accumulated impact?}
    Revelation -->|"Wow! Segini banyak?"| TapDetail[Taps "Lihat Detail"]
    Revelation -->|Not interested| EndSimple[Stays in Simple View - still success]

    TapDetail --> DetailView[Unlocks Level 2 Detailed View]
    DetailView --> Breakdown[Sees breakdown, history, 3-month total]
    Breakdown --> ShareableCard[Sees shareable achievement card]

    ShareableCard --> SocialShare{Share to WhatsApp?}
    SocialShare -->|Yes - proud moment| Screenshot[Takes screenshot]
    Screenshot --> PostToGroup[Posts to RT/RW WhatsApp group]
    PostToGroup --> ViralSpread[5 neighbors ask: "Download dimana?"]

    SocialShare -->|No - private person| PrivateSuccess[Feels satisfied, no share]

    ViralSpread --> BecomesChampion[Becomes local digital champion]
    PrivateSuccess --> RegularUser[Regular user, no advocacy]
    EndSimple --> RegularUser

    BecomesChampion --> ThreeMonths[3 months later: 21-day streak, ranked #47, Rp 287K earned]
    RegularUser --> ThreeMonths

    ThreeMonths --> IdentityShift[Identity transformation complete: Environmental Hero]

    style Start fill:#e3f2fd
    style IdentityShift fill:#c8e6c9
    style BecomesChampion fill:#fff9c4
    style Revelation fill:#ffe0b2
    style OnboardingComplete fill:#ffe0b2
    style SocialShare fill:#ffe0b2
```

**Key Interaction Details:**

**Onboarding Phase (5 minutes):**

- Google OAuth: 1-tap authentication, no password required
- Tutorial screens: Image-heavy, minimal text (16pt), swipe to advance
- Balance import: Pak Budi verifies amount, enters manually, user confirms on screen
- Welcome reward: Confetti animation (2s), badge icon appears, Rp 5K added to balance instantly

**First Transaction (User-Initiated):**

- Photo upload: Camera opens with overlay guides ("Place waste in frame"), auto-crop, compression
- Waste type selection: Grid of 6 icons (Plastik PET, Plastik Campur, Kardus, Kertas, Logam, Kaca), tap to select
- Pickup scheduling: Calendar view shows available slots (green = available, gray = full), tap to select 2-hour window
- Confirmation: Shows summary (waste type, weight estimate, pickup time, location), [Cancel] [Konfirmasi] buttons

**Pickup & Completion:**

- QR code: Full-screen QR display with name + booking ID, operator scans with tablet
- Weight sync: Operator enters actual weight (7.5kg), syncs to user app in real-time
- Success notification: "🎉 Transaksi berhasil! +Rp 25,000 (7.5kg Plastik PET @ Rp 3,333/kg). Impact: 18.75kg CO₂ dicegah! 🌱"

**Dashboard Discovery:**

- Simple View (default): 3 large metrics + 2 CTA buttons, no information overload
- "Lihat Detail" button: Small link below, progressive disclosure trigger
- Level 2 unlock: Smooth transition animation, "You've unlocked Detailed View!" toast
- Shareable card: Auto-generates 1080x1920px PNG with brand colors, user stats, ready for social media

**Success Criteria:**

- ✅ Onboarding completion: >90% with operator assistance
- ✅ First transaction within 48 hours: >70% of onboarded users
- ✅ Social sharing rate: >30% of warm leads share achievement
- ✅ 3-month retention: >65% maintain weekly deposits

**Error Handling:**

- Photo upload failed: "Coba lagi?" retry button, "Skip foto" option (operator verifies in-person)
- No pickup slots available: "Slot penuh. Coba tanggal lain?" shows next 3 days with availability
- Operator didn't arrive: "Pickup terlambat?" button shows operator live location + contact number
- Balance import mismatch: Operator can override with verification note

---

### Journey 2: Rina - Cold Lead Self-Service Onboarding to Viral Advocate

**User Goal:** Go from climate-anxious scroller to confident environmental micro-influencer

**Entry Point:** Instagram sponsored ad during morning commute

**Flow Diagram:**

```mermaid
graph TD
    Start[Scrolling Instagram - sees climate guilt post] --> Guilt[Feels guilty: "What am I actually doing?"]
    Guilt --> Search[Google: "cara recycle Jakarta"]
    Search --> Friction[Bank sampah info: "Sabtu pagi jam 8? Jauh..."]
    Friction --> Abandoned1[Closes browser - cycle repeats]

    Abandoned1 --> TwoDaysLater[2 days later: Morning commute]
    TwoDaysLater --> InstagramAd[Sees BankSampah sponsored ad]

    InstagramAd --> AdClick{Ad resonates?}
    AdClick -->|No - scrolls past| Lost[Lost user]
    AdClick -->|Yes - "Finally, action > talk!"| LandingPage[Clicks to landing page]

    LandingPage --> AppStore[Downloads app from App Store]
    AppStore --> OpenApp[Opens app]

    OpenApp --> OnboardScreen1["Screen 1: Turn trash to treasure"]
    OnboardScreen1 --> OnboardScreen2["Screen 2: Track impact like portfolio"]
    OnboardScreen2 --> OnboardScreen3["Screen 3: Join 10,483 eco warriors"]
    OnboardScreen3 --> GoogleAuth[Taps "Sign Up with Google"]

    GoogleAuth --> OneSecond[1 tap, no password - 3 seconds]
    OneSecond --> LocationPerm["Location permission: Kemang, Jakarta Selatan"]
    LocationPerm --> WasteSelect["Selects waste types: Plastic, Cardboard, Paper"]
    WasteSelect --> EarningEst["Shows: ~Rp 120K/month est."]

    EarningEst --> Challenge["Complete first transaction within 24h = DOUBLE points!"]
    Challenge --> OnboardComplete[Onboarding complete: 4m 38s]

    OnboardComplete --> Decision1{Ready to transact?}
    Decision1 -->|Not now| Abandoned2[Closes app - may return later]
    Decision1 -->|Yes - has waste ready| FirstTrans[Opens "Setor Sampah"]

    FirstTrans --> PhotoAI[Takes photo - AI detects: 5 bottles, 2kg cardboard]
    PhotoAI --> UserConfirm{AI detection accurate?}
    UserConfirm -->|No| ManualSelect[Manually adjusts type/quantity]
    UserConfirm -->|Yes| SelectPickup[Selects pickup: "Besok 10-12"]
    ManualSelect --> SelectPickup

    SelectPickup --> Submit[Submits booking]
    Submit --> Notification1["Pickup dijadwalkan besok 10-12. Est. Rp 35K"]

    Notification1 --> NextDay[Next morning 10:47 AM]
    NextDay --> DoorbellRings[Doorbell rings - petugas arrives]
    DoorbellRings --> ScanQR[Petugas scans QR code]
    ScanQR --> ActualWeight[Weighs: 3.2kg - more than expected!]
    ActualWeight --> PetugasConfirm[Petugas taps complete]

    PetugasConfirm --> SuccessNotif["🎉 First transaction complete! Rp 35,250 + Badge!"]
    SuccessNotif --> OpenDashboard[Opens app to see dashboard]

    OpenDashboard --> PortfolioView[Investment-style portfolio UI]
    PortfolioView --> Stats1[Portfolio: 2.5kg PET +15% 📈]
    Stats1 --> Stats2[Earnings: Rp 35,250]
    Stats2 --> Stats3[Impact: 12kg CO₂ = 0.9 trees]
    Stats3 --> Level[Beginner Hero: 47/100 XP]

    Level --> AutoStory[App generates Instagram story template]
    AutoStory --> StoryDecision{Share to Instagram?}

    StoryDecision -->|No - private| PrivateUser[Uses app privately]
    StoryDecision -->|Yes - posts story| PostStory[Posts achievement to Instagram]

    PostStory --> ViralMoment[2 hours: 34 likes, 5 DMs asking for link]
    ViralMoment --> Referrals[2 friends use referral code - Rp 20K bonus!]
    Referrals --> Realization["This is going viral. This is how we scale!"]

    Realization --> TwoMonths[2 months later: 58-day streak, 12 referrals]
    PrivateUser --> RegularUser[Regular user, no advocacy]

    TwoMonths --> MicroInfluencer[Micro-influencer: 156kg CO₂, Legend tier, 300+ engagement]
    RegularUser --> StableUser[Stable retention, no viral growth]

    MicroInfluencer --> IdentityShift["Identity shift: Environmental hero with receipts"]
    StableUser --> IdentityShift

    style Start fill:#e3f2fd
    style IdentityShift fill:#c8e6c9
    style ViralMoment fill:#fff9c4
    style Realization fill:#fff9c4
    style OnboardComplete fill:#c8e6c9
    style AdClick fill:#ffe0b2
    style UserConfirm fill:#ffe0b2
    style StoryDecision fill:#ffe0b2
```

**Key Interaction Details:**

**Instagram Ad (First Touch):**

- Creative: Carousel ad (3 slides) showing portfolio UI, testimonial, eco warrior count
- CTA: "Join 10K+ Heroes" button (green.600, prominent)
- Targeting: F 25-35, Jakarta, interests: sustainability, fintech, lifestyle
- Landing page: Single-scroll page with app screenshots, download buttons (iOS + Android)

**Onboarding (4m 38s):**

- Screen 1: Full-screen hero animation (waste → treasure transformation), "Mulai" button
- Screen 2: Chart animation showing impact growth over time, "Lanjut" button
- Screen 3: Live counter (updates every 2s): "10,483 → 10,486 eco warriors", "Gabung Sekarang" button
- Google Auth: OAuth popup (system), returns to app, profile auto-populated
- Location: GPS permission modal, auto-detects neighborhood (Kemang), shows nearest 3 bank sampah units
- Waste selection: Checkbox grid (6 types), selected items show estimated monthly earnings
- 24h challenge: Banner at top with countdown timer (23:59:42 → 23:59:41)

**First Transaction (Self-Service):**

- Photo AI: Camera opens, captures photo, shows loading spinner (3s), displays detections with confidence scores
- AI output: "5 Plastik Botol (95% confident) ✓" + "2kg Kardus (87% confident) ✓" with checkmarks
- Edit option: Tap any item to adjust quantity or remove, "Tambah Item" button for manual entry
- Pickup scheduling: Calendar heatmap shows demand (green = low, yellow = medium, red = high), encourages off-peak
- Confirmation: Estimated earnings range (Rp 30K-40K), pickup time, address verification

**Portfolio Dashboard (Gen Z Aesthetic):**

- Top section: "Your Portfolio" with line chart (7-day trend)
- Holdings: Card-based layout, each waste type = card with type, weight, value, % change (green ↑ or red ↓)
- Impact metrics: Circular progress bars (CO₂ prevented, trees equivalent, water saved)
- Gamification: XP bar below (animated fill), level badge (icon + title), streak fire emoji
- Bottom: "Level Up" milestone preview ("50 XP more → unlock Apprentice Hero rewards!")

**Instagram Story Generation:**

- Auto-trigger: After first successful transaction
- Template: 1080x1920px PNG, brand gradient background, user stats overlay, QR code with referral link
- Customization: User can tap to change background color (3 presets), add sticker (3 options)
- Export: "Bagikan ke Instagram" button opens Instagram app with pre-filled story (deep link)

**Referral Mechanics:**

- Referral code: Unique 6-char code (e.g., RINA4K), shown in profile
- Share options: WhatsApp, Instagram DM, Copy link
- Tracking: Dashboard shows "12 teman bergabung" with avatars, "Rp 120K bonus diterima"
- Incentive: Rp 10K for referrer, Rp 10K for referee (both unlock after referee's first transaction)

**Success Criteria:**

- ✅ Onboarding completion: >85% self-service (no operator assistance)
- ✅ First transaction within 24h: >40% (challenge urgency works)
- ✅ Instagram story share: >50% of cold leads (Gen Z behavior)
- ✅ Referral activation: >30% generate at least 1 referral
- ✅ 2-month retention: >75% maintain weekly deposits + streak

**Error Handling:**

- AI detection wrong: "Tidak sesuai?" button → manual selection flow
- Pickup slot full: "Slot penuh" error with 3 alternative time suggestions
- Referral code invalid: "Kode tidak ditemukan" with "Coba lagi" retry
- Story generation failed: "Gagal generate story. Download manual?" provides PNG download
- Photo upload failed: "Upload gagal. Coba lagi?" with retry (3 attempts max) → "Lanjut tanpa foto" option

---

### Journey 3: Bapak Joko - Lansia Hybrid Assisted Onboarding

**User Goal:** Prove lansia can use digital tools independently with dignity

**Entry Point:** Family gathering, grandson offers to help setup

**Flow Diagram:**

```mermaid
graph TD
    Start[Sunday lunch - family gathering] --> Moment[Grandson shows TikTok videos]
    Moment --> Feeling["Pak Joko: Dunia digital... saya ketinggalan"]
    Feeling --> Mention[Mentions new bank sampah app to daughter]
    Mention --> Fear["Takut salah pencet, tulisan kecil, mata rabun"]

    Fear --> Offer[Grandson: "Aku bantu install. Ada Mode Lansia!"]
    Offer --> Decision1{Accept help?}

    Decision1 -->|No - too intimidated| Abandoned[Stays with manual system]
    Decision1 -->|Yes - wants to try| Agreement["Kalau ribet, berhenti ya"]

    Agreement --> Download[Grandson downloads app]
    Download --> ModeSelect[Selects "Mode Lansia" during setup]

    ModeSelect --> UITransform[UI transforms: 24pt font, 3 giant buttons]
    UITransform --> VoiceOn[Enables voice guidance]
    VoiceOn --> PhoneAuth[Uses phone number + SMS OTP]

    PhoneAuth --> OTPRead[Grandson reads 6-digit code aloud]
    OTPRead --> PakJokoTypes[Pak Joko types carefully]
    PakJokoTypes --> ProfileSetup[Name, bank unit, balance import]
    ProfileSetup --> PhotoTaken[Grandson takes Pak Joko's profile photo]

    PhotoTaken --> SetupComplete[Setup complete]
    SetupComplete --> ThreeButtons["Sees: 3 GIANT buttons"]
    ThreeButtons --> Explanation["Grandson: Hijau=saldo, Biru=setor, Kuning=tarik"]

    Explanation --> FirstTest["Pak Joko: Coba tekan hijau?"]
    FirstTest --> PressGreen[Presses LIHAT SALDO button]
    PressGreen --> HugeNumber["Rp 125,000 (huge 48pt font)"]

    HugeNumber --> Smile["Ini... mudah ya?"]
    Smile --> IndependentUse[2 days later: wants to try alone]

    IndependentUse --> Morning[Morning rounds: collects 5kg plastic]
    Morning --> OpensApp[Opens app independently]
    OpensApp --> SeesButtons[Sees 3 buttons again]
    SeesButtons --> RemembersBlue["Remembers: Blue = Setor Sampah"]

    RemembersBlue --> PressBlue[Presses SETOR SAMPAH]
    PressBlue --> SimpleForm[Simple form appears]

    SimpleForm --> InputKG["Berapa kg?" - Types: 5]
    InputKG --> SelectType["Jenis?" - Large icons, taps PLASTIK]
    SelectType --> Confirm["Konfirmasi?" - Taps YA]

    Confirm --> Processing[App processes...]
    Processing --> Nervous["Did I break it?"]

    Nervous --> SMS["Phone buzzes - SMS arrives"]
    SMS --> ReadsSMS["BankSampah: Transaksi berhasil. 5kg Plastik. Rp 16,500 masuk."]

    ReadsSMS --> Relief["Berhasil! Tidak rusak!"]
    Relief --> CheckBalance[Opens app, presses LIHAT SALDO]
    CheckBalance --> NewBalance["Rp 141,500 (up from Rp 125K)"]

    NewBalance --> Pride["Saya bisa!"]
    Pride --> TellsFamily[Calls daughter: "Aku sudah bisa pakai app!"]

    TellsFamily --> OneMonth[1 month later: daily routine]
    OneMonth --> MorningRoutine[Morning: collect waste from neighbors]
    MorningRoutine --> AppRecord[Records in app, not manual book]
    AppRecord --> WeeklyCheck[Weekly: checks balance, smiles at growth]

    WeeklyCheck --> CommunityRole[Teaches other lansia at community meeting]
    CommunityRole --> Proof["Proves: Lansia bisa digital with dignity"]

    Proof --> IdentityAffirmed[Identity preserved + enhanced: Still coordinator, now digital]

    style Start fill:#e3f2fd
    style IdentityAffirmed fill:#c8e6c9
    style Pride fill:#fff9c4
    style Smile fill:#fff9c4
    style Decision1 fill:#ffe0b2
```

**Key Interaction Details:**

**Mode Lansia Transformation:**

- Font sizes: All text 24pt minimum (body), 48pt (numbers), 64pt (primary balance)
- Button sizes: 88x88pt touch targets (double standard), 32px vertical spacing between
- Color contrast: Pure black (#000000) text on white (#FFFFFF) background (21:1 ratio)
- Navigation: No bottom tabs, no hamburger menu, single-screen flow
- Voice guidance: Text-to-speech reads all labels and buttons when tapped (configurable speed)

**3-Button Interface:**

- **LIHAT SALDO** (Green button): Shows single huge number (Rp XXX,XXX), optional "Lihat Detail" small link below
- **SETOR SAMPAH** (Blue button): Opens simplified transaction form
- **TARIK UANG** (Yellow button): Shows withdrawal options (ATM, transfer bank, cash pickup)

**Simple Transaction Form:**

- Step 1: "Berapa kg?" - Large number input pad (0-9), 48pt font, "Lanjut" button
- Step 2: "Jenis apa?" - 4 giant icon buttons (Plastik, Kertas, Logam, Kaca), no text labels needed
- Step 3: "Konfirmasi?" - Shows summary with huge text: "5kg Plastik → ~Rp 16,000", [TIDAK] [YA] buttons
- Processing: Large spinner (60px), "Tunggu sebentar..." text (24pt)

**SMS Confirmation (Critical for Lansia):**

- Reason: Many lansia don't check app notifications, but always check SMS
- Format: "BankSampah: Transaksi berhasil. 5kg Plastik. Rp 16,500 masuk. Saldo: Rp 141,500."
- Timing: Sent immediately after operator confirms (within 5 seconds)
- No links: Plain text only, no shortened URLs or QR codes in SMS

**Voice Guidance Examples:**

- Button tap: "Tombol Lihat Saldo. Tekan untuk melihat saldo Anda saat ini."
- Balance screen: "Saldo Anda: seratus empat puluh satu ribu lima ratus rupiah."
- Form input: "Masukkan berat sampah dalam kilogram. Ketik angka, lalu tekan Lanjut."
- Success: "Transaksi berhasil! Lima kilogram plastik telah dicatat. Terima kasih!"

**Family-Assisted Setup (Critical Phase):**

- Grandson role: Install app, configure Mode Lansia, create profile, demonstrate 3 buttons
- Teaching method: "Only 3 buttons to remember: Green, Blue, Yellow" (color-coded memory)
- First test: Guided button press (Pak Joko presses, grandson watches, positive reinforcement)
- Safety net: "If confused, press back button (physical Android button) or call me"

**Independent Use Milestone:**

- Trigger: 2 days after setup, Pak Joko has waste ready, family not present
- Mental process: "Let me try... Blue button = setor sampah... Yes, I remember..."
- Success moment: SMS arrives confirming transaction → "Berhasil! I didn't break it!"
- Confidence boost: Immediately calls daughter to share accomplishment

**Success Criteria:**

- ✅ Setup completion: 100% with family assistance required
- ✅ Independent transaction within 1 week: >60% of lansia users
- ✅ Monthly retention: >80% (highest of all segments - routine-driven)
- ✅ Peer teaching: >40% teach other lansia within 3 months
- ✅ Zero support tickets: SMS + voice guidance eliminate confusion

**Error Handling:**

- Wrong button pressed: Large "Kembali" button (back), voice says "Tekan tombol hijau untuk kembali ke menu utama"
- Number input error: "Angka terlalu besar. Maksimal 100kg." with retry
- Network timeout: "Koneksi lambat. Coba lagi?" with large [COBA LAGI] button
- SMS not received: App shows success screen anyway (SMS is backup, not primary)
- Forgot which button: Voice guidance repeats on tap, or physical back button returns to main screen

**Dignity Preservation:**

- No condescending language: "Mode Lansia" not "Mode Gampang" (easy mode)
- No cartoon graphics: Professional icons, adult color palette
- No "baby talk": Voice guidance uses respectful adult language
- Agency maintained: Pak Joko operates independently after initial setup
- Identity enhanced: He's still the coordinator, now with digital skills (not replaced by technology)

---

### Journey Patterns & Reusable Components

Across these three user journeys, several common interaction patterns emerge that should be standardized for consistency:

#### Navigation Patterns

**1. Progressive Disclosure Navigation**

- **Pattern**: Start simple (3-5 primary actions), reveal complexity based on usage
- **Implementation**:
  - Simple mode (0-5 transactions): Dashboard + 2 CTAs only
  - Detailed mode (6-50 transactions): Add transaction history, breakdown charts
  - Power mode (51+ transactions): Add analytics, export, advanced filters
  - Lansia mode: Fixed 3-button layout, no progression
- **Applies to**: All user types except Lansia (who stay in fixed simple mode)

**2. Bottom Tab Navigation (Standard Modes)**

- **Pattern**: 4 fixed tabs always visible
- **Tabs**:
  1. Dashboard (🏠) - Active by default
  2. Transaksi (📊) - Transaction history
  3. Community (👥) - Leaderboards, challenges
  4. Profile (👤) - Settings, account, badges
- **Active state**: green.600 icon + text, inactive gray.600
- **Applies to**: Simple, Detailed, Power modes (NOT Lansia)

**3. Single-Screen Flow (Lansia Mode)**

- **Pattern**: No bottom tabs, no nested navigation, everything accessible from main screen
- **Main screen**: 3 giant buttons (LIHAT SALDO, SETOR SAMPAH, TARIK UANG)
- **Sub-screens**: Always have large "Kembali" button to return to main
- **Applies to**: Mode Lansia only

#### Decision Patterns

**4. Operator-Assisted vs Self-Service Fork**

- **Pattern**: Detect user confidence level, offer appropriate support
- **Decision point**: During onboarding or first transaction
- **Branch A (Assisted)**: "Butuh bantuan operator?" → Schedule assisted setup/transaction
- **Branch B (Self-service)**: Continue with guided in-app flow
- **Recovery**: Self-service users can request operator help mid-flow
- **Applies to**: Warm leads (Ibu Siti), Lansia (Bapak Joko)

**5. AI Detection Confirmation**

- **Pattern**: Show AI confidence, let user verify/correct
- **Display**: "5 Plastik Botol (95% confident) ✓" with checkmark if high confidence
- **User action**: Tap to edit if wrong, "Lanjut" if correct
- **Fallback**: If low confidence (<80%), force manual confirmation
- **Applies to**: Cold leads (Rina), Power users

**6. Social Sharing Opt-In**

- **Pattern**: Offer sharing at moment of achievement, don't force
- **Trigger**: Badge unlock, milestone reached, first transaction success
- **UI**: "Bagikan Pencapaian?" modal with preview + [Skip] [Share] buttons
- **Frequency**: Max once per day (avoid spam fatigue)
- **Applies to**: All modes except Lansia (Lansia have no social features)

#### Feedback Patterns

**7. Multi-Channel Confirmation**

- **Pattern**: Use appropriate channel based on user tech proficiency
- **Channels**:
  - Push notification: All users (primary)
  - In-app toast: All users (secondary)
  - SMS: Lansia only (critical backup)
  - WhatsApp: Optional (if user enables)
- **Timing**: Immediate (within 5s of operator confirmation)
- **Applies to**: All transactions

**8. Progressive Success Celebrations**

- **Pattern**: Escalate celebration intensity with user journey progression
- **First transaction**: Simple toast + confetti (2s)
- **First week milestone**: Badge modal + shareable card
- **Monthly milestone**: Full-screen celebration + bonus reward
- **Yearly milestone**: Video message from founder + special badge
- **Applies to**: All modes except Lansia (Lansia get SMS only)

**9. Error Recovery with Clear Next Steps**

- **Pattern**: Never show "Error" without suggesting recovery action
- **Template**: "[What went wrong] → [Why it happened] → [What to do next]"
- **Example**: "Upload gagal → Koneksi lambat → [Coba Lagi] [Lanjut Tanpa Foto]"
- **Escalation**: After 3 failed attempts, offer operator assistance
- **Applies to**: All users (error message complexity varies by mode)

#### Gamification Patterns

**10. Streak Mechanic with Graceful Forgiveness**

- **Pattern**: Track daily engagement, but allow recovery
- **Display**: Fire emoji 🔥 + day count in status bar (all modes except Lansia)
- **Forgiveness**: 1 "freeze" day per week (streak doesn't break if user misses 1 day)
- **Recovery**: If streak breaks, show encouraging message: "Mulai lagi! Streak terpanjang: 21 hari"
- **Applies to**: Simple, Detailed, Power modes

**11. Badge Unlock with Social Shareability**

- **Pattern**: Visual celebration + immediate share option
- **Sequence**:
  1. Confetti animation (2s)
  2. Badge modal (icon 80x80px, title, description)
  3. "Bagikan?" prompt with Instagram story template
- **Share template**: Auto-generated 1080x1920px PNG with user stats
- **Applies to**: All modes except Lansia

**12. Leaderboard with Solidarity Framing**

- **Pattern**: Show percentile rank (not absolute position), emphasize collective achievement
- **Display**: "Anda di TOP 10%" (not "Anda peringkat #47")
- **Community context**: "Kelurahan kita TOP 3 se-kota!" (collective pride)
- **Ranking visual**: Horizontal progress bar showing percentile (0-100%)
- **Applies to**: Simple, Detailed, Power modes (NOT Lansia - no competitive elements)

---

### Flow Optimization Principles

Based on analyzing these three user journeys, here are the key principles for optimizing user flows across BankSampah:

#### 1. Minimize Time to First Value

**Principle**: Get users to their first successful transaction (and dopamine hit) as quickly as possible.

**Optimizations**:

- **Onboarding**: Max 5 minutes (Ibu Siti), 3 minutes (Rina self-service)
- **First transaction trigger**: 24-hour challenge for cold leads creates urgency
- **Photo AI**: Reduce manual entry friction (Rina doesn't type waste types, AI detects)
- **Instant feedback**: Transaction success notification within 5 seconds of operator confirmation

**Metrics**:

- Time to first transaction: Target <24 hours for 50% of users
- Onboarding completion rate: Target >85% (no abandonment mid-flow)

#### 2. Reduce Cognitive Load at Decision Points

**Principle**: Present only essential choices at each step, hide complexity until needed.

**Optimizations**:

- **Progressive disclosure**: Simple → Detailed → Power views unlock with usage
- **Default selections**: Auto-detect location (Rina), pre-fill waste types based on history
- **Visual hierarchy**: Primary action buttons 48px height (green.600), secondary links 14pt text
- **Lansia mode**: Only 3 decisions total (which button to press, how many kg, which waste type)

**Metrics**:

- Decision time per step: Target <5 seconds average
- Form abandonment rate: Target <10% (users complete once started)

#### 3. Provide Clear Progress Indicators

**Principle**: Users should always know where they are in a flow and how close to completion.

**Optimizations**:

- **Onboarding**: Step indicator "2/3" at top of screen
- **Transaction flow**: Progress bar (Photo → Type → Pickup → Confirm)
- **Pickup waiting**: "Operator akan tiba dalam 15 menit" with live countdown
- **Level progress**: XP bar "47/100 XP → Apprentice Hero" shows gap to next milestone

**Metrics**:

- User confusion rate (support tickets): Target <2% of transactions
- Mid-flow abandonment: Target <5%

#### 4. Create Moments of Delight and Accomplishment

**Principle**: Celebrate user achievements to build habit and positive association.

**Optimizations**:

- **First transaction**: Confetti animation + Welcome Badge + Rp 5K bonus (unexpected delight)
- **Milestone unlocks**: Badge modal with shareable card (pride → social proof → viral growth)
- **Streak maintenance**: Fire emoji grows bigger with longer streaks (visual reward)
- **Community wins**: "Kelurahan kita TOP 3!" banner (collective accomplishment)

**Metrics**:

- Social sharing rate: Target >30% of achievements shared
- Repeat transaction rate: Target >80% return within 7 days

#### 5. Handle Edge Cases and Errors Gracefully

**Principle**: When things go wrong, provide clear recovery paths and maintain user confidence.

**Optimizations**:

- **AI detection wrong**: "Tidak sesuai?" button allows manual correction without re-uploading photo
- **Pickup delayed**: Show operator live location + call button (transparency reduces anxiety)
- **Network failure**: Save draft locally, auto-retry when connection restored, notify user
- **SMS backup** (Lansia): If push notification fails, SMS always arrives (critical reliability)

**Metrics**:

- Error recovery rate: Target >90% of users successfully complete after error
- Support escalation: Target <5% of errors require operator intervention

#### 6. Optimize for Viral Growth (Cold Lead Focus)

**Principle**: Make social sharing effortless and rewarding, especially for Gen Z users.

**Optimizations**:

- **Auto-generated story**: Don't make Rina design her own share graphic (1-tap share to Instagram)
- **Referral incentives**: Rp 10K for both referrer + referee (removes "asking for favor" guilt)
- **Squad challenges**: Rina competes with 5 friends, not 10K strangers (intimate competition)
- **Social proof in onboarding**: "Join 10,483 eco warriors" live counter creates FOMO

**Metrics**:

- Viral coefficient: Target K=1.3 (each user brings 1.3 new users on average)
- Referral activation rate: Target >30% generate at least 1 successful referral

#### 7. Maintain Dignity and Agency (Lansia Focus)

**Principle**: Accessibility features should empower, not infantilize.

**Optimizations**:

- **Respectful naming**: "Mode Lansia" (senior mode), not "Mode Gampang" (easy mode)
- **Adult aesthetic**: Professional colors/icons, no cartoon graphics
- **Voice guidance option**: User chooses to enable, not forced
- **Independent operation**: After family-assisted setup, Pak Joko operates alone (agency preserved)

**Metrics**:

- Lansia retention: Target >80% monthly (highest segment - routine-driven)
- Independent usage: Target >60% transact without family help within 1 week

#### 8. Balance Automation with Human Touch

**Principle**: Use AI/automation for efficiency, but provide human support when needed.

**Optimizations**:

- **AI photo detection**: Fast (3s), but always allow manual override
- **Self-service default**: Rina onboards alone, but "Butuh Bantuan?" button always visible
- **Operator assistance**: Ibu Siti gets home visit, but learns to operate independently after
- **Community support**: Power users can mentor new users (peer-to-peer help scales better than centralized support)

**Metrics**:

- Operator assistance rate: Target <30% of transactions require human intervention
- Self-service success: Target >85% cold leads complete first transaction without calling support

---

## 12. UX Consistency Patterns

This section establishes comprehensive design patterns for consistent user experience across all features and screens. These patterns ensure predictability, reduce cognitive load, and create a cohesive product feel.

### Button Hierarchy & Action Patterns

Establish clear visual hierarchy for user actions to guide decision-making and reduce friction.

#### Primary Actions (Green Solid)

**Visual Design:**

- **Background**: green.600 (#16a34a)
- **Text**: white (#ffffff)
- **Height**: 48px standard, 88px Lansia mode
- **Border radius**: 12px
- **Font**: 16pt Medium (24pt Lansia)
- **Width**: Full-width mobile (with 16px horizontal padding), auto desktop (min 120px)

**States:**

- **Default**: green.600 background, white text, no shadow
- **Hover** (desktop): green.700 background, subtle lift (2px shadow)
- **Pressed** (mobile): green.800 background, scale 0.98
- **Disabled**: gray.300 background, gray.500 text, 50% opacity
- **Loading**: green.600 background, white spinner (20px), text hidden

**Examples:**

- "Setor Sampah Sekarang" (Dashboard hero)
- "Konfirmasi Pickup" (Scheduling confirmation)
- "Tarik Saldo" (Balance withdrawal)
- "Simpan Perubahan" (Profile editing)

**Accessibility:**

- Contrast ratio: 4.5:1 minimum (white on green.600)
- Touch target: 48x48px minimum (88x88px Lansia)
- Focus state: 2px solid outline (green.800), 2px offset
- ARIA: `role="button"`, `aria-label` for icon-only buttons
- Keyboard: Enter/Space triggers action

#### Secondary Actions (Green Outline)

**Visual Design:**

- **Background**: white (#ffffff)
- **Border**: 2px solid green.600
- **Text**: green.600
- **Height**: 48px standard, 88px Lansia
- **Border radius**: 12px
- **Font**: 16pt Medium (24pt Lansia)

**States:**

- **Default**: white bg, green.600 border/text
- **Hover**: green.50 background, green.600 border/text
- **Pressed**: green.100 background, green.700 border/text
- **Disabled**: gray.200 background, gray.400 border/text

**Examples:**

- "Lihat Detail Transaksi" (Transaction card)
- "Bagikan ke WhatsApp" (Social sharing)
- "Kembali" (Navigation back)
- "Edit Profil" (Settings)

**Accessibility:**

- Contrast ratio: 4.5:1 (green.600 on white)
- Same touch target and focus rules as primary

#### Tertiary Actions (Text Link)

**Visual Design:**

- **Background**: transparent
- **Text**: green.600, 14pt Regular
- **Underline**: none default, underline on hover
- **Height**: auto (text height + 12px padding vertical)

**States:**

- **Default**: green.600 text, no underline
- **Hover**: green.700 text, underline
- **Pressed**: green.800 text, underline
- **Disabled**: gray.400 text, no interaction

**Examples:**

- "Lewati" (Onboarding skip)
- "Lupa Password?" (Login help)
- "Lihat Semua" (View more link)
- "Tutup" (Modal dismiss)

**Accessibility:**

- Contrast ratio: 4.5:1 minimum
- Touch target: 44x44px (padding expands clickable area)
- Focus state: 2px dotted outline
- Keyboard: Enter triggers

#### Button Placement Rules

**Mobile (Thumb-Reach Optimization):**

- **Primary action**: Fixed bottom (56px from bottom edge), full width minus 16px horizontal padding
- **Secondary action**: Above primary (12px spacing), full width
- **Tertiary action**: Top-right corner or inline with content

**Modal/Dialog:**

- **Primary**: Right position (or full width if mobile)
- **Secondary**: Left of primary (12px spacing)
- **Order**: [Cancel] [Confirm] (Cancel left, Confirm right)

**Form Layout:**

- **Submit button**: Primary, bottom of form
- **Reset/Cancel**: Tertiary, to the left of submit
- **Delete**: Red.600 background (destructive action), requires confirmation dialog

---

### Feedback Patterns

Provide clear, timely feedback for all user actions to maintain confidence and reduce uncertainty.

#### Success Feedback (Green)

**Toast Notification:**

- **Background**: green.50
- **Border**: 4px left border green.600
- **Icon**: Checkmark circle (green.600, 24px)
- **Text**: gray.900, 14pt Regular
- **Position**: Top center, 16px from top edge
- **Duration**: 3 seconds auto-dismiss
- **Animation**: Slide down (300ms ease-out), fade out (200ms)

**Inline Alert:**

- **Background**: green.50
- **Border**: 1px solid green.200
- **Icon**: Checkmark circle (green.600, 20px)
- **Text**: green.900, 14pt Regular
- **Position**: Below relevant content (e.g., form submission)
- **Duration**: Persistent until user navigates away

**Full-Screen Celebration:**

- **Background**: Modal overlay (rgba(0,0,0,0.8))
- **Animation**: Confetti particles (green/blue/gold), 2-second burst
- **Icon**: Trophy/badge (60x60px), scale in (500ms)
- **Headline**: "Selamat!" (24pt Bold white)
- **Message**: Achievement description (16pt Regular white)
- **CTA**: "Bagikan" (Primary green button), "Tutup" (Tertiary white text)

**Message Tone:**

- Clear confirmation: "Transaksi berhasil disimpan"
- Specific details: "5kg plastik (Rp 15,000) ditambahkan ke saldo"
- Next action: "Cek riwayat transaksi untuk detailnya"

**Examples:**

- Transaction submitted: Toast "Transaksi berhasil! Operator akan konfirmasi dalam 1 jam."
- Profile updated: Inline alert "Profil berhasil diperbarui."
- Badge unlocked: Full-screen celebration "Selamat! Kamu dapat badge 'Pemula Hijau' 🌱"

**Accessibility:**

- ARIA live region: `aria-live="polite"` for toast/inline
- Screen reader: Reads full message immediately
- Focus management: Toast does not trap focus (non-blocking)

#### Error Feedback (Red)

**Toast Notification:**

- **Background**: red.50
- **Border**: 4px left border red.600
- **Icon**: Warning triangle (red.600, 24px)
- **Text**: gray.900, 14pt Regular
- **Position**: Top center, 16px from top edge
- **Duration**: Manual dismiss (X button), no auto-dismiss
- **Animation**: Slide down + shake (300ms)

**Inline Validation:**

- **Input border**: 2px solid red.600
- **Helper text**: red.700, 12pt Regular
- **Icon**: Warning icon (red.600, 16px) to the right of input
- **Animation**: Shake input field (300ms, 3 oscillations)

**Message Tone:**

- Clear problem: "Foto tidak bisa diupload"
- Reason: "Ukuran file terlalu besar (maksimal 5MB)"
- Action to resolve: "Coba foto ulang atau pilih foto lain"

**Recovery Actions:**

- Always provide [Coba Lagi] button (Secondary green)
- Offer alternative path: "Butuh Bantuan?" link to WhatsApp support

**Examples:**

- Photo upload failed: Toast "Foto gagal diupload. Ukuran file terlalu besar (maksimal 5MB). [Coba Lagi] [Hubungi Support]"
- Form validation: Inline "Nomor HP tidak valid. Format: 08123456789"
- Network error: Toast "Tidak bisa terhubung ke server. Cek koneksi internet. [Coba Lagi]"

**Accessibility:**

- ARIA live region: `aria-live="assertive"` (interrupts screen reader)
- Focus management: Move focus to error message or first invalid field
- Keyboard: Escape dismisses toast

#### Warning Feedback (Yellow)

**Banner Notification:**

- **Background**: yellow.50
- **Border**: 4px left border yellow.600
- **Icon**: Alert circle (yellow.700, 24px)
- **Text**: gray.900, 14pt Regular
- **Position**: Top of screen (below header), full width
- **Duration**: Dismissible (X button), no auto-dismiss
- **Animation**: Slide down (300ms)

**Inline Callout:**

- **Background**: yellow.50
- **Icon**: Lightbulb (yellow.600, 20px)
- **Text**: yellow.900, 14pt Regular
- **Position**: Inline with content (e.g., before form section)

**Message Tone:**

- Important notice: "Harga plastik turun 10% minggu ini"
- Action encouraged but not urgent: "Setor sebelum akhir bulan untuk bonus poin"
- Contextual tip: "Slot pickup hari ini tinggal 3, pesan sekarang"

**Examples:**

- Price volatility: Banner "⚠️ Harga kardus naik 15% bulan ini. Setor sekarang untuk harga terbaik!"
- Low slots: Inline callout "💡 Slot pickup hari ini tinggal 3. Jadwalkan sekarang?"
- Streak warning: Banner "🔥 Streak 7 hari hampir putus! Setor sampah hari ini untuk melanjutkan."

**Accessibility:**

- ARIA role: `role="alert"`, `aria-live="polite"`
- Dismissible: X button (44x44px touch target)

#### Info Feedback (Blue)

**Tooltip:**

- **Background**: blue.50
- **Border**: 1px solid blue.200
- **Icon**: Info circle (blue.600, 16px)
- **Text**: blue.900, 12pt Regular
- **Position**: Above/below trigger (smart positioning)
- **Duration**: Hover/tap reveal, dismiss on outside click
- **Max width**: 240px mobile, 300px desktop

**Inline Tip:**

- **Background**: blue.50
- **Border**: 4px left border blue.500
- **Icon**: Info circle (blue.600, 20px)
- **Text**: blue.900, 14pt Regular
- **Position**: Inline with content

**Message Tone:**

- Helpful tip: "Foto sampah dari atas untuk deteksi lebih akurat"
- Educational: "1kg plastik = 7 pohon diselamatkan"
- Status update: "Operator sedang menuju lokasi (ETA 15 menit)"

**Examples:**

- Tutorial hint: Tooltip "Ketuk ikon ini untuk ganti mode tampilan"
- Calculation explanation: Inline tip "ℹ️ Konversi: 1kg plastik = Rp 3,000 (harga hari ini)"
- Operator location: Inline tip "📍 Operator terdekat: Pak Budi (2km, aktif sekarang)"

**Accessibility:**

- ARIA role: `role="tooltip"` for tooltip, `role="note"` for inline tip
- Keyboard: Tab to info icon, Enter/Space reveals tooltip
- Dismissible: Escape key or outside click

#### Feedback Priority Rules

When multiple feedback types occur simultaneously:

1. **Max 1 visible**: Only show one toast/banner at a time (queue if multiple)
2. **Priority order**: Error > Warning > Success > Info
3. **Persistence**:
   - Error: Manual dismiss only
   - Warning: Dismissible (user closes)
   - Success: 3-second auto-dismiss
   - Info: Dismissible

---

### Form Patterns & Validation

Establish consistent form design to reduce errors and improve completion rates.

#### Input Field Anatomy

**Label:**

- **Font**: 14pt Medium, gray.700
- **Position**: Above input (8px spacing)
- **Required indicator**: Red asterisk (\*) if field is required

**Input:**

- **Font**: 16pt Regular (prevents iOS zoom on focus)
- **Placeholder**: gray.400, example format ("08123456789")
- **Height**: 48px standard, 88px Lansia
- **Padding**: 12px horizontal, 16px vertical
- **Border**: 1px solid gray.300 (default), 2px solid green.600 (focus), 2px solid red.600 (error)
- **Border radius**: 8px
- **Background**: white

**Helper Text:**

- **Font**: 12pt Regular, gray.600
- **Position**: Below input (4px spacing)
- **Purpose**: Format guidance ("Format: 08123456789") or character count ("0/100")

**Error Message:**

- **Font**: 12pt Regular, red.700
- **Icon**: Warning icon (red.600, 16px) to the left
- **Position**: Replaces helper text when error occurs
- **Animation**: Fade in (200ms)

#### Visual Specifications

**Default State:**

- Border: 1px solid gray.300
- Background: white
- Text: gray.900 (filled), gray.400 (placeholder)

**Focus State:**

- Border: 2px solid green.600
- Background: white
- Shadow: 0 0 0 4px green.50 (glow effect)

**Error State:**

- Border: 2px solid red.600
- Background: red.50
- Helper text: Replaced with error message (red.700)
- Animation: Shake input (300ms, 3 oscillations)

**Disabled State:**

- Border: 1px solid gray.200
- Background: gray.100
- Text: gray.400
- Cursor: not-allowed

**Lansia Mode:**

- Height: 88px (double standard)
- Font: 24pt Regular
- Padding: 20px horizontal, 24px vertical
- Border: 3px (more visible)

#### Validation Strategy

**Real-Time Validation (on blur):**

- Trigger: User leaves input field (blur event)
- Timing: Immediate feedback (no delay)
- Visual: Border turns red, error message appears, shake animation
- Screen reader: Error message announced immediately

**Error Message Patterns:**

- **Empty field**: "Nomor HP wajib diisi"
- **Invalid format**: "Format nomor HP tidak valid. Contoh: 08123456789"
- **Out of range**: "Berat minimal 1kg, maksimal 100kg"
- **Duplicate**: "Nomor HP sudah terdaftar. Coba nomor lain atau [Login]"

**Progressive Disclosure:**

- **Simple mode**: Show only essential fields (Name, Phone, Address)
- **Detailed mode**: Reveal additional fields (Email, Date of Birth, Referral Code)
- **Power mode**: Show all fields including advanced options (Pickup Preferences, Notification Settings)
- **Lansia mode**: One field at a time (wizard flow), large 88px inputs, voice input option

#### Form Layout Patterns

**Vertical Stacking (Mobile Default):**

- Full-width inputs (minus 16px horizontal padding)
- 16px vertical spacing between fields
- Label above input (8px spacing)
- Helper text below input (4px spacing)

**Horizontal Grouping (Desktop/Tablet):**

- Related fields side-by-side (e.g., First Name + Last Name)
- 12px horizontal spacing between grouped fields
- Max 2 fields per row (more = cognitive overload)

**Inline Editing:**

- Display mode: Label + value (gray.900, 16pt Regular) + Edit icon (gray.600, 20px)
- Edit mode: Replace value with input field, show [Save] [Cancel] buttons inline
- Use case: Profile settings, address editing

---

### Navigation Patterns

Define consistent navigation paradigms across the app to reduce disorientation.

#### Bottom Tab Navigation (Standard Mode)

**Layout:**

- **Position**: Fixed bottom, full width
- **Height**: 64px
- **Background**: white with top border (1px gray.200)
- **Tabs**: 4 tabs (Dashboard, Transaksi, Community, Profile)

**Tab Anatomy:**

- **Icon**: 24x24px, centered above label
- **Label**: 11pt Medium, centered below icon
- **Active state**: green.600 icon + text, 4px top border green.600
- **Inactive state**: gray.600 icon + text, no border
- **Badge**: Red dot (8px) on top-right of icon (for notifications)

**Tab Order:**

1. **Dashboard** (🏠 Home icon): Impact hero, balance, quick actions
2. **Transaksi** (📊 Chart icon): Transaction history, filters
3. **Community** (👥 People icon): Leaderboard, kelurahan stats
4. **Profile** (👤 Person icon): Settings, help, logout

**Progressive Disclosure:**

- **Simple mode**: 3 tabs only (Dashboard, Transaksi, Profile) — Community unlocked after 3 transactions
- **Detailed/Power mode**: All 4 tabs visible from start
- **Lansia mode**: No bottom tabs (see Single-Screen Flow below)

**Accessibility:**

- ARIA: `role="tablist"` on container, `role="tab"` on each tab, `aria-selected="true"` for active tab
- Keyboard: Arrow keys navigate between tabs, Enter activates
- Touch target: Full 64px height (exceeds 44px minimum)

#### Single-Screen Flow (Lansia Mode Only)

**Layout:**

- **No bottom tabs**: Single screen with 3 giant action buttons
- **Buttons**: 88x88pt each, vertical stack, 20px spacing
- **Icons**: 48x48px, centered above text
- **Text**: 24pt Bold, 2-line max
- **Background**: white, green.50 alternating rows (visual separation)

**Actions:**

1. **LIHAT SALDO** (💰 Wallet icon): Shows balance in giant text (48pt), "Rp [amount] | [kg] kg"
2. **SETOR SAMPAH** (📸 Camera icon): Opens camera immediately (no navigation)
3. **TARIK UANG** (💵 Money icon): Opens withdrawal flow (one step at a time)

**Navigation:**

- **Back button**: Giant "KEMBALI" button (88x88pt) in top-left corner (always visible)
- **No swipe gestures**: Only tap interactions (simpler)
- **Physical back button**: Android back button always works (returns to previous screen)

**Rationale:**

- Reduces cognitive load (no multi-tab mental model)
- Giant touch targets (88x88pt = easy for trembling hands)
- High contrast (white bg, green.600 buttons, 48pt text)
- Voice guidance option: "Ketuk tombol hijau untuk setor sampah" (TTS)

#### Modal/Overlay Navigation

**Slide-Up Modal:**

- **Animation**: Slide up from bottom (300ms ease-out)
- **Background**: rgba(0,0,0,0.5) backdrop with 4px blur
- **Height**: Auto (content-driven), max 90% screen height
- **Corner radius**: 16px top corners only
- **Dismissal**: X button (top-right, 44x44px), swipe down, tap outside (for non-critical modals)

**Types:**

- **Info modal**: Display-only content (no form), single [Tutup] button
- **Confirmation modal**: Yes/No decision, [Cancel] [Confirm] buttons
- **Celebration modal**: Badge unlock, full-screen overlay, confetti animation, [Bagikan] [Tutup]
- **Form modal**: Input fields, [Simpan] [Batal] buttons

**Accessibility:**

- ARIA: `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-title"`
- Focus trap: Tab cycles within modal only (Escape exits)
- Initial focus: First interactive element (input or button)

---

### Empty State Patterns

Encourage action when no data is available instead of showing blank screens.

#### Empty State Anatomy

**Icon:**

- **Size**: 60x60px
- **Style**: Friendly emoji or simple line illustration (not corporate/sterile)
- **Color**: gray.400 (subtle, not alarming)

**Headline:**

- **Font**: 18pt Bold, gray.900
- **Tone**: Encouraging, not negative
- **Example**: "Belum ada transaksi" (not "Tidak ada transaksi")

**Description:**

- **Font**: 14pt Regular, gray.600
- **Length**: 1-2 sentences max
- **Tone**: Helpful, action-oriented
- **Example**: "Riwayat transaksi akan muncul di sini setelah kamu setor sampah pertama kali."

**CTA Button:**

- **Type**: Primary (green solid)
- **Text**: Action-oriented ("Setor Sampah Sekarang", not "Mulai")
- **Position**: Centered below description (16px spacing)

#### Message Tone Guidelines

**Use encouraging language:**

- ✅ "Belum ada transaksi. Yuk mulai setor sampah!"
- ❌ "Tidak ada data. Silakan tambahkan transaksi."

**Suggest next action:**

- ✅ "Riwayat kosong. Setor sampah sekarang untuk lihat histori."
- ❌ "Belum ada riwayat."

**Use friendly emoji:**

- ✅ 🌱 (seedling for new start)
- ✅ 📊 (chart for data)
- ❌ ❌ (cross/error icon — too negative)

#### Context-Specific Examples

**Empty Dashboard (First-Time User):**

- Icon: 🌱 (seedling)
- Headline: "Selamat datang di BankSampah!"
- Description: "Mulai perjalanan lingkunganmu. Setor sampah pertama untuk lihat dampak positifmu."
- CTA: [Setor Sampah Sekarang]

**Empty Transaction History:**

- Icon: 📊 (chart)
- Headline: "Belum ada transaksi"
- Description: "Riwayat transaksi akan muncul di sini setelah kamu setor sampah."
- CTA: [Setor Sampah]

**Empty Leaderboard (Not Qualified Yet):**

- Icon: 👥 (people)
- Headline: "Bergabung ke leaderboard kelurahan"
- Description: "Setor minimal 5 kali untuk masuk ranking komunitas."
- CTA: [Lihat Cara Bergabung]

**Zero Search Results:**

- Icon: 🔍 (magnifying glass)
- Headline: "Tidak ditemukan"
- Description: "Coba kata kunci lain atau reset filter."
- CTA: [Reset Filter]

**Accessibility:**

- ARIA: `role="status"` or `role="region"`, `aria-label="Empty state"`
- Screen reader: Reads icon alt text + headline + description
- Focus: CTA button receives focus when empty state appears

---

### Loading State Patterns

Communicate progress to maintain user confidence during asynchronous operations.

#### Skeleton Screens (Content Loading)

**Visual Design:**

- **Placeholder shapes**: Match final content layout (text lines, image boxes, card outlines)
- **Color**: gray.200 background with shimmer animation
- **Animation**: Left-to-right shimmer (1.5s duration, infinite loop)
- **No spinners**: Skeleton shapes only (more contextual)

**Use Cases:**

- Dashboard loading: Show skeleton cards for balance, impact stats, transaction list
- Profile loading: Skeleton for avatar circle, name line, bio lines
- Leaderboard loading: Skeleton for user rank cards (5 rows)

**Accessibility:**

- ARIA: `aria-busy="true"` on container while loading
- Screen reader: "Memuat konten..." announcement when loading starts
- Focus: Do not trap focus on skeleton (non-interactive)

#### Spinner Overlay (Blocking Action)

**Visual Design:**

- **Spinner**: 40px diameter, green.600 color, rotating animation (1s duration)
- **Background**: rgba(255,255,255,0.9) semi-transparent overlay
- **Text**: "Memproses..." below spinner (14pt Medium gray.700)
- **Position**: Centered on screen

**Use Cases:**

- Form submission: Show spinner overlay on form while submitting
- Photo upload: Spinner with "Mengupload foto..." text
- Payment processing: Spinner with "Memproses pembayaran..." text

**Accessibility:**

- ARIA: `role="alert"`, `aria-live="assertive"`, `aria-busy="true"`
- Screen reader: "Memproses, harap tunggu" announcement
- Focus trap: Trap focus on overlay (prevent interaction during processing)

#### Progress Bar (Multi-Step Process)

**Visual Design:**

- **Height**: 4px
- **Background**: gray.200 (full width)
- **Fill**: green.600, animated left-to-right
- **Position**: Top of screen (below header)
- **Text**: "Langkah 3 dari 5" or "60%" above bar (12pt Medium gray.700)

**Use Cases:**

- Onboarding wizard: 5-step progress (photo, name, address, phone, confirmation)
- Photo upload: Percentage progress (0-100%)
- Report generation: Indeterminate progress (animated pulse)

**Accessibility:**

- ARIA: `role="progressbar"`, `aria-valuenow="60"`, `aria-valuemin="0"`, `aria-valuemax="100"`
- Screen reader: "Langkah 3 dari 5" or "60 persen selesai"

---

### Additional Patterns

#### Search & Filtering

**Search Input:**

- **Icon**: Magnifying glass (gray.600, 20px) on left side of input
- **Placeholder**: "Cari transaksi..." (gray.400, 16pt)
- **Clear button**: X icon (gray.600, 20px) on right (appears when text entered)
- **Debounce**: 300ms delay before search executes (reduce server load)
- **Voice search**: Microphone icon (blue.500, 20px) on far right (optional, if voice API available)

**Filter Button:**

- **Position**: Right of search bar (12px spacing)
- **Icon**: Filter icon (gray.600, 20px)
- **Badge**: Red dot (8px) with count "(3 filter aktif)" if filters applied
- **Action**: Opens bottom sheet with filter chips

**Filter Chips (Bottom Sheet):**

- **Chip anatomy**: gray.100 background, gray.700 text (14pt Medium), X icon (16px) to remove
- **Active chip**: green.100 background, green.700 text
- **Layout**: Wrap horizontally, 8px spacing
- **Actions**: [Terapkan Filter] (Primary green), [Reset Semua] (Tertiary gray)

#### Pull-to-Refresh

**Gesture:**

- **Trigger**: Pull down from top of scrollable list (80px threshold)
- **Visual**: Spinner (24px green.600) appears at top, rotates during refresh
- **Feedback**: "Tarik untuk refresh" → "Lepas untuk refresh" text (12pt gray.600)
- **Completion**: Toast "5 transaksi baru ditambahkan!" (if new items found)

**Use Cases:**

- Transaction list
- Leaderboard
- Community feed

#### Swipe Actions (Transaction List)

**Left Swipe (Share):**

- **Reveal**: "Bagikan" button (green.600 background, white text, 80px width)
- **Icon**: Share icon (white, 20px)
- **Action**: Opens share sheet (WhatsApp, Instagram, Copy Link)

**Right Swipe (Detail):**

- **Reveal**: "Detail" button (blue.500 background, white text, 80px width)
- **Icon**: Arrow right icon (white, 20px)
- **Action**: Opens transaction detail modal

**Threshold**: 40% of card width (triggers action)

**Lansia Alternative**: No swipe (too complex) — use tap on card → open modal with [Bagikan] [Detail] buttons

#### Confirmation Dialogs (Destructive Actions)

**Anatomy:**

- **Icon**: Warning triangle (yellow.600, 40px)
- **Headline**: "Hapus Transaksi?" (18pt Bold gray.900)
- **Description**: "Transaksi akan dihapus permanen dan tidak bisa dikembalikan." (14pt Regular gray.600)
- **Buttons**:
  - **Cancel**: Secondary (gray outline, gray.700 text) — default focus
  - **Confirm**: Destructive (red.600 background, white text)

**Trigger**: User taps "Hapus" button on transaction detail

**Accessibility:**

- Default focus: Cancel button (prevent accidental deletion)
- Escape key: Dismisses dialog (same as Cancel)
- ARIA: `role="alertdialog"`, `aria-describedby="dialog-description"`

#### Onboarding Tooltips (Feature Discovery)

**Anatomy:**

- **Background**: rgba(0,0,0,0.7) dim (full screen), white rounded tooltip (12px radius)
- **Spotlight**: Cutout around target element (no dim), 8px padding
- **Arrow**: White triangle pointing to target (12px)
- **Content**: Icon (24px) + headline (16pt Bold) + description (14pt Regular) + [Lanjut] button (Primary green)
- **Progress**: "1 dari 5" indicator (12pt gray.600)
- **Dismiss**: "Lewati Tour" link (12pt green.600) in top-right

**Timing:**

- **First-time only**: Show once after first login (stored in user preferences)
- **Max 5 tooltips**: Highlight key features (Dashboard hero, Transaction history, Community tab, Badge icon, Profile settings)

**Accessibility:**

- Focus trap: Tab cycles tooltip elements only
- Escape: Exits tour immediately
- ARIA: `role="dialog"`, `aria-label="Feature tour step 1 of 5"`

---

## 13. Responsive Design & Accessibility

### Responsive Strategy

BankSampah adopts a **mobile-first progressive enhancement** strategy, reflecting the platform's primary mobile app focus while ensuring optimal experiences across all devices.

#### Mobile Strategy (320px - 767px) — PRIMARY PLATFORM

**Layout Approach:**

- **Single-column vertical scroll**: All content stacks vertically with full-width cards
- **Bottom tab navigation**: 4 tabs (Dashboard, Transaksi, Community, Profile) fixed bottom
- **Thumb-reach optimization**: Primary actions positioned 56px from bottom edge (within thumb zone)
- **Progressive complexity**: Simple mode (2 metrics, 2 buttons) → Detailed mode (full data) → Power mode (charts)

**Mobile-Specific Features:**

- **Camera-first transaction**: Tap "Setor Sampah" → immediate camera open (no intermediate screen)
- **Swipe gestures**: Left swipe (share), right swipe (detail) on transaction cards
- **Pull-to-refresh**: 80px drag threshold for refreshing lists
- **Voice input**: Optional microphone button for search and form inputs (accessibility enhancement)
- **Offline mode**: Local storage with sync indicators (critical for low-connectivity areas)

**Mode Lansia (Mobile Only):**

- **No tabs**: Single-screen flow with 3 giant buttons (88x88pt each)
- **No gestures**: Tap-only interactions (no swipe, no long-press)
- **Giant "KEMBALI" button**: 88x88pt top-left (always visible)
- **48pt text**: Double standard size (24pt → 48pt for critical info)
- **Voice guidance**: Optional TTS for button labels

**Mobile Layout Patterns:**

- **Hero card**: Full-width impact stat (environmental hero), 16px horizontal padding
- **Balance display**: Dual ledger side-by-side (Rp left, kg right), 50/50 width split
- **Transaction list**: Full-width cards, 12px vertical spacing, shimmer loading skeleton
- **Forms**: Full-width inputs (48px height standard, 88px Lansia), vertical stacking only

#### Tablet Strategy (768px - 1023px) — OPERATOR DASHBOARD OPTIMIZED

**Layout Approach:**

- **Adaptive 2-column grid**: Left sidebar (240px navigation) + main content area (fluid)
- **Landscape-first**: Optimize for horizontal orientation (operators use tablets in landscape)
- **Touch-optimized**: 48x48px minimum touch targets (same as mobile), no hover states
- **Increased information density**: Show 8-10 transaction rows vs 5-6 on mobile

**Tablet-Specific Features:**

- **Split-view transaction entry**: Left (camera preview + detection), Right (form + confirmation)
- **Floating action button (FAB)**: Bottom-right "Tambah Transaksi" (60px diameter) for quick entry
- **Inline editing**: Tap transaction card → inline edit mode (no modal) with [Save] [Cancel] buttons
- **Keyboard shortcuts**: Cmd+N (new transaction), Cmd+F (search), Cmd+S (save) for power users

**Operator Dashboard (Tablet-Specific):**

- **Quick stats bar**: Top horizontal bar with 4 metrics (pending transactions, today's volume, active nasabah, revenue)
- **Transaction queue**: Left panel (40% width) with pending transactions, drag-to-reorder
- **Detail pane**: Right panel (60% width) shows selected transaction with photo, edit controls
- **Batch operations**: Multi-select checkboxes for bulk approve/reject

**Tablet Layout Patterns:**

- **Card grid**: 2 columns on tablet portrait, 3 columns on tablet landscape
- **Side-by-side forms**: Related fields horizontal (First Name | Last Name) with 12px spacing
- **Sticky header**: Header remains visible on scroll with search bar always accessible

#### Desktop Strategy (1024px+) — ADMIN & B2B PORTAL

**Layout Approach:**

- **Multi-column layout**: 3-column grid (sidebar 20% + main 60% + info panel 20%)
- **Desktop-first admin**: Retool interface uses full screen real estate for data tables
- **Hover interactions**: Hover states for links, tooltips on hover (not available on mobile/tablet)
- **Dense data display**: Show 20+ rows in transaction tables with horizontal scroll if needed

**Desktop-Specific Features:**

- **Advanced filtering**: Left sidebar with collapsible filter sections (date range, waste type, status, amount)
- **Data visualization**: Full-width charts (price trends, volume analysis, community leaderboards)
- **Keyboard navigation**: Tab through forms, arrow keys for table navigation, Enter to submit
- **Multi-window support**: Open transaction detail in new window/tab for parallel processing
- **Export functionality**: CSV/Excel export buttons for reports (desktop-only feature)

**B2B Portal (Desktop-First - Phase 2B):**

- **Dashboard layout**: 4x3 metric grid (12 KPI cards) with drill-down modals
- **Inventory table**: Full-width sortable table with inline search, pagination (50 rows per page)
- **Order placement**: Multi-step wizard with progress indicator (basket → shipping → payment → confirmation)
- **Traceability map**: Interactive map showing waste material journey (blockchain-backed)

**Desktop Layout Patterns:**

- **Sidebar navigation**: Left vertical nav (expanded by default, collapsible to icons only)
- **Breadcrumb navigation**: Top horizontal breadcrumb for deep navigation (Home > Transaksi > Detail)
- **Action bar**: Top-right with profile dropdown, notifications bell, settings icon
- **Footer**: Bottom fixed footer with help link, version number, logout

---

### Breakpoint Strategy

BankSampah uses **standard mobile-first breakpoints** with custom tweaks for Progressive UX levels.

#### Standard Breakpoints

```css
/* Mobile (Default) */
@media (min-width: 320px) {
  /* Single column, bottom tabs, full-width cards */
}

/* Tablet Portrait */
@media (min-width: 768px) {
  /* 2 columns, adaptive sidebar, increased density */
}

/* Tablet Landscape */
@media (min-width: 1024px) {
  /* 3 columns, expanded sidebar, desktop navigation */
}

/* Desktop */
@media (min-width: 1440px) {
  /* Max content width 1280px (centered), full feature set */
}

/* Large Desktop */
@media (min-width: 1920px) {
  /* Max content width 1440px, no further scaling (prevent over-stretching) */
}
```

#### Progressive UX Breakpoints (Custom)

**Simple Mode (Levels 1-2):**

- Mobile: 2 metrics, 2 buttons (320px - 767px)
- Tablet: 4 metrics, 4 buttons (768px+)
- Desktop: 4 metrics + quick actions bar (1024px+)

**Detailed Mode (Level 3):**

- Mobile: Transaction history + impact breakdown (320px - 767px)
- Tablet: Side-by-side comparison (history left 50%, impact right 50%) (768px+)
- Desktop: 3-column layout (history 40%, impact 30%, insights 30%) (1024px+)

**Power Mode (Level 4):**

- Mobile: Tabs for different views (charts, portfolio, trends) (320px - 767px)
- Tablet: 2-tab split view (charts + data table) (768px+)
- Desktop: Full dashboard with 6-chart grid + data table below (1024px+)

**Mode Lansia:**

- Mobile ONLY: No responsive changes (fixed 88px buttons, 48pt text, 3-button interface)
- Tablet/Desktop: Redirect to mobile or show message "Gunakan smartphone untuk Mode Lansia"

#### Breakpoint Decision Rules

**Content-First Approach:**

- Breakpoints are determined by when content breaks, not arbitrary device sizes
- Test on real devices to validate breakpoints (not just browser resize)
- Use em/rem units for breakpoints (better accessibility when users zoom)

**Device Detection:**

- Use `userAgent` to detect device type (mobile, tablet, desktop)
- Serve mobile app (React Native) for iOS/Android, web app for desktop/tablet browsers
- Operator dashboard optimized for iPad (768px-1024px landscape)

**Performance Considerations:**

- Lazy load desktop-only features (charts, advanced filters) on mobile
- Serve optimized images per breakpoint (320px, 768px, 1024px, 1440px widths)
- Reduce animation complexity on lower-end devices (detected via performance API)

---

### Accessibility Strategy

BankSampah commits to **WCAG 2.1 Level AA compliance** as baseline, with **Level AAA for Mode Lansia** to ensure inclusive access for all users.

#### WCAG Compliance Levels

**Level AA (Standard for All Modes):**

- **Color contrast**: 4.5:1 minimum for normal text (14pt+), 3:1 for large text (18pt+ or 14pt Bold)
- **Touch targets**: 48x48px minimum (exceeds 44x44px WCAG requirement)
- **Keyboard navigation**: All interactive elements accessible via Tab, Enter, Escape, Arrow keys
- **Focus indicators**: 2px solid outline with 2px offset (green.800 for primary, blue.600 for secondary)
- **Screen reader support**: ARIA labels, roles, live regions for all dynamic content
- **Error identification**: Clear error messages with icons, color + text (not color alone)

**Level AAA (Mode Lansia Only):**

- **Color contrast**: 7:1 minimum for all text (enhanced contrast)
- **Touch targets**: 88x88px giant buttons (double WCAG requirement)
- **No time limits**: No auto-dismiss toasts, no session timeouts (or 10-minute warning with extend option)
- **No complex gestures**: No swipe, no long-press, no pinch-to-zoom (tap only)
- **Voice guidance**: Optional TTS for all button labels and form instructions
- **Large text**: 48pt for critical info (double standard 24pt), 36pt for body text

#### Accessibility Features by Category

**1. Visual Accessibility**

**Color Contrast:**

- **Standard mode**: green.600 (#16a34a) on white = 4.61:1 ✅ AA compliant
- **Lansia mode**: green.800 (#166534) on white = 7.12:1 ✅ AAA compliant
- **Error states**: red.600 (#dc2626) on white = 5.03:1 ✅ AA compliant
- **Link text**: green.600 (#16a34a) = 4.61:1 ✅ AA compliant, underline on hover (not color alone)

**Color Blindness Support:**

- **Icons + color**: Never rely on color alone (e.g., success = green + checkmark icon)
- **Patterns for charts**: Use patterns (dots, stripes, hatching) in addition to colors for data visualization
- **Test with simulators**: Validate designs with Deuteranopia, Protanopia, Tritanopia filters

**Font Sizing:**

- **Relative units**: Use rem for font sizes (allow user zoom without breaking layout)
- **Minimum sizes**: 14pt body text (standard), 16pt input fields (prevent iOS zoom), 24pt Lansia body
- **Line height**: 1.5x font size minimum (better readability for dyslexia)
- **Letter spacing**: 0.12em for Lansia mode (easier to distinguish characters)

**2. Motor/Mobility Accessibility**

**Touch Targets:**

- **Minimum size**: 48x48px standard, 88x88px Lansia (easy for trembling hands)
- **Spacing**: 12px minimum between adjacent touch targets (prevent accidental taps)
- **Tap feedback**: 300ms scale animation (scale 0.98) on press (visual confirmation)
- **No hover-only**: All hover actions have tap equivalent (mobile-first approach)

**Gesture Alternatives:**

- **Swipe actions**: Transaction cards have tap → modal menu for Lansia (no swipe)
- **Pinch-to-zoom**: Not required (text already large, no maps in mobile app)
- **Long-press**: Not used (too complex for users with motor impairments)

**3. Cognitive Accessibility**

**Simple Language:**

- **Plain Indonesian**: Avoid jargon, use common words (e.g., "Setor" not "Deposit")
- **Short sentences**: Max 20 words per sentence in instructions
- **Error messages**: Clear problem + reason + solution (e.g., "Foto gagal diupload. Ukuran terlalu besar (max 5MB). Coba foto ulang.")

**Consistent Patterns:**

- **Predictable navigation**: Bottom tabs always in same position, same order
- **Consistent buttons**: Primary actions always green, secondary always outline, tertiary always text link
- **Familiar icons**: Use universally recognized icons (home 🏠, profile 👤, camera 📸)

**Reduced Cognitive Load:**

- **Progressive disclosure**: Show only essential info first (Simple mode), reveal more as user levels up
- **One task per screen**: Lansia mode shows one action at a time (LIHAT SALDO, SETOR SAMPAH, TARIK UANG)
- **Clear feedback**: Immediate visual + audio feedback for all actions (checkmark + toast + haptic)

**4. Auditory Accessibility**

**Captions & Transcripts:**

- **Video tutorials**: Captions for onboarding videos (if any)
- **Audio notifications**: Visual alternatives (toast, badge, vibration) for sound alerts
- **Voice guidance**: TTS option for Lansia mode (optional, not required)

**5. Keyboard & Screen Reader Accessibility**

**Keyboard Navigation:**

- **Tab order**: Logical top-to-bottom, left-to-right tab order
- **Focus management**: Focus moves to modal on open, returns to trigger on close
- **Keyboard shortcuts**: Escape (close modal), Enter (submit form), Arrow keys (navigate tabs)
- **Skip links**: "Skip to main content" link at top (hidden until focused)

**Screen Reader Support:**

- **Semantic HTML**: Use `<nav>`, `<main>`, `<article>`, `<button>` (not generic `<div>` with click handlers)
- **ARIA labels**: All icons have `aria-label` (e.g., `aria-label="Setor Sampah"`)
- **ARIA roles**: `role="button"`, `role="tablist"`, `role="dialog"`, `role="alert"`
- **ARIA live regions**: `aria-live="polite"` for success toast, `aria-live="assertive"` for errors
- **Alt text**: All images have descriptive alt text (e.g., `alt="5kg plastik botol PET"`)

**Screen Reader Testing Tools:**

- **VoiceOver** (iOS/macOS): Primary testing tool for mobile app
- **NVDA** (Windows): Testing for web admin interface
- **JAWS** (Windows): B2B portal testing (enterprise users may use JAWS)

---

### Testing Strategy

Comprehensive testing ensures responsive design and accessibility requirements are met before launch.

#### Responsive Testing

**Device Testing (Real Devices):**

- **Mobile phones**: iPhone 13 Mini (320px), iPhone 14 Pro (393px), Samsung Galaxy S22 (360px), Pixel 7 (412px)
- **Tablets**: iPad 10th Gen (768px portrait, 1024px landscape), Samsung Galaxy Tab S8 (800px)
- **Desktop**: MacBook Air (1440px), Windows laptop (1920px), 4K monitor (2560px)

**Browser Testing (Cross-Browser Compatibility):**

- **Mobile browsers**: Safari iOS 16+, Chrome Android 100+, Firefox Android 100+
- **Desktop browsers**: Chrome 100+, Firefox 100+, Safari 16+, Edge 100+
- **Operator tablets**: Chrome iPad, Safari iPad

**Responsive Testing Tools:**

- **Chrome DevTools**: Device emulation, network throttling, touch event simulation
- **BrowserStack**: Real device testing (iOS 15-17, Android 11-14)
- **Percy** (visual regression): Screenshot comparison across breakpoints

**Network Performance Testing:**

- **3G throttling**: Test mobile app on slow 3G (common in Indonesia)
- **Offline mode**: Test local storage sync when network drops
- **Image optimization**: Validate lazy loading, WebP/AVIF format support

#### Accessibility Testing

**Automated Testing Tools:**

- **axe DevTools**: Chrome extension for WCAG violation detection
- **Lighthouse**: Accessibility score (target 95+), performance, best practices
- **WAVE**: Web accessibility evaluation tool for admin interface

**Manual Accessibility Testing:**

- **Keyboard-only navigation**: Unplug mouse, navigate entire app via keyboard
- **Screen reader testing**: VoiceOver (iOS), NVDA (Windows), JAWS (Windows)
- **Color contrast checker**: Contrast ratio validation for all text/background pairs
- **Touch target size**: Measure all buttons (Chrome DevTools ruler)

**Color Blindness Testing:**

- **Sim Daltonism** (macOS): Real-time color blindness simulation
- **Chrome DevTools**: Emulate vision deficiencies (Deuteranopia, Protanopia, Tritanopia, Achromatopsia)
- **Coblis**: Color blindness simulator for mockups

**Assistive Technology Testing:**

- **VoiceOver** (iOS): Primary screen reader for mobile app testing
- **TalkBack** (Android): Secondary screen reader testing
- **Voice Control** (iOS): Test voice commands for hands-free operation
- **Switch Control** (iOS): Test single-switch navigation (for severe motor impairments)

#### User Testing with Diverse Users

**Recruit Diverse Test Participants:**

- **Age range**: 20s (Rina), 40s (Ibu Siti), 60s+ (Bapak Joko)
- **Tech literacy**: Low (first-time smartphone), medium (daily app users), high (power users)
- **Disabilities**: Visual impairment (low vision, color blindness), motor impairment (arthritis, tremor), cognitive (dyslexia)

**User Testing Scenarios:**

- **Scenario 1 (Onboarding)**: New user downloads app, completes registration, makes first transaction
- **Scenario 2 (Daily use)**: Existing user checks balance, schedules pickup, shares achievement
- **Scenario 3 (Lansia mode)**: Senior user activates Mode Lansia, navigates 3-button interface, completes transaction
- **Scenario 4 (Error recovery)**: User encounters network error, recovers via retry, completes transaction

**Observation Metrics:**

- **Task completion rate**: Target >90% (users complete task without help)
- **Time on task**: Benchmark time to complete (e.g., first transaction <3 minutes)
- **Error rate**: Target <5% errors per task
- **Satisfaction score**: System Usability Scale (SUS) target >80/100

**Accessibility-Specific Metrics:**

- **Screen reader efficiency**: Target <20% more time than visual users
- **Keyboard navigation**: All tasks completable via keyboard only
- **Touch target errors**: Target <3% accidental taps (12px spacing validation)

---

### Implementation Guidelines

Actionable guidelines for developers to implement responsive design and accessibility requirements.

#### Responsive Development Guidelines

**1. Mobile-First CSS (Media Queries):**

```css
/* Default: Mobile (320px+) */
.balance-card {
  width: 100%;
  padding: 16px;
  font-size: 16px;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .balance-card {
    width: 50%; /* Side-by-side */
    padding: 24px;
    font-size: 18px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .balance-card {
    width: 33.33%; /* 3-column */
    padding: 32px;
    font-size: 20px;
  }
}
```

**2. Relative Units (rem, %, vw, vh):**

```css
/* ❌ Avoid fixed pixels */
.heading {
  font-size: 20px; /* Breaks when user zooms */
}

/* ✅ Use rem (relative to root font size) */
.heading {
  font-size: 1.25rem; /* 20px if root is 16px, scales with zoom */
}

/* ✅ Use % for widths */
.sidebar {
  width: 20%; /* Fluid, adapts to screen size */
}

/* ✅ Use vw/vh for full-screen elements */
.hero {
  height: 100vh; /* Full viewport height */
}
```

**3. Responsive Images (srcset):**

```jsx
<Image
  src="/hero-320.webp"
  srcSet="/hero-320.webp 320w, /hero-768.webp 768w, /hero-1440.webp 1440w"
  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
  alt="Environmental impact hero"
/>
```

**4. Touch Target Sizing:**

```css
/* Minimum 48x48px touch targets */
.button {
  min-width: 48px;
  min-height: 48px;
  padding: 12px 16px; /* Expands clickable area */
}

/* Lansia mode: 88x88px */
.button-lansia {
  min-width: 88px;
  min-height: 88px;
  padding: 20px 24px;
}
```

**5. Gesture Handling (React Native):**

```jsx
import { Swipeable } from "react-native-gesture-handler";

// Swipe actions for transaction cards
<Swipeable
  renderLeftActions={() => <ShareAction />} // Left swipe = share
  renderRightActions={() => <DetailAction />} // Right swipe = detail
  overshootLeft={false}
  overshootRight={false}
>
  <TransactionCard />
</Swipeable>;
```

#### Accessibility Development Guidelines

**1. Semantic HTML Structure:**

```jsx
// ❌ Avoid generic divs for interactive elements
<div onClick={handleSubmit}>Submit</div>

// ✅ Use semantic button
<button onClick={handleSubmit}>Submit</button>

// ✅ Use semantic navigation
<nav>
  <ul>
    <li><a href="/dashboard">Dashboard</a></li>
    <li><a href="/transaksi">Transaksi</a></li>
  </ul>
</nav>
```

**2. ARIA Labels and Roles:**

```jsx
// Icon-only button needs aria-label
<button aria-label="Setor Sampah">
  <CameraIcon />
</button>

// Tab navigation
<div role="tablist">
  <button role="tab" aria-selected="true">Dashboard</button>
  <button role="tab" aria-selected="false">Transaksi</button>
</div>

// Live region for dynamic content
<div aria-live="polite" aria-atomic="true">
  {successMessage}
</div>
```

**3. Keyboard Navigation Implementation:**

```jsx
// Handle keyboard events
const handleKeyDown = (e) => {
  if (e.key === "Enter" || e.key === " ") {
    handleSubmit();
  }
  if (e.key === "Escape") {
    closeModal();
  }
};

// Tab order management
<div tabIndex={0} onKeyDown={handleKeyDown}>
  <button tabIndex={1}>Primary Action</button>
  <button tabIndex={2}>Secondary Action</button>
</div>;
```

**4. Focus Management:**

```jsx
import { useRef, useEffect } from "react";

// Focus first input on modal open
const Modal = ({ isOpen }) => {
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div role="dialog" aria-modal="true">
      <input ref={firstInputRef} placeholder="Name" />
    </div>
  );
};
```

**5. Color Contrast Validation:**

```css
/* Ensure 4.5:1 contrast minimum */
.text-primary {
  color: #16a34a; /* green.600 on white = 4.61:1 ✅ */
}

/* Lansia mode: 7:1 contrast */
.text-lansia {
  color: #166534; /* green.800 on white = 7.12:1 ✅ AAA */
}

/* Error text */
.text-error {
  color: #dc2626; /* red.600 on white = 5.03:1 ✅ */
}
```

**6. Screen Reader Announcements:**

```jsx
import { announce } from "react-native-accessibility";

// Announce success message
const handleSuccess = () => {
  announce("Transaksi berhasil disimpan");
};

// Announce error with assertive priority
const handleError = () => {
  announce("Foto gagal diupload. Coba lagi.", "assertive");
};
```

**7. Skip Links (Web Admin):**

```jsx
// Hidden until focused (keyboard users)
<a href="#main-content" className="skip-link">
  Skip to main content
</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #16a34a;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0; /* Revealed on Tab */
}
</style>
```

**8. High Contrast Mode Support:**

```css
/* Detect high contrast mode (Windows) */
@media (prefers-contrast: high) {
  .button {
    border: 2px solid currentColor; /* Ensure borders visible */
  }

  .card {
    outline: 1px solid currentColor; /* Visible boundaries */
  }
}
```

#### Testing Checklist for Developers

**Responsive Testing:**

- [ ] Test on 3 real devices (iPhone, Android, iPad)
- [ ] Test all breakpoints (320px, 768px, 1024px, 1440px)
- [ ] Test landscape and portrait orientations
- [ ] Validate touch targets (min 48x48px)
- [ ] Test on slow 3G network (Chrome DevTools)

**Accessibility Testing:**

- [ ] Run axe DevTools (0 violations)
- [ ] Lighthouse accessibility score >95
- [ ] Keyboard-only navigation (Tab, Enter, Escape, Arrows)
- [ ] VoiceOver testing (iOS) - all content readable
- [ ] Color contrast validation (4.5:1 minimum)
- [ ] Focus indicators visible (2px outline)
- [ ] ARIA labels on all icons
- [ ] Form validation messages clear and specific

---

<!-- UX design content will be appended sequentially through collaborative workflow steps -->
