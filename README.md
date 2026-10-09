# GOUROB X CHEAT — Admin Panel

Separate admin panel for the GOUROB X CHEAT store.

## Access
- Only 2 admin emails can login (set in `admin.html` → `ADMINS` array)
- Firebase Auth (Email/Password) required

## Features
- **Products** — add/edit/delete products with categories, packages (plans + prices), features, and images (imgbb upload or direct URL)
- **Categories** — manage product categories
- **Updates** — add app update entries with download links
- **Fund Requests** — approve/reject user deposit requests (adds to wallet on approve)

## Setup
1. Firebase Console → Authentication → Email/Password → Enable
2. Add admin users (the 2 emails in `ADMINS`)
3. Realtime Database → Rules → paste `database.rules.json` from main repo → Publish
4. Deploy this folder to GitHub Pages or any static host

## Main Store
https://github.com/swampodsarkar321/GOUROB-X-CHEAT-
