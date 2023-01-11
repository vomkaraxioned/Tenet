import { useState } from "react"   
import { Input } from "../Input/index"

export const Form = ({})=>{

  const [inputs,setInputs] = useState({});
  const submitHandler = (e)=>{
    e.preventDefault();

  }

  return(
    <form action = {} className = {} method = {submitHandler} name ={}>
      
    </form>
  )
}