import React, { useState, useEffets } from "react";
import styled from "styled-components";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useRequestData } from "../Hooks/useRequestData";
import DeleteIcon from "../images/delete.svg"
import axios from "axios";
import { baseURL } from "../Hooks/Data";
import { useHistory } from "react-router";
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
        justify-self: flex-start;
    }
    button{
        margin-bottom: 15px;
        height: 20px;
        padding: 0px 20px;
        border-radius: 20px;
        border: none;
        color: white;
        font-size: 16px;
        background-color: slategray;
        min-width: 100px;
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
        padding: 0px;
        margin-bottom: 10px;
        font-size: 2em;
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
    button{
        margin-bottom: 15px;
        height: 40px;
        padding: 0px 20px;
        border-radius: 20px;
        border: none;
        color: white;
        font-size: 16px;
        background-color: slategray;
        min-width: 100px;
     }
    
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

export default function AdminHomePage() {
    useProtectedPage()
    const history=useHistory()
    let trips = useRequestData("/trips")
    console.log("aaaaa",trips)
    const [idToSend,setIdToSend]=useState("")
    console.log("viagem", trips[0])

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
        console.log(id)
        history.push(`/tripDetais/${id}`)
    
    }
  
    const goToCrateTrip = () => {
        history.push("/createTrip")
    }
    const cleanStorage = () => {
        localStorage.clear()
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
                <button onClick={goBack}>Voltar</button>
                <img />
                <p>GoodTrip</p>
                <button>Longout</button>
            </StyledHeader>
            <MainContainer>
                <h1>escolha uma viagem</h1>
                <button>Criar viagem</button>
                {listedTrips}
            </MainContainer>
        </section>
    )
}