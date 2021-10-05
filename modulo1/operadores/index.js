/** 
 const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = true && false(falsa e true, resulta em true)
console.log("a. ", false)

resultado = true && false && true(apenas um false já deixa toda a operação falsa) 
console.log("b. ", resultado) 

resultado = (nao)false && (true ou false) (true ou false, resulta em true )
console.log("c. ", true)

console.log("d. ", typeof boollean)

2- o codigo dele está juntando 2 textos recebidos pelo usuario, no caso ele so ta juntando e não somando os numeros recebidos
em vez de fazer 1+2= 3, ele está fazendo 1+2=12, pois o programa esta vendo as entradas como strings.

3- ele poderia fazer 
const soma= Number(primeiroNumero)+ Number(segundoNumero)
*/
// ////////////////////////// Atividade de escrita de codigo
//1-
// const idadeUsuario= prompt("Qual sua idade? ")
// const idadeAmigue= prompt("Qual a idade da(o) sua amiga(o)? ")
// let idadeMaior= idadeUsuario> idadeAmigue
// let diferençaDeIdade= idadeUsuario-idadeAmigue

// console.log(" sua idade é maior do que a do seu amigo? ", idadeMaior)
// console.log("Voces tem ",diferençaDeIdade , "anos de diferença de idade da (o) sua (seu) amiga(o)")

//2-
// const numeroPar=prompt("Digite um número par, por favor.")
//  let resto= numeroPar%2 
//  console.log(" o resto da divisão desse numero por 2 é: ", resto)
 // todo número par dividido para 2 possui o resto 0
 // se o usuário inserir um número impar, então o resto será diferente de 0

 //3-

// const idade=prompt("Qual sua idade em anos? ")
// let idadeMeses= idade*12
// let idadeDias= idade*365
// let idadeHoras=idade*8760
// console.log("Sua idade em meses é: ", idadeMeses)
// console.log("Sua idade em dias é: ", idadeDias)
// console.log("Sua idade em horas é: ", idadeHoras)

// 4-
// const numero1=prompt("Digite um número: ")
// const numero2=prompt("Digite um segundo número: ")
//  const ehMaior=(Number(numero1)> Number(numero2))
//  const ehIgual= numero1 === numero2
//  const ehDivisivel = (numero1%numero2) == 0
//  const segundoEhDivisivel= (numero2%numero1) == 0
 
//  console.log("O primeiro número é:  ", numero1)
//  console.log("O segundo número é:  ", numero2)
// console.log("O primeiro número é maior que o segundo? ", ehMaior)
// console.log("O primeiro número é igual ao segundo? ", ehIgual)
// console.log("O primeiro número é divisível pelo segundo? ", ehDivisivel)
// console.log("O segundo número é divisível pelo primeiro? ", segundoEhDivisivel)

////////////////////////////////////////// Desafio 
//1-
// let grausF= 77
// let grausTransformadoK= (grausF-32)*(5/9) + 273.15
// console.log("o valor : ",grausF,"°F ficará", grausTransformadoK, "°K em kelvins")

// let grausC=80
// let grausTransformadoF=(grausC)*(9/5)+32
// console.log("o valor : ",grausC,"°C ficará", grausTransformadoF, "°F em Fahremheit")

// grausC= prompt("Digite um numero em celsius que voce queira converter")
// grausTransformadoF=(grausC)*(9/5)+32
// grausTransformadoK=((grausTransformadoF)-32)*(5/9) + 273.15
// console.log("o valor : ",grausC,"°C ficará", grausTransformadoF, "°F em Fahremheit", " e ficará ", grausTransformadoK,"°K em kelvins")
 /**
  * 2-
  
  let valorConsumo = 280 
  let desconto=15
  let valorPago = (Number(valorConsumo)*0.05)
  let valorPagoDesconto=(valorPago - ((valorPago/100)*desconto))
   console.log("O valor a ser pago será: $R: ", valorPago)
  console.log("o valor pago agora com ",desconto,"% de desconto será: $R:",valorPagoDesconto,"")
*/
/**3-
 * Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. 
 * Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar 
 * Distâncias, existem metro (m), pés (ft), 
 * milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:
 * 
 * a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. 
 * Imprima  a resposta no console da seguinte forma: 
`20lb equivalem a X kg`

b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. 
Imprima  a resposta no console da seguinte forma: 
`10.5oz equivalem a X kg`

c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m.
 Imprima  a resposta no console da seguinte forma: 
`100mi equivalem a X m`

d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima 
 a resposta no console da seguinte forma: 
`50ft equivalem a X m`

e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. 
Imprima  a resposta no console da seguinte forma: 
`103.56gal equivalem a X l`

f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. 
Imprima  a resposta no console da seguinte forma: 
`450 xic equivalem a X l`

g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade 
original antes de converter
 */

let valorLibrasKilos= 20
let resultadoLibrasKilos= (Number(valorLibrasKilos)/2.204623)
console.log("o valor", valorLibrasKilos,"Lb, equivale a", resultadoLibrasKilos,"em Kg")
 
let valorOncaKilo= 10.5
let resultadoOncaKilo= (Number(valorOncaKilo)/35.274)
console.log("o valor", valorOncaKilo,"Oz, equivale a ",resultadoOncaKilo,"em Kg")

let valorMilhasMetros=100
let resultadoMilhasMetros=(Number(valorMilhasMetros)/0.00062137)
 console.log("o valor", valorMilhasMetros,"mi equivalem a",resultadoMilhasMetros," em m")

  let valorPeMetro=50
  let resultadoPeMetro=(Number(valorPeMetro)/3.2808)
console.log("o valor",valorPeMetro,"ft, equivale a", resultadoPeMetro,"em m")

//usei o calculo de galao americano
let valorGalaoLitro=103.56
let resultadoGalaoLitro=(Number(valorGalaoLitro)*3.785412)
console.log("o valor de",valorGalaoLitro,"gal, equivale a",resultadoGalaoLitro,"L")

/**  foram usadas essa informaçoes para considerar o valor encontrado:
 * A xícara, que adotamos nesta calculadora, são as medidas encontradas nos 'Medidores de Xícara'
 *  que seguem o padrão dos Estados Unidos e são encontrados facilmente no Brasil. Utilizamos xc como 
 * abreviatura para xícara (não padronizada). Equivalências: 1 xícara (ou copo) = 240 ml = 16 colheres de sopa; 
 * 1/2 xícara = 120 ml = 8 colheres de sopa; 1/4 xícara = 60 ml = 4 colheres de sopa; 1/8 xícara = 30 ml = 2 colheres de sopa.
 * O litro é uma unidade de medida de volume ou capacidade cujo síbolo é l, L ou, de forma não-oficial, ℓ). 
 * 1 litro é igual a: 1.000 mililitros, 4 1/6 xícaras exatamente ou 1000 centímetros cúbicos
*/
 let valorXicaraLitro=prompt("insira um valor para conversão de xicaras para litros")
 let resultadoXicaraLitro=(Number(valorXicaraLitro)*0.24)
 console.log("o valor de",valorXicaraLitro,"xic, equivale a",resultadoXicaraLitro,"L")