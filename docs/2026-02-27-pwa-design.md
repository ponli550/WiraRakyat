# PWA Design: The "Mobile Images" Strategy (2026-02-27)

## Overview
Transforming Fatini's portfolio into a high-performance, standalone mobile experience that feels like a physical digital Images.

## User Intent
- **Persona**: Silicon Valley Expert / Geologist.
- **Goal**: Flawless "Add to Home Screen" experience with an immersive, browser-less UI.

## Architecture
- **Engine**: `next-pwa` (via `@ducanh2912/next-pwa`) for App Router compatibility.
- **Caching**: Stale-While-Revalidate for the Hero and Projects modules.
- **Updates**: Real-time Supabase data fetching prioritized when online.

## Visual Identity
- **Icon**: Minimalist crystal lattice glyph (Glowing White on Deep Black).
- **Splash Screen**: Centered logo with 'FATINI NABILAH' typography on a pure black background.
- **UI**: `standalone` display mode to remove iOS/Android browser chrome.

## Implementation Path
1. Install dependencies.
2. Initialize `manifest.json`.
3. Configure `next.config.js`.
4. Inject PWA metadata into `RootLayout`.
5. Generate and place iconography in `public/icons/`.
