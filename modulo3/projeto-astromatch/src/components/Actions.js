import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
const aluno = "yanikisia"



export const getProfiles = async () => {

    try {
        const request = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
        return request.data

    } catch (err) {
        console.log(err.message)
    }
}

export const chosseMatch = (body, funcao) => {
    console.log()
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
        .then((res) => {
            console.log(res.data.isMatch)
            funcao()
        }).catch((err) => {
            console.log(err)
        })
}

export const getMatches = async () => {

    try {
        const request = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
        console.log(request.data)
        return request.data

    }
    catch (err) {
        console.log(err.message)
    }
}

export const getClear = () => {
    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`)
        .then((res) => {
            console.log(res.data)
            getProfiles()
        }).catch((err) => {
            console.log(err)
        })
}