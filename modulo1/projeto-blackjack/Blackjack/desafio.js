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
console.log("Boas vindas ao jogo Blackjack")
if (confirm("Quer iniciar uma nova rodada?")) {
   confirm === true
   let usuarioArray = []
   let usuarioArrayTexto = []
   let computadorArrayTexto = []
   let computadorArray = []
   let i = 0
   let resultadoUsuario = 0
   let resultadoComputador = 0

   for (let i = 0; i < 2; i++) {
      usuarioArray.push(comprarCarta())
      computadorArray.push(comprarCarta())
      usuarioArrayTexto[i] = usuarioArray[i].texto
      computadorArrayTexto[i] = computadorArray[i].texto
      resultadoComputador = computadorArray[i].valor + resultadoComputador
      resultadoUsuario = usuarioArray[i].valor + resultadoUsuario
   }

   while ((((usuarioArray[0].valor) + (usuarioArray[1].valor)) == 22) ||
      (((computadorArray[0].valor) + (computadorArray[1].valor)) == 22)) {
      console.log("Entrou no while")
      usuarioArray = []
      computadorArray = []
      computadorArrayTexto = []
      usuarioArrayTexto = []
      resultadoUsuario = 0
      resultadoComputador = 0
      for (let i = 0; i < 2; i++) {
         usuarioArray.push(comprarCarta())
         computadorArray.push(comprarCarta())
         usuarioArrayTexto[i] = usuarioArray[i].texto
         computadorArrayTexto[i] = computadorArray[i].texto
         resultadoComputador = computadorArray[i].valor + resultadoComputador
         resultadoUsuario = usuarioArray[i].valor + resultadoUsuario
      }
      i++

   }
   let ij = 0
   let c = 2

   while (((confirm(`Suas castas são ${usuarioArrayTexto.join(" ")}. 
   A carta revelada do computador é ${computadorArrayTexto[0]}. Deseja comprar mais carta?`)) === true)
      && (resultadoUsuario <= 21)) {
      usuarioArray.push(comprarCarta())
      usuarioArrayTexto[c] = usuarioArray[c].texto
      resultadoUsuario = usuarioArray[c].valor + resultadoUsuario
      c++
      ij++
   }
   let c2=2
   let i3=0
   while (resultadoComputador >= resultadoUsuario) {
      computadorArray.push(comprarCarta())
      computadorArrayTexto[c2] = computadorArray[c2].texto
      resultadoComputador = computadorArray[c2].valor + resultadoComputador
      c2++
      i3++
   }
   for(let i=0;i<1;i++){
      computadorArray.push(comprarCarta())
      computadorArrayTexto[c2] = computadorArray[c2].texto
      resultadoComputador = computadorArray[c2].valor + resultadoComputador
      c2++
   }
   console.log(`Suas cartas são ${usuarioArrayTexto.join(" ")} . Sua pontuação é ${resultadoUsuario}.
   As cartas do computador são ${computadorArrayTexto.join(" ")} . 
   A pontuação do computador é ${resultadoComputador}`)
   if(resultadoUsuario>21){
      console.log("Usuário perdeu o jogo!!")
   }
   else if((resultadoComputador>21) && (resultadoUsuario<21)){
      console.log("O usuário ganhou o jogo")
   }
   else if (resultadoUsuario===resultadoComputador){
      console.log("Empate!!!")
   }

}

else {
   confirm === false
   console.log("O jogo acabou")
}