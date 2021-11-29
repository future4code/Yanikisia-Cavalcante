import React from "react"
import styled from 'styled-components'
import iconeCompartilhar from "../../img/send_black_24dp.svg"
const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputCompartilhar = styled.input`
    width: 100%;
    margin-right: 5px;
`
const ImagemRedes= styled.img ` 
    width: 30px;
    border-radius: 10px;

`

export class SecaoCompartilha extends React.Component {
	state = {
		valorCompartilhar:''
	}

	onChangeCompartilhar=(event)=> {
		console.log(event.target)
		this.setState({valorCompartilhar: event.target.value});
	}

	render() {
		return <CommentContainer>
            <ImagemRedes src={this.props.iconeCompartilhamento}  alt={"icone de compartilhamento"} />
			<InputCompartilhar
				placeholder={'mensagem'}
				value={this.state.valorCompartilhar}
				onChange={this.onChangeCompartilhar}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}