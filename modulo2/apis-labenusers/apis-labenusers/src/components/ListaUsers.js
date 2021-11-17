import React from "react";
import styled from "styled-components";

const UsersList=styled.div `
margin: 0 auto;
width: 200px;
background-color: aliceblue;
border-radius: 12px;
li{
    margin-bottom: 16px;
}
button{
    border: none;
    color: red;
    text-align:center;
    margin-bottom: 12px;
}
`
class ListaUsers extends React.Component{
    render(){
        const usersList = this.props.users.map((user) => (
            <li key={user.id}>{user.name} <button value={user.id} onClick={this.props.deletUser}>x</button></li>
          ));
        return(
            <div>
            <UsersList>
             <ul>{usersList}</ul>
            </UsersList>
            </div>
        )
    }


}
export default ListaUsers