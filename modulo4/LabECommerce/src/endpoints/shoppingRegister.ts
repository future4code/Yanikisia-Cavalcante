import connection from "../service/connection";
import { Response, Request } from "express";

export const shoppingRegister = async (req: Request, res: Response) => {
    try {
        const { user_id, product_id, quantity } = req.body;
        const id = Date.now().toString()
        const product_price = await connection("labecommerce_products").where({ id: product_id })
        let total_price;
        if (!user_id || !product_id || !quantity) {
            throw new Error("Algum campo está faltando, por favor preencha corretamente user_id,product_id e quantity.")
        }
        if (typeof user_id !== "string" || typeof product_id !== "string") {
            throw new Error("Os campos user_id e product_id  strings como entrada.")
        }
        if (typeof quantity !== "number") {
            throw new Error("o campo quantity deve ser preenchido com um número.")
        }

        total_price = Number(quantity) * Number(product_price[0].price)
        await connection("labecommerce_purchases")
            .insert({ id: id, user_id: user_id, product_id: product_id, quantity: quantity, total_price: total_price })
        res.status(200).send("compra feita")

    } catch (error) {
        if (error instanceof Error) {
            switch (error.message) {
                case "Os campos user_id e product_id  strings como entrada.":
                    res.status(422);
                    break
                case "o campo quantity deve ser preenchido com um número.":
                    res.status(422)
                    break
                case "Algum campo está faltando, por favor preencha corretamente user_id,product_id e quantity.":
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