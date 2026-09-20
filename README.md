# Atelier — Art Catalog + Inquiry Website

A static, responsive art catalog website with:
- Homepage
- Artwork collection grid
- Individual artwork pages
- About page
- Inquiry form
- Mobile responsive layout

## Customize

1. Open `app.js` and replace the sample `artworks` array with your own artwork data.
2. Replace the SVG artwork files in `images/` with your own JPG/PNG/WebP images and update the `image` values.
3. Edit artist name, biography, prices, dimensions, and text in the HTML.
4. In `contact.html`, replace `YOUR_EMAIL@example.com` with your email address.

## Inquiry form

The included form is wired for FormSubmit. On the first submission, the form service may ask you to confirm the receiving email address. If you prefer another form service, replace the form action.

## Deployment

### Cloudflare Pages
1. Create a GitHub repository and upload these files.
2. In Cloudflare Pages, create a project from the repository.
3. For a plain HTML site, use no build command and set the output directory to `/`.
4. Add your custom domain in the Pages project.

### Vercel
1. Create a GitHub repository and upload these files.
2. Import the repository into Vercel.
3. Framework preset: Other.
4. Leave build command empty and deploy.
5. Add your custom domain.

No server is required for the catalog itself.
