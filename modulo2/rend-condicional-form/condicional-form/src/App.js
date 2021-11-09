import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";
import PerguntasFechadas from "./components/PerguntasOpcao/PerguntasFechadas";

const BotaoChato = styled.button` 
margin-left: 630px;
margin-top: 6px;
`
class App extends React.Component {
  state = {
    etapa: 1
  }
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 selecao={this.mostarOpcaoSelect} />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <p> Nenhuma página escolhida</p>;
    }
  }
  mostarOpcaoSelect=(event)=>{
    console.log(event.target.value)
    if(((event.target.value)==="Ensino médio incompleto") || (((event.target.value)==="Ensino médio completo")))
    {
      this.setState({ etapa: this.state.etapa + 2 })
    }
    else if (((event.target.value)==="Ensino superior incompleto") || (((event.target.value)==="Ensino superior completo")))
    {
      this.setState({ etapa: this.state.etapa + 1 })
    }
  }
  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }
  render() {

    return (
      <div>
        {this.renderizaEtapa()}
      
        {this.state.etapa < 4 && (<BotaoChato onClick={this.irParaProximaEtapa}>Próxima etapa</BotaoChato>)}
       
      </div>
    );
  }
}

export default App;
