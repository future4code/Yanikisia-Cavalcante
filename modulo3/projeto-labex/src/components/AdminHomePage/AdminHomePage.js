import React, { useState, useEffets } from "react";
import styled from "styled-components";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useRequestData } from "../Hooks/useRequestData";
import DeleteIcon from "../images/delete.svg"
import axios from "axios";
import { baseURL } from "../Hooks/Data";
import { useHistory } from "react-router";
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
const MainContainer = styled.section` 
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    justify-content: flex-start;
    align-items: center;
    h1{
        font-size: 2em;
        font-weight: 700;
        color: #FA7C30;
        
    }
    form{
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        width: 500px;
    input{
        width: 100%;
        height: 30px;
        border-radius: 10px;
        padding: 4px 8px;
        border-width: 1px;
        border-color: gray;
        margin: 0px 0px 15px;
     }
    }
`
const DivBoss=styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`
const CardStuled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 1px 0px;
    border-radius: 4px;
    margin: 8px;
    width: 80%;
    margin-bottom: 10px;
    p{
        margin:1%
    }
    img{
        padding:10px;
    }
    div{
        width: 90%;
        display: flex;
        justify-content: flex-start;
        p{
            padding: 4px;
        }
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
const StyledButtonMainContainer = styled.button`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    width: 150px;
    height: 25px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #f05924;
    background: #fdc09c;
    margin-bottom: 10px;
    border: 1px solid #fa7c30;
    border-radius: 10px;
    box-shadow: 3px 3px 0 #fa7c30,
     -3px -3px 0 #fa7c30,
     -3px 3px 0 #fa7c30,
     3px -3px 0 #fa7c30;
    transition: 500ms ease-in-out;
    :hover {
     box-shadow: 20px 5px 0 #f7921e, -20px -5px 0 #f7921e;
    }

    :focus {
    outline: none;
    }

`

export default function AdminHomePage() {
    useProtectedPage()
    const history=useHistory()
    let trips = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/yanikisia-carver/trips")
    let [update,setUpdate]=useState(false)

    const deleteTrips = (id, name) => {
        const token = localStorage.getItem("token");
        if (window.confirm("Delete the item?")) {
            axios.delete(`${baseURL}${"/trips/"}${id}`, {
                headers: {
                    auth: token
                }
            }).then((ans) => {
                alert("a viagem foi excluida com sucesso")
            }).catch((err) => {
                alert("Alguma coisa deu errado")
                console.log(err)
            })
        }
    }

    const goBack=()=>{
        history.push("/")
    }

    const goToDetais=(id)=>{
       
        history.push(`/tripDetais/${id}`)
    
    }
  
    const goToCrateTrip = () => {
        history.push("/createTrip")
    }
    const cleanStorage = () => {
        localStorage.clear()
        if(localStorage.length>0){
           
        }
        else{
    
            setUpdate(!useState)
        }
    }


    

    const listedTrips = trips[0] && trips[0].map((trip) => {
        return (
            <CardStuled>
                <div onClick={()=>goToDetais(trip.id)}>
                <p>Nome: {trip.name}</p>
                </div>
                <img alt="icone de deletar" onClick={() => deleteTrips(trip.id)} src={DeleteIcon} />
            </CardStuled>
        )
    })


    return (
        <section>
            <StyledHeader>
                <StyledButton onClick={goBack}>Voltar</StyledButton>
                <img src={LogoIcon} />
                <p>GoodTrip</p>
                <StyledButton onClick={cleanStorage}>Longout</StyledButton>
            </StyledHeader>
            <MainContainer>
                <h1>Escolha uma viagem</h1>
                <StyledButtonMainContainer onClick={goToCrateTrip}>Criar viagem</StyledButtonMainContainer>
                <DivBoss>
                {listedTrips}
                </DivBoss>
            </MainContainer>
        </section>
    )
}