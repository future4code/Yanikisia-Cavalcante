import React from "react";
import styled from "styled-components";
import PerguntasAbertas from "../components/PerguntasOpcao/PerguntasAbertas"
import PerguntasFechadas from "../components/PerguntasOpcao/PerguntasFechadas"

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
        <Lista>
            <PerguntasAbertas perguntas={"1.Qual seu nome?"} />
        </Lista>
        <Lista>
            <PerguntasAbertas perguntas={"2.Qual sua idade?"} />
        </Lista>
        <Lista>
            <PerguntasAbertas perguntas={"3.Qual seu email?"} />
        </Lista>

        <Lista>
        <PerguntasFechadas
          selecao={this.props.selecao}
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
        </Lista>
     
      </Container>
    );
  }
}

export default Etapa1;