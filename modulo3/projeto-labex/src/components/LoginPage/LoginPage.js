import React, { useState, useEffets } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import useForm from "../Hooks/useForm";
import axios from "axios";
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
   color: black;
   background: #fdc09c;
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
                <StyledButton onClick={goBack}>Voltar</StyledButton>
                <img src={LogoIcon}/>
                <p>GoodTrip</p>
            </StyledHeader>
            <MainContainer>
                <h1>Login</h1>
                <form onSubmit={sendLogin}>
                   <input placeholder="E-mail" type="email" name="email" value={form.email}  onChange={onChange} required/>
                   <input placeholder="Senha" type="password" name="password" value={form.password} onChange={onChange} required/>
                   <StyledButtonMainContainer>Entrar</StyledButtonMainContainer>
                </form>
            </MainContainer>
        </section>
    )
}