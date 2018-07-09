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
  <script type="module" src="es2017.js"></script>
  <!-- targeting ES2015 with ES5 fallback -->
  <script nomodule>
  (function(g,d,s){
  // Safari 10.1 is compatible with ES2017 but ignores nomodules
  if(!/\s+Version\/10\.1(?:\.\d+)?\s+Safari\//.test(navigator.userAgent)){
  s=d.getElementsByTagName('script');s=s[s.length-1];
  s=s.parentNode.insertBefore(d.createElement('script'),s);
  s.defer=!0;s.type='text/javascript';s.src=g.Reflect?'es2015.js':'es5.js';
  }}(this,document));
  </script>
</head>
<body></body>
</html>
```
