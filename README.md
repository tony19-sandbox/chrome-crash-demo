> Demonstrates a Chrome crash when using `vue`, `v-gallery`, `vue-filepond`, and `vue-router` together

 * Not sure exactly which library is causing the crash, but it occurs immediately after interacting with `vue-gallery`.

 * I've not been able to reproduce the bug in Canary 81 or Firefox 74.

 * Also reproduces in Incognito Mode without any extensions enabled

![screencast](screencast_lowres.gif)

## Steps to reproduce

1. Install project:

```shell
npm install
```

2. Start development web server:

```shell
npm run serve
```

3. Open http://localhost:8080/demo in Chrome 80

4. Click image to open lightbox (via `v-gallery`)

5. Close lightbox.

6. Click image again. Observe Chrome tab crashes (**Aw, Snap!**)


## Environment

 * macOS Catalina 10.15.3
 * Chrome Version 80.0.3987.149 (Official Build) (64-bit)
 * MacBook Pro 15", 2016
