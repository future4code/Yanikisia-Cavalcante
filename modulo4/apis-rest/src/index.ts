import express from "express";

import { AddressInfo } from "net";

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

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}
let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]
//exercicio 1
//a. Qual método HTTP você deve utilizar para isso?
//R= metodo get
//b. Como você indicaria a entidade que está sendo manipulada?
//R=/users
//exercicio2
//a. Como você passou os parâmetros de type para a requisição? Por quê?
//R= passei como uma query, porque assim tenho a possibilidade de reutilizar o endpoint
//b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
//R= sim, usando um enum useType com os tipos já pré definidos
//exercicio 3
//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//R= o path "/user"
//b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
//R=feito
// exercicio 4
//a. Mude o método do endpoint para PUT. O que mudou?
//R= deu erro e quebrou o codigo
//b. Você considera o método PUT apropriado para esta transação? Por quê?
//R= porque normalmento o metodo put é usado para fazer ediçoes e não criação

app.get("/users", (req, res) => {
    try {
        const type = req.query.type;
        const name = req.query.name;
        if (type) {
            if (type !== UserType.ADMIN && type !== UserType.NORMAL) {
                throw new Error("por favor preencha o campo type com um tipo válido")
            }
            const result = users.filter((types) => {
                return types.type === type
            })
            res.status(200).send(result);
        }
        if (name) {
            const result = users.filter((user) => {
                return user.name === name
            })
            if (result.length < 1) {
                throw new Error("usuário não encontrado")
            } else {
                res.status(200).send(result)
            }
        }
        res.status(200).send(users);
    } catch (erro: any) {
        switch (erro.message) {
            case "por favor preencha o campo type com um tipo válido":
                res.status(404);
                break
            case "usuário não encontrado":
                res.status(404);
                break
            default:
                res.send(500);
        }
        res.send(erro.message)
    }
})

app.put("/users", (req, res) => {
    try {
        const { name, email, type, age } = req.body
        if (!name || !email || !type || !age) {
            throw new Error("Algum campo essencial está faltando")
        }
        if (typeof name !== "string" || typeof email !== "string") {
            throw new Error("o campo name  e email deve receber um texto devidamente em volta de ' ' ")
        }
        // if (typeof name !== "string") {
        //     throw new Error("o campo name deve ser uma string");
        // };
        if (type !== UserType.ADMIN && type !== UserType.NORMAL) {
            throw new Error("por favor preencha o campo type com um tipo válido")
        }
        if (typeof age !== "number") {
            throw new Error("o campo idade deveria receber um número")
        }

        users.push({ id: users.length + 1, name, email, type, age })
        res.status(200).send(users)
    } catch (erro: any) {
        switch (erro.message) {
            case "Algum campo essencial está faltando":
                res.status(404);
                break
            case "por favor preencha o campo type com um tipo válido":
                res.status(422);
                break
            case "o campo idade deveria receber um número":
                res.status(422);
                break
            case "o campo name  e email deve receber um texto devidamente em volta de ' ' ":
                res.status(422);
                break
            default:
                res.send(500);
        }
        res.send(erro.message)
    }

})