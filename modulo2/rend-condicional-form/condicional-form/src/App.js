import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
 import styled from "styled-components";

const BotaoChato=styled.button ` 
margin-left: 630px;
margin-top: 6px;
`
class App extends React.Component {
state={
  etapa:1
}
renderizaEtapa=()=>{
  switch (this.state.etapa) {
    case 1:
      return <Etapa1 />;
      break;
    case 2:
      return <Etapa2 />;
      break;
    case 3:
      return <Etapa3 />;
      break;
    case 4:
      return <Final />;
      break;
    default:
      return <p> Nenhuma página escolhida</p>;
  }
}
irParaProximaEtapa=()=>{
  this.setState({etapa: this.state.etapa+1})
}
  render() {
  
    return (
      <div>
        {this.renderizaEtapa()}
      {this.state.etapa<4 && ( <BotaoChato onClick={this.irParaProximaEtapa}>Próxima etapa</BotaoChato> )}
    </div>
    );
  }
}

export default App;
