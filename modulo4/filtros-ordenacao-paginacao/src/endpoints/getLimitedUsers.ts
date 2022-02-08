import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"
//Exercicio 3
//Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa 
//passar a página que deseja ver. O número da página deve ser passado por query params.
export const getLimitedUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        let page=Number(req.query.page);
        if(page < 1 || isNaN(page)){
            page = 1;
        }
       let size = 5;
       let offset = size * (page-1);
       const result = await connection("aula48_exercicio").limit(size)
       .offset(offset)
       if(!result.length){
          res.statusCode = 404
          throw new Error("No recipes found")
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
