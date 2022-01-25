// a) Responda como comentário no seu código: como fazemos para acessar os 
// parâmetros passados na linha de comando para o Node?
// R= usando a propriedade  process.arg

// 1-
// b) Crie um programa que receba seu nome e sua idade. 
// Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
// const nome= process.argv[2]
// const idade=  process.argv[3]
// const mostrarNomeEIdade =(n,i)=>{
//   return `Olá, ${n}! Você tem ${i} anos.`
// }

// console.log(mostrarNomeEIdade(nome,idade))

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// const mostrarNomeEIdade7Anos =(n,i)=>{
//    const idadeMais7Anos=Number(i)+7
//    return `Olá, ${n}! Você tem ${i} anos.Em sete anos você terá ${idadeMais7Anos}`
//  }
 
//  console.log(mostrarNomeEIdade7Anos(nome,idade))

//  2-
// const opcao=process.argv[2]
// const num1=process.argv[3]
// const num2=process.argv[4]
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
// const fazerPeracao=(opc,nu1,nu2)=>{
//    switch (opc){
//       case 'sub':
//       return Number(nu1)-Number(nu2)
//       case 'add':
//          return Number(nu1)+Number(nu2)
//       case 'mul':
//          return Number(nu1)*Number(nu2)
//       case 'div':
//          return Number(nu1)/Number(nu2)
//    }
// }
// console.log(fazerPeracao(opcao,num1,num2))
 
// 3-
// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma
//  variável que represente uma lista de tarefas. A lista de tarefas pode
//  estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

// const tarefa=process.argv[2]

// const retornaListaTarefa=(taref)=>{
// let listaDeTarefa=[]
//    if(listaDeTarefa.length<1){
//       listaDeTarefa.push(taref)
//    }
//    else{
//       listaDeTarefa=[]
//       listaDeTarefa.push(taref)
//    }
//    return listaDeTarefa
// }
// console.log(retornaListaTarefa(tarefa))