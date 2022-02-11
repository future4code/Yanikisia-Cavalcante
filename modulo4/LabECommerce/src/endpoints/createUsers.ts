import connection from "../service/connection";
import { Response, Request } from "express";

export const createUsers = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const id = Date.now().toString()
        if (!name || !email || !password) {
            throw new Error("Algum campo está faltando, por favor preencha corretamente nome, email e password")
        }
        if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
            throw new Error("Os campos name,password e email  só aceitam strings")
        }

        await connection("labecommerce_users")
            .insert({ id: id, name: name, email: email, password: password })
            res.status(200).send("usuário criado")

    } catch (error) {
        if (error instanceof Error) {
            switch (error.message) {
                case "Os campos name,password e email  só aceitam strings":
                    res.status(422);
                    break
                case "Algum campo está faltando, por favor preencha corretamente nome, email e password":
                    res.status(404);
                    break
                default:
                    res.send(500);
            }
            res.send(error.message )
 
     
        }
        else {
            res.send({ message: "Erro inesperado" });
        }
    }
} 