# Diaphragmatic Breathing — 14-Day Training App

A mobile-first Progressive Web App (PWA) for the 14-day diaphragmatic breathing training plan. Works on Android and iOS as a home screen app with offline support.

---

## 📁 File Structure

```
/
├── index.html       ← App shell & HTML structure
├── style.css        ← All styles (dark theme, animations)
├── data.js          ← All training plan content & reward messages
├── app.js           ← App logic, state, interactions
├── manifest.json    ← PWA manifest (name, icons, display mode)
├── sw.js            ← Service worker (offline caching)
├── icons/
│   ├── icon-192.png ← App icon (192×192)
│   └── icon-512.png ← App icon (512×512)
└── README.md
```

---

## 🚀 Deploy via GitHub Pages (Free)

1. **Create a new GitHub repository** — name it anything (e.g. `breathe-app`)
2. **Upload all files** — drag and drop into the repo, keeping the folder structure above
3. **Create the icons folder** — upload two square PNG icons (192×192 and 512×512). Use any simple icon — a lungs emoji screenshot works fine.
4. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Under "Source" select: `Deploy from a branch`
   - Branch: `main` / Folder: `/ (root)`
   - Click Save
5. **Your app URL** will be: `https://YOUR-USERNAME.github.io/REPO-NAME/`

---

## 📲 Install on Android

1. Open the app URL in **Chrome on Android**
2. Tap the **three-dot menu** (top right)
3. Tap **"Add to Home Screen"**
4. The app installs like a native app — full screen, no browser bar

The app will also show an **"Add to Home Screen" banner** automatically after 3 seconds.

---

## 📱 Install on iPhone (iOS)

1. Open the URL in **Safari** (must be Safari, not Chrome)
2. Tap the **Share button** (box with arrow)
3. Tap **"Add to Home Screen"**

---

## ✅ Features

- **14 days across 2 weeks** — Week 1 (Find & Feel It) and Week 2 (Build & Apply It)
- **Checkable drills** — tap the checkbox on each block to mark it complete
- **Progress saved** — checked items persist via localStorage across sessions
- **Rewarding feedback** — unique completion message and emoji for each day finished
- **Expandable steps** — tap any block to expand full step-by-step instructions
- **YouTube video links** — one targeted video per day
- **Coach's tip** — motivational tip at the bottom of every day
- **Offline support** — full app works without internet after first load (Service Worker)
- **Android install prompt** — native "Add to Home Screen" banner

---

## 🎨 Customization

- **Colors:** Edit `--w1` and `--w2` CSS variables in `style.css`
- **Content:** All training data lives in `data.js` — easy to edit or extend
- **Rewards:** Edit the `REWARDS` array in `data.js` to customize completion messages
- **Add weeks:** Add new week objects to the `PLAN` array in `data.js`

---

## 🔧 Icons

You need two PNG icon files in an `/icons/` folder:
- `icon-192.png` — 192×192 pixels
- `icon-512.png` — 512×512 pixels

**Quick option:** Screenshot a 🫁 emoji, crop it to a square, resize to both dimensions. Any free tool like [squoosh.app](https://squoosh.app) works.
