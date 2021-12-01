import styled from 'styled-components';

const AppContainer=styled.div`
width: 100%;
text-align: center;
background-color: yellow;
`
export default function Header(props) {
  return (
    <AppContainer>
   <p>header</p>
    </AppContainer>
  );
}

