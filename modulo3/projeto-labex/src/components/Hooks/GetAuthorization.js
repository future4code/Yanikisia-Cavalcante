import axios from "axios";
import { useEffect } from "react";
import { baseURL } from "./Data";
import { useHistory } from "react-router";


export function useGetAuthorizathion(path, body, header) {

    const createRequest = () => {
        axios.post(`${baseURL}${path}`, header, body)
            .then((ans) => {
                console.log(ans.data);
                localStorage.setItem("token", ans.data.token)
            })
            .catch((error) => {
                console.log("Deu erro: ", error.response);
            });
    }
    useEffect(() => {
       createRequest()
    }, [])

    return createRequest
}


// export function useRequestData(path,header) {
//     const [data, setDada] = useState()
 
//     const receiveData = () => {
//         axios.get(`${baseURL}${path}`,header)
//             .then((ans) => {
//                 if (ans.data !== data) {
//                     console.log(ans.data)
//                    setDada(ans.data.trips)

//                 }
//             }).catch((err) => {
//                 console.log(err)
//             })
//     }
//     useEffect(() => {
//         receiveData()
//     }, [])

//     return [data, receiveData]
// }
