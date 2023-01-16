import { useRef, useState, useEffect } from "react"
import { InputContainer } from "./InputContainer"

export const Input = ({ name, index, inputValidator, isValid, placeholder, stateHandler, styleName, type, value, regEx, errMsg }) => {

  const inputReference = useRef();

  const changeHandler = () => {
    stateHandler((inputData) => {
      return { ...inputData, [name]: { element: inputReference.current, regEx: regEx, index: index,value:inputReference.current.value } }
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
        className={styleName}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={type !== "submit" ? () => inputValidator(inputReference.current, regEx, index) : null}
        ref={inputReference}
      />
      {
        !isValid?
          <span className="error">{errMsg}</span>
          : null
      }
    </InputContainer>
  )
}