import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import ListaUsers from '../src/components/ListaUsers'
import UserCadastre from '../src/components/UserCadastre'


 const MainComponent=styled.div ` 
  background-color: #D8DCD6;
  height: 100vh;
  padding: 20px;
 `


class App extends React.Component {
  state = {
    users:[],
    inputValueName: "",
    inputValueEmail: "",
    page:true
  }
  componentDidMount() {
    this.getUsers()
  }
  handleInputChangeName = (e) => {
    this.setState({ inputValueName: e.target.value });
  }
  handleInputChangeEmail = (e) => {
    this.setState({ inputValueEmail: e.target.value });
  }

  getUsers=()=>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    {
      headers: {
        Authorization: "yanikisia-kathlyn-carver"
      }
    }
    ).then((answ)=>{
      this.setState({users:answ.data})
    }).catch((err)=>{
      alert(err.response.data)
    })
  }

  createUser=()=>{
    const body={
      name:this.state.inputValueName,
      email:this.state.inputValueEmail
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    body,
    {
      headers: {
        Authorization: "yanikisia-kathlyn-carver"
      }
    }
    ).then((answ)=>{
      alert("parabens, usuario cadastrado")
      this.setState({inputValueName: ""})
      this.getUsers()
    }).catch((erro)=>{
      alert("algum erro aconteceu, por favor, tente novamente")
      console.log(erro.response.data)
    })
  }

  deletUser=(event)=>{
    const id=event.target.value
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    {
      headers: {
        Authorization: "yanikisia-kathlyn-carver"
      },
      data: {
        source: id
      }
    }).then((answ)=>{ 
      alert("parabens, usuario excluido")
      this.getUsers()
  }).catch((erro)=>{
    alert("algum erro aconteceu, por favor, tente novamente")
    console.log(erro.response.data)
  })
  }
  handleChangePage=()=>{
    this.setState({page: !this.state.page})
  }

  render(){
  let paginas=this.state.page? <UserCadastre
  handleInputChangeName={this.handleInputChangeName} 
  handleInputChangeEmail={this.handleInputChangeEmail}
  createUser={this.createUser}
  />:  <ListaUsers 
  deletUser={this.deletUser}
  users={this.state.users}
  />

    return (
      <MainComponent>
        <button onClick={this.handleChangePage}>{this.state.page? 'Voltar para o cadastro' : 'ir para Lista de usuarios' }</button>
        {paginas}
      </MainComponent>
    );
  }

}
export default App;

