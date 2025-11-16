# Google Search Console Setup Instructions

## Step 1: Get Your Verification Code

1. Visit https://search.google.com/search-console/
2. Click "Start Now" and sign in
3. Click "Add Property"
4. Enter: `https://aerove.vercel.app`
5. Choose "HTML tag" method
6. Copy the meta tag code (looks like this):
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```

## Step 2: Add Verification Code to Website

Once you get the verification code from Google, add it to `index.html`:

1. Open `index.html`
2. Find the `<head>` section
3. Add the Google verification meta tag AFTER the charset line
4. Save the file
5. Commit and push to GitHub
6. Vercel will auto-deploy

## Step 3: Verify in Google Search Console

1. Go back to Google Search Console
2. Click "Verify"
3. Wait for confirmation

## Step 4: Submit Sitemap

1. In Google Search Console, click "Sitemaps" (left menu)
2. Enter: `sitemap.xml`
3. Click "Submit"

## Step 5: Request Indexing

1. Click "URL Inspection" (top)
2. Enter: `https://aerove.vercel.app`
3. Click "Request Indexing"

---

## Quick Test

After deploying, verify these URLs work:
- https://aerove.vercel.app/sitemap.xml
- https://aerove.vercel.app/robots.txt

---

## Expected Timeline

- **Verification**: Immediate
- **Sitemap Processing**: 1-2 days
- **First Indexing**: 3-7 days
- **Search Results**: 1-4 weeks

---

## Check Indexing Status

Search on Google: `site:aerove.vercel.app`

If results appear, you're indexed! ✅
