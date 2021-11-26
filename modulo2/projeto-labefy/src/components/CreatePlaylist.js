import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import lisyIncon from "../image/listIcon.svg"

const AppContainer = styled.div` 
 background: -webkit-linear-gradient(-180deg, rgb(109, 158, 202), rgb(0, 0, 0));
background: linear-gradient(-180deg, rgb(109, 158, 202), rgb(0, 0, 0));
 display: grid;
 grid-template-rows: 0.5fr 0.5fr 1fr 2fr;
 align-items: center;
  text-align: center;
    h2{
        align-self: end;
    }

 `
 const CreateHeader=styled.div` 
 display: flex;
 justify-content: center;
 align-items: center;
 img{
     margin-top: 3%;
        width: 20%;
        
    }
 `
 const StyledInput=styled.input` 
 	width: 80%;
	margin: 0 auto;
    margin-top: 10px;
	padding: 10px;
	border: none;
	margin-bottom: 10px;
	border-radius: 50px;
 `
class CreatePlaylist extends React.Component {
    state = {
        inputValuePlaylists: ''
    }
    handleInputChangePlaylist = (e) => {
        this.setState({ inputValuePlaylists: e.target.value })
    }
    createPlatlis = () => {
        const body={
            name:this.state.inputValuePlaylists
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',body,{
            headers:{
                Authorization: "yanikisia-kathlyn-carver"
            }
        }).then((answ)=>{
            alert("parabens, música cadrastrada")
            this.setState({ inputValuePlaylists:''})
        }).catch((err)=>{
            alert("parabens, música cadrastrada")
            this.setState({ inputValuePlaylists:''})
        })
    }

    render() {

        return (
            <AppContainer>
                <CreateHeader>
                <img src={lisyIncon}/>
                <h1>Labefy</h1>
                </CreateHeader>
                
                <h2>Criar Playlists</h2>
                <div>
                <label for="playlist">Nome da Playlist: </label>
                <StyledInput id="playlist" value={this.state.inputValuePlaylists} onChange={this.handleInputChangePlaylist} placeholder="Digite um nome válido" />
                <button onClick={this.createPlatlis}>Criar playlist</button>
                </div>
            </AppContainer>
        )
    }

}
export default CreatePlaylist