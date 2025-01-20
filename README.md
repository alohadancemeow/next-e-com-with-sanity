# Next.js E-commerce with Sanity #103

![Image of shoe store home page](public/Screenshot.png)

This repository showcases a functional e-commerce application built using the latest versions of Next.js, TypeScript, and Sanity CMS. The project is designed for those looking to learn and implement a CMS.

## **🎉 Key Features:**

- **Tech Stack:** Next.js (latest), TypeScript + Sanity CMS
- **Inspiration:** [Link to original repository](https://github.com/ski043/nextjs-commerce-tutorial) (adapted for this implementation) 🙏
- **CMS:** [Sanity.io](https://www.sanity.io/)
- **Purpose:** Learn and implement CMS

## **👋 Getting Started:**

1. Clone this repository.
2. Install dependencies (`npm install` or `yarn install`).
3. Set up the appropriate environment variables in the `.env` file (database credentials, API keys, etc.).

```bash
NEXT_PUBLIC_STRIPE_KEY=
NEXT_PUBLIC_SANITY_PRODJECT_ID=
STRIPE_API_SECRET_KEY=
BASE_URL=
```

## **🚀 Deploy on Netlify**

Create a file called `netlify.toml` in the root of your project and paste the following configuration:

```bash
[build]
  command = "rm -rf sanity-cms && npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Install the Netlify dependency package

```bash
npm i @netlify/plugin-nextjs
```


## **👋 Contributions Welcome!**

Encouraging constructive feedback and pull requests to enhance this project.

## **⚠️ Disclaimer:**

This repository is currently under development. I will continuously improve and document it. Stay tuned for updates!


Feel free to tweak further based on your preference!

## 📜 **Commands:**

| Command                | Description                                      |
|------------------------|--------------------------------------------------|
| `npm run dev`          | Starts the development server.                   |
| `npm run build`        | Creates an optimized production build.           |
| `npm start`            | Runs the application in production mode.         |
| `npm run lint`         | Lints the project for coding style and errors.   |
| `npm run sanity:start` | Starts the Sanity Studio for content management. |
