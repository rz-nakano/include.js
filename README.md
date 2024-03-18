# include.js
Client Side Includes for Static Website Hosting

## Usage
If you specify the elements required for this page with an `id` attribute starting with `include-`, they will be inserted from `include-template`.

```html
<html>
  <head>
    <link id="include-template" href="/sample/template.html" rel="preload" as="fetch" crossorigin="">
    <script defer src="/include.js"></script>
  </head>
  <body>
    <header id="include-header"></header>
    <div>contents of this page.</div>
    <footer id="include-footer"></footer>
  </body>
</html
```

### Event

Emit an `included` event when processing is complete.

```JavaScript
document.addEventListener('included', (event) => {
  for (const id in event.detail) {
    console.log(id, event.detail[id]);
  }
});
```
