import { Request, Response } from "express"
import { getAddress } from "../services/getAddress"
import connection from "../services/connection"
import { mailTransporter } from "../services/mailTransporter"

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { complemento, numero, cep, email, senha } = req.body
        const id = Date.now().toString()
        const address = await getAddress(cep)
        let userAdd;
        if (!address) {
            throw new Error("Deu ruim no serviço getAddressInfo")
        }
      
        userAdd = {
            cep: cep, street: address.street, number: numero,
            complement: complemento, neighborhood: address.neighborhood, city: address.city,
            state: address.state, user_id: id
        }
        await connection("users")
            .insert({ id: id, email: email, password: senha })

        await connection("userAddress")
            .insert(userAdd)
            const info = await mailTransporter.sendMail({
                from: `<${process.env.NODEMAILER_USER}>`,
                to: email,
                subject: "Cadastro na plataforma APIYanikisia",
                text: `Olá, ${email}! este email está sendo enviado pela biblioteca nodemailer</p>`
            })

        res.status(200).send({userAdd, info,message:"usuário adicionado com sucesso"})

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}












