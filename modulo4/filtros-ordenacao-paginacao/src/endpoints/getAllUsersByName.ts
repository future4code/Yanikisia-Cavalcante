import { Request, Response } from "express"
import { connection } from "../data/connection"
import {user} from "../types"
 //exercicio 1
 //R= a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por nome.
 // Este nome deve ser enviado por query params.
 export const getAllUsersByName = async(req: Request,res: Response): Promise<void> =>{
    try {
        const name=req.query.name
       const result = await connection("aula48_exercicio")
       .whereLike('name',`%${name}%`)

 
       if(!result.length){
          res.statusCode = 404
          throw new Error("No user found")
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