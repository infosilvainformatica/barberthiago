// importa a classe Sequelize
import { Sequelize } from "sequelize";

// Cria uma nova instância de conexão com o banco de dados
const db = new Sequelize(
    "barber_nm3s", // nome do banco 
    "barber_nm3s_user", // Usuário administrador do banco
    "1lZNt5DAZderCuVwcc1D4RmcESKeSBde",     // senha do banco
    {
        host: "dpg-d4f4mmchg0os738nnl9g-a.oregon-postgres.render.com", // onde o banco está
        dialect: "postgres", // o drive do tipo do banco
        port: "5432",
        dialectOptions: {
            ssl: { require: true, rejectUnauthorized: false}
        }
    }
);

db.authenticate().then((function(){
    console.log("Conectado ao banco com sucesso")
})).catch(function(erro){
    console.log("Erro ao conectar ao banco de dados" + erro)
});

export default db;

  


