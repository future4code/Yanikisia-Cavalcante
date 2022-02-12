import connection from "../service/connection";
import { Response, Request } from "express";

export const createProducts = async (req: Request, res: Response) => {
    try {
        const { name, image, price } = req.body;
        const id = Date.now().toString()
        if (!name || !image || !price) {
            throw new Error("Algum campo está faltando, por favor preencha corretamente nome, image e price")
        }
        if (typeof name !== "string" || typeof image !== "string") {
            throw new Error("Os campos name e image  só aceitam strings")
        }
        if (typeof price !== "number") {
            throw new Error("o campo price deve ser preenchido com um número")
        }

        await connection("labecommerce_products")
            .insert({ id: id, name: name, price: price, image_url: image })
        res.status(200).send("produto  criado")

    } catch (error) {
        if (error instanceof Error) {
            switch (error.message) {
                case "Os campos name e image  só aceitam strings":
                    res.status(422);
                    break
                case "o campo price deve ser preenchido com um número":
                    res.status(422)
                    break
                case "Algum campo está faltando, por favor preencha corretamente nome, email e password":
                    res.status(404);
                    break

            }
            res.send(error.message)


        }
        else {
            res.send({ message: "Erro inesperado" });
        }
    }
} 
