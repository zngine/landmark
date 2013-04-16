var io = require('socket.io').listen( _landmark.env.ports.listen )
  , scli = require('supercli')
  ;

exports.init = function InitializeLandmark() {

  scli("Master server being built...")
  io.sockets.on('connection', function(socket) {
    scli.success("Socket instantiated!", socket)
    socket.on('setName', function(serverName) {
      socket.set('serverName', serverName, function() {
        socket.emit('ready')
      })
    })

    socket.on('update', function(stats) {
      scli("Socket update!", stats)
    })

    socket.on('error', function(error) {
      scli.error("Socket error!", error)
    })
  })

}