//  2-
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
const opcao=process.argv[2]
const num1=process.argv[3]
const num2=process.argv[4]
const fazerPeracao=(opc,nu1,nu2)=>{
   switch (opc){
      case 'sub':
      return Number(nu1)-Number(nu2)
      case 'add':
         return Number(nu1)+Number(nu2)
      case 'mul':
         return Number(nu1)*Number(nu2)
      case 'div':
         return Number(nu1)/Number(nu2)
   }
}
console.log(fazerPeracao(opcao,num1,num2))
 