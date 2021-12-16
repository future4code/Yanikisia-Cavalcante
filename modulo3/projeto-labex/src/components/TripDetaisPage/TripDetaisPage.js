import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { useProtectedPage } from "../Hooks/useProtectedPage"
import IconeAprove from "../images/iconeOk.svg"
import IconeDelete from "../images/iconeX.svg"
import LogoIcon from "../images/logo.svg"
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
const FirstContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
   
`
const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 1px 0px;
    border-radius: 4px;
    margin: 18px;
    width: 90%;
    p{
        margin:1%;
    }
    h1{
        margin:1%;
    }

`
const ContainerCandidates = styled.section` 
    display: flex;
    flex-direction: column;
    width: 90%;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 1px 0px;
    border-radius: 4px;
    margin: 18px;
    grid-column-start:1;
    box-sizing: inherit;
 
`
const DivCandidates = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid slategray;
    p{
        margin:1%;
    }
    
`
const POfDecision = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        margin-right:6px;
    }
    button{
         margin-left: 10px;
         border:none;
         background:none;
    }
    img{
        width: 28px;
        padding: 4px;
    }

`

const MainContainer = styled.section`
    display: grid;
    grid-template-columns: 60% 33%;
    grid-template-rows: 1fr;
    width: 100vw;
    align-items: start;
    justify-items: center;
 `
const AprovCande = styled.section`
    grid-row-start:1;
    grid-row-end:2;
    grid-column-start:2;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 10px 8px;
    border-radius: 4px;
    margin-top: 1%;
    width: 90%;
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
export default function TripDetaisPage() {
    useProtectedPage()
    const history = useHistory()
    const pathParams = useParams()
    const [data, setData] = useState('')
    const [update,setUpdate]=useState(false)
    const id = pathParams.id
    const token = localStorage.getItem('token')
    const header = {
        headers: {
            auth: token
        }
    }

    const goBack = () => {
        history.goBack()
    }

    const chooseCadidate = (idCandidate, choose) => {
        const body = {
            approve: choose
        }
        axios
            .put(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/yanikisia-carver/trips/${id}/candidates/${idCandidate}/decide`, body,header)
            .then((ans) => {
                setUpdate(!update)
                console.log(ans.data)
            }).catch((err)=>{
                console.log(err)
            })
         
    }

    const longout=()=>{
        localStorage.clear()
        if(localStorage.length>0){
            
        }
        else{
            console.log("longout")
            setUpdate(!update)
        }
    }
    useEffect(() => {
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/yanikisia-carver/trip/${id}`, header
            )
            .then((ans) => {
                console.log(ans.data);
                setData(ans.data.trip)
            })
            .catch((error) => {
                console.log("Deu erro: ", error.response);
            });
    }, [update]);

    const card =
        <CardStyled>
            <h1>Detalhe da viagem {data.name}</h1>
            <p>Nome: {data.name}</p>
            <p>Descrição: {data.description}</p>
            <p>Planeta:{data.planet}</p>
            <p>Data: {data.date}</p>
            <p>Duração em dias: {data.durationInDays}</p>
        </CardStyled>

    const candidates = data.candidates && data.candidates.map((candidate) => {
        return (
            <DivCandidates>
                <POfDecision>
                    Nome:{candidate.name}
                    <div>
                        <button onClick={()=>chooseCadidate(candidate.id,true)}><img src={IconeDelete} alt="icone de aprovar" /></button>
                        <button onClick={()=>chooseCadidate(candidate.id,false)}><img src={IconeAprove} alt="icone butao deletar" /></button>
                    </div>
                </POfDecision>
                <p>Idade: {candidate.age}</p>
                <p>Texto de aplicação: {candidate.applicationText}</p>
                <p>Profissão: {candidate.profession}</p>
                <p>Pais: {candidate.country}</p>
            </DivCandidates>
        )
    })

    const aprovedCandidates = data.approved && data.approved.map((candidate) => {
        return (
            <DivCandidates>
                <h2>Aprovados</h2>
                <p>Nome:{candidate.name}</p>
            </DivCandidates>
        )
    })


    return (

        <FirstContainer>
            <StyledHeader>
                <StyledButton onClick={goBack}>Voltar</StyledButton>
                <img src={LogoIcon} />
                <p>GoodTrip</p>
                <StyledButton onClick={longout}>Longout</StyledButton>
            </StyledHeader>
            <MainContainer>
                <section>
                {card}
                <ContainerCandidates>
                    <h2>Candidatos</h2>
                  
                    {data.candidates !== undefined && data.candidates.length !== 0 ? candidates : <p>sem candidatos no momento</p>}
                </ContainerCandidates>
                </section>
                <AprovCande>
                    {data.approved !== undefined && data.approved.length !== 0 ? aprovedCandidates : <p>sem candidatos aprovados no momento</p>}
                </AprovCande>
            </MainContainer>
        </FirstContainer>
    )
}