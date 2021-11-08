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

class Etapa2 extends React.Component {
    state={
    valorInputPessoa: "",
    valorInputIdade: "",
    valorInputEmail: ""
    }
  render() {
  
    return (
      <Container>
        <h3>Etapa 2- INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <Lista><p>5 .Qual seu curso?</p>
        <input value={this.state.valorInputPessoa}/>
        </Lista>
        <Lista><p>6.Qual a unidade de ensino??</p>
        <input value={this.state.valorInputIdade}/>
        </Lista>
    
      </Container>
    );
  }
}
export default Etapa2;