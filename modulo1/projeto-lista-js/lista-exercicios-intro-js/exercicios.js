// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  let area
  altura=prompt("Digite a altura")
  largura=prompt("Digite a largura")
 area=Number(altura)*Number(largura)
console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNascimento) {
  anoAtual=prompt("olá, você poderia me dizer, qual o ano atual?")
  anoNascimento=prompt("oi de novo, você poderia me dizer qual seu ano de nascimento?")
  const idade = Number(anoAtual)-Number(anoNascimento)
console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  const calculoIMC=peso/(altura*altura)
  return calculoIMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email) {
  nome=prompt("Qual seu nome?")
  idade=prompt("Qual sua idade?")
  email=prompt("Qual sei email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let array=[]
  array[0]=prompt("Digite uma das suas cores preferidas")
  array[1]=prompt("Digite outra das suas cores preferidas")
  array[2]=prompt("Digite outra das suas cores preferidas, essa é ultima kk, prometo")
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 const espetaculoSemPreju=custo/valorIngresso
  return espetaculoSemPreju
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const ehMesmoTamanho= (string1.length)===(string2.length)
  return ehMesmoTamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const ultimoArray=array.pop()
const primeiroArray= array.shift()
array.unshift(ultimoArray)
array.push(primeiroArray)
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const igual1=string1.toUpperCase()
  const igual2=string2.toUpperCase()
  const resultado= (igual1===igual2)
return resultado

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual=prompt("Qual o ano atual?")
  const anoNascimento=prompt("Que ano você nasceu?")
  const anoCarteira=prompt("Que ano de identidade foi emetida?")
  let renovação 
  const idade=(Number(anoAtual)-Number(anoNascimento))
  const carteira = (Number(anoAtual)-Number(anoCarteira))
  renovação=((((idade<=20)) && (carteira>=5)) || (((idade>20) && (idade<=50)) && (carteira>=10)) || (((idade>50)) && (carteira>=15)))
  console.log(renovação)
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
let checarBi
const checarNaodivi100=(((ano%4)===0)&&((ano%100)!==0))
const checarDivi400=((ano%400)===0)
const checarDivi4=(((ano%4)===0) || ((ano%400)===0))
checarBi= ((checarNaodivi100 && checarDivi4) || checarDivi400  )
  return checarBi

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
 let estudanteLabenu
 const idade=prompt("Você tem mais de 18 anos?")
 const ensinoMedio=prompt("Você possui ensino médio completo?")
 const disponibilidadeCurso=prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
 idade.toLowerCase
 ensinoMedio.toLowerCase
 disponibilidadeCurso.toLowerCase
 estudanteLabenu=((idade==="sim") && (ensinoMedio==="sim") && (disponibilidadeCurso==="sim"))
console.log(estudanteLabenu)
}