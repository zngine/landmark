var scli = require('supercli');

scli("laksfhjalksfjhaslf")

exports.init = function InitializeLandmark() {

  var io = require('socket.io-client')

  scli("Config", _landmark)

  var socket = io.connect( _landmark.servers.master )

  socket.on('connect', function() {
    scli("Slave server being built...", socket)
  })

  socket.on('initConfig', function() {
    socket.emit('setConfig', {
      name : _landmark.env.name,
      hostname : _landmark.env.hostname,
      type : _landmark.env.type
    })
  })

  socket.on('ready', function() {
    scli.success("The Landmark has been erected!")
  })

  socket.on('build', function() {
    scli("Build message received!")
  })

}