class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      public introduceYourself():void{
          console.log(`Olá, bom dia, eu sou ${this.name}`);
      }

  }
  //exercicio 1
  //a) Seria possível imprimir a senha (password) atrelada a essa instância?
  //R=sim
  //b) Quantas vezes a 
  //mensagem "Chamando o construtor da classe User" foi impressa no terminal?
  //r= uma vez
  const usuario1= new User("001","yanikisia@gmail.com","yanikisia","23345555")
  //Exercicio 2
  //a) Quantas vezes a mensagem
  // "Chamando o construtor da classe Customer" foi impressa no terminal? 
  //R= uma vez
  //b) Quantas vezes a mensagem 
  //"Chamando o construtor da classe User" foi impressa no terminal? Por quê?
  //R=2 vezes, acho que é porque 1 vez na construção na classe e na segunda vez
  //é por causa da classe filha.
  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
    public getPuchaseTotal(): number{
        return this.purchaseTotal;
    }
  }
  const customer1=new Customer("001","customer@gmail.com","customer","2234444","5444333677")
  //Exercicio3-herança
  //Agora, imprima **todas as informações possíveis** da instância que você 
  //criou: o id, o nome, o email, o valor total de compra (`purchaseTotal`) 
  //e o cartão de crédito (`creditCard`). Perceba que as propriedades públicas 
  //da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).

//a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?* 
//*Por quê?*
//R= porque ela nao possui um metodo de retorno, no caso um get para mandar 
// para fora da classe seu valor
customer1.getCreditCard();
customer1.getEmail();
customer1.getId();
customer1.getName();
customer1.getPuchaseTotal();
//Exericicio4-herança
//Adicione um método público à classe User. Esse método deve ter o nome de 
//introduceYourself("apresente-se") e deve retornar a mensagem: "Olá, bom dia!".
// As classes filhas sempre têm acesso aos métodos públicos da classe pai. 
//Então, para realizar o teste dessa sua função, faça
 //com que a instância que você criou para a classe Customer chame esse método
 //R= feito
 customer1.introduceYourself()

 //polimorfismo
 //Para o exercício de prática de polimorfismo vamos fazer um sistema para
 // auxiliar o cálculo de contas de energia elétrica para uma concessionária
 // famosa. Basicamente, o custeamento depende do tipo do cliente. O valor base 
 //de cada kWh (unidade de consumo de energia) é R$0.75. O Cliente Residencial 
 //paga a tarifa cheia(ou seja, R$0.75). O Cliente Comercial possui um
 // desconto de 30% do valor total (ou seja, paga R$0.53).
 // Por fim, para o Cliente Industrial, há um desconto de 40% do valor total 
 //(ou seja, paga R$0.45) mais um valor fixo de R$100,00 por máquina usada na 
 //fábrica.
//Exercicio 1
//Comece criando um objeto dessa interface, 
//colocando a tipagem correta. Perceba que você terá que dar uma implementação
// para o método `calculateBill()`. Por enquanto, implemente de tal forma que
// sempre retorne `2` (ou qualquer outro número). Imprima todas as informações
// que forem possíveis no terminal.

//a) *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?*
 export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }
  const client1: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
      return 2;
    }
}
//a) Quais propriedades você conseguiu imprimir?
// Teve alguma que não foi possível? Por que isso aconteceu?
//R= todas podem ser impressas
console.log(client1.calculateBill())
//Exercicio 2
//Essa classe é abstrata porque está representando um tipo de informação que 
//simplesmente abstrai e armazena as características em comum de um conjunto
// de outras classes. Por ser abstrata, não podemos criar uma instância dela.
// Essa é uma
 //regra da Programação Orientada a Objetos e válida para todas as linguagens.
 //a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe
 // (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
 //R=Não da pra criar uma instancia de uma classe abstrata

 export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }