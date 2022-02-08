import { Request, Response } from "express"
import { connection } from "../data/connection"
import {user} from "../types"

 async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }
 //exercicio 4
 //Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação). 
 //Atribua valores padrão para filtragem, ordenação e paginação para que:
//- Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
//- Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;**
//- Caso o usuário não forneça número de página, deve começar na página 1
 
 export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        const name=req.query.name;
        const type=req.query.type;
        let order = req.query.order as string;
        let sort = req.query.sort as string;
        let page=Number(req.query.page);

        let result:any;

        if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
            order = "DESC";
        }

        if (sort !== "type" && sort !== "name") {
            sort = "name";
        }
        if(page < 1 || isNaN(page)){
            page = 1;
        }
        let size = 5;
        let offset = size * (page-1);
        console.log("page",page, "ofset", offset)
        if(name){
            result = await connection("aula48_exercicio")
            .whereLike('name',`%${name}%`).orderBy(sort, order).limit(size)
            .offset(offset)
        }
        if(type){
            result = await connection("aula48_exercicio")
            .whereLike('type',`%${type}%`).orderBy(sort, order).limit(size)
            .offset(offset)
        }
        if(!name && !type){
            result= await connection("aula48_exercicio").orderBy(sort, order).limit(size)
            .offset(offset)
            
        }


       if(!result.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
       const users= result.map(toUser)
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
 const toUser = (input: any): user => {
    return {
       id: input.id,
       name: input.name,
       email: input.email,
       type: input.type,
    }
 }

