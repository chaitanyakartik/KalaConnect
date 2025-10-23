# Quickstart: Artisan Profile Page Feature

**Branch**: `001-artisan-profile-page`  
**Last Updated**: 2025-10-23

## Quick Start (Local Development)

### 1. Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Git with the feature branch checked out

### 2. Install Dependencies

From project root:
```bash
cd artisan-marketplace
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

This will start Vite dev server, typically at `http://localhost:5173`

### 4. Test the Feature

Open your browser and navigate through the full user journey:

#### **Home Page**
- URL: `http://localhost:5173/`
- Expected: Home page with category cards (Pottery, Fishing, Handicrafts, Textiles)
- Check: Images load, no console errors

#### **Category Page**
- URL: `http://localhost:5173/category/pottery` (or any category)
- Expected: Category header, list of items in that category, list of artisans
- Check: Images load for items and artisans, responsive on mobile/tablet/desktop

#### **Artisan Profile Page** ✨ NEW
- URL: `http://localhost:5173/artisan/1` (or any artisan ID 1-6)
- Expected:
  - Sticky top navbar with Home and Categories dropdown
  - Profile header with artisan image, name, origin, bio
  - Gallery of designs (items) made by this artisan
  - Each design shows item name, estimated price, and image
- Check:
  - Images load correctly
  - Responsive grid (1 column on mobile, 2 on tablet, 3 on desktop)
  - Clicking a design navigates to item detail page
  - Error state appears if invalid artisan ID (e.g., `/artisan/999`)

#### **Item Detail Page** ✨ NEW
- URL: `http://localhost:5173/item/pots` (or any item ID)
- Expected:
  - Item image and name
  - Category label with link back to category
  - Section showing all artisans who make this item
  - For each artisan:
    - Name, origin, bio
    - Estimated price
    - Three contact buttons: WhatsApp, Email, Call
    - "View All Designs" link to artisan profile
- Check:
  - Images load
  - WhatsApp button opens WhatsApp chat
  - Email button opens email client
  - Phone button initiates a call (or shows dial prompt)
  - All links navigate correctly

### 5. Manual Test Cases

| Test Case | Path | Expected Result | Pass? |
|-----------|------|-----------------|-------|
| **Navigation** | Home → Categories dropdown → Pottery | Category page loads | ✓ |
| **Profile rendering** | /artisan/1 | Artisan profile displays with image, bio, designs | ✓ |
| **Gallery nav** | /artisan/1 → click design | Navigate to item detail page | ✓ |
| **Item detail** | /item/pots | Item and artisans display | ✓ |
| **Contact WhatsApp** | /item/pots → WhatsApp button | Opens WhatsApp chat with artisan | ✓ |
| **Contact Email** | /item/pots → Email button | Opens email client | ✓ |
| **Contact Phone** | /item/pots → Call button | Initiates phone call | ✓ |
| **Responsive mobile** | /artisan/1 on mobile view | Single column gallery, readable text | ✓ |
| **Responsive tablet** | /artisan/1 on tablet view | Two column gallery | ✓ |
| **Error handling** | /artisan/999 | "Artisan not found" message | ✓ |
| **Missing images** | All pages | Placeholder images appear for missing files | ✓ |
| **Navbar dropdown** | Click Categories → select category | Navigate to category page | ✓ |

### 6. Accessibility Checks

- [ ] Images have alt text
- [ ] Headings are semantic (h1, h2, h3, etc.)
- [ ] Links are keyboard navigable (Tab key)
- [ ] Contact buttons are keyboard accessible
- [ ] Gallery items respond to Enter key (DesignCard)
- [ ] Error messages have `role="alert"` for screen readers

### 7. Browser Compatibility

Test on:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### 8. Performance Check (Optional)

Use Chrome DevTools Lighthouse:
1. Open DevTools (F12)
2. Click Lighthouse tab
3. Run audit on `/artisan/1`
4. Target: Performance > 80, Accessibility > 90, Best Practices > 90

### 9. Build & Production

To build for production:
```bash
npm run build
```

Output will be in `dist/` folder. To preview:
```bash
npm run preview
```

### 10. Git Workflow

To finalize the feature:
```bash
# Make sure all changes are committed
git status

# Merge to main when ready
git checkout main
git merge 001-artisan-profile-page

# Push to remote
git push origin main
```

## Troubleshooting

### Issue: Images not loading
**Solution**: Ensure image files exist in:
- `artisan-marketplace/public/images/Pottery/*.jpg`
- `artisan-marketplace/public/images/Fishing/*.jpg`
- `artisan-marketplace/public/images/Handicrafts/*.jpg`
- `artisan-marketplace/public/images/Textiles/*.jpg`

If missing, check SVG placeholder fallbacks in browser (gray boxes with labels).

### Issue: WhatsApp button not working
**Solution**: The link format assumes valid phone numbers in db.js. Check:
- Artisan `whatsapp` field is set
- Phone number includes country code (e.g., `+91`)

### Issue: Styling issues (colors, spacing off)
**Solution**: Clear browser cache and rebuild:
```bash
npm run dev -- --force
```

Or manually clear cache (DevTools → Application → Storage → Clear all).

### Issue: Vite not found error
**Solution**: Make sure you're in the `artisan-marketplace` folder:
```bash
cd artisan-marketplace
npm run dev
```

## Feature Summary

✨ **What was built:**
- Artisan Profile Page with sticky navbar, profile header, and design gallery
- Item Detail Page with artisan contact information (WhatsApp, Email, Phone)
- Full user journey: Home → Category → Artisan Profile → Item Detail → Contact
- Responsive design (mobile, tablet, desktop)
- Accessibility features (alt text, semantic HTML, keyboard nav)
- SVG placeholders for missing images
- Direct contact links (WhatsApp, email, phone)

📦 **Key Files:**
- `src/pages/ArtisanProfilePage.jsx` — Artisan profile page with gallery
- `src/pages/ItemDetailPage.jsx` — Item detail page with contact info
- `src/components/ProfileHeader.jsx` — Reusable profile header
- `src/components/DesignCard.jsx` — Gallery card component
- `src/components/NavBar.jsx` — Sticky top navbar with category dropdown
- `src/data/db.js` — Database with artisans, categories, items, contact info

🚀 **Ready to demo!** Start the dev server and navigate through the user journey.
