import React from 'react';
import styled from "styled-components"

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 6px 6px;
    margin-bottom: 10px;
    height: 40px;
 
    img{
    width: 35px;
    /* top: 2px; */
    margin-right: 10px;
    border-radius: 50%;
    }
`
const Email=styled.div `
    display: flex;
    align-items: baseline;
    p{
    margin-left: 5px;
    }
    h4{
  display: inline;
  margin-bottom: 0;
    }
`
const Endereco=styled.div `
    display: flex;
    align-items: baseline;
     p{
    margin-left: 5px;
    }
    h4{
    margin-bottom: 0;
    }


`
export function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <img src={ props.imagem } />
            <Email>
                <h4>{ props.email }</h4>
                <p>{ props.descricaoEmail }</p>
            </Email>
           
            <Endereco>
                <h4>{ props.endereco }</h4>
                <p>{ props.descricaoEndereco }</p>
            </Endereco>

        </SmallCardContainer>
        
    )
}

