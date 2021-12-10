import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "./Data";

export function useRequestData(path,header) {
    const [data, setData] = useState()
    console.log(header)
    console.log(`${baseURL}${path}`)
        const receiveData = () => {
        axios.get(`${baseURL}${path}`,header)
            .then((ans) => {
                console.log("deu certo")
                if (ans.data !== data) {
                console.log(ans.data.trips)
                console.log(ans.data)
                if(ans.data.trips){
                    console.log("existe trips")
                    setData(ans.data.trips)
                }
                  else{
                      console.log("trip existeeee")
                    setData(ans.data.trip)
                  }
                   
                }
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        receiveData()
    }, [data])

    return [data, receiveData]
}


