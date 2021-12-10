import React, { useState, useEffets } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useRequestData } from "../Hooks/useRequestData";
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
        justify-self: flex-start;
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
const StyledFooter = styled.footer` 
    width:100%;
    background-color: blue;
`
function ListTripsPage() {
    const history=useHistory()
    const trips=useRequestData("/trips")
    console.log(trips)
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
            <button onClick={goBack}>Voltar</button>
                <img />
                <p>GoodTrip</p>
                <button onClick={goToForm}>inscrever-se</button>
             </StyledHeader>
                <h1>Lista de viagens</h1>
                < MainContainer>
                {listedTrips}
            </MainContainer>
            <StyledFooter>
                <p>Redes Sociais</p>
                <img />
                <img />
                <img />
            </StyledFooter>
        </ContainerListPage>
    )
}
export default ListTripsPage