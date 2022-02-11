import express, { Express, request, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./conections"

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


// // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001") )
// })()
// // Ou então podemos chamá-la dentro de um endpoint

// bata no http://localhost:3003/users/001 e veja o que acontece no terminal
// exercico 1
//a) Explique como é a resposta que temos quando usamos o raw. 
//R=recebemos um objeto com as informaçoes do id passado
//b) Faça uma função que busque um ator pelo nome;


const getActorByName = async (name: any): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

  return result[0][0]
}
app.get("/actors", async (req: Request, res: Response) => {
  try {
    const name = req.query.name
    let result;
    if (typeof name !== "undefined") {
      result = await getActorByName(name)
    }
    res.status(200).send(result)
  } catch (erro: any) {
    console.log(erro.message)
    res.status(500).send("Unexpected error")
  }
})
//c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. 
//Para atrizes, female e para atores male
const getActorByGender = async (gender: any): Promise<any> => {
  const result = await connection("Actor").count().where({ gender: gender });
  return result[0];
}


app.get("/actors", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender;
    let result;
    if (typeof gender !== "undefined") {
      result = await getActorByGender(gender)
    }

    res.status(200).send(result);

  } catch (erro: any) {
    res.send(erro.message)
  }
})
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

  return result[0][0]
}
app.get("/actors/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.send(await getActorById(id))
  } catch (erro: any) {
    console.log(erro.message)
    res.status(500).send("Unexpected error")
  }
})
// exercicio2
const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );

    res.status(200).send();
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});
//a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
// const updateActorById = async (salary: number, id:string): Promise<any> =>{
//   console.log(typeof salary,id)
//   const result = await connection("Actor").update({salary:salary}).where({id: id})
//  return result
// }

const updateActor = async (id: string, salary: number): Promise<any> => {
 await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
   
};
app.put("/actors/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const salary:any= req.query.salary
    if(typeof salary !== "undefined"){
     const newSalary=Number(salary)
       await updateActor(id,newSalary)
    }
    
    res.status(200).send(await getActorById(id))

  } catch (erro: any) {
    res.status(500).send(erro.sqlMessage || erro.message)
  }
})
const deleteActorById= async (id:string): Promise<any> =>{
  await connection("Actor").delete().where("id", id);
}

app.delete("/actor/:id", async (req:Request, res:Response)=>{
  try{
    const id=req.params.id;
    deleteActorById(id)
    res.status(200).send("Ator excluido")

  }catch(erro:any){
    res.status(400).send({
      message: erro.message||erro.sqlMessage,
    });
  }
})