import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useRequestData } from "../Hooks/useRequestData";
import axios from "axios";
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
    justify-content: center;
    align-items: center;
    h1{

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
    flex-direction: column;
    align-items: flex-start;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 1px 0px;
    justify-content: flex-start;
    border-radius: 4px;
    margin: 8px;
    width: 50%;
    p{
        margin:1%
    }

`
export default function TripDetaisPage(props) {
    useProtectedPage()
    const [data,setData]=useState()
    const history = useHistory()
    const pathParamns = useParams()
    const id = pathParamns.id
    const token = localStorage.getItem("token");
    const header = {
        headers: {
            auth: token
        }
    }
    console.log(header)
    const banana= "/trip"
    const tripsDetails = useRequestData(`${banana}/${id}`,header)
  console.log(tripsDetails)

    const goBack = () => {
        history.push("/")
    }

    //  const candidatesAproved=tripsDetails[0]
    //  .approved.map((cadidate)=>{
    //     return(
    //         <CardStuled>
    //             <p>{cadidate.name}</p>
    //         </CardStuled>
    //     )
    // })
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     axios
    //       .get(
    //         `https://us-central1-labenu-apis.cloudfunctions.net/labeX/yanikisia-carver/trip/${id}`,
    //         {
    //           headers: {
    //             auth: token
    //           }
    //         }
    //       )
    //       .then((ans) => {
    //         console.log(ans.data);
    //         setData(ans.data.trip)
    //       })
    //       .catch((error) => {
    //         console.log("Deu erro: ", error.response);
    //       });
    //   }, []);

      console.log(data)
    return (
        <section>
            <StyledHeader>
                <button onClick={goBack}>Voltar</button>
                <img />
                <p>GoodTrip</p>
            </StyledHeader>
            <MainContainer>

                <CardStuled>
                <p>Nome da viagem: {tripsDetails[0].name}</p> 
                <p>Descrição: {tripsDetails[0].description}</p> 
                <p>Planeta: {tripsDetails[0].planet}</p>
                <p>Duração da viagem em dias: {tripsDetails[0].durationInDays}</p> 
                <p>Data: {tripsDetails[0].date}</p> 
                </CardStuled>
                {/* <div>
                    {tripsDetails[0].approved? {candidatesAproved}: <p>Nenhum candito aplicado para essa viagem</p>}
                </div> */}
            </MainContainer>
        </section>
    )
}