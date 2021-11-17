import React from "react";
import styled from "styled-components";

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
const BigBox=styled.div` 
  margin-top: 130px;
    /* margin: 0 auto; */
`

class UserCadastre extends React.Component {
    render() {

        return (
            <BigBox>
            <CadastreBox>
                <label for="name">Nome: </label>
                <input id="name" onChange={this.props.handleInputChangeName} />
                <label for="email">Email: </label>
                <input id="email" type={'email'} onChange={this.props.handleInputChangeEmail} />
                <button onClick={this.props.createUser}>Salvar</button>
            </CadastreBox>
            </BigBox>
        )
    }


}
export default UserCadastre