/**  1-olá, o resultado será o b, no caso o valor 10 atribuido primeiramente a ele, e depois irá mostrar o 
 * valor 10, 5. pois foi atribuido o valor 5 depois a variavel b.
 * */
 /**2- irá mostrar no console os resultados 10,10,10 pois a foi inicialmente declarado com o valor 10 e b=20 
  * e como c recebeu o valor de a em c=a, e b=c, logo apos a=b. logo todas as variais ficaram com o mesmo valor 
  * de c, que era o mesmo valor de a, logo, 10.
  */
/**3- horasTrabalhoDia, receitaDiaria
 * let horasTrabalhoDia = prompt("Quantas horas você trabalha por dia?")
let receitaDiaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasTabalhoDia/receitaDiaria} por hora`)
 */
 let nome
 let idade
 console.log(typeof nome, typeof idade)
// // isso aconteceu pois nenhum valor foi dado para a variavel

 nome= prompt("Qual seu nome?")
 idade= prompt("Qual sua idade?")
 console.log(typeof idade, typeof nome)
// // o tipo das variaveis mudou, antes estava underfined e agora passou a ser string
 console.log("olá ",nome, "você tem ", idade, " anos")
//Atividade das perguntas
 let roupa =prompt("Você está de roupa roxa? (sim/não)")
 let brinco= prompt("Você usa brinco?(sim/não)")
 const hidratado= prompt(" Você já bebeu pelo menos 1 litro de água hoje?(sim/não)")
 console.log("Você está de roupa roxa? -",roupa," Você usa brinco? -",brinco, 
 " Você já bebeu pelo menos 1 litro de água hoje? -",hidratado )
//Exercicio das variaveis
let a = 5
let b = 20
 let c=a
 let d=b 
 a=d
 b=c
 //Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
 console.log("O novo valor de b é", b) // O novo valor de b é 10
// desafio
let numero1Texto= prompt(" digite um número")
let numero2Texto= prompt("digite um segundo número")
numero1Numero= Number(numero1Texto)
numero2Numero= Number(numero2Texto)
x=numero1Numero+numero2Numero
y=numero1Numero*numero2Numero
console.log("o resultado da soma é ",x , "o resultado da multiplicação é", y)