# doodloop.f-90.co.uk

Marketing, privacy, and support site for [Doodloop](https://github.com/utopastac/doodleoop-ios).

Plain HTML / CSS / JS (same shape as Pixelator’s `/ios` pages). No build step.

## Pages

| Path | Purpose |
|------|---------|
| `/` | Product landing |
| `/support/` | App Store support URL |
| `/privacy/` | App Store privacy policy URL |

## Local preview

```sh
cd doodloop-website
python3 -m http.server 4173
```

Open [http://localhost:4173](http://localhost:4173).

## Deploy

1. Push this repo to GitHub (e.g. `utopastac/doodloop-website`).
2. Settings → Pages → Deploy from branch `main` / root.
3. DNS: CNAME `doodloop` → `utopastac.github.io` (or this repo’s Pages hostname).
4. Keep root `CNAME` as `doodloop.f-90.co.uk`.

App Store listing URLs:

- Support: `https://doodloop.f-90.co.uk/support`
- Privacy Policy: `https://doodloop.f-90.co.uk/privacy`

## Assets

- `assets/app-icon*.png` — from the iOS `AppIcon`.
- Drop App Store screenshots into `assets/screenshots/` and wire them in `index.html` when ready.
