import React from 'react';
import styled from 'styled-components';
 import ListaPlaylist from './components/ListaPlaylist';
 import CreatePlaylist from './components/CreatePlaylist';

 const AppContainer=styled.div`
 *{
  
  font-family: 'Brush Script MT', cursive;

 } 
  display:grid;
  grid-template-columns: 1fr 4fr ;

  background: -webkit-linear-gradient(-180deg, rgb(147, 204, 255), rgb(0, 0, 0));
background: linear-gradient(-180deg, rgb(147, 204, 255), rgb(0, 0, 0));

 height: 100vh;
  text-align: center;
  h2{
    margin-top: 0;
  }
  button{
    border:none;
    border-radius: 10px;
    background-color: #42B395;
    box-shadow: 1px 2px 8px 3px #7798B6;
  
  }
 `

 class App extends React.Component {
  state={
    page:true
}
handleChangePage=()=>{
   this.setState({page: !this.state.page})
 }


  render(){
    let paginas=this.state.page? <CreatePlaylist />:  <ListaPlaylist />
    return (
      <AppContainer>
      
        <CreatePlaylist />
        <ListaPlaylist />
     
      </AppContainer>
    )
  }

}
export default App

