# Personal Portfolio - Eka Saputra

This is the source code for my personal portfolio website, built with modern web technologies. This site showcases my projects, skills, and provides a way for visitors to contact me.

## ✨ Features

- **Responsive Design:** Optimal viewing experience across all devices, from desktops to mobiles.
- **Modern Animations:** Smooth animation effects to enhance user experience.
- **Intuitive Navigation:** Includes bottom navigation for ease of use on mobile devices.
- **Dynamic Pages:** Portfolio page with category filters and a dedicated services page.
- **Functional Contact Form:** A contact form integrated with Genkit to process submissions.
- **SEO-Friendly:** Built with `sitemap.xml` and `robots.txt` for better search engine visibility.
- **Theme Customization:** Consistent light and dark color schemes using CSS variables.
- **Multi-language Support:** Supports both English and Indonesian.

## 🚀 Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **AI Functionality:** [Firebase Genkit](https://firebase.google.com/docs/genkit)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Internationalization:** [i18next](https://www.i18next.com/)

## 🏁 Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or newer) and npm installed.

### Installation

1.  Clone this repository:
    ```bash
    git clone https://github.com/IshikawaUta/my-portfolio.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd my-portfolio
    ```
3.  Install all dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the Next.js development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

## 📜 Available Scripts

- `npm run dev`: Starts the Next.js development server with Turbopack.
- `npm run build`: Builds the application for production.
- `npm run start`: Runs the production-built application.
- `npm run lint`: Runs ESLint to check for code issues.

## 🚀 Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Follow these steps to deploy:

1.  **Push Code to a Git Repository:**
    Ensure your project's code is pushed to a Git repository (e.g., GitHub, GitLab, or Bitbucket).

2.  **Import Project in Vercel:**
    - Go to [Vercel](https://vercel.com) and sign up or log in with your Git account.
    - Click the "**Add New...**" -> "**Project**" button.
    - Select your project's Git repository and click "**Import**".

3.  **Configure Project:**
    - Vercel will automatically detect that this is a Next.js project and set up the default build configurations. You usually don't need to change anything.
    - If you have environment variables in your `.env.local` file, make sure to add them in the "**Environment Variables**" section of the project settings on Vercel.

4.  **Deploy:**
    - Click the "**Deploy**" button.
    - Vercel will start the build and deployment process. Once completed, you will get a public URL for your site.

Every time you `push` to your main branch, Vercel will automatically redeploy the changes.
