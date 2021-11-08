import React from "react";
import styled from "styled-components";

const Container=styled.div ` 
  display: flex;
    flex-direction: column;
    align-items: center;
    button{
       margin: 9px ;
   }
`

const Lista= styled.div ` 
    display: flex;
    flex-direction: column;
    align-items: center;

`

class Etapa1 extends React.Component {
    state={
    valorInputPessoa: "",
    valorInputIdade: "",
    valorInputEmail: ""
    }
  render() {
  
    return (
      <Container>
        <h1>Etapa 1-Dados Gerais</h1>
        <Lista><p>1.Qual seu nome?</p>
        <input value={this.state.valorInputPessoa}/>
        </Lista>
        <Lista><p>1.Qual sua idade?</p>
        <input value={this.state.valorInputIdade}/>
        </Lista>
        <Lista><p>1.Qual seu email?</p>
        <input value={this.state.valorInputEmail}/>
        </Lista>
        <Lista><p>1.Qual seu escolaridade?</p>
        <select>
        <option value="Ensino médio incompleto"> Ensino médio incompleto</option>
        <option value="Ensino médio completo"> Ensino médio completo</option>
        <option value="Ensino superior incompleto"> Ensino superior incompleto</option>
        <option value="Ensino superior completo"> Ensino superior Completo</option>
       
        </select>
        </Lista>
     
      </Container>
    );
  }
}

export default Etapa1;