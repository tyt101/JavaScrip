const exec = require('child_process').exec
const querystring = require('querystring')
function start(response, postData) {
  console.log("Request handler 'start' was called.");
  // function sleep(time) {
  //   var startTime = new Date().getTime()
  //   while (new Date().getTime() < startTime + time){}
  // }
  // sleep(10000)

  // exec异步，先请求下面的代码，待处理完成之后才处理其会掉
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(body)
    response.end()
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.write("Hello upload, You'v send :"+querystring.parse(postData).text)
  response.end()
}

exports.start = start
exports.upload = upload