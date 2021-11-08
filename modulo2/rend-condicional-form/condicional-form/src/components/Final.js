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
const  PEstilizado= styled.p`
margin-top:16px ;
`

class Final extends React.Component {
    state={
    valorInputPessoa: "",
    valorInputIdade: "",
    valorInputEmail: ""
    }
  render() {
  
    return (
      <Container>
        <h3>O FORMULÁRIO ACABOU</h3>
        <PEstilizado>Muito obrigado por participar! Entraremos em contato!</PEstilizado>
      </Container>
    );
  }
}
export default Final;