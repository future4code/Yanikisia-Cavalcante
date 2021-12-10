import styled from "styled-components"
import { Router } from './components/Router/Router';
const AppContainer=styled.div`  
*{
  margin: 0;
  padding: 0;

}

 text-align: center;
 width: 100vw;
 height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Router/>
    </AppContainer>
  );
}

export default App;
