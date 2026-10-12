# Top&Shine — Tipos de Limpeza / SOPs

One separate page per cleaning type and audience, so each person only sees what is meant for them.

| Cleaning type | Cleaner SOP (EN · PT · ES) | Client guide (EN) |
|---|---|---|
| Regular | `dist/regular-cleaner.html` | `dist/regular-client.html` |
| Deluxe (Top to Bottom) | `dist/deluxe-cleaner.html` | `dist/deluxe-client.html` |
| Move In/Out | `dist/move-cleaner.html` | `dist/move-client.html` |
| Post-Construction | `dist/post-cleaner.html` | `dist/post-client.html` |
| Small Commercial | `dist/commercial-cleaner.html` | `dist/commercial-client.html` |
| Airbnb | `dist/airbnb-cleaner.html` | `dist/airbnb-client.html` (host guide) |

Plus `dist/trainer.html` (PT · EN) and `dist/index.html`, the owner's index with every link.
Published links are in `links.json`.

## Editing

- Content lives in `src/data/` — `cleaner-<type>.js`, `client-<type>.js` and `trainer.js`.
- Shared pieces live in `src/common.js`: icons, cloth color code and the optional upgrades price list.
- Layout and behavior: `src/styles.css`, `src/engine.js`, `src/index.html`.

After editing, rebuild every page:

```
python3 sop/build.py
```
