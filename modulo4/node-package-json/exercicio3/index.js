// 3-
// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma
//  variável que represente uma lista de tarefas. A lista de tarefas pode
//  estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

const tarefa=process.argv[2]

const retornaListaTarefa=(taref)=>{
let listaDeTarefa=[]
   if(listaDeTarefa.length<1){
      listaDeTarefa.push(taref)
   }
   else{
      listaDeTarefa=[]
      listaDeTarefa.push(taref)
   }
   return listaDeTarefa
}
console.log(retornaListaTarefa(tarefa))