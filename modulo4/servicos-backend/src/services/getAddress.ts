import axios from "axios";
import { Address } from "../types/Address";

export const getAddress= async (cep:string): Promise<Address | null> =>{
    try{
        const result= await axios.get(`https://viacep.com.br/ws/${cep}/json/` )
        console.log("resultado",result)
        const adressInfo:Address= {
            street:result.data. logradouro,
            neighborhood:result.data.bairro,
            city:result.data.localidade,
            state:result.data.uf
        }
        console.log(adressInfo)
        return adressInfo
    }catch(erro){
        console.log("Erro no serviço getAddress",erro)
        return null
    }

}