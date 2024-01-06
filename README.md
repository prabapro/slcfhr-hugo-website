# SLCFHR

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
