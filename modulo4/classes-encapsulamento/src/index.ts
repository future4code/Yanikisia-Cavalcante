//Exercicio 1
//Analise a classe `UserAccount` abaixo. Perceba quais propriedades 
//são públicas e quais são privadas e responda as perguntas discursivas 
//em comentários no arquivo `index.ts`

//a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
//R= serve para passar os valores logo quando criamos a instancia : constructor()

//b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe
// (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `
//"Chamando o construtor da classe User"` foi impressa no terminal?*
//R=uma vez
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  public setTransactions(description:string,value:number,date:string){
      const newTransation= new Transaction(description,value,date)
      this.transactions.push(newTransation)
      
  }
  }

//c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*
//R= declarando metodos que fazem possivel essa mudança como getters e setters
// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

//Exercicio 2
//Transforme a variável de tipo abaixo, chamada Transaction em uma classe Transaction. 
//Ela deve conter as mesmas propriedades: data, valor e descrição. Agora, porém, todas elas devem 
//ser privadas. Portanto, crie métodos (getters) para a leitura desses valores, tanto para essa
//classe quanto para a classe UserAccount.
//Crie uma instância dessa classe e adicione à instância já criada de UserAccount 
class Transaction{
    private description: string;
    private value:number;
    private date:string;

    constructor(description:string,value:number,date:string){
        this.description=description;
        this.value=value;
        this.date=date;

    }
    public getValue(){
        return this.value
    }
    public getDescription(){
        return this.description
    }
    public getDate(){
        return this.date
    }
}
//Exercicio 3
//Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação. Ela deve 
//possuir a propriedades accounts, privada (crie os getters e setters que achar apropriado).
class Bank{
    private accounts:UserAccount[]=[]
    constructor(accounts:UserAccount[]){
        this.accounts=accounts
    }
}
let usuario=new UserAccount("036.444.892-03","yanikisia",21)
 usuario.setTransactions("pc-Gamer",3000,"22-01-2022")
 console.log(usuario)
 const usuario2= new UserAccount("00.541.892-03","José Gabriel", 21)
 usuario2.setTransactions("steam",4000,"13-02-2022")
 const userAccount= [usuario,usuario2]
 const nubank= new Bank(userAccount)
 console.log(nubank)