# Project Tech Stack: Premium Pet Landing Page

## 1. Frontend & UI
- **Framework:** React.js (Functional Components)
- **Language:** JavaScript (ES6+) **[Strictly No TypeScript]**
- **Styling:** Tailwind CSS
- **UI Component Library:** Shadcn/ui (Focus on Clean Professional style)
- **Icons:** Lucide React (Line Icons style)

## 2. Animation & UX (Social Proof)
- **Library:** Framer Motion
- **Key Features:** 
  - Floating "Purchase Mockup" notifications at the bottom-left corner.
  - Smooth scroll transitions between 10 sections.
  - "Add to Cart" or "Order +1" floating animations for engagement.

## 3. Data Management (No Backend)
- **Form Submission:** Integrated with **Google Sheets** via Google Apps Script.
- **Workflow:** 
  - Frontend sends a POST request with JSON payload to a Google Apps Script Web App URL.
  - Data points: Name, Phone, Address, Province, Postal Code, Product Package, and Payment Method (COD).

## 4. Deployment & Infrastructure
- **Platform:** Vercel
- **Build Tool:** Vite or Create React App (Standard React build)
- **Domain/SSL:** Managed by Vercel for safety and trust.

## 5. Coding Standards & Instructions for AI
- **File Structure:** 
  - `/src/components`: UI components (Button, Input, Cards).
  - `/src/sections`: All 10 sections of the landing page.
  - `/src/hooks`: Logic for handling form and animations.
- **Tone:** Professional, Minimalist, and Conversion-focused.
- **Responsiveness:** Mobile-first approach (must look perfect on smartphones).