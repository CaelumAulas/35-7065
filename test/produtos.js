var server = require("../config-server")
var supertest = require("supertest")
var serverTest = supertest(server)

describe("Produtos", function(){
    it("não aceita preço inválido", function(next){
        serverTest
            .post("/produtos")
            .send({
                titulo: "Oi"
                ,preco: "preco doido"
                ,descricao: "sdkashdakus"
            })
            .set("Content-Type", "application/json")
            .expect(400, next)
    })
})