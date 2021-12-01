import styled from 'styled-components';
import MatchCard from './components/MatchCard';
const AppContainer=styled.div`
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
/* background-color: grey; */
`
function App() {
  return (
    <AppContainer>
      <MatchCard/>
    </AppContainer>
  );
}

export default App;
