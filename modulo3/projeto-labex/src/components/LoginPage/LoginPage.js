import React, { useState, useEffets } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import useForm from "../Hooks/useForm";
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
const MainContainer=styled.section` 
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

export default function LoginPage() {
    const history=useHistory()
  
    const { form, onChange, cleanFields }=useForm({
        email:"",
        password:""
    })

    const sendLogin=(e)=>{
        e.preventDefault()
 
        axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labeX/yanikisia-carver/login",
          form
        )
        .then((response) => {
          console.log("Deu certo: ", response.data.token);
          localStorage.setItem("token", response.data.token);
          history.push("/admPage");
        })
        .catch((error) => {
          console.log("Deu errado: ", error.response);
        });
        cleanFields()
    }

    const goBack=()=>{
        history.goBack()
    }

    return (
        <section>
            <StyledHeader>
                <button onClick={goBack}>Voltar</button>
                <img />
                <p>GoodTrip</p>
            </StyledHeader>
            <MainContainer>
                <h1>Login</h1>
                <form onSubmit={sendLogin}>
                   <input placeholder="E-mail" type="email" name="email" value={form.email}  onChange={onChange} required/>
                   <input placeholder="Senha" type="password" name="password" value={form.password} onChange={onChange} required/>
                   <button>Entrar</button>
                </form>
            </MainContainer>
        </section>
    )
}