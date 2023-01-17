const server = require('./server')
const router = require('./router')
const requestHandlers = require('./requestHandlers')

var handler = {}
handler['/'] = requestHandlers.start
handler['/start'] = requestHandlers.start
handler['/upload'] = requestHandlers.upload

server.start(router.route, handler)