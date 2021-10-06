// Exercicios de interpretação de código
//1- let array
// console.log('a. ', array)
// //irá imprimir a.,undefined
// array = null
// console.log('b. ', array)
// //irá imprimir b.,null
// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// // irá imprimir 11, pois é o tamanho do array
// let i = 0
// console.log('d. ', array[i])
// // irá imprimir d.,3
// array[i+1]= 19
// console.log('e. ', array)
// //irá imprimir e.,11[3,19,5,6,,7,8,9,10,11,12,13], pois foi dito ao proGRAMA que o 19 está na posição 2
// const valor = array[i+6]
// console.log('f. ', valor)
//irá imprimir f.,9, pois o 9 está na 6 posição do array

/**
 * 2-
  const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
será impresso " SUBI NUM ÔNIBUS EM MIRROCOS" 27
*/

////////////////////////Exercicios de escrita de código
/**1-
 * Faça um programa que
 *  pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
 * O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!* 
 
const nomeDoUsuario=prompt("Digite seu nome")
const emailDoUsuario=prompt("Digite um email")

console.log(`O e-mail ${ emailDoUsuario} foi cadastrado com sucesso. seja bem-vindo(a), ${nomeDoUsuario}!!!`)
alert(`O e-mail ${ emailDoUsuario} foi cadastrado com sucesso. seja bem-vindo(a), ${nomeDoUsuario}!!!`)
*/
 
/**
 * 2-
 * 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, 
 * armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
     seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a s
    egunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
 
let comidasPreferidas= ["lasanha","açai","cuscuz","banoffee","chocolate"]
 console.log(comidasPreferidas)
  console.log(" Essas são minhas comidas preferidas: ")
  console.log(comidasPreferidas[0])
  console.log(comidasPreferidas[1])
  console.log(comidasPreferidas[2])
  console.log(comidasPreferidas[3])
  console.log(comidasPreferidas[4])
  
  const comidaUsuario=prompt("Qual sua comida preferida?")
  //console.log(comidaUsuario)
  comidasPreferidas[1]=comidaUsuario
  console.log(comidasPreferidas)
/**3-
 * 3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário
     3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console
    
    - 💡  Dica
        
        Para remover um item de um array, você pode utilizar a função splice!
        Caso não se lembre como ela funciona, não tem nenhum problema: 
        uma breve pesquisa no google te trará vários exemplos.
 
 
 let listaDeTarefas=[]
 listaDeTarefas[0]=prompt("Digite a primeira tarefa que voce precisa fazer hoje")
 listaDeTarefas[1]=prompt("Digite a segunda tarefa que voce precisa fazer hoje")
 listaDeTarefas[2]=prompt("Digite a terceira tarefa que voce precisa fazer hoje")
 console.log(listaDeTarefas)
 const indice=prompt("Digite o numero do indice que deseja retirar")
 const noveLista=listaDeTarefas.splice(indice-1,1)
 console.log(noveLista)
*/
//////////////////////////////////// Desafio
/**Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, 
 * ignorando os espaços
 * 2-Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o 
 * índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
 */
// let frase=prompt("Digite uma frase")
// const nameList=frase.split(" ")
// console.log(nameList);

//console.log(fraseDividida)

 let frutaArray=["Banana","Morango","Abacaxi","Laranja","Ameixa"]
 frutaArray.includes("Abacaxi")
 frutaArray.indexOf("Abacaxi")
 console.log(`O indice do abacaxi é: ${frutaArray.indexOf("Abacaxi")} esse é o indice do array ${frutaArray.length} `)
