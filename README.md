# SLCFHR

[![Netlify Status](https://api.netlify.com/api/v1/badges/ff2f1835-13ac-4522-bed8-85cafc34a31e/deploy-status)](https://app.netlify.com/sites/praba-slcfhr/deploys)

Hugo website for Siri Lakxmi Center For Human Rehabilitation (Sri Lakxmi Ayurveda)

## CLI Commands

- Local Server
  ```shell
  hugo server -D --disableFastRender --ignoreCache
  ```
- Local Server ZSH Alias
  ```shell
  hugo-serve
  ```
  ```zsh
  alias hugo-serve="open -a 'Google Chrome Canary.app' --args --auto-open-devtools-for-tabs --user-data-dir='/Users/codechilli/Library/Application Support/Google/Chrome Canary/Default' http://localhost:1313/ && hugo server -D --disableFastRender --ignoreCache"
  ```
- Local Build
  ```shell
  hugo --gc --minify
  ```
- New Blog Post

  ```shell
  hugo new blog/name-of-the-post.md
  ```

- New Event

  ```shell
  hugo new event/name-of-the-event.md
  ```
