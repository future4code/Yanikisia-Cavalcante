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


class PerguntasFechadas extends React.Component {
  mostarOpcaoSelect=(event)=>{
    console.log(event.target.value)

  }
  render() {
      const opcoesRecebidas=this.props.opcoes
    const componentes = opcoesRecebidas.map((p,index) => {
        return <option key={index} value={p}>{p}</option>
      });
    return (
      <Container>
          <p>{this.props.pergunta}</p>
        <select onChange={this.props.selecao}>
            {componentes}
        </select>
     
      </Container>
    );
  }
}

export default PerguntasFechadas;