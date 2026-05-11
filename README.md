# Monetary Policy Meeting Database website

This is a static GitHub Pages website template for the Monetary Policy Meeting (MPM) Database by Serra Pelin and Alfredo Mendoza-Fernández.

## Files

- `index.html`: landing page
- `papers.html`: research showcase with filter buttons
- `methodology.html`: data-construction documentation
- `codebook.html`: starter codebook and sample CSV link
- `access.html`: access-request, citation, license, and contact page
- `assets/css/styles.css`: site styling
- `assets/js/main.js`: mobile menu and paper filter
- `data/sample_mpm_metadata.csv`: dummy sample metadata for testing links
- `.nojekyll`: tells GitHub Pages to serve the site as plain static HTML

## What to edit before launch

Search the files for `TBD`, `YEAR`, `REPLACE_WITH`, and `coming soon`.
Replace these with:

1. Database statistics: number of meetings, central banks, coverage period, version.
2. Official access form URL.
3. GitHub repository or organization URL.
4. Alfredo's preferred contact email.
5. Final dataset citation and license.
6. Paper PDF, SSRN, and replication links.

## Test locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a new GitHub repository, for example `mpm-database`.
2. Upload every file and folder in this template to the repository root.
3. Commit the files to the `main` branch.
4. Go to repository **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/root`.
7. Save.
8. Your test site will usually be available at:

```text
https://<your-github-username>.github.io/mpm-database/
```

If you instead create a repository named exactly `<your-github-username>.github.io`, the site will be available at:

```text
https://<your-github-username>.github.io/
```

## License placeholder

This template ships with a placeholder academic-use license file. Replace it with the final license selected by the authors before public release.
