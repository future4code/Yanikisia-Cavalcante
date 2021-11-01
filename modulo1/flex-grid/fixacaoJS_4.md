```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
   let contador=0
    for(let s of arrayDeNumeros){
       if(s === numeroEscolhido){
           contador++
       }
   }
   if(contador>0){
       return (`O número ${numeroEscolhido} aparece ${contador}x`)
   } 
   else{
       return ("Número não encontrado")
   }
}
```