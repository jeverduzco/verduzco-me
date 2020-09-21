# Hola desde el gestor de contenidos

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