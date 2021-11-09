import React from "react";
import styled from "styled-components";
import PerguntasAbertas from "../components/PerguntasOpcao/PerguntasAbertas"
import PerguntasFechadas from "../components/PerguntasOpcao/PerguntasFechadas"
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
            <PerguntasAbertas perguntas={"5 .Por que você não terminou um curso de graduação?"} />
        </Lista>
        <Lista>
        <PerguntasFechadas
          pergunta={"6.Qual a unidade de ensino?"}
          opcoes={[
            "Nenhum",
            "Curso Técnico",
            "Curso de Ingês"
          ]}
        />
        </Lista>
     
      </Container>
    );
  }
}
export default Etapa3;