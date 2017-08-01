var server = require("./config-server")

var socketIO = require("socket.io")
var socket = socketIO(server)

global.socket = socket

//Levanto o servidor
server.listen(3000, "localhost", function(){
    console.log("Rodou")
})

