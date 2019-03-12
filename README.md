# ubl
JavaScript Universal Bundle Loader, as explained in [this Medium post](https://medium.com/@WebReflection/a-universal-bundle-loader-6d7f3e628f93).

**[Live demo](https://webreflection.github.io/ubl/)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>JS Universal Bundle Loader</title>
  <!-- targeting native async/await as ES2017 -->
  <script type="module">window.ESM=!0;import'./es2017.js';</script>
  <!-- targeting ES2015 with ES5 fallback -->
  <script nomodule defer src="ubl.js"></script>
</head>
<body></body>
</html>
```
