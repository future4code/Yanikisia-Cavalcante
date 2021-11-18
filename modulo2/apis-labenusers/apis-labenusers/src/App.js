import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import ListaUsers from '../src/components/ListaUsers'
import UserCadastre from '../src/components/UserCadastre'


 const MainComponent=styled.div ` 
  
  background-color: #D8DCD6;
  height: 100vh;
  padding: 20px;
  body{
    background-color: #D8DCD6;
  }
 `


class App extends React.Component {
  state = {
    page:true
  }
 
  handleChangePage=()=>{
    this.setState({page: !this.state.page})
  }

  render(){
  let paginas=this.state.page? <UserCadastre />:  <ListaUsers />

    return (
      <MainComponent>
        <button onClick={this.handleChangePage}>{this.state.page? 'Voltar para o cadastro' : 'ir para Lista de usuarios' }</button>
        {paginas}
      </MainComponent>
    );
  }

}
export default App;

