import React from "react";
import styled from "styled-components";
import PerguntasAbertas from "../components/PerguntasOpcao/PerguntasAbertas"

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
        <Lista>
            <PerguntasAbertas perguntas={"5. Qual seu curso?"} />
        </Lista>
        <Lista>
            <PerguntasAbertas perguntas={"6. Qual unidade de ensino?"} />
        </Lista>
      </Container>
    );
  }
}
export default Etapa2;