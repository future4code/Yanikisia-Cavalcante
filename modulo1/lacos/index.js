///////////// exercicios de interpretação de código
/**
 * 1-
 * r= o codigo está acrescentando +1 a variavel i, entao na primeira vez o loop rodar ele vai acrescentar 
 *  1 a variavel valor, ai o contador i irá mudar de 1 para 2 , para a segunda execução do loop, ai vai somar 
 * +2 ao 1 que ja tava armazenado em valor . tipo valoor = 1+2. valor =3
 * e assim por diante. 3+3, para a 3 execução do codigo, 6+4 para a quarta execução do codigo. e como 5 não é
 *  menor que 5, o codigo irá parar e guarda 6+4 na variavel valor..
 * o console.log irá exibir 10.
 * 
 * 2-
 * a) O que vai ser impresso no console?
 * R= todos os números maiores que 18.
 * b) Se eu quisesse acessar o índice de cada elemento dessa lista,
 *  o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
 * R= poderia ser ultilizado o metodo indexOf() para mostrar os indexs de cada elemento
 * 
 * 3-
 * seria "*","**","***","****"
*/
/**
 * 1-Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável
 * a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
 * b) Se a quantidade for maior que 0,
 *  solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
 * c) Por fim, imprima o array com os nomes dos bichinhos no console
 * 
const pet = prompt("Quantos bichinos de estimação você tem?")
const petNomes=[]
if (pet > 0) {
    
    for (let i = 0; i < pet; i++) {
        let nomes = prompt("Qual o nome do seu pet")
        petNomes.push(nomes)
    }
    console.log(petNomes)
} else {
    console.log("Que pena! Você deveria adotar um pet!")
}
*/
/**
 * 2-
 * 2. Considere que você tenha acesso a um `array`  (chamado de 'array original')
 *  que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens 
 * abaixo, realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares 
    do array original e **imprima** esse novo array
    
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
    "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
    
   
 a) const imprimirElementosArray=(array)=>{
    for (let num of array){
        console.log(num)
    }
  }
  
  const arrayOrriginal=[1,67,54,89,23,00,40,31]
  imprimirElementosArray(arrayOrriginal)

 b) const imprimirElementosArray=(array)=>{
    for (let num of array){
        console.log(num/10)
    }
  }
  const arrayOrriginal=[10,67,54,89,23,100,40,31]
  imprimirElementosArray(arrayOrriginal)
  c)
  
  const criarNovoArray=(array)=>{
      let novoArray=[]
    for (let num of array){
        if((num%2)===0){
            novoArray.push(num)
        }
    }
    console.log(`Esses são os numero pares do array ${novoArray}`)
  }
  const arrayOrriginal=[10,67,54,89,23,100,40,31]
  criarNovoArray(arrayOrriginal)
  d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
    "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
  
  const criarNovoArray=(array)=>{
    let novoArray=[]
  for (let num of array){
    novoArray.push(`O elemento do index ${array.indexOf(num)} é : ${num} `)
  }
  console.log(novoArray)
}
const arrayOrriginal=[10,67,54,89,23,100,40,31]
criarNovoArray(arrayOrriginal)
 e) Escreva um programa que imprima no console o maior e o menor números contidos no array original


const criarNovoArray = (array) => {
   let maior=0
   
    for (let i = 0; i < array.length; i++) {
        if(array[i]>maior){
            maior=array[i]
        }
    }
   console.log(`O numero maior é ${maior}`)
   let menor=maior
   for (let i = 0; i < array.length; i++) {
    if(array[i]<menor){
        menor=array[i]
    }
}
console.log(`O numero menor é ${menor}`)
   
}
const arrayOrriginal = [10, 67, 54, 89, 23, 100, 40, 31]
criarNovoArray(arrayOrriginal)
*/
///////////////////////////  Desafio
/** 
 * 1-
const adivinharNumero = (numero) => {
    let pessoa2 = Number(prompt("Adivinhe o número que estou pensando"))
    let i = 0
    while (pessoa2 != numero) {
        if (pessoa2 > numero) {
            console.log(`O número chutado foi:${pessoa2}
        Errrrrrrrrrrrrou, é menor`)
        }
        else if (pessoa2 < numero) {
            console.log(`O número chutado foi:${pessoa2}
        Errrrrrrrrrrrrou, é maior`)
        }
        pessoa2 = prompt("tente de novo")
        i++
    }
    console.log("Acertou!!!!!!!")
    console.log(`O número de tentativas foi: ${i}`)
    console.log(`O número a ser adivinhado era ${pessoa1}`)
    

}
const pessoa1 = Number(prompt("Digite um numero para se adivinhado"))
adivinharNumero(pessoa1)
*/
const adivinharNumero = (numero) => {
    let pessoa2 = Number(prompt("Adivinhe o número que estou pensando"))
    let i = 0
    while (pessoa2 != numero) {
        if (pessoa2 > numero) {
            console.log(`O número chutado foi:${pessoa2}
        Errrrrrrrrrrrrou, é menor`)
        }
        else if (pessoa2 < numero) {
            console.log(`O número chutado foi:${pessoa2}
        Errrrrrrrrrrrrou, é maior`)
        }
        pessoa2 = prompt("tente de novo")
        i++
    }
    console.log("Acertou!!!!!!!")
    console.log(`O número de tentativas foi: ${i}`)
    console.log(`O número a ser adivinhado era ${pessoa1}`)
    

}
const pessoa1 = (Math.floor(Math.random() * 100) + 1)
adivinharNumero(pessoa1)