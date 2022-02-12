import connection from "../service/connection";
import { Response, Request } from "express";


export const purchaseUserRegister= async (req:Request, res:Response)=>{
  
    try{
        const user_id=req.params.user_id

        const result= await connection("labecommerce_purchases").select().where({user_id:user_id})
        if(result.length<1){
            throw new Error("User id não possui nenhum registro de compras")
        }
        res.status(200).send(result)
    }catch(error){
        if(error instanceof Error){
            res.status(400).send(error.message)
        }else{
            res.status(400).send({ message: "Erro inesperado" })
        }
    }

}