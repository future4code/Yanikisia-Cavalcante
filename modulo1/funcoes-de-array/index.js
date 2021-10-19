/////////////////// Exercicios de interpretação de código
/**
 * 1-
 * R= irá imprimir o objeto que tá dentro do array, no caso, na primeira ocorrencia irá aparecer
 * o objeto {nome: "Amanda Rangel", apelido:"Mandi"}, o index que é 0, e irá imprimir todo o array depois.
 * e isso vai acontecer com todos os objetos, no index 1 e 2 também.
 * 
 * 2-
 * R= Será impresso o array contendo o que tá dentro da  propriedade nome no caso, um array de tamanho 3 com
 * ["Amanda Rangel","Laís Petra","Letícia Chijo"]
 * 
 * 3-
 * R= será impresso um array contendo os 2 elementos do array usuarios que possuem a propriedade apelido 
 * diferente de chijo.
 * no caso [nome:"Amanda Rangel,apelido:"Mandi",nome:"Laís Petra", apelido:"Laura"]
 */
/***
 * ///////////////// Exercicios de escrita de código
 * 1-
 
 
 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a)
const nomeDoginhos= pets.map((pet)=>{
    return pet.nome
})
console.log(nomeDoginhos)
//b)
const pegarCachorrosSalsichas=pets.filter((pet)=>{
    return pet.raca === "Salsicha"
})
console.log(pegarCachorrosSalsichas)
//c)
const darDescontoParaDoginhos= pets.filter((poddle)=>{
    return poddle.raca === "Poodle"
}).map((darDescontoParaDoginhos)=>{
    return  `Você ganhou um cupom de 10% para tosar o/a ${darDescontoParaDoginhos.nome}`
})
console.log(darDescontoParaDoginhos)

**/
/**
 * 2-
 **/
//  const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
//A)
//  const nomeProdutos= produtos.map((nomeProduto)=>{
//      return nomeProduto.nome
//  })
//  console.log(nomeProdutos)
//b)
//  const darDescontoProdutos= produtos.map((nomeProduto)=>{
//      const objeto={
//          nome:nomeProduto.nome,preço:(nomeProduto.preco)-((nomeProduto.preco*5)/100)
//  }
//      return objeto
//  })
// console.log(darDescontoProdutos)
//c)
//  const arrayBebidas=produtos.filter((bebidas)=>{
//      return bebidas.categoria==="Bebidas"
//  })
//  console.log(arrayBebidas)
//d)
//  const produtosYpe=produtos.filter((prod)=>{
// prod = prod.nome
// return prod.includes("Ypê")

//  })
// console.log(produtosYpe)
//e)
// const produtosYpeFrase = produtos.filter((prod) => {
//     prod = prod.nome
//     return prod.includes("Ypê")

// }).map((produtosYpeFrase) => {
//     return `Compre ${produtosYpeFrase.nome} por R$ ${produtosYpeFrase.preco}`
// })
// console.log(produtosYpeFrase)


//////////////////////// DESAFIO

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
// ]
// const nomesPokemons = pokemons.map((nomes) => {

//     return nomes.nome
// })
// console.log(nomesPokemons.sort())


// const tipoPokemons = pokemons.map((nomes) => {

//     return nomes.tipo
// })

// let tipoPokemonsFiltrados = tipoPokemons.filter((este, i) => {
//     return tipoPokemons.indexOf(este) === i;
// })
// console.log(tipoPokemonsFiltrados)
