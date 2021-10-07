///////
/////
/**Atividade de interpretação de texto
 * 1- 
 * irá mostrar na tela no primeiro console log saira 10. que é 2*5( sendo, 5, o input colocado)
 * no segundo saira 50. Que é 10*5(sendo, 10, o input colocado)

2-  
Não iria aparecer nada no console, já que não foi dito pelo codigo para ser mostrado na tela esse resultado

3-
a função irá pegar a frase escrita pelo úsuario e colocar tudo em letras minusculas e retorna de dentro da 
frase contem a palavra "cenoura"
b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura (sairá 'true')
     ii.  CENOURA é bom pra vista(sairá 'true')
     iii. Cenouras crescem na terra(saira'false')
 */
//////////////////////// Atividade de escrita de codigo
    /*  Escreva as funções explicadas abaixo:
     1-
     a) A função não deve receber nenhum parâmetro e 
     deve imprimir uma mensagem falando algumas informações sobre você, como:
     "eu sou joão , tenho 23 anos de idade, moro em são paulo e sou estudante"
     Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
     Lembrando que a função não possui entradas, apenas imprime essa mensagem.
*/
// function mostarInformacoes(){
//     console.log("Eu sou yanikisia, tenho 21 anos, moro em macapá, e sou estudante.")
// }
// mostarInformacoes()
/*b)
const mostarInformacoes=(nome,idade,endereco,profissao)=>{
    console.log(`Eu sou ${nome}, eu tenho ${idade}, eu moro em  ${endereco}, e sou ${profissao} `)
}
const nomeUsuario=prompt("Qual seu nome?")
const idadeUSuario=prompt("Qual sua idade?")
const enderecoUsuario=prompt("Em qual cidade voce mora?")
const profissaoUsuario=prompt("Qual sua profissão?")
 mostarInformacoes(nomeUsuario,idadeUSuario,enderecoUsuario,profissaoUsuario)

 */
/**2-
 * a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
 *  faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
 * b) Faça uma função que recebe 2 números e
 * retorne um booleano que informa se o primeiro número é maior ou igual ao segundo
 * c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
 * d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
 * juntamente com uma versão dela em letras maiúsculas.
 
const fazerSoma= function(num1,num2){
    let soma=num1+num2
    return soma
}
let resultado = fazerSoma(3,4)
console.log(resultado)

b)
function verSeEhMaior(num1,num2){
let soma= num1>=num2
return soma
}
const ehMaiorIgual=verSeEhMaior(9,8)
console.log(ehMaiorIgual)

c)
function verSeEhPar(num1){
let ehPar= (num1%2)===0
return ehPar
}
const resultado=verSeEhPar(1)
console.log(resultado)

D)
const retornaMensagem=(texto)=>{
    const mensagemTamanho=texto.length
    const mensagemMAiuscula=texto.toUpperCase()
    return resultado=[mensagemTamanho,mensagemMAiuscula]

}
const frase=prompt("Digite uma mensagem")
let fraseRetorno= retornaMensagem(frase)
console.log("Esse é o tamanho da sua frase",fraseRetorno[0],"esse é ela maiuscula: ", fraseRetorno[1])
*/
/**
 * 3-
 * Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
 *  Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
 * inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
 * Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10
 //
function operações(num1,num2){
    const somar= function(num1,num2){
        const soma=num1+num2
        return soma
    }
    function subitrair(num1,num2){
        const subitracao= num1-num2
        return subitracao
    }
    function multiplicar(num1,num2){
        const multiplicacao= num1*num2
        return multiplicacao
    }
    function dividir(num1,num2){
        const divisao= num1/num2
        return divisao
    }
    let somaResultado=somar(num1,num2)
    let subitracaoResultado=subitrair(num1,num2)
    let multiplicacaoResultado=multiplicar(num1,num2)
    let divisaoResultado=dividir(num1,num2)
    return operacao=[somaResultado,subitracaoResultado,multiplicacaoResultado,divisaoResultado]
}
const numero1=prompt("insira um numero")
const numero2=prompt("insira outro numero")
const resultado=operações(Number(numero1),Number(numero2))

console.log("Números inseridos:",numero1,"e",numero2,`\n`,"soma:",resultado[0],`\n`,"Diferença:",resultado[1],
`\n`, "Multiplicação:",resultado[2],`\n`,"Divisão:",resultado[3])
 */
////////////////////////// Desafio
/**
 * Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código 
 * através de invocações/chamadas. 
 * Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
 a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro
 b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. Faça a soma 
 entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
 
const responder=(parms)=>{
console.log("essa é a soma: ",parms)
}
const somar=(num1,num2)=>{
    const resultado=num1+num2
responder(resultado)
}
somar(2,4)
*/

/**
 * 2-
 * Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e 
 * calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 
 */
function fazerTeorema(num1,num2){
    let hipotenusa=(num1*num1)+(num2*num2)
    const resultado=hipotenusa**(1/2)
 return resultado
}
const teoremaResolvido=fazerTeorema(23,12)
console.log("A hipotenusa vale:",teoremaResolvido)