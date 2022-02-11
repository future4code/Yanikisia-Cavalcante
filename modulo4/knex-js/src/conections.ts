import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

 const connection = knex({
	client: "mysql",
	connection: {
    host: "35.226.146.116",
    port: 3306,
    user: "Yanikisia-kathlyn-Barbosa",
    password: "uRReEgUqvvWfdyHfI7y1",
    database: "carver-Yanikisia-kathlyn-Barbosa-Cavalcante",
    multipleStatements: true
  }
});

export default connection