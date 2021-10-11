/** interpretação de codigo
 * 1-respostas
 * console 1:Matheus Nachtergaele
 * console 2:Virginia Cavendish
 * console 3:canal: "Globo", horario: "14h"
 * 
 * 2-respostas
 * console 1:nome: "Juca", 
	idade: 3, 
	raca: "SRD"
 * console 2:nome: "Juba", 
	idade: 3, 
	raca: "SRD"
 * console 3:nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
    b) os tres faz uma copia do objeto
    3-respostas
    a) console 1: false
    console 2:undefined
    b)o console 1 ocorreu porque o objeto pessoa foi passado argumento da função "minhaFuncao"
e o segundo console ocorreu porque quando a função foi retorna a propriedade passada, percebeu que ela não
 existia, por isso deu underfined.


 */
/*
//////////////// Exercicios de escrita de codigo
1- 
a)
const pessoa={
    nome: "José",
    apelidos:["zé","zezinho","jo"]
}
function imprimirObjeto(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]},
     ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}
imprimirObjeto(pessoa)
 
b)
const pessoa={
    nome: "José",
    apelidos:["zé","zezinho","jo"]
}
const novoApelido={
    ...pessoa,
    apelidos:["Hackerman","Dev","Bicudinho"]
}

function imprimirObjeto(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]},
     ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}
imprimirObjeto(novoApelido)
 */
/**
 * 2-
 * a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão
 
const pessoa1={
    nome:"Nilton",
    idade:43,
    profissao:"Padeiro"

}
const pessoa2={
    nome:"Ana",
    idade:26,
    profissao:"Estilista"

}
*/
/**
 * b)Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
 */
/**function retornarValores(objeto1,objeto2){
const arrayDePessoa1=[objeto1.nome,objeto1.nome.length,objeto1.idade,objeto1.profissao,objeto1.profissao.length]
const arrayDePessoa2=[objeto2.nome,objeto2.nome.length,objeto2.idade,objeto2.profissao,objeto2.profissao.length]
const resultante=[arrayDePessoa1,arrayDePessoa2]
return resultante
}
console.log(retornarValores(pessoa1,pessoa2))
*/
/**
 * 3-
 * a)Crie uma variável de escopo global que guarde um array vazio chamada carrinho
 
let carrinho=[]*/
/**
 * b)Crie três novos objetos que representem frutas de um sacolão. Eles devem ter 
 * as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
 
const fruta1={
    nome:"Kiwi",
    disponibilidade:true
}
const fruta2={
    nome:"Manga",
    disponibilidade:true
}
const fruta3={
    nome:"Melancia",
    disponibilidade:true
}*/
/**
 * c)Crie uma função que receba um objeto fruta por parâmetro e 
 * coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 
 
const passandoFrutaParaCarrinho=(fruta)=>{
    return carrinho.push(fruta)
}*/
/**
 * d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
 
passandoFrutaParaCarrinho(fruta1)
passandoFrutaParaCarrinho(fruta2)
passandoFrutaParaCarrinho(fruta3)
console.log(carrinho)
*/
///////////////////////////////////// Desafio
/**
 * 1
 * Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um 
 * objeto com essas propriedades. 
 * Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

const informacoes=()=>{
const nome=prompt("Qual seu nome?")
const idade=prompt("Qual sua idade?")
const profissao=prompt("Qual sua profissão?")
const usuario={
    nome: nome,
    idade: idade,
    profissão:profissao,

}
console.log(usuario,typeof usuario)
}
informacoes()
*/
/**
 * 2-Crie uma função que receba dois objetos que representam filmes.
 *  Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no 
 * seguinte modelo:
 * O primeiro filme foi lançado antes do segundo? false
O primeiro filme foi lançado no mesmo ano do segundo? true
 
const filmes=()=>{
    let comparacao1
    let comparacao2
    const filme1={
        nome:"Hotel Transilvânia 3",
        ano_De_Lançamento:2018
    }
    const filme2={
        nome:"Você nem imagina",
        ano_De_Lançamento: 2020
    }
    comparacao1=(filme1.ano_De_Lançamento)<(filme2.ano_De_Lançamento)
    comparacao2=(filme1.ano_De_Lançamento)===(filme2.ano_De_Lançamento)
    return console.log(`O primeiro filme foi lançado antes do segundo?${comparacao1}.
     O primeiro filme foi lançado no mesmo ano do segundo?${comparacao2}`)

}
filmes()
*/
/**
 * 3-Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de
 *  estoque do sacolão: ela deve receber por parâmetro uma das 
 * frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 
 */
 let carrinho=[]

 const frutas=[
     {
    nome:"Kiwi",
    disponibilidade:true
    },
    {
     nome:"Manga",
    disponibilidade:true
    },
    {
    nome:"Melancia",
    disponibilidade:true
    }
]
const passandoFrutaParaCarrinho=(fruta)=>{
   
    return  carrinho.push(fruta)
}
passandoFrutaParaCarrinho(frutas[0])
passandoFrutaParaCarrinho(frutas[1])
passandoFrutaParaCarrinho(frutas[2])
console.log(carrinho)
const controlarEstoqueSacolao=(fruta)=>{
     const novaFruta={
        ...fruta,
        disponibilidade:false
    }
    return novaFruta
}
const estoque1=controlarEstoqueSacolao(frutas[0])
const estoque2=controlarEstoqueSacolao(frutas[1])
const estoque3=controlarEstoqueSacolao(frutas[2])
console.log(estoque1,estoque2,estoque3)