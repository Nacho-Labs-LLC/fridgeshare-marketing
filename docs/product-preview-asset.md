# Product preview asset capture

Asset in homepage component:
- `public/assets/fridgeshare-real-product-screenshot.png`

Current source of truth:
- Board state: `real-app/server/data/fridges/marketing-kitchen-board.json`
- Named board slug: `marketing-kitchen-board`
- Local review URL: `http://127.0.0.1:4173/b/marketing-kitchen-board#marketingkitchenboardtoken1234567890abcd`

Why this asset exists:
- The PM brief asked for a real product visual.
- The homepage now uses a screenshot captured from the running self-hosted FridgeShare app instead of a synthetic preview/mock section.
- The tray is hidden for the marketing crop, but the board content is still pulled from the real product state in this repo.

Recapture steps:
1. Start the real app from `real-app/` with `npm start`.
2. Open the local review URL above.
3. Make sure no item is actively selected or dragged.
4. Collapse or hide the tray so the board fills the frame for the homepage crop.
5. Capture a fresh screenshot and overwrite `public/assets/fridgeshare-real-product-screenshot.png`.
6. Rebuild the marketing site with `npm run build` and verify the Product Preview section still looks balanced.

Review notes for QA / nebula:
- The screenshot should read as a real in-product board, not a stylized fake dashboard.
- Avoid visible selection handles, drag states, or temporary editor overlays.
- If a stronger board composition is needed, edit `marketing-kitchen-board.json`, recapture from the live app, and keep the asset path the same so the homepage component does not need to change again.
