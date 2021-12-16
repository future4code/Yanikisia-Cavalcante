import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FaFacebookF,FaInstagram,FaGithub,FaTwitter } from 'react-icons/fa';
import LogoIcon from "../images/logo.svg"
const HomeContainer = styled.section`
*{
    margin: 0;
    padding: 0;
}
    width:100%;
    height:100%;
`
const MainContainer = styled.section`
    background-color: #fa7c307a;
    width: 100%;
    height: 82%;
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
`
const FirstSection = styled.section` 
    width: 100%;
    height:100% ;
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
const SecondSection = styled.section` 
    width:100%;
    height:100%; 
    display: flex;
    align-items: center;
    section{
        display: flex;
        align-items: center;
        width: 20%;
        height: 30vh;
        background-color:violet;
        margin-left:17%;
        padding: 0.6em 2em;
         border: none;
        outline: none;
        color: rgb(255, 255, 255);
        background: #111;
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 10px;
        box-shadow: 0.3px 5px 10px 0 rgba(0,0,0,0.6);
        ::before{
            content: "";
            background: linear-gradient(
            45deg,
            #f7921e,
            #f82f51,
            #f05924,
            #f04a22,
            #ffb096,
            #fc521a,
            #fc3232,
            #fffebc,
            #fffb003d
        );
        position: absolute;
         top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowingbn5 20s linear infinite;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        border-radius: 10px;
        box-shadow: 0.3px 5px 10px 0 rgba(0,0,0,0.6);
  }
    @keyframes glowingbn5 {
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 400% 0;
    }
    100% {
        background-position: 0 0;
    }
    }   
    :active{
        color: #000;
    }
    :active::after{
        background: transparent;
    }
    :hover::before{
        opacity: 1;
    }
    ::after{
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:url("https://conteudo.imguol.com.br/c/noticias/44/2021/07/09/planeta-terra-visto-do-espaco-1625856127096_v2_450x337.jpg");
    background-position:center;
    left: 0;
    top: 0;
    border-radius: 10px;
    }
    p{
        margin-top: 22px;
        color:white;
        font-weight: 900;
    }
    
    }
    div{
        display: flex;
        align-items: center;
        width: 20%;
        height: 30vh;
        background-color:violet;
        margin-left:17%;
        padding: 0.6em 2em;
         border: none;
        outline: none;
        color: rgb(255, 255, 255);
        background: #111;
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 10px;
        box-shadow: 0.3px 5px 10px 0 rgba(0,0,0,0.6);
        ::before{
            content: "";
            background: linear-gradient(
            45deg,
            #f7921e,
            #f82f51,
            #f05924,
            #f04a22,
            #ffb096,
            #fc521a,
            #fc3232,
            #fffebc,
            #fffb003d
        );
        position: absolute;
         top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowingbn5 20s linear infinite;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        border-radius: 10px;
        box-shadow: 0.3px 5px 10px 0 rgba(0,0,0,0.6);
  }
    @keyframes glowingbn5 {
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 400% 0;
    }
    100% {
        background-position: 0 0;
    }
    }   
    :active{
        color: #000;
    }
    :active::after{
        background: transparent;
    }
    :hover::before{
        opacity: 1;
    }
    ::after{
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:url("https://cdn.techexplorist.com/wp-content/uploads/2020/10/exoplanets.jpg");
    background-position:center;
    background-size: cover;
    left: 0;
    top: 0;
    border-radius: 10px;
    }
    p{
        margin-top: 22px;
        color:white;
        font-weight: 800;
    }
    }
`
const StyledButton = styled.button`
    grid-column-start:4;
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
const StyledButtonTrip = styled.button`
   -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
	-webkit-tap-highlight-color: transparent;
    width: 150px;
	height: 50px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	color: black;
	background: #fdc09c;
	border: 2px solid #fa7c30;
    border-radius: 10px;
	box-shadow: 5px 5px 0 #fa7c30,
		-5px -5px 0 #fa7c30,
		-5px 5px 0 #fa7c30,
		5px -5px 0 #fa7c30;
	transition: 500ms ease-in-out;
    :hover {
	    box-shadow: 20px 5px 0 #f7921e, -20px -5px 0 #f7921e;
    }

    :focus {
	outline: none;
    }
  
  `
const StyledHeader = styled.header` 
    width:100%;
    height: 10vh;
    background-color:#FA7C30;
    display:grid;
    grid-template-columns: 0.3fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    p{
        justify-self: self-start;
        font-size: 2.1em;
        font-weight: 700;
        color: #fff3c3;
    }
    img{
        width: 80px;
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

export default function HomePage() {
    const history = useHistory();


    const goToAdmPage = () => {
        history.push("/login");
    };

    const goToTripListPage = () => {
        history.push("/tripsList");
    };
    return (
        <HomeContainer>
            <StyledHeader>
                <img src={LogoIcon} />
                <p>GoodTrip</p>
                <StyledButton onClick={goToAdmPage}>Area ADM</StyledButton>
            </StyledHeader>
            <MainContainer>
                <FirstSection>
                    <div>
                        <p>Descubra</p> <p>novas</p> <p>aventuras</p> pelo universo
                    </div>
                    <StyledButtonTrip onClick={goToTripListPage}>viagens</StyledButtonTrip>
                </FirstSection>
                <SecondSection>
                    <div> <p>Entre nebulosas e estrelas, encontre seu caminho para uma nova aventura.</p> </div>
                    <section><p>Descubra novas possibilidades e venha explorar o cosmos conosco e outros vários aventureiros</p></section>

                </SecondSection>
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
        </HomeContainer>
    )
}