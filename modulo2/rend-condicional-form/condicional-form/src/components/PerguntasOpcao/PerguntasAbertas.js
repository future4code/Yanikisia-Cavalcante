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


class PerguntasAbertas extends React.Component {

  render() {

    return (
      <Container>
          <p>{this.props.perguntas}</p>
        <input />
     
      </Container>
    );
  }
}

export default PerguntasAbertas;
