import React from "react";
import styled from "styled-components";
import axios from 'axios'
const CadastreBox = styled.div`
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
  
    width: 20%;
    margin: 0 auto;
    padding: 30px;
    border-radius: 12px;
    button{
        align-self: center;
        margin-top: 10px;
        background: #0066A2;
        color: white;
        border-style: outset;
        border-color: #0066A2;
        height: 50px;
        width: 100px;
        font: bold 15px arial, sans-serif;
        text-shadow:none;
    }
;
    
`
const BigBox = styled.div` 
  margin-top: 130px;
    /* margin: 0 auto; */
`

class UserCadastre extends React.Component {
    state = {
        inputValueName: "",
        inputValueEmail: ""
    }
    handleInputChangeName = (e) => {
        this.setState({ inputValueName: e.target.value });
    }
    handleInputChangeEmail = (e) => {
        this.setState({ inputValueEmail: e.target.value });
    }
    createUser = () => {
        const body = {
            name: this.state.inputValueName,
            email: this.state.inputValueEmail
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            body,
            {
                headers: {
                    Authorization: "yanikisia-kathlyn-carver"
                }
            }
        ).then((answ) => {
            alert("parabens, usuario cadastrado")
            this.setState({ inputValueName:'',inputValueEmail:''})
        }).catch((erro) => {
            alert("algum erro aconteceu, por favor, tente novamente")
            console.log(erro.response.data)
        })
    }


    render() {

        return (
            <BigBox>
                <CadastreBox>
                    <label for="name">Nome: </label>
                    <input id="name" value={this.state.inputValueName} onChange={this.handleInputChangeName} />
                    <label for="email">Email: </label>
                    <input id="email" value={this.state.inputValueEmail} type={'email'} onChange={this.handleInputChangeEmail} />
                    <button onClick={this.createUser}>Salvar</button>
                </CadastreBox>
            </BigBox>
        )
    }


}
export default UserCadastre