import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imagem from './imagem/WhatsApp Image 2021-11-03 at 13.00.46.jpeg'
import {CardPequeno} from './components/CardPequeno/CardPequeno';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
`

const App2= styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

`
const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
  h2{
    display: flex;
  justify-content: center;
  margin-bottom: 20px;
  }
`


function App() {
  return (
      <App2>
      <GlobalStyle/>
      <PageSectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imagem}
          nome="Yanikisia" 
          descricao="Oi, eu sou o Yanikisia. Sou aluna da Labenu. Tenho 21 anos, sou tecnológa em jogos digitais formada em 2021. Amo cozinhar e aprender."
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno
        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVeJQDD63WA5_nJZXNCQ9GV6hUcemk5d75QnBH2OgM4396YupO4mHuECEndRAy61DS1pc&usqp=CAU"
        email= "Email:"
        descricaoEmail="alunaLabenu@gmail.com"
        />
        <CardPequeno
        imagem="https://www.jacui.mg.leg.br/imagens/local.png/image_preview"
        endereco="Endereço:"
        descricaoEndereco="Rua gonçalvez Dias"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://t.ctcdn.com.br/hvGx3b_vvT3_QH9eacAEj-L2EmM=/400x400/smart/i490082.jpeg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
      </App2>
  );
}

export default App;
