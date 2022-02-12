import connection from "../service/connection";
import { Request,Response } from "express";

export const getAllProducts= async (req:Request, res:Response)=>{
  
    try{
        const result= await connection("labecommerce_products")
        if(result.length<1){
            throw new Error("Por favor cadastre algum produto, banco de dados está vazio")
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