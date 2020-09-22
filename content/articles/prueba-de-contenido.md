---
title: Tengo una idea, contrata a un científico, un analista y un estratega de datos. 
description: Learning how to use @nuxt/content to create a blog
img: https://storage.verduzco.dev/dotme/blog/contrata-un-cientifico-un-analista-un-estratega.png
alt: Tengo una idea, contrata a un científico, un analista y un estratega de datos. 
---

# Hola desde el gestor de contenidos
Este es un párrafo normal para ver que pedo.

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```
```vue{1,3-5}[_slug.vue]
<pre> {{ article }} </pre>
```