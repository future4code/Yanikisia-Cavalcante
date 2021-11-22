import React from "react";
import axios from "axios";
import styled from "styled-components";


export default class AddTracks extends React.Component {
    state = {
        adding: false,
        tracks: [],
        inputMusicName: '',
        inputMusicUrl: '',
        inputMusicArtist: ''
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
    addTrackToPlaylist = () => {
        const id=this.props.id
        const body = 
        {
            name:this.state.inputMusicName,
            url:`https://open.spotify.com/embed/playlist/${this.state.inputMusicUrl}?utm_source=generator`,
            artist:this.state.inputMusicArtist
        }
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,body,{
            headers:{
                Authorization: "yanikisia-kathlyn-carver"
            }
        }).then((answ)=>{
            alert("musica adicionada")
            this.setState({tracks:answ.data.result.tracks})
        }).catch((err)=>{
            console.log(err.response.data)
        })

    }
    render() {
        
        return (
            <div>
                <label for="artist">Artista:</label>
                <input id='artist' value={this.state.inputMusicArtist} onChange={this.handleInputChangeMusicArtist} />
                <label for='name'>nome da musica: </label>
                <input id='name' value={this.state.inputMusicName} onChange={this.handleInputChangeMusicName} />
                <label for='url'>URL da musica: </label>
                <input id='url' value={this.state.inputMusicUrl} onChange={this.handleInputChangeMusicUrl} />
            </div>
        )
    }


}