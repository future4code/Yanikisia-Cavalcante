/**Interpretação de código
 * 1-
 * a) Explique o que o código faz. Qual o teste que ele realiza?
 * R= o codigo checa se o resto da divisao do numero inserido pelo o usuario é igual a 0.se for ele imprime
 * "passou no teste", senao, ele imprime "Não passou no teste"

b) Para que tipos de números ele imprime no console "Passou no teste"?
R= números pares, no caso, numeros que quando divididos por 2 ele irá retornar 0

c) Para que tipos de números a mensagem é "Não passou no teste"?
 * R=números impares, no caso números que ao serem divididos por 2 não iram retornar 0 e sim um numero
diferente de 0.

2-
a) Para que serve o código acima?
R= o codigo serve para ler a fruta digitada pelo o úsuario e retornar o valor dela.
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
R= sera´: "o preço da fruta maçã é R$ 2.25"
c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se
retirássemos o `break` que está logo acima do `default`
(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
R=seria :"o preço da fruta Pêra é R$ 5"

3-
a) O que a primeira linha está fazendo?
R=A primeira linha está declarando que a variavel que o usuário vai inserir no prompt será constante.
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
R=será "Esse número passou no teste" e "mensagem is not defined". se fosse -10 seria:"mensagem is not defined".
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
sim, haverá "mensagem is not defined". pois a variavel "mensagem" só exite no escopo da consicionaç if
por isso não pode ser chamada no escopo global.
 */

/** Ativida de escrita de código
 *1-
 
const idade = prompt("Qual sua idade?")
if (idade > 18) {
    console.log("Você pode dirigir")
}
else {
    console.log("Você não pode dirigir")
}*/
/**
 * 2-

const turnoAluno = prompt("Olá, qual turno você estuda?(M/V/N)")
if ((turnoAluno === "M") || (turnoAluno === "m")) {
    console.log("Bom dia")
}
else if ((turnoAluno === "V") || (turnoAluno === "v")) {
    console.log("Boa Tarde")
}
else if ((turnoAluno === "V") || (turnoAluno === "n")) {
    console.log("Boa Noite")
} else {
    console.log("Não sei que turno é esse, por favor digite um turno válido.")
}
*/
/**
 * 3-
 
const turnoAluno = prompt("Olá, qual turno você estuda?(M/V/N)")
switch (turnoAluno) {
    case 'M':
        console.log("bom dia")
        break
    case 'm':
        console.log("bom dia")
        break
    case 'v':
        console.log("boa tarde")
        break
    case 'V':
        console.log("boa tarde")
        break
    case 'N':
        console.log("boa noite")
        break
    case 'n':
        console.log("boa noite")
        break
    default:
        console.log("Não sei que turno é esse, por favor digite um turno válido.")
        break
}*/
/**
 * 4-
 
const genero = prompt("qual o gênero do filme que pretende assistir?")
const ingresso = prompt("Qual o preço do ingresso?")
genero.toLocaleLowerCase()
const condicao1 = (genero === "fantasia")
const condicao2 = Number(ingresso) < 15
if (condicao1 && condicao2) {
    console.log("Bom filme!!")
} else {
    console.log("Escolha outro filme :(")
}
*/
///////////////////// DESAFIO
/**
 * 1-
 
const genero = prompt("qual o gênero do filme que pretende assistir?")
const ingresso = prompt("Qual o preço do ingresso?")
genero.toLocaleLowerCase()
const condicao1 = (genero === "fantasia")
const condicao2 = Number(ingresso) < 15
if (condicao1 && condicao2) {
    const lanche = prompt("Qual lnchinho você vai comprar?")
    console.log(`Bom filme!! \n Aproveite o seu ${lanche}`)
} else {
    console.log("Escolha outro filme :(")
}
*/
/**
 * 2-
 */
const nome = prompt("Qual seu nome?")
const tipoJogo = prompt("Qual o tipo do jogo que você quer, IN ou DO? IN(internaciona) DO(doméstico)")
const etapaJogo = prompt("Qual etapa do jogo SF, DT ou FI? SF(semi final) DT(Decisão de terceiro) FI(Final)")
const categoriaJogo = prompt("Qual a categoria do jogo (1,2,3 ou 4)?")
const quantidadeIngresso = prompt("Qual a quantidade de ingressos?")

const preco = (entrada,ingresso) => {
    if ((entrada === "SF") || (entrada === "sf")) {
        switch (categoriaJogo) {
            case '1':
                console.log(`---------Dados da compra----------
    Nome do cliente:${nome}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo:${etapaJogo.toLocaleUpperCase()}
    Categoria: ${1}
    Quantidade de ingresso: ${ingresso}
    -----------Valor da Compra-------
    Valor do ingresso:R$ ${1320},00
    Valor total: ${1320 * ingresso}`)
                break
            case '2':
                console.log(`---------Dados da compra----------
    Nome do cliente:${nome}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo:${etapaJogo.toLocaleUpperCase()}
    Categoria: ${1}
    Quantidade de ingresso: ${ingresso}
    -----------Valor da Compra-------
    Valor do ingresso:R$ ${880},00
    Valor total: ${880 * ingresso}`)
                break
            case '3':
                console.log(`---------Dados da compra----------
    Nome do cliente:${nome}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo:${etapaJogo.toLocaleUpperCase()}
    Categoria: ${1}
    Quantidade de ingresso: ${ingresso}
    -----------Valor da Compra-------
    Valor do ingresso:R$ ${550},00
    Valor total: ${550 * ingresso}`)
                break
            case '4':
                console.log(`---------Dados da compra----------
    Nome do cliente:${nome}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo:${etapaJogo.toLocaleUpperCase()}
    Categoria: ${1}
    Quantidade de ingresso: ${ingresso}
    -----------Valor da Compra-------
    Valor do ingresso:R$ ${220},00
    Valor total: ${220 * ingresso}`)
                break
                default:
                    console.log("Por favor, coloque uma categoria válida")
                    break
        }
    } else if ((entrada === "DT") || (entrada === "dt")) {
        switch (categoriaJogo) {
            case '1':
                console.log(`---------Dados da compra----------
    Nome do cliente:${nome}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo:${etapaJogo.toLocaleUpperCase()}
    Categoria: ${1}
    Quantidade de ingresso: ${ingresso}
    -----------Valor da Compra-------
    Valor do ingresso:R$ ${660},00
    Valor total: ${660 * ingresso}`)
                break
            case '2':
                console.log(`---------Dados da compra----------
    Nome do cliente:${nome}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo:${etapaJogo.toLocaleUpperCase()}
    Categoria: ${2}
    Quantidade de ingresso: ${ingresso}
    -----------Valor da Compra-------
    Valor do ingresso:R$ ${440},00
    Valor total: ${440 * ingresso}`)
                break
            case '3':
                console.log(`---------Dados da compra----------
    Nome do cliente:${nome}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo:${etapaJogo.toLocaleUpperCase()}
    Categoria: ${3}
    Quantidade de ingresso: ${ingresso}
    -----------Valor da Compra-------
    Valor do ingresso:R$ ${330},00
    Valor total: ${330 * ingresso}`)
                break
            case '4':
                console.log(`---------Dados da compra----------
    Nome do cliente:${nome}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo:${etapaJogo.toLocaleUpperCase()}
    Categoria: ${4}
    Quantidade de ingresso: ${ingresso}
    -----------Valor da Compra-------
    Valor do ingresso:R$ ${170},00
    Valor total: ${170 * ingresso}`)
                break
                default:
                console.log("Por favor, coloque uma categoria válida")
                break
        }
    }
    else if ((entrada === "FI") || (entrada === "fi")) {
        switch (categoriaJogo) {
            case '1':
                console.log(`---------Dados da compra----------
    Nome do cliente:${nome}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo:${etapaJogo.toLocaleUpperCase()}
    Categoria: ${1}
    Quantidade de ingresso: ${ingresso}
    -----------Valor da Compra-------
    Valor do ingresso:R$ ${1980},00
    Valor total: ${1980 * ingresso}`)
                break
            case '2':
                console.log(`---------Dados da compra----------
    Nome do cliente:${nome}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo:${etapaJogo.toLocaleUpperCase()}
    Categoria: ${2}
    Quantidade de ingresso: ${ingresso}
    -----------Valor da Compra-------
    Valor do ingresso:R$ ${1320},00
    Valor total: ${1320 * ingresso}`)
                break
            case '3':
                console.log(`---------Dados da compra----------
    Nome do cliente:${nome}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo:${etapaJogo.toLocaleUpperCase()}
    Categoria: ${3}
    Quantidade de ingresso: ${ingresso}
    -----------Valor da Compra-------
    Valor do ingresso:R$ ${880},00
    Valor total: ${880 * ingresso}`)
                break
            case '4':
                console.log(`---------Dados da compra----------
    Nome do cliente:${nome}
    Tipo do Jogo: ${tipoJogo}
    Etapa do jogo:${etapaJogo.toLocaleUpperCase()}
    Categoria: ${4}
    Quantidade de ingresso: ${ingresso}
    -----------Valor da Compra-------
    Valor do ingresso:R$ ${330},00
    Valor total: ${330 * ingresso}`)
                break
                default:
                    console.log("Por favor, coloque uma categoria válida")
                    break
        
        }
    } else {
        console.log("Por favor, coloque uma etapa de jogo válida.")
    }
}
if ((tipoJogo === "IN") || (tipoJogo==="in")) {
preco(etapaJogo,Number(quantidadeIngresso*4.10))
}
else if ((tipoJogo === "DO")||(tipoJogo==="do")) {
    preco(etapaJogo,quantidadeIngresso)
}
else {
    console.log("Por Favor, coloque um tipo de jogo válido")
}

