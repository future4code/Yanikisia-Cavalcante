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
        return a - b
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
        nume = nume ** (2)
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
    let objeto = {}

    if (num1 > num2) {
        maior = 0
        menor = 0
        maior = num1
        menor = num2
    }
    else if (num1 < num2) {
        maior = 0
        menor = 0
        maior = num2
        menor = num1
    }
    objeto = { maiorNumero: maior, maiorDivisivelPorMenor: ((maior % menor) === 0), diferenca: maior - menor }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayDemoniaco = []
    let i = 0
    while (arrayDemoniaco.length < n) {
        if (((i % 2) === 0)) {
            arrayDemoniaco.push(i)
        }

        i++
    }
    return arrayDemoniaco

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA === ladoB) && (ladoC === ladoA)) {
        return "Equilátero"
    } else if (((ladoC === ladoA) && (ladoA !== ladoB)) || ((ladoA === ladoB) && (ladoC !== ladoB)) || ((ladoB === ladoC) && (ladoA !== ladoB))) {

        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maior = 0
    let arrayMenorMaior = []
    if (array.length === 2) {
        return [array[0], array[1]]
    }
    else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maior) {
                maior = array[i]
            }
        }
        let menor = maior
        for (let i = 0; i < array.length; i++) {
            if (array[i] < menor) {
                menor = array[i]
            }
        }

        const tirarMaior = array.filter((num) => {
            return num !== maior
        })
        maior = 0
        for (let i = 0; i < tirarMaior.length; i++) {
            if (tirarMaior[i] > maior) {
                maior = tirarMaior[i]
            }
        }
        const tirarMenor = tirarMaior.filter((num) => {
            return num != menor
        })
        menor = maior
        for (let i = 0; i < tirarMenor.length; i++) {
            if (tirarMenor[i] < menor) {
                menor = tirarMenor[i]
            }
        }
        arrayMenorMaior.push(maior)
        arrayMenorMaior.push(menor)
    }
    return arrayMenorMaior


}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let objeto = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return objeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasComPermisao = pessoas.filter((pessoa) => {
        return ((pessoa.idade > 14 && pessoa.idade < 60) && (pessoa.altura > 1.5))
    })
    return pessoasComPermisao
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasSemPermisao = pessoas.filter((pessoa) => {

        return ((pessoa.idade <= 14) || (pessoa.idade > 60) || ((pessoa.altura < 1.5) && ((pessoa.idade >= 14) || (pessoa.idade < 60))))
    })
    return pessoasSemPermisao
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const compras = contas.map((ahh) => {
        let totalCompras = ahh.compras.reduce((a, b) => a + b, 0)
        let totalSaldo = ahh.saldoTotal
        return { ...ahh, saldoTotal: totalSaldo - totalCompras, compras: [] }
    })
    return compras
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => {
        if (a.nome < b.nome) { return -1 }
        if (a.nome > b.nome) { return 1 }

        return 0
    })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
return consultas.sort((a,b)=>{
    return new Date (a.datas)
})
}
