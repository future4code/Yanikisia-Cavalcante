// function imprimeTresCoresFavoritas() {
//     const cor1 = prompt("Insira sua primeira cor favorita")
//     const cor2 = prompt("Insira sua segunda cor favorita")
//     const cor3 = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }
function imprimeTresCoresFavoritas():void {
    console.log("Insira sua primeira cor favorita")
    const cor1:string = process.argv[2]
    const cor2:string = process.argv[3]
    const cor3:string = process.argv[4]
    const result:string[]=[cor1,cor2,cor3]
    console.log(result)
 }
 imprimeTresCoresFavoritas()