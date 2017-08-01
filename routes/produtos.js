module.exports = function(server){

    //Rotas do servidor
    var connectionFactory = require("../model/bd/connectionFactory")
    var criaProdutoDAO = require("../model/bd/produtoDAO")


    server.get("/produtos/lista", function(req, resp, next){
        var conexao = connectionFactory.getConnection()
        var produtoDAO = new criaProdutoDAO(conexao)
        
        produtoDAO.pegaLivros(function(error, lista){
            if(!error){
                resp.format({
                    html: function(){
                        resp.render("produtos/lista", {
                            livros: lista
                            ,msgErro: ""
                        })
                    }
                    ,json: function(){
                        resp.send(lista)
                    }
                })
            } else {
                next(error)
            }
        })
    })

    server.get("/produtos/form", function(req, resp){
        resp.render("produtos/form", {
            validationErrors: []
        })
    })

    server.post("/produtos", async function(req, resp, next){
        var conexao = connectionFactory.getConnection()
        var produtoDAO = new criaProdutoDAO(conexao)
        

        req.assert("preco", "Número inválido").isFloat()
        var listaDeErros = (await req.getValidationResult()).array()

        
        if(!listaDeErros.length){
            var livro = req.body    
            produtoDAO.salvaLivro(livro, function(erro, resultado){
                if(!erro){
                    resp.redirect("/produtos/lista")
                } else {
                    next(erro)
                }
            })
        } else {
            resp.status(400).render("produtos/form", {
                validationErrors: listaDeErros
            })
        }

    })
        
}