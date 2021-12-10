import React,{useState,useEffets} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HomeContainer=styled.section`
    width:100%;
    height:100%;
`
const MainContainer=styled.section`
    background-color: black;
    width: 100%;
    height: 82%;
    display:flex;
    flex-direction: column;
`
const FirstSection=styled.section` 
    width: 100%;
    height:100% ;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    div{

    font-size: 1.5em;
    font-weight: 700;
    height: 80%;
    width: 40%;
    padding: 10px;
    border-radius: 0.25em;
    display: table-cell;
    vertical-align: middle;
    letter-spacing: -2px;
    box-shadow: 0.3px 5px 10px 0 rgba(0,0,0,0.6);
    color: #fff;
    background: -webkit-linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
    background: -o-linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
    background: -moz-linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
    background: linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
    background-size: cover;
    background-position: 50% 21%;
    text-align: right;
    }
`
const SecondSection=styled.section` 
    width:100%;
    height:100%;
    background-color: wheat;
`
const StyledHeader=styled.header` 
    width:100%;
    height: 10vh;
    background-color:#FA7C30;
    display:grid;
    grid-template-columns: 0.3fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
`
const StyledFooter=styled.footer` 
    width:100%;
    height:5vh;
`
export default function HomePage(){
    const history = useHistory();

    const goToAboutPageInEn = () => {
      history.push("/about/en");
    };
  
    const goToAdmPage = () => {
      history.push("/login");
    };
  
    const goToTripListPage = () => {
      history.push("/tripsList");
    };
    return(
        <HomeContainer>
            <StyledHeader>
                <img/>
                <p>GoodTrip</p>
                <button>Sobre Nós</button>
                <button onClick={goToAdmPage}>Area ADM</button>
            </StyledHeader>
        <MainContainer>
           <FirstSection>
               <div>
                   <p>Descubra</p> <p>novas</p> <p>aventuras</p> pelo universo
               </div>
               <button onClick={goToTripListPage}>viagens</button>
           </FirstSection>
           <SecondSection>
               <section>
                   <img/>
                   <section>
                       <p>INformaçoes viagen</p>
                   </section>
               </section>
           </SecondSection>
          </MainContainer>
          <StyledFooter>
              <p>Redes Sociais</p>
              <img/>
              <img/>
              <img/>
          </StyledFooter>
        </HomeContainer>
    )
}