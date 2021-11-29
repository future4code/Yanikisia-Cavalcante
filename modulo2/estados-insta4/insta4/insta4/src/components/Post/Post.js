import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilha} from '../SecaoCompartilha/SecaoCompartilha'
import iconeSalvar from "../../img/bookmark_border_black_24dp.svg"
import iconeSalvo from "../../img/bookmark_black_24dp.svg"
import iconeCompartilhar from "../../img/send_black_24dp.svg"

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvar: false,
    compartilhar:false
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,numeroCurtidas:this.state.numeroCurtidas+1
    })
    if(this.state.numeroCurtidas>=1){
      this.setState({
        curtido:false,numeroCurtidas:0
      })
    }
  }
  onClickSalvar = () => {
    this.setState({
      salvar: !this.state.salvar
    })
  
  }

  onClickComentario = () => {

    this.setState({
      comentando: !this.state.comentando
    })
  }
  onClickCompartilhar = () => {

    this.setState({
      compartilhar: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }
  aoCompartilhar = () => {
    this.setState({
      compartilhar: false
    })
  }

  render() {
    let iconeCurtida
    let iconeDeSalvar
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }
   
    if (this.state.salvar){
      iconeDeSalvar=iconeSalvo
    } else{
      iconeDeSalvar=iconeSalvar
    }


    let componenteComentario
    let componenteCompartilhar
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    if(this.state.compartilhar){
      componenteCompartilhar=<SecaoCompartilha aoEnviar={this.aoCompartilhar}/>
  
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
         
        />
       <img onClick={this.onClickSalvar} src={iconeDeSalvar} alt={'Imagem de salvar'}/>
       <img onClick={this.onClickCompartilhar} src={iconeCompartilhar} alt={'Imagem de compartilhar'} />
      </PostFooter>
      {componenteComentario}
      {/* {componenteCompartilhar,iconeCompartilhamento='https://brasscom.org.br/wp-content/uploads/2019/09/Icone-facebook-1.png'}
           */}
    </PostContainer>
  }
}

export default Post