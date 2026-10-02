# YOUR NEXT CHAPTER

A responsive, static travel-planning workspace built with plain HTML, CSS, and vanilla JavaScript. It can be published directly from the root of a GitHub Pages repository. No build tools, server, API key, or backend are required.

## Try it locally
Open `index.html` in a modern browser. Some browser privacy settings may limit local storage for local files; GitHub Pages is the recommended way to use it persistently.

## Publish on GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `data.js`, and `README.md` to the repository's **root**.
3. Open **Settings**.
4. Select **Pages**.
5. Under build and deployment, choose **Deploy from a branch** and select `main`.
6. Choose `/(root)`.
7. Click **Save**.
8. Open the Pages URL shown by GitHub.

**Important: `index.html` must be in the outermost repository root**, not inside another folder.

## Data and sharing
- Data is saved automatically to `localStorage` in the current browser on the current device.
- This is not real-time multi-user sync. Use JSON export/import to transfer a trip between people or devices.
- Exported JSON creates a separate backup. Importing a backup creates a new trip rather than overwriting the current trip.
- Viewer mode is read-only in this browser.
- PDF export uses the browser's print dialog; choose “Save as PDF”.
- Cover images can be set using a public image URL. A browser-selected image can be previewed for the current session; for portable backups, use a public URL.

## Files
- `index.html` — page structure
- `style.css` — responsive editorial design and print styles
- `script.js` — app logic, local storage, forms, search, expense calculations, backup, and print view
- `data.js` — editable demo seed data
