# Reverse Delivery — Peer-to-Peer Indian Railway Parcel Platform 🚆📦

**Reverse Delivery** is a full-stack, responsive web application connecting people who need to transport parcels between railway stations with verified passengers already traveling along those routes.

---

## 🌟 Key Features

1. **Smart Train Matching Engine**:
   - Analyzes scheduled Indian Railway train timetables (Rajdhani, Shatabdi, Express).
   - Validates station stop sequences (`originIndex < destIndex`) supporting intermediate hops (e.g. New Delhi ➔ Kanpur Central ➔ Howrah).
   - Filters out trains exceeding delivery deadlines.
   - Calculates route compatibility scores (0–100%) and matches registered travelers.
   - Interactive Train Delay Simulator (+15m, +45m, +90m) recalculating ETAs with deadline warning alerts.

2. **SVG QR Code & OTP Verification Engine**:
   - Scalable inline SVG QR generation using `qrcode.react`.
   - Single-use, cryptographically random verification tokens bound to parcel ID and stage.
   - Manual 4-digit OTP fallback.
   - 1-Click Demo Verification shortcut for mentor evaluations.
   - Confetti celebration animation upon successful handoff.

3. **UPI-Style Demo Reward Wallet**:
   - Real-time balance in INR (₹).
   - Smart escrow protection: reward held upon booking, released to traveler wallet upon verified delivery.
   - Simulated UPI add funds (₹500, ₹1,000, ₹2,000).
   - Server-side duplicate payout protection.

4. **Emergency Rail Security SOS**:
   - Prominent SOS trigger in Live Tracking.
   - Confirmation dialog triggering device phone dialer for Railway Helpline `139`.
   - Direct `tel:139` link with transparent safety disclaimers.

5. **Referral Reward System**:
   - Default demo code: `REVERSE-INDIA-2026`.
   - Native clipboard copy with toast notifications.
   - Claim bonus (₹100) with self-referral and duplicate claim validation.

6. **Responsive Dual Presentation**:
   - **Simulated Mobile Preview Mode**: Realistic smartphone bezel with camera notch, carrier status bar, and bottom navigation bar.
   - **Desktop Fullscreen Mode**: Wide-screen desktop layout with sidebar navigation and analytics.
   - Toggle seamlessly between modes without losing form state or navigation.
   - Persistent Dark Mode and Light Mode with contrast compliance.

7. **Real-Time Communication**:
   - Socket.io live status synchronization and delivery-specific in-app messaging.
   - Quick reply chips ("I have accepted your parcel", "Reached pickup station", etc.).

8. **Dual-Mode Data Persistence**:
   - Modular storage layer supporting MongoDB/Mongoose or embedded file-backed JSON store (`runtimeDb.json`).
   - One-click **"Reset Demo Data"** action restores pristine seed state anytime.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons, Leaflet, OpenStreetMap, Canvas Confetti, QRCode.react
- **Backend**: Node.js, Express.js, Socket.io, RESTful API, Crypto
- **Data Layer**: Dual-Mode Persistence (Embedded JSON-file / MongoDB Adapter)

---

## 🚀 Running the Platform

### Option 1: Run Full-Stack Concurrently (Recommended)
From `C:\Users\hp\.gemini\antigravity\scratch\reverse-delivery`:
```bash
npm run dev:all
```
This runs:
- Backend Express API & Socket.io server on `http://localhost:5000`
- Frontend Vite development server on `http://localhost:3000` (with proxy to port 5000)

### Option 2: Run Separately
Terminal 1 (Backend):
```bash
npm run server
```
Terminal 2 (Frontend):
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

---

## 👥 Demo Profiles for Evaluators

| Role | Name | Details |
|---|---|---|
| **Sender** | Priya Sharma | New Delhi • Verified Sender (★ 4.9) • Wallet: ₹2,450 |
| **Traveler** | Rajesh Kumar | Mumbai Rajdhani (12952) • Aadhaar & PNR Verified (★ 4.95) • 42 Deliveries |
| **Receiver** | Amit Verma | Kanpur Central • Verified Receiver (★ 5.0) |
| **Admin** | Evaluator | Platform throughput, corridor density, and platform health |

*Switch roles anytime using the top navigation pill switcher.*
