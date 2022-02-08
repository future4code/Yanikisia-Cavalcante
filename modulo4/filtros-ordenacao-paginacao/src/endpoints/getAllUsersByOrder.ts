import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

//Exercicio 2
//Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou
// tipo de user. A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, 
//a ordenação deve ser por email.
export const getAllUsersByOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        let order = req.query.order as string;
        let sort = req.query.sort as string;

        if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
            order = "ASC";
        }

        if (sort !== "type" && sort !== "name") {
            sort = "email";
        }
        const result = await connection("aula48_exercicio")
            .orderBy(sort, order)

        if (!result.length) {
            res.statusCode = 404
            throw new Error("No order found")
        }
        const users = result.map(toUser)
        res.status(200).send(users)

    } catch (error: any) {
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
