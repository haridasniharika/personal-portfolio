# Niharika Haridas | Personal Portfolio

## 1. Open the site on your computer

1. Open the project folder in File Explorer or Finder. If you received a ZIP, extract it first.
2. Double-click `index.html`. It opens in your default browser. The address will begin with `file://`.
3. After editing a file, save it and refresh the browser.

Keep `index.html`, `styles.css`, `script.js`, and the `images` folder together. The page works offline with system fonts. Any external links you add will need an internet connection when clicked.

## 2. Push the project to a new GitHub repository

1. Install [Git](https://git-scm.com/downloads) if you need it. On GitHub, use the **+** menu and choose **New repository**.
2. Choose a name such as `personal-portfolio` and pick a visibility setting. Leave the options to add a README, .gitignore, and license unchecked. Create the repository and copy its HTTPS URL from the setup screen.
3. Open a terminal in the project folder. On Windows, open the folder in File Explorer, type `powershell` in the address bar, and press Enter. Run the commands below. Replace the example URL with the one you copied.

   ```sh
   git init
   git add index.html styles.css script.js README.md images
   git commit -m "Add personal portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/personal-portfolio.git
   git push -u origin main
   ```

4. If Git asks for your name or email, follow the configuration instructions it prints and rerun the commit command before continuing. If Git opens a browser sign-in prompt when pushing, sign in to GitHub. If `origin` already exists, run `git remote -v` and check that it points to your new repository before pushing.
5. Refresh the GitHub repository page and check that `index.html` and the other files are visible at the top level.

[GitHub's guide to pushing an existing project](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)

## 3. Deploy with Netlify

1. Sign in to Netlify and open your team's **Projects** page.
2. Choose **Add new project**, then **Import an existing project**.
3. Select **GitHub**, authorize access to the repository if prompted, and select your portfolio repository.
4. Set the production branch to `main`. Leave **Base directory** and **Build command** empty. Enter `.` in **Publish directory** to publish the repository root.
5. Choose **Deploy** and open the generated site URL when deployment finishes. Future pushes to `main` trigger a fresh deployment automatically.

After editing and previewing the site, push your updates from the same folder.

```sh
git add index.html styles.css script.js README.md images
git commit -m "Update portfolio"
git push
```

[Netlify's repository import guide](https://docs.netlify.com/manage/projects/add-new-project/) · [Netlify build settings](https://docs.netlify.com/build/configure-builds/overview/)

## 4. Replace the placeholders

Open `index.html` in a plain-text editor such as Notepad or VS Code. Search for `EDIT:` to find the customization notes.

- **Hero and About.** Replace the bracketed tagline, bio, and skills with your own words.
- **Projects.** Replace the sample titles and descriptions. Swap each `[Project link]` span for a link such as `<a href="https://example.com/project">View Project Name</a>`. Copy a whole `<article>` block for each additional project.
- **Experience.** Update the dates, roles, organizations, and highlights. Copy an entire timeline `<li>` to add a work or education entry.
- **Contact.** Replace the bracketed labels with links. For email, use `<a href="mailto:you@example.com">Email me</a>`. For LinkedIn and GitHub, use the HTTPS URLs of your profiles.
- **Portrait.** Put your photo in `images`, then replace the entire portrait artwork `<div>` with `<img src="images/portrait.jpg" alt="Portrait of Niharika Haridas">`. Use your file's exact name, including capitalization. Update or remove the placeholder caption.
- **Project images.** Put screenshots in `images` and replace the relevant `project-art` div with an image, for example `<img src="images/project-dashboard.jpg" alt="Dashboard showing monthly expenses by category">`. Make the alt text describe what your actual image shows.
- **Search and sharing.** Update the page title, description, and Open Graph title and description near the top of the HTML. After deployment, you can add optional `og:url` and `og:image` tags with full public HTTPS URLs so social platforms can find the page and the share image.
- **Colors.** Edit the variables at the top of `styles.css`. There are separate values for the light and dark palettes.
