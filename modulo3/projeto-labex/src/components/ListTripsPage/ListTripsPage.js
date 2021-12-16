import styled from "styled-components";
import { useHistory } from "react-router";
import { useRequestData } from "../Hooks/useRequestData";
import { FaFacebookF,FaInstagram,FaGithub,FaTwitter } from 'react-icons/fa';
import LogoIcon from "../images/logo.svg"
const ContainerListPage = styled.section` 
    width: 100%;
    height: 100%;
    h1{ 
        margin-bottom: 1.2px;
    }

`
const StyledHeader = styled.header` 
    width:100%;
    height: 10vh;
    background-color:#FA7C30;
    display:grid;
    grid-template-columns: 1fr 0.3fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    p{
        font-size: 2em;
        font-weight: 700;
        color: #fff3c3;
        margin:0;
        justify-self: flex-start;
    }
    img{
        width: 80px;
    }
`
const MainContainer = styled.section` 
    padding-bottom: 12vh;
    margin-top: 2%;
    width: 100%;
    min-height: 30%;
    display: grid;
    grid-template-columns: repeat(2, 76vh);
    justify-content: space-around;
 
`


const CardStuled=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 1px 0px;
    border-radius: 4px;
    margin: 8px;
    width: 100%;
    p{
        margin:1%
    }

`
const StyledButton = styled.button`
  border-color: #fa7c30;
  padding: 0.2em 1em;
  cursor: pointer;
  font-size: 1em;
  color: #ffffff;
  border-radius: 10px;
  background-image: linear-gradient(45deg, #fa7c30 50%, #000000 50%);
  background-position: 25%;
  background-size: 400%;
  -webkit-transition: background 500ms ease-in-out, color 500ms ease-in-out;
  transition: background 500ms ease-in-out, color 500ms ease-in-out;
 
  :hover{
    color: #ffffff;
  background-position: 100%;
  }
  `
const StyledFooter = styled.footer` 
  width:100%;
height:8vh;
display: inline-flex;
background-color:#FA7C30;
align-items: center;
justify-content: center;
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:focus,
*:active {
    outline: none !important;
    -webkit-tap-highlight-color: transparent;
}

body {
    display: grid;
    height: 100%;
    width: 90%;
    font-family: "Poppins", sans-serif;
    place-items: center;
    background: linear-gradient(315deg, #ffffff, #d7e1ec);
}
svg{
    position: relative;
    background-color: #ffffff;
    border-radius: 50%;
    padding: 7px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

}
a{
   color: black;
   text-decoration: none;
}

`



const Facebook = styled.section`
position: relative;
background-color: #ffffff;
border-radius: 50%;
margin: 10px;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow: 0 10px 10px rgb(0 0 0 / 10%);

transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

svg{
    :hover{
   background-color:  #3b5999;
   color: #ffffff;
    }
}

`
const Instagram = styled.section`
position: relative;
background-color: #ffffff;
border-radius: 50%;
margin: 10px;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow: 0 10px 10px rgb(0 0 0 / 10%);
cursor: pointer;
transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
svg{
    :hover{
   background-color:  #e1306c;
   color: #ffffff;
    }
}

`
const Twitter = styled.section`
position: relative;
background-color: #ffffff;
border-radius: 50%;
margin: 10px;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow: 0 10px 10px rgb(0 0 0 / 10%);
cursor: pointer;
transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
svg{
    :hover{
        background-color: #46c1f6;
        color:#ffffff;
    }
}

`
const Github = styled.section`
position: relative;
background-color: #ffffff;
border-radius: 50%;
margin: 10px;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow: 0 10px 10px rgb(0 0 0 / 10%);
cursor: pointer;
transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
svg{
    :hover{
    background-color: #333333;
   color: #ffffff;
    }
}

`

function ListTripsPage() {
    const history=useHistory()
    const trips=useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/yanikisia-carver/trips")
    const goToForm=()=>{
        history.push("/applicationForm")
    }
    const goBack=()=>{
        history.goBack()
    }

    const listedTrips= trips[0] && trips[0].map((trip)=>{
        return (
            <CardStuled>
            <p>Nome: {trip.name}</p>
            <p>Descrição: {trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração em dia: {trip.durationInDays}</p>
            <p>Data: {trip.date}</p>
        </CardStuled>
        )
    })

    return (
        <ContainerListPage>
            <StyledHeader>
            <StyledButton onClick={goBack}>Voltar</StyledButton>
                <img src={LogoIcon} />
                <p>GoodTrip</p>
                <StyledButton onClick={goToForm}>inscrever-se</StyledButton>
             </StyledHeader>
                <h1>Lista de viagens</h1>
                < MainContainer>
                {listedTrips}
            </MainContainer>
            <StyledFooter>
            <Facebook>
                <a href="https://www.facebook.com/" target="_blank"><span><FaFacebookF/></span></a>
                </Facebook>
                <Twitter>
                <a href="https://www.twitter.com/" target="_blank"><span><FaTwitter/></span></a>
                </Twitter>
                <Instagram>
                <a href="https://www.instagram.com/" target="_blank"><span><FaInstagram/></span></a>
                </Instagram>
                <Github>
                <a href="https://www.github.com/" target="_blank"><span><FaGithub/></span></a>
                </Github>
            </StyledFooter>
        </ContainerListPage>
    )
}
export default ListTripsPage