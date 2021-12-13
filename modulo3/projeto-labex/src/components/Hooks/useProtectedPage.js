import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";

 export const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    // const [token,setToken]=useState
    const token = localStorage.getItem("token");

    if (token === null) {
      
      history.push("/login")
  
    }
  }, [])
}