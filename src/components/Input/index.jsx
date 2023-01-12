import { useRef, useState } from "react"
import { InputContainer } from "./InputContainer"

export const Input = ({ name, placeholder, stateHandler, styleName, type, validityHandler, value, regEx, errMsg }) => {
  const inputReference = useRef();
  const [isValid, setIsValid] = useState(true);

  const inputValidator = () => {
    const inputElement = inputReference.current;
    const regPattern = new RegExp(regEx);
    inputElement.value === "" ? setIsValid(false) : regEx && !regPattern.test(inputElement.value) ? setIsValid(false) : setIsValid(true);
    isValid ? inputElement.classList.remove("err") : inputElement.classList.add("err");
  }

  const changeHandler = () => {
    inputValidator();
    if (isValid) {
      stateHandler((inputData) => {
        return { ...inputData, [name]: inputReference.current.value }
      });
      validityHandler(state=>[...state,true])
    }else{
      validityHandler(state=>[...state,false])
    }
  }

  return (
    <InputContainer>
      <input
        className={styleName}
        type={type}
        name={name}
        placeholder={placeholder}
        onInput={changeHandler}
        onBlur={inputValidator}
        value={value}
        ref={inputReference}
      />
      {
        !isValid ?
          <span className="error">{errMsg}</span>
          : null
      }
    </InputContainer>
  )
}