var mysql = require("mysql")

module.exports = {
    getConnection: function(){
        // var porta = process.env.MYSQL_DB_PORT

        var config = Object.assign(
            require("../../config/config") 
            ,process.env
        )

        return mysql.createPool({
                connectionLimit: 10
                ,hostname: config.MYSQL_DB_ADDRESS
                ,port: config.MYSQL_DB_PORT
                ,user: config.MYSQL_DB_USER
                ,password: config.MYSQL_DB_PASSSWORD
                ,database: config.MYSQL_DB_NAME
        })
    }
}