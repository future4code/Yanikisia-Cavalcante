import axios from "axios";
const aluno="yanikisia"
 

// export const getProfiles = () => {
//     axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
//    .then((res)=>{
//         console.log(res.data)
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })
// }


export const getProfiles = async () => {

    try {
        const request= await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
        console.log(request.data)
     
        return request.data

    } catch (err) {
        console.log(err.message)
    }
}

// const getProfiles=()=>{
//     axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
   
    
//         console.log(res.data)
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })
// }

