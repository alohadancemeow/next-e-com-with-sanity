# Next.js E-commerce with Sanity #103

This repository showcases a basic functional e-commerce application built using the latest versions of Next.js, TypeScript, and Sanity CMS.
For learning CMS.

**🎉 Key Features:**

- **Tech Stack:** Next.js (latest), TypeScript + Sanity
- **Inspiration:** [Link to original repository](https://github.com/ski043/nextjs-commerce-tutorial) (adapted for this implementation) 🙏
- **CMS:** [Sanity.io](https://www.sanity.io/)
- **Purpose:** For learning CMS

**👋 Getting Started:**

1. Clone this repository.
2. Install dependencies (`npm install` or `yarn install`).
3. Set up the appropriate environment variables in the `.env` file (database credentials, API keys, etc.).

```bash
NEXT_PUBLIC_STRIPE_KEY=
NEXT_PUBLIC_SANITY_PRODJECT_ID=
STRIPE_API_SECRET_KEY=
BASE_URL=
```

**🚀 Deploy on Netlify**

Create a file called `netlify.toml` in the root of your project. Copy and paste the code snippet below into the netlify.toml file.

```bash
[build]
  command = "npm run build && rm sanity-cms"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Install the Netlify dependency package

```bash
npm i @netlify/plugin-nextjs
```


**🖼️ Screenshot:**

![Image of shoe store home page](public/Screenshot.png)

**👋 Contributions Welcome!**

Encouraging constructive feedback and pull requests to enhance this project.

**⚠️ Disclaimer:**

This repository is currently under development. I will continuously improve and document it. Stay tuned for updates!


**🎉 Live site:** https://next-e-com-with-sanity.netlify.app