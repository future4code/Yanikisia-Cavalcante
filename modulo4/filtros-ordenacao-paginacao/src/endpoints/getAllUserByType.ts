import { Request, Response } from "express"
import { connection } from "../data/connection"
import {user} from "../types"

//exercicio 1
////b) Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por tipo de user.
// O tipo de user deve ser passado por path params.

export const getAllUsersByType = async(req: Request,res: Response): Promise<void> =>{
    try {
        const type=req.params.type
        let typeResult 
        if(type=== "cx" || type === "Cx"){
            typeResult=type.toLocaleUpperCase()
        }else{
           
            typeResult  = type[0].toUpperCase() + type.slice(1).toLowerCase()
        }
      
       const result = await connection("aula48_exercicio")
     .whereLike('type',`%${typeResult}%`)

 
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