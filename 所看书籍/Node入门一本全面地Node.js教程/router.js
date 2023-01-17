function route(handler, pathname, response, postData) {
  console.log("About to route a request for " + pathname);
  if (typeof handler[pathname] === 'function') {
    handler[pathname](response, postData)
  } else {
    console.log("No request handler found for " + pathname);
    return '404 NOT FIND'
  }
}

exports.route = route