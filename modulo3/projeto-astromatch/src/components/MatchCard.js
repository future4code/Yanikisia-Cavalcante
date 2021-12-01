import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Header from "./Header"
import { getProfiles } from "./Actions"
import axios from "axios";


const AppContainer = styled.div`
*{
    margin: 0;
    padding: 0;
}
    display: flex;
    justify-content: center;
    width: 45%;
    height: 80%;
    text-align: center;
    padding: 10px;
    border: 1px solid black;
    /* background-color: white; */

   
`
const DivProfiles = styled.div` 
div{
    position:absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    margin-top: -80px;
    color: white;
    width: 80%;
    margin-left: 1vw;
    background-image: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
}
span{
    position:absolute;
    margin-right: 0.2vw;
    bottom:30vh;
    left: 32.5vw;
}
img{
    position:absolute;
    width: 30vw;
    height: 65vh;
    left: 32vw;
  z-index: -1;
}
p{
    display: flex;
    flex-wrap: wrap;
    position:absolute;
    bottom: 26vh;
    left: 32vw;
}
`
const BotoesEstilizados=styled.div`
     position:absolute;
     display: flex;
     width: 300px;
     justify-content:space-evenly;
     bottom: 6vh;
    left: 37vw;
`
export default function MatchCard() {
    const [possibleMatch, setPossibleMatch] = useState({})
    const [matches, setMatches] = useState([])
    const [idMatch, setIdMatch] = useState("")
    const aluno = "yanikisia"

    const getProfile = () => {
        console.log(getProfiles())
        const profile = getProfiles()

        profile.then((res) => {
            console.log(res)
            setPossibleMatch(res.profile || {})
            setIdMatch(res.profile.id)
            console.log(res.profile)
            return profile
        })

    }

    useEffect(() => {
        getProfile()
    }, [])

    const chosseMatch = (choose) => {
        console.log("ai deus", choose)
        console.log(idMatch)
        const body = {
            id: idMatch,
            choice: choose
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
            .then((res) => {
                getProfile()
                console.log(res.data.isMatch)
            }).catch((err) => {
                console.log(err)
            })
    }
    const getMatches = (event) => {

        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
            .then((res) => {
                setMatches(res.data.matches || [])
                console.log("matches1", res.data.matches)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    const mapList = matches.map((item) => {
        return <div>
            <p>{item.name}</p>
        </div>
    })

    return (
        <AppContainer>
            <div>
                <Header />

                <DivProfiles>
                    <img src={possibleMatch.photo} />
                    <span>{`${possibleMatch.name}, ${possibleMatch.age}`}</span>
                    <p>{possibleMatch.bio}</p>
                </DivProfiles>
                <BotoesEstilizados>
                    <button onClick={() => chosseMatch(false)}>x</button>
                    <button onClick={() => chosseMatch(true)}>curtir</button>
                    <button value={"true"} onClick={() => getMatches()}>matches</button>
                </BotoesEstilizados>
                {mapList}
            </div>
        </AppContainer>
    );
}

