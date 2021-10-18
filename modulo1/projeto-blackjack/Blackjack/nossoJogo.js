/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo Blackjack")
if (confirm("Quer iniciar uma nova rodada?")) {
   confirm === true
   let usuarioCarta = comprarCarta()
   let computadorCarta = comprarCarta()
   let usuarioCarta2 = comprarCarta()
   let computadorCarta2 = comprarCarta()
   let i = 0
   let resultadoComputador
   let resultadoUsuario
   let usuarioGanhou = false
   let computadorGanhou = false

   resultadoUsuario = usuarioCarta.valor + usuarioCarta2.valor
   resultadoComputador = computadorCarta.valor + computadorCarta2.valor
   cartaUsuario = usuarioCarta.texto
   cartacomputador = computadorCarta.texto
   console.log(`Usuário - ${cartaUsuario} ${usuarioCarta2.texto}- Pontuação: ${resultadoUsuario}`)
   console.log(`Computador - ${cartacomputador} ${computadorCarta2.texto}- Potuação: ${resultadoComputador}`)
   while ((resultadoComputador <= 21) && (resultadoUsuario <= 21)) {
      if ((resultadoComputador === 21) && (resultadoUsuario === 21)) {
         console.log("Empate")
      }
      else if (resultadoUsuario === 21) {
         console.log("Usuário ganhou !!!!!")
         usuarioGanhou = true
      } else if (resultadoComputador === 21) {
         console.log("Computador ganhou!!!!!")
         computadorGanhou = true
      }
      else if ((resultadoComputador < 21) && (resultadoUsuario < 21)) {
         console.log("Vamos redistribuir as cartas")
      }


      usuarioCarta = comprarCarta()
      computadorCarta = comprarCarta()
      resultadoUsuario = usuarioCarta.valor + resultadoUsuario
      resultadoComputador = computadorCarta.valor + resultadoComputador
      cartaUsuario = usuarioCarta.texto
      cartacomputador = computadorCarta.texto
      console.log(`Usuário - ${cartaUsuario} - Pontuação: ${resultadoUsuario}`)
      console.log(`Computador - ${cartacomputador}- Potuação: ${resultadoComputador}`)

      i++
   }
   if ((resultadoUsuario > 21) && (resultadoComputador > 21) && (usuarioGanhou === false) && (computadorGanhou === false)) {

      console.log("OS DOIS DESAFIANTES PERDERAM")
   }

   else if ((resultadoUsuario < 21) && (resultadoComputador >= 21) && (computadorGanhou === false)) {

      let i2 = 0
      while (resultadoUsuario <= 21) {

         console.log(`Usuário - ${usuarioCarta.texto} - Pontuação: ${resultadoUsuario}`)

         if (resultadoUsuario === 21) {

            console.log("O Usuário ganhouuuu!!!!!")
            usuarioGanhou = true
         }
         usuarioCarta = comprarCarta()

         resultadoUsuario = usuarioCarta.valor + resultadoUsuario + usuarioCarta2.valor
         cartaUsuario = usuarioCarta.texto
         i2++
      } if ((resultadoUsuario > 21) && (resultadoComputador > 21)) {
         console.log(`Usuário - ${cartaUsuario} - Pontuação: ${resultadoUsuario}`)
         console.log(`Computador - ${cartacomputador} - Potuação: ${resultadoComputador}`)
         console.log("OS DOIS DESAFIANTES PERDERAM")
      }
   }
   else if ((resultadoUsuario >= 21) && (resultadoComputador < 21) && (usuarioGanhou === false)) {

      while ((resultadoComputador <= 21) && (computadorGanhou === false)) {
         let ic = 0
         computadorCarta = comprarCarta()
         console.log(`Computador - ${computadorCarta.texto}  - Pontuação: ${resultadoComputador}`)
         resultadoComputador = computadorCarta.valor + resultadoComputador + computadorCarta2.valor
         cartacomputador = computadorCarta.texto
         if (resultadoComputador === 21) {
            console.log("O Computador ganhouuuu!!!!!")
            console.log(`Computador - ${computadorCarta.texto} - Pontuação: ${resultadoComputador}`)
            computadorGanhou = true
         }

         computadorCarta = comprarCarta()
         resultadoComputador = computadorCarta.valor + resultadoComputador
         cartacomputador = computadorCarta.texto
         ic++
      }
      if ((resultadoUsuario > 21) && (resultadoComputador > 21) && (usuarioGanhou === false) && (computadorGanhou === false)) {
         console.log(`Usuário - ${cartaUsuario}  - Pontuação: ${resultadoUsuario}`)
         console.log(`Computador - ${cartacomputador}  - Potuação: ${resultadoComputador}`)
         console.log("OS DOIS DESAFIANTES PERDERAM")
      }
   }

}
else {
   console.log("O jogo acabou")
}