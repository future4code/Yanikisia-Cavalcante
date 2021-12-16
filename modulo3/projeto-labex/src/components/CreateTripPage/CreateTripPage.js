import styled from "styled-components";
import { useHistory } from "react-router";
import useForm from "../Hooks/useForm";
import axios from "axios";
import LogoIcon from "../images/logo.svg"
const StyledHeader = styled.header` 
    width:100%;
    height: 10vh;
    background-color:#FA7C30;
    display:grid;
    grid-template-columns: 1fr 0.3fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    p{
        font-size: 2em;
        font-weight: 700;
        color: #fff3c3;
        margin:0;
        justify-self: flex-start;
    }
    img{
        width: 80px;
    }

`
const MainContainer = styled.section` 
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    justify-content: center;
    align-items: center;
    h1{
       
        font-weight: 700;
        color: #FA7C30;
        margin-bottom: 10px;
        font-size: 2em;
    }
    form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    select{
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0px 0px 15px;
    }
    input{
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0px 0px 15px;
    }
    }
`

const StyledButton = styled.button`
  border-color: #fa7c30;
  padding: 0.2em 1em;
  cursor: pointer;
  font-size: 1em;
  color: #ffffff;
  border-radius: 10px;
  background-image: linear-gradient(45deg, #fa7c30 50%, #000000 50%);
  background-position: 25%;
  background-size: 400%;
  -webkit-transition: background 500ms ease-in-out, color 500ms ease-in-out;
  transition: background 500ms ease-in-out, color 500ms ease-in-out;
 
  :hover{
    color: #ffffff;
  background-position: 100%;
  }
  `
const StyledButtonMainContainer = styled.button`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  width: 150px;
  height: 25px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #f05924;
  background: #fdc09c;
  margin-bottom: 10px;
  border: 1px solid #fa7c30;
  border-radius: 10px;
  box-shadow: 3px 3px 0 #fa7c30,
   -3px -3px 0 #fa7c30,
   -3px 3px 0 #fa7c30,
   3px -3px 0 #fa7c30;
  transition: 500ms ease-in-out;
  :hover {
   box-shadow: 20px 5px 0 #f7921e, -20px -5px 0 #f7921e;
  }

  :focus {
  outline: none;
  }

`
export default function CreateTripRequest() {
    const history=useHistory()
    const token=localStorage.getItem('token')
    const {form, onChange, cleanFields}=useForm({
        name:"",
        planet:"",
        date:"",
        description:"",
        durationInDays:""
    })

    const goBack=()=>{
        history.goBack()
    }

    const sendForm=(e)=>{
        e.preventDefault()
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/yanikisia-carver/trips`
        ,form,{
            headers:{
                auth:token
            }
        }
        ).then((ans)=>{
            alert("parabens,uma nova viagem foi criada")
            console.log(ans.data)
        })

        cleanFields()
      
    }

    let data = new Date();
    let date = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() )) ;                 
    
    

    return (
        <section>
            <StyledHeader>
                <StyledButton onClick={goBack}>Voltar</StyledButton>
                <img src={LogoIcon} />
                <p>GoodTrip</p>
            </StyledHeader>
            <MainContainer>
                <h1>Criar viagem</h1>
                <form onSubmit={sendForm}>
                    <input onChange={onChange} placeholder="Nome" name="name" pattern="^.{3,}$" title="O nome deve ter no mínimo 3 caracteres" required value={form.name} />
                    <select onChange={onChange} placeholder="Planeta" name="planet" value={form.planet}>
                        <option selected>Escolha em planeta</option>
                       <option value="Plutão">Plutão</option>
                       <option value="Mercúrio">Mercúrio</option>
                       <option value="Vênus">Vênus</option>
                       <option value="Terra">Terra</option>
                       <option value="Marte">Marte</option>
                       <option value="Jupiter">Jupiter</option>
                       <option value="Saturno">Saturno</option>
                       <option value="Urano">Urano</option>
                       <option value="Netuno">Netuno</option>
                    </select>
                    <input onChange={onChange} placeholder="Data" type="date" name="date" required min={date} value={form.date}/>
                    <input onChange={onChange} placeholder="Descrição da viagem" name="description" required pattern="^.{10,}$" title="O texto deve ter no mínimo 10 caracteres" value={form.description} />
                    <input onChange={onChange} type="number" placeholder="Duração em dias" name="durationInDays" required  value={form.durationInDays} />
                   
                    <StyledButtonMainContainer type="submit">Criar Viagem</StyledButtonMainContainer>
                </form>
            </MainContainer>
        </section>
    )
}