# 🚀 SLCFHR

<img src="_branding/logo-out/png/logo-transparent-primary-600x150.png" alt="SLCFHR Logo" width="300">

A Jamstack website for Siri Lakxmi Center For Human Rehabilitation (**SLCFHR**).

<div style="border: 1px solid #dddddd; padding: 10px; border-radius: 5px;">

- **SSG:** [Hugo](https://gohugo.io/)
- **CMS:** [Decap CMS](https://decapcms.org/) (Formerly "Netlify CMS")
- **Deployed on:** [Netlify](https://www.netlify.com/)

</div>

## 👨‍💻 Development Environment

### Local Server

Run the following command to start the local server:

```shell
open -a 'Google Chrome Canary.app' http://localhost:1313/ && hugo server -D --disableFastRender --ignoreCache
```

Alternatively, you can use the following ZSH alias:

```shell
hugo-serve
```

### Local Build

To perform a local build, use the following command:

```shell
hugo --gc --minify
```

> This is not required as Netlify will handle when publishing the site. But useful when inspecting the content inside the `public` folder.

## 📚 Content Management

### Creating New Content with hugo commands

To create a new blog post, event, or notice, use the respective commands:

```shell
hugo new blog/name-of-the-post.md
```

```shell
hugo new event/name-of-the-event.md
```

```shell
hugo new notice/name-of-the-notice.md
```

## 🧰 Decap CMS

The Decap CMS allows users to add, edit, and delete blogs, events, and notices without granting access to the repository. User accounts are managed by [Netlify Identity](https://docs.netlify.com/security/secure-access-to-sites/identity/).

- [Decap CMS Documentation](https://decapcms.org/docs/hugo/)

### Usage Steps:

1. Invite a user using Netlify Identity (Limit: 5 users).
1. Login to `https://slcfhr.org/admin` using the provided credentials.
1. After making changes and publishing, Decap CMS will automatically generate a Pull Request and delete the branch - [Example](https://github.com/prabapro/slcfhr-hugo-website/pull/2).
1. Run `git pull` on the local repository to sync changes.

### Running Decap Server Locally

To run locally with Decap Server, use the following command:

```shell
npx decap-server
```

1. This command will run the local server on port `8081` without opening a browser window.
1. Now run the `hugo-serve` alias.
1. Open `http://localhost:1313/admin` (no password required).
1. Changes will be made to the local repository.

## ![Netlify Logo](https://avatars.githubusercontent.com/in/13473?s=24) Netlify Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/ff2f1835-13ac-4522-bed8-85cafc34a31e/deploy-status)](https://app.netlify.com/sites/praba-slcfhr/deploys)

Netlify automatically monitors the GitHub repository for changes in the `main` branch. Upon detection of changes, Netlify initiates the build process and publishes updates instantly.

#### ⚠️ Important

Keep the `netlify.toml` file updated if there are changes to the local `hugo version`. Ensure that the version specified in `netlify.toml` matches the one in your local environment before committing changes to the remote repository.

**Example**: when `hugo version` returns<br>
<code>hugo v0.121.2-6d5b44305eaa9d0a157946492a6f319da38de154+extended darwin/arm64 BuildDate=2024-01-05T12:21:15Z VendorInfo=brew</code>

```toml
[build.environment]
  HUGO_VERSION = "0.121.2"
```
