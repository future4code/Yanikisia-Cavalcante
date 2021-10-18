// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararNumeros(a, b) {
        return a - b;
    }
    return array.sort(compararNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((numerosPares) => {
        return (numerosPares % 2) === 0
    })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayParesElevadoADois = []
    for (let nume of retornaNumerosPares(array)) {
        nume=nume**(2)
        arrayParesElevadoADois.push(nume)
    }
    return arrayParesElevadoADois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0

    for (num of array) {
        if (num > maior) {
            maior = num
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = num1
  let menor = num2
  let objeto={}

  if (num1 > num2) {
      maior=0
      menor=0
      maior=num1
      menor=num2
  }
  else if (num1 < num2) {
      maior=0
      menor=0
      maior=num2
      menor=num1
  }
    objeto={maiorNumero:maior,maiorDivisivelPorMenor:((maior%menor)===0),diferenca:maior-menor}
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayDemoniaco=[]
    for(let i=0; i<=n;i++){

        arrayDemoniaco.push(i)
    }
    return retornaNumerosPares(arrayDemoniaco)

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if((ladoA===ladoB)&& (ladoC===ladoA)){
    return "Equilátero"
}else if( ((ladoC===ladoA)&&(ladoA!==ladoB)) || ((ladoA===ladoB)&&(ladoC!==ladoB)) ||  ((ladoB===ladoC)&&(ladoA!==ladoB))){

    return "Isósceles"
}else{
    return "Escaleno"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maior =0
  let menor=0
  let objeto={}
    for(let num of array){
        if (num > maior) {
            maior=0
            maior=num1
            menor=num2
        }
    }
  if (num1 > maior) {
      maior=0
      maior=num1
      menor=num2
  }
  else if (num1 < num2) {
      maior=0
      menor=0
      maior=num2
      menor=num1
  }
    
    return objeto

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
