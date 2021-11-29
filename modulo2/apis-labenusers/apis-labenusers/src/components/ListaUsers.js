import React from "react";
import styled from "styled-components";
import axios from 'axios'
const UsersList = styled.div`
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
class ListaUsers extends React.Component {
    state={
        users:[]
    }
    componentDidMount() {
        this.getUsers()
      }

    getUsers=()=>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        {
          headers: {
            Authorization: "yanikisia-kathlyn-carver"
          }
        }
        ).then((answ)=>{
          this.setState({users:answ.data})
        }).catch((err)=>{
          alert(err.response.data)
        }) 
      }
    deletUser = (event) => {
        const id = event.target.value
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
                headers: {
                    Authorization: "yanikisia-kathlyn-carver"
                },
                // data: {
                //   source: id
                // }
            }).then((answ) => {
                alert("parabens, usuario excluido")
                this.getUsers()
            }).catch((erro) => {
                alert("algum erro aconteceu, por favor, tente novamente")
                console.log(erro.response.data)
            })
    }

    render() {
        const usersList = this.state.users.map((user) => (
            <li key={user.id}>{user.name} <button value={user.id} onClick={this.deletUser}>x</button></li>
        ));
        return (
            <div>
                <UsersList>
                    <ul>{usersList}</ul>
                </UsersList>
            </div>
        )
    }


}
export default ListaUsers