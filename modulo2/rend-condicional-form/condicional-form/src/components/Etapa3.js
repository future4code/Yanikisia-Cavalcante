import React from "react";
import styled from "styled-components";

const Container=styled.div ` 
*{
    margin:0;
    padding: 0;
}
    margin-top:20px;
  display: flex;
    flex-direction: column;
    align-items: center;
    button{
       margin: 9px ;
   }
`

const Lista= styled.div ` 
    margin:12px ;
    display: flex;
    flex-direction: column;
    align-items: center;


`
const  PEstilizado= styled.p`
margin-bottom:16px ;
`

class Etapa3 extends React.Component {
    state={
    valorInputPessoa: "",
    valorInputIdade: "",
    valorInputEmail: ""
    }
  render() {
  
    return (
      <Container>
        <h3>Etapa 3- INFORMAÇÕES GERAIS DE ENSINO</h3>
        <Lista>
        <PEstilizado>5 .Por que você não terminou um curso de graduação?</PEstilizado>
        <input value={this.state.valorInputPessoa}/>
        </Lista>
        <Lista><PEstilizado>6.Qual a unidade de ensino??</PEstilizado>
      <select>
      <option value="Nenhum">Nenhum</option>
      <option value="Curso Técnico">Curso Técnico</option>
      <option value="Curso de inglês">Curso de inglês</option>
      </select>
        </Lista>
     
      </Container>
    );
  }
}
export default Etapa3;