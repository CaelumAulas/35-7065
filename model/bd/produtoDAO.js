/*========================*/
/*== Função construtora ==*/
/*========================*/
function ProdutoDAO(conexao){
    return {
        pegaLivros: function pegaLivros(callback){
            conexao.query("SELECT * FROM livros", callback)
        }
        ,salvaLivro: function(livro, cb){
            conexao.query("INSERT INTO livros SET ?", livro, cb)
        }
    }
}

module.exports = ProdutoDAO



// /*======================================*/
// /*== Função construtora com prototype ==*/
// /*======================================*/

// function ProdutoDAO(conexao){
//     this.conexao = conexao
// }

// criaProdutoDAO.prototype.pegaLivros = function pegaLivros(callback){
//     this.conexao.query("SELECT * FROM livros", callback)
// }

// module.exports = ProdutoDAO


// /*============*/
// /*== Classe ==*/
// /*============*/

// class ProdutoDAO {
//     constructor(conexao){
//         this.conexao = conexao
//     }

//     pegaLivros(callback){
//         this.conexao.query("SELECT * FROM livros", callback)
//     }

// }

// module.exports = ProdutoDAO
