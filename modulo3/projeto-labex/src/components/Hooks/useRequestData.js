import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "./Data";

export function useRequestData(path,header) {
    const [data, setData] = useState()
        const receiveData = () => {
        axios.get(`${path}`,header)
            .then((ans) => {
                if (ans.data !== data) {
                console.log(ans.data)
                if(ans.data.trips){
                    setData(ans.data.trips)
                }
                  else{
                    setData(ans.data.trip)
                  }
                   
                }
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        receiveData()
    }, [])

    return [data, receiveData]
}


