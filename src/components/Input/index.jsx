import { useRef, useEffect } from "react";
import { InputContainer } from "./InputContainer";

export const Input = ({ name, index, inputValidator, isValid, placeholder, stateHandler, styleName, type, value, regEx, errMsg }) => {

  const inputReference = useRef();

  const changeHandler = () => {
    stateHandler((inputData) => {
      return { ...inputData, [name]: { regEx: regEx, index: index, input: inputReference.current.value } }
    });
  }

  useEffect(() => {
    if (value) {
      inputReference.current.value = value;
    }
  })


  return (
    <InputContainer>
      <input
        className={isValid ? styleName : type !== "submit" ? styleName + " err" : styleName}
        type={type}
        name={name}
        placeholder={placeholder}
        onInput={type !== "submit" ? () => {
          changeHandler();
          inputValidator(inputReference.current.value, regEx, index)
        } : null}
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