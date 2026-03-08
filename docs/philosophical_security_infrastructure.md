# 🏛️ Philosophical Security Infrastructure: Structural Sovereignty

This document defines how the **Geologist-Fatini Portfolio** implements physical and psychological security principles from Japanese and Islamic traditions as concrete technical constraints.

---

## 🏯 1. The Japanese Framework: The Double Lock

We implement the **Double Auto-Lock** residential architecture as a digital gatekeeping strategy.

### Technical Implementation:
- **Gate 1 (The Perimeter)**: Public seekers fetch a **synthesized baseline** profile (`/api/intelligence/base-profile`). They see the professional value (Radar Matrix) but are restricted from raw matched data.
- **Gate 2 (The Vault)**: Administrative tools (Archive Stream, Resume Ingestion) are wrapped in **Hard Auth Guards**.
- **Implementation Note**: `src/app/hub/page.tsx` line 217: `{user && <AdminTools />}`.

### Mechanical Precision:
- **Rule**: Dimple Key Tolerances.
- **Implementation**: `src/app/api/intelligence/sync-resume/route.ts` uses **Case-Insensitive Unification**.
- **Result**: Like a 18-pin cylinder, the database refuses duplicate "pins" (skills/roles) by matching variants (e.g., "react" vs "React") to a single source of truth.

---

## ⚖️ 2. The Islamic Framework: Amanah & Bitanah

We treat data as a sacred trust (**Amanah**) and the user base as a protected inner circle (**Bitanah**).

### Data Stewardship (Amanah):
- **Rule**: A trusted person must offer sincere advice.
- **Implementation**: The **AI Logic Bridge** (`callLLM`) is instructed to be clinical and objective. We do not "flatter" the profile; we provide "Sincere Synthesis".
- **Verification**: If a `match_jd` operation detects non-compliant data, the "Treaty" is automatically abrogated (Phase 12: `isValidJD` check).

### Internal Vigilance (Bitanah):
- **Rule**: Do not take outsiders as "intimates" (those who know your secrets).
- **Implementation**:
    - **Intimate Guard (Admin)**: Sees the `job_title` variance, specific company matches, and historical evolution.
    - **Outsider View (Public)**: Sees only the **Neural Potency**—the safe, synthesized version of the professional truth.
- **The "Bitanah" Shield**: All sensitive API routes use `supabaseAdmin` (Service Role) only after verifying the user's session balance or role.

---

## 🗿 3. Practical Failure Modes (The Harsh Truth)

We acknowledge the friction inherent in these "Locks":
1.  **Isolation Risk**: By being too secure, we risk making the Hub "unapproachable". We mitigate this by ensuring the **Radar Matrix** is always visible and high-impact.
2.  **Amanah Volatility**: The system relies on the LLM's "sincerity". We hard-code strict schemas to prevent the AI from hallucinating false security.

---
*Architectural Sovereignty — Antigravity AI* 🪐
