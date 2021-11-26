import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddTracks from './AddTracks';
import imagePlaylist from "../image/imagemPlaylist.svg"

const PlaylistContainer = styled.div` 
*{
    font-size: 20px;
   
}
display: grid;
grid-template-rows: 1fr 1fr 4fr;
align-items: center;
height: 100vh;
ul{
    justify-self: center;
    width: 70px;
    list-style: none;
}

 `
const PlaylistHeader = styled.div` 
 display: flex;
 justify-content: flex-start;
 align-items: flex-end;
 margin-left: 20px;
 padding: 10px;

 box-shadow: 10px 5px 9px 3px #072746;
 img{
     margin-top: 10px;
    width: 400px;
    box-shadow: 3px 5px 14px 7px #072746;
    background-color: #982828;
}
h2{
    margin-left: 20px;
}
 `
const ListMusics = styled.div` 
 *{
     color: burlywood;
 }
 
 display: flex;
 align-items: flex-end;
 
 button{
     margin-left: 12px;
    
 }
 li{
     margin-top: 10px;
 }
 `
class ListaPlaylist extends React.Component {
    state = {
        Playlists: [],
        musics: [],
        adding: false,
        inputMusicName: '',
        inputMusicUrl: '',
        inputMusicArtist: '',
        id:''
    }
    componentDidMount() {
        this.getAllPlaylists()
        this.getDetalhesPlaylist()
    }

    getAllPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: "yanikisia-kathlyn-carver"
            }
        }).then((answ) => {
            console.log(answ.data.result.list)
            this.setState({ Playlists: answ.data.result.list })
        }).catch((err) => {
            console.log(err.response.data)
        })
    }
    deletePlaylist = (e) => {
        const id = e.target.value
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                Authorization: "yanikisia-kathlyn-carver"
            }
        }).then((answ) => {
            alert('Playlist excluida')
            this.getAllPlaylists()
        }).catch((err) => {

            console.log(err.response.data)
        })
    }


    enableAddMusics = () => {
        if (this.state.adding===false) {
            return this.setState({adding:true})
        } else {
            return this.setState({ adding: false })
        }
    }

    handleInputChangeMusicName = (e) => {
        this.setState({ inputMusicName: e.target.value })
    }

    handleInputChangeMusicUrl = (e) => {
        this.setState({ inputMusicUrl: e.target.value })
    }

    handleInputChangeMusicArtist = (e) => {
        this.setState({ inputMusicArtist: e.target.value })
    }

 
    InputAddmusica = () => {
        if (this.state.adding === true) {
            return (
                <div>
                    <label for="artist">Artista:</label>
                    <input id='artist' value={this.state.inputMusicArtist} onChange={this.handleInputChangeMusicArtist} />
                    <label for='name'>nome da musica: </label>
                    <input id='name' value={this.state.inputMusicName} onChange={this.handleInputChangeMusicName} />
                    <label for='url'>URL da musica: </label>
                    <input id='url' value={this.state.inputMusicUrl} onChange={this.handleInputChangeMusicUrl} />
                    <button onClick={() => { this.addmusics() }}>Adicionar</button>

                </div>
            )

        } else {
            return ""
        }
    }
    addmusics = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.id}/tracks`
        const body = {
            name: this.state.inputMusicName,
            artist: this.state.inputMusicArtist,
            url: this.state.inputMusicUrl
        }

        axios.post(url, body, {
            headers: {
                Authorization: "yanikisia-kathlyn-carver"
            }
        }).then((resposta) => {
            console.log(resposta.data)
            this.setState({ inputMusicName: "", inputMusicArtist: "", inputMusicUrl: "" })
            alert("Musica adicionada com sucesso")
           this.getDetalhesPlaylist(this.state.id)

        }).catch((erro) => {
            // console.log(erro.response.data)
            alert("Aconteceu um erro, por favor, verifique todos os campos e tente novamente.")
        })

    }

    deleteTrack = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.id}/tracks/${id}`, {
            headers: {
                Authorization: "yanikisia-kathlyn-carver"
            }
        }).then((answ) => {
            alert("a musica foi deletada")
            console.log("musicas", answ.data.result.tracks)
            this.getDetalhesPlaylist()
        }).catch((err) => {
            console.log(err.response)
        })
    }
    getDetalhesPlaylist = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                Authorization: "yanikisia-kathlyn-carver"
            }
        }).then((answ) => {

            console.log("musicas", answ.data.result.tracks)
            this.setState({ musics: answ.data.result.tracks })
            this.setState({id:id})
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    render() {
        
        const resultPlaylist = this.state.Playlists.map((play) => {
            return <ListMusics>
                <li key={play.id}>{play.name}</li>
                <button value={play.id} onClick={this.deletePlaylist}>x</button>
                <button value={play.id} onClick={()=>this.getDetalhesPlaylist(play.id)}  >Detalhes</button>
                <button onClick={ this.enableAddMusics} >Adicionar musica</button>
            </ListMusics>
        })
        const resultMusics = this.state.musics.map((tracks) => {
            let src=tracks.url + '?utm_source=generator'
            return <div>
                <iframe src={src} 
                width="300" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
               <button  onClick={()=>this.deleteTrack(tracks.id)}>x</button>
            </div>
        })
        // const addSection=

        return (
            <PlaylistContainer>
                <PlaylistHeader>
                    <img src={imagePlaylist} />
                    <h2>Playlists</h2>
                </PlaylistHeader>
                <div>
                    <ul>{resultPlaylist}</ul>
                    <p>{resultMusics}</p>
                    {this.InputAddmusica()}
                </div>

            </PlaylistContainer>
        )
    }

}
export default ListaPlaylist