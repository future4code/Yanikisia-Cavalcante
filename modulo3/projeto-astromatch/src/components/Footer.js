import styled from 'styled-components';
const AppContainer=styled.div`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    background-color: red;
`
export default function Footer(props) {
    console.log(props)
  return (
    <AppContainer>
     {/* <button>x</button>
     <button onClick={()=>props.profile()}>curtir</button> */}
    </AppContainer>
  );
}

