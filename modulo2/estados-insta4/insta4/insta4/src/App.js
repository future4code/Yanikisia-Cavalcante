import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const PostAdicionado=styled.div`
  display:flex;
  flex-direction: column;
  margin-bottom: 10px;
  
  input{
    margin-bottom:4px;
  }
`
class App extends React.Component {
  state={
    inputUsuario:"",
    inputFotoPerfil:"",
    inputFotoPost:"",

    post:[
      {  
      nomeUsuario:'paulinha',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
    },
    { 
      nomeUsuario:'Ana julia',
      fotoUsuario:'https://picsum.photos/50/50?a=2',
      fotoPost:'https://picsum.photos/200/150?a=4',
    },
    { nomeUsuario:'Zéziho',
      fotoUsuario:'https://picsum.photos/50/50?a=1',
      fotoPost:'https://picsum.photos/200/150?a=5'
    },
    ]
}
  guardarNome=(event)=>{
    this.setState({ inputUsuario: event.target.value })
  }
  guardarFotoUsuario=(event)=>{
    this.setState({ inputFotoPerfil: event.target.value })
  }
  guardarFotoPost=(event)=>{
    this.setState({ inputFotoPost: event.target.value })
  }
  adicionarPost=()=>{
    const novoPost={
      nomeUsuario:this.state.inputUsuario,
      fotoUsuario:this.state.inputFotoPerfil,
      fotoPost:this.state.inputFotoPost
    }
    const copia=[...this.state.post,novoPost]
    this.setState({post:copia})
    this.setState({ inputUsuario: "", inputFotoPerfil: "", inputFotoPost:""});
  }
  render() {
    const componentes=this.state.post.map((p,index)=>{
      return (
        <Post key={index}
          nomeUsuario={p.nomeUsuario}
          fotoUsuario={p.fotoUsuario}
          fotoPost={p.fotoPost}
        />
      )
    })
    console.log(componentes.nomeUsuario)
    return (
     <MainContainer>
       {componentes}
       <PostAdicionado>
       <input  placeholder="coloque o seu nome " value={this.state.inputUsuario} onChange={this.guardarNome} />
       <input value={this.state.inputFotoPost} onChange={this.guardarFotoPost} placeholder={"coloque um url para o  post"}/>
       <input value={this.state.inputFotoPerfil} onChange={this.guardarFotoUsuario} placeholder={"coloque um url para o perfil"}/>
       <button onClick={this.adicionarPost} >Adicionar post</button>
       </PostAdicionado>
     </MainContainer>
   
      
    );
  }
}

export default App;
