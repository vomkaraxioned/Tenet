import { useState } from "react"
import { Input } from "../Input/index"

export const Form = ({ action, formDataHandler, method, name, styleName, inputs }) => {

  const [inputData, setInputData] = useState({});
  const [validities,setValidities] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const checkValidity = ()=>{
      const length = inputs.length-1;
      let valid = true,i = 0;
      for(i;i<length;i++) {
        if(!validities[i] || validities[i] === undefined){
          valid = false;
        }
      }
      return valid;
    }
    if(checkValidity()){
      formDataHandler(inputData)
    }
    setValidities([]);
    setInputData({});
    e.target.reset()
  }

  return (
    <form
      action={action}
      className={styleName}
      method={method}
      name={name}
      onSubmit={submitHandler}
    >
      {
        inputs.map(({ name, placeholder, styleName, type, value,regEx,errMsg }, i) => {
          return (
            <Input
              errMsg = {errMsg}  
              name={name}
              placeholder={placeholder}
              stateHandler={setInputData}
              styleName={styleName}
              regEx = {regEx}
              type={type}
              validityHandler = {setValidities}
              value={value}
              key={i}
            />
          )
        })
      }
    </form>
  )
}