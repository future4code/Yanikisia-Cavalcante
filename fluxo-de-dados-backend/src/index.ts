import express from "express";
import { products } from "./data";
import { AddressInfo } from "net";
import { error } from "console";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

app.get("/test", (req, res) => {
    res.status(200).send("a API  esta funcionando");
});;

app.post("/product", (req, res) => {
    try {
        const { name, price } = req.body;
        if (!name || !price) {
            throw new Error("o campo name ou price estão faltando");
        };
        if (typeof name !== "string") {
            throw new Error("o campo name deve ser uma string");
        };

        if (typeof price !== "number" && price <= 0) {
            throw new Error("o campo price deve ser um numero maior que 0");
        };

        products.push({
            id: String(products.length + 1),
            name,
            price
        });
        res.status(200).send(products);
    } catch (error: any) {
        switch (error.message) {
            case "o campo name deve ser uma string":
                res.status(422);
                break
            case "o campo price deve ser um numero maior que 0":
                res.status(422);
                break
            case "o campo name ou price estão faltando":
                res.status(401);
                break
            default:
                res.status(500);
        }

        res.send(error.message);
    }
});;

app.get("/products", (req, res) => {

    res.status(200).send(products);
});;

app.put("/product/:id", (req, res) => {
    try {
        const id = req.params.id;
        const { price } = req.body;
        if (!price) {
            throw new Error("o campo price esta faltando");
        }
        if (typeof price !== "number" && price <= 0) {
            throw new Error("o campo price deve ser um numero maior que 0");
        }
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products[i].price = price;
            } else {
                throw new Error("o produto a ser editado não foi encontrado");

            }
        }
        res.status(200).send(products);
    } catch (error: any) {
        switch (error.message) {
            case "o campo price deve ser um numero maior que 0":
                res.status(422);
                break
            case "o campo price estão faltando":
                res.status(401);
                break
            case "o produto a ser editado não foi encontrado":
                res.status(404);
                break
            default:
                res.status(500);
        }
        res.send(error.message);
    }
});;

app.delete("/product/:id", (req, res) => {
    try {
        const id = req.params.id;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products.splice(products.indexOf(products[i]), 1)
            } else {
                throw new Error("o produto a ser editado não foi encontrado");

            }
        }

        res.status(200).send(products);
    } catch (error: any) {
        switch (error.message) {
            case "o produto a ser editado não foi encontrado":
                res.status(404);
                break
            default:
                res.status(500);
        }
        res.send(error.message);
    }

});;


