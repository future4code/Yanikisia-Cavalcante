import React, { useState, useEffets } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import useForm from "../Hooks/useForm";
import { useRequestData } from "../Hooks/useRequestData";
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
export default function ApplicationFormPage() {
    const history=useHistory()
    const trips=useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/yanikisia-carver/trips")
    const [tripId,setTripId]=useState("")
    const {form, onChange, cleanFields}=useForm({
        name:"",
        age:"",
        applicationText:"",
        profession:"",
        country:""
    })
    const goBack=()=>{
        history.goBack()
    }

    const handleOnChangeId=(e)=>{
        setTripId(e.target.value)
    }

    const sendForm=(e)=>{
        e.preventDefault()
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/yanikisia-carver/trips/${tripId}/apply`
        ,form
        ).then((ans)=>{
            alert("sua inscrição deu certo, parabens!!!")
            cleanFields()
            setTripId('')
        }).catch((err)=>{
            alert("algum de errado aconteceu, perdão, tente mais tarde")
            console.log(err)
        })
      

    }
    const listedOptions= trips[0] && trips[0].map((trip)=>{
  
      return( <option value={trip.id}>{trip.name}</option>)
    })

    return (
        <section>
            <StyledHeader>
                <StyledButton onClick={goBack}>Voltar</StyledButton>
                <img src={LogoIcon} />
                <p>GoodTrip</p>
            </StyledHeader>
            <MainContainer>
                <h1>Inscreva-se para uma viagem</h1>
                <form onSubmit={sendForm}>
                    <select  value={tripId} onChange={handleOnChangeId}>
                        <option selected >Escolha uma viagem </option>
                        {listedOptions}
                       
                    </select>
                    <input onChange={onChange} placeholder="Nome" name="name" pattern="^.{3,}$" title="O nome deve ter no mínimo 3 caracteres" required value={form.name} />
                    <input onChange={onChange} placeholder="Idade" type="number" name="age" required min="18" value={form.age} />
                    <input onChange={onChange} placeholder="Texto de Candidatura" name="applicationText" required pattern="^.{30,}$" title="O texto deve ter no mínimo 30 caracteres" value={form.applicationText} />
                    <input onChange={onChange} placeholder="Profissão" name="profession" required="" pattern="^.{10,}$" title="A profissão deve ter no mínimo 10 caracteres" value={form.profession} />
                    <select onChange={onChange} placeholder="País" name="country" value={form.country}>
                        <option selected>Escolha um país</option>
                        <option value="África do Sul">África do Sul</option>
                        <option value="Albânia">Albânia</option>
                        <option value="Alemanha">Alemanha</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antigua">Antigua</option>
                        <option value="Arábia Saudita">Arábia Saudita</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armênia">Armênia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Austrália">Austrália</option>
                        <option value="Áustria">Áustria</option>
                        <option value="Azerbaijão">Azerbaijão</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrein">Bahrein</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Bélgica">Bélgica</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermudas">Bermudas</option>
                        <option value="Botsuana">Botsuana</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgária">Bulgária</option>
                        <option value="Burkina Fasso">Burkina Fasso</option>
                        <option value="botão">botão</option>
                        <option value="Cabo Verde">Cabo Verde</option>
                        <option value="Camarões">Camarões</option>
                        <option value="Camboja">Camboja</option>
                        <option value="Canadá">Canadá</option>
                        <option value="Cazaquistão">Cazaquistão</option>
                        <option value="Chade">Chade</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Cidade do Vaticano">Cidade do Vaticano</option>
                        <option value="Colômbia">Colômbia</option>
                        <option value="Congo">Congo</option>
                        <option value="Coréia do Sul">Coréia do Sul</option>
                        <option value="Costa do Marfim">Costa do Marfim</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Croácia">Croácia</option>
                        <option value="Dinamarca">Dinamarca</option>
                        <option value="Djibuti">Djibuti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="EUA">EUA</option>
                        <option value="Egito">Egito</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Emirados Árabes">Emirados Árabes</option>
                        <option value="Equador">Equador</option>
                        <option value="Eritréia">Eritréia</option>
                        <option value="Escócia">Escócia</option>
                        <option value="Eslováquia">Eslováquia</option>
                        <option value="Eslovênia">Eslovênia</option>
                        <option value="Espanha">Espanha</option>
                        <option value="Estônia">Estônia</option>
                        <option value="Etiópia">Etiópia</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Filipinas">Filipinas</option>
                        <option value="Finlândia">Finlândia</option>
                        <option value="França">França</option>
                        <option value="Gabão">Gabão</option>
                        <option value="Gâmbia">Gâmbia</option>
                        <option value="Gana">Gana</option>
                        <option value="Geórgia">Geórgia</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Granada">Granada</option>
                        <option value="Grécia">Grécia</option>
                        <option value="Guadalupe">Guadalupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guiana">Guiana</option>
                        <option value="Guiana Francesa">Guiana Francesa</option>
                        <option value="Guiné-bissau">Guiné-bissau</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Holanda">Holanda</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungria">Hungria</option>
                        <option value="Iêmen">Iêmen</option>
                        <option value="Ilhas Cayman">Ilhas Cayman</option>
                        <option value="Ilhas Cook">Ilhas Cook</option>
                        <option value="Ilhas Curaçao">Ilhas Curaçao</option>
                        <option value="Ilhas Marshall">Ilhas Marshall</option>
                        <option value="Ilhas Turks & Caicos">Ilhas Turks & Caicos</option>
                        <option value="Ilhas Virgens (brit.)">Ilhas Virgens (brit.)</option>
                        <option value="Ilhas Virgens(amer.)">Ilhas Virgens(amer.)</option>
                        <option value="Ilhas Wallis e Futuna">Ilhas Wallis e Futuna</option>
                        <option value="Índia">Índia</option>
                        <option value="Indonésia">Indonésia</option>
                        <option value="Inglaterra">Inglaterra</option>
                        <option value="Irlanda">Irlanda</option>
                        <option value="Islândia">Islândia</option>
                        <option value="Israel">Israel</option>
                        <option value="Itália">Itália</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japão">Japão</option>
                        <option value="Jordânia">Jordânia</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Líbano">Líbano</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lituânia">Lituânia</option>
                        <option value="Luxemburgo">Luxemburgo</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedônia">Macedônia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malásia">Malásia</option>
                        <option value="Malaui">Malaui</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marrocos">Marrocos</option>
                        <option value="Martinica">Martinica</option>
                        <option value="Mauritânia">Mauritânia</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="México">México</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Mônaco">Mônaco</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Nicarágua">Nicarágua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigéria">Nigéria</option>
                        <option value="Noruega">Noruega</option>
                        <option value="Nova Caledônia">Nova Caledônia</option>
                        <option value="Nova Zelândia">Nova Zelândia</option>
                        <option value="Omã">Omã</option>
                        <option value="Palau">Palau</option>
                        <option value="Panamá">Panamá</option>
                        <option value="Papua-nova Guiné">Papua-nova Guiné</option>
                        <option value="Paquistão">Paquistão</option>
                        <option value="Peru">Peru</option>
                        <option value="Polinésia Francesa">Polinésia Francesa</option>
                        <option value="Polônia">Polônia</option>
                        <option value="Porto Rico">Porto Rico</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Quênia">Quênia</option>
                        <option value="Rep. Dominicana">Rep.Dominicana</option>
                        <option value="Rep. Tcheca">Rep.Tcheca</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romênia">Romênia</option>
                        <option value="Ruanda">Ruanda</option>
                        <option value="Rússia">Rússia</option>
                        <option value="Saipan">Saipan</option>
                        <option value="Samoa Americana">Samoa Americana</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serra Leone">Serra Leone</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Singapura">Singapura</option>
                        <option value="Síria">Síria</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="St. Kitts & Nevis">St.Kitts & Nevis</option>
                        <option value="St. Lúcia">St.Lúcia</option>
                        <option value="St. Vincent">St.Vincent</option>
                        <option value="Sudão">Sudão</option>
                        <option value="Suécia">Suécia</option>
                        <option value="Suiça">Suiça</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Tailândia">Tailândia</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tanzânia">Tanzânia</option>
                        <option value="Togo">Togo</option>
                        <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                        <option value="Tunísia">Tunísia</option>
                        <option value="Turquia">Turquia</option>
                        <option value="Ucrânia">Ucrânia</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Uruguai">Uruguai</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnã">Vietnã</option>
                        <option value="Zaire">Zaire</option>
                        <option value="Zâmbia">Zâmbia</option>
                        <option value="Zimbábue">Zimbábue</option>
                    </select>
                    <StyledButtonMainContainer type="submit">Enviar</StyledButtonMainContainer>
                </form>
            </MainContainer>
        </section>
    )
}