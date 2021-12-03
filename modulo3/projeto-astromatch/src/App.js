import styled from 'styled-components';
import MatchCard from './components/MatchCard';
import React, { useState, useEffect } from 'react';
import { getProfiles, chosseMatch, getMatches, getClear } from "../src/components/Actions"
import MatchesScreen from './components/MatchesScreen';

const AppContainer = styled.div`
*{
  margin: 0;
  padding: 0;
}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-color: grey;
  position: absolute;
  z-index: -1;

`
const DivInformaçoes = styled.div`
  background-color: white;
  width: 400px;
  height: 90vh;
  z-index: -1;
  border-radius: 10px;
`
const DivInfor = styled.div`
  width: 100%;
  height: 75vh;
`

function App() {
  const [possibleMatch, setPossibleMatch] = useState({})
  const [matches, setMatches] = useState([])
  const [idMatch, setIdMatch] = useState("")
  const [screen, setScreen] = useState("atches")
  const [loading, setLoading] = useState(true)

  const getProfile = () => {
    console.log(getProfiles())
    const profile = getProfiles()
    profile.then((res) => {
      if (res.profile === null) {
        return {}
      }
      else {
        setPossibleMatch(res.profile || {})
        setIdMatch(res.profile.id)
      }
      return profile
    })
  }

  const callGetMatches = () => {
    const match = getMatches()
    match.then((res) => {
      setMatches(res.matches || [])
      return match
    })
  }

  const changeMatches = () => {
    getClear()
    setMatches([])
  }
  useEffect(() => {
    getProfile()
  }, [])

  const changeScreens = () => {
    switch (screen) {

      case "telaMatches":
        return <MatchesScreen getPro={getProfile} clear={changeMatches} callingScreen={callScreen} getMatch={callGetMatches} match={matches} />
      default:
        return <MatchCard callingScreen={callScreen} possibles={possibleMatch} choose={chosseMatch} id={idMatch} getPro={getProfile} />
    }
  }

  const callScreen = (id) => {
    setScreen(id)
    sessionStorage.setItem('tela', id)
    changeScreens()
  }


  return (
    <AppContainer>

      < DivInformaçoes>
        <DivInfor>
          {changeScreens()}
        </DivInfor>
      </ DivInformaçoes>

    </AppContainer>
  );
}

export default App;
