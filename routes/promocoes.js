module.exports = function(server){
    server.get("/", function(req, resp){
        resp.render("home/home")
    })
    server.post("/promocoes", function(req, resp){
        console.log(global.socket)
        var socket = global.socket
        socket.emit("novaPromocao", req.body)
    })
}