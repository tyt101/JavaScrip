const http = require('http')
const url = require('url')
function start(route, handler) {
  function onRequest(request, response) {
    let postData = ""
    const pathname = url.parse(request.url).pathname

    request.setEncoding('utf8')
    request.addListener('data', (chunk) => {
      postData += chunk
      console.log(`received data chunk: ${chunk}, postDate: ${postData}`)
    })
    console.log("Request for " + pathname + " received.");
    request.addListener('end', () => {
      route(handler, pathname, response, postData)
    })
  }
  http.createServer(onRequest).listen(8888)

  console.log("server has started")
}
exports.start = start




