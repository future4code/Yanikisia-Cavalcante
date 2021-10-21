function calculaNota(ex, p1, p2) {
    // Escreva seu código aqui
    let mp =(((ex*1)+(p1*2)+(p2*3))/6)
    if(mp>=9){
      return "A"
    }else if((mp<9) && (mp >=7.5)){
      return "B"
    } else if((mp<7.5) && (mp>=6)){
      return "C"
    } else if(mp<6){
      return "D"
    }
}
    console.log(calculaNota(10,5,6))