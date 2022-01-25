// a) Responda como comentário no seu código: como fazemos para acessar os 
// parâmetros passados na linha de comando para o Node?
// R= usando a propriedade  process.arg
// 1-
// b) Crie um programa que receba seu nome e sua idade. 
// Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
const nome= process.argv[2]
const idade=  process.argv[3]
const mostrarNomeEIdade =(n,i)=>{
  return `Olá, ${n}! Você tem ${i} anos.`
}

console.log(mostrarNomeEIdade(nome,idade))

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// const mostrarNomeEIdade7Anos =(n,i)=>{
//    const idadeMais7Anos=Number(i)+7
//    return `Olá, ${n}! Você tem ${i} anos.Em sete anos você terá ${idadeMais7Anos}`
//  }
 
//  console.log(mostrarNomeEIdade7Anos(nome,idade))


