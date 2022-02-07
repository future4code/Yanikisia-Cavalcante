import axios from "axios";
import express from "express";
import { baseURL } from "./baseURL";
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

//Exercicio1
//a. Qual endpoint você deve utilizar para isso?
//R= get
//b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"
//R= async(): Promise<any>=>{}
//c. Implemente uma função nomeada que faça o que foi pedido
// async function getAllSubcribers (): Promise<any[]> {
//   const response= await axios.get(`${baseURL}/subscribers`)
//   return response.data
// }
//Exercicio 2 
//R=a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
///R= com a nomeada o async vai pra frente da função, depois a palavra function e o nome da função,
//na arrow function tem a declaração da funcao, o simbolo de igual  a palavra async depois a declaração do retorno, no caso a promise
// e a aroww function depois da promise.
//b. Implemente a função solicitada, usando arrow function
//
type user = {
	id: string;
	name: string;
	email: string;
}
//Exercicio 3
//a. Se apenas trocarmos o retorno da função para: Promise<user[]> , teremos algum erro de tipagem?
// nao, sem erro
//b. É boa prática fazermos um mapeamento do resultado de uma Promise, 
//caso seja indicado que ela retorne um Promise<any>. Explique com as suas palavras o porquê de fazermos isso
//R= por ser uma requisição vinda de um banco de dados, nao temos certeza do que ira ser retornado, por isso o retorno any
//c. Reimplemente a função, corretamente.
//R=
const getAllSubscribers = async (): Promise<user[]> =>{
  const response= await axios.get(`${baseURL}/subscribers`)
  return response.data.map((res:any)=>{
    return{
      id:res.id,
      name: res.name,
      email: res.email
    };
  });
};
//Exercicio 4
//a. Qual é o tipo dessa função? Por quê?
// tipo post, pois segundo a api esse é o endpoint que usamos para criar
//b. Implemente a função solicitada
const createNew = async (title:string, content:string,date:number): Promise<void>=>{
 return await axios.put(`${baseURL}/news`,{
  title:title,
  content:content,
  date: date
})
}
//Exercicio 5
//Agora, implemente uma função que receba um array de usuários e uma mensagem e envie essa
// mensagem como notificação para todos os usuários. A princípio, não utilize o Promise.all
// const notifyAllSubscribers  = async (users:user[],message:string): Promise<void>=>{
// try{

//   for(const user of users){
//     await axios.post(`${baseURL}/notifications`,{
//       subscriberId:user.id,
//       message
//     })
//   }
//   console.log("ALL notifications sent, all good mami!!")

// }catch(erro:any){
// console.log("nothing good mami, something happened.")
// }
// }
//Exercicio 6
//a. O que o Promise.all faz?
//R=pega um array de promises e devolve um array de respostas
//b. Quais as vantagens de se utilizar o Promise.all no caso de se enviar as notificações para todos os usuários?
//R= ao se ultilizar o promise.all se faz possivel o uso do map, deixando o codigo mais limpo e de melhor entendimento
//c. Reimplemente a função utilizando Promise.all
const notifyAllSubscribers  = async (users:user[],message:string): Promise<void>=>{
  try{
    const ids=users.map((user)=>{
    return  axios.post(`${baseURL}/notifications`, {
        subscriberId:user.id,
        message:message
      })
    })
      await Promise.all(ids)
    console.log("ALL notifications sent, all good mami!!")
  
  }catch(erro:any){
  console.log("nothing good mami, something happened.")
  }
  }
const main = async (): Promise<void> => {
  try {
    const result= await getAllSubscribers()
    console.log(result)
    await  notifyAllSubscribers(result,"venha ver as noticias mais quentes do momento!!")

  } catch (err: any) {
    console.log(err.response?.data || err.message)
  }
}

main()