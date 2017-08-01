//configuracao do servidor
console.log("Configurando O servidor")
var express = require("express")
var server = express()
var bodyParser = require("body-parser")

var servidorzao = require('http').Server(server)

server.set("view engine", "ejs")

server.use(express.static("./public"))

server.use(bodyParser.urlencoded())

server.use(bodyParser.json())

var expressValidator = require("express-validator")
server.use(expressValidator())

require("./routes/produtos")(server)
require("./routes/promocoes")(server)

server.use(function(req, resp){
    resp.send("Não existe")
})

server.use(function(error, req, resp, next){
    resp.format({
                html: function(){
                    resp
                    .status(500)
                    .render("erros/500", {
                        erro: error
                    })
                }
                ,json: function(){
                    resp.status(500).send(error)
                }
    })
})

module.exports = servidorzao
