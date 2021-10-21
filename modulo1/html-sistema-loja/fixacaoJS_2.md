```
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  const precoDuzia=1.00
  const precoMenosDe12=1.30
  let precoTotal
  if(quantidade<12){
    precoTotal=quantidade*precoMenosDe12
  } else if(quantidade>=12){
    precoTotal=quantidade*precoDuzia
  }
  return precoTotal
}
```