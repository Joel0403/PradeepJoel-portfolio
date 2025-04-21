# Welcome to your Lovable project

## Project info

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy to GitHub Pages

This project is configured to be deployed to GitHub Pages. You can deploy it in two ways:

#### Option 1: Using GitHub Actions (Automated)

1. Push your code to the main branch of your GitHub repository.
2. GitHub Actions will automatically build and deploy your site.
3. Your site will be available at `https://[your-github-username].github.io/kanagamwelfaresportsassociation/`

#### Option 2: Manual Deployment

1. Install the gh-pages package if you haven't already:
   ```sh
   npm install
   ```

2. Deploy your site:
   ```sh
   npm run deploy
   ```

3. Your site will be available at `https://[your-github-username].github.io/kanagamwelfaresportsassociation/`

### Lovable Deployment

Alternatively, you can deploy via Lovable:
- Simply open [Lovable](https://lovable.dev/projects/fbf4b279-1022-40d3-a9bc-4da4b3e2b087) and click on Share -> Publish.

## Can I connect a custom domain to my project?

### GitHub Pages Custom Domain

1. Go to your repository settings on GitHub.
2. Scroll down to the "GitHub Pages" section.
3. Under "Custom domain", enter your domain name and save.
4. Update your DNS settings with your domain provider to point to GitHub Pages.

### Lovable Custom Domain

To connect a domain to your Lovable project, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
