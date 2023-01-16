import { useRef, useState } from "react"
import { InputContainer } from "./InputContainer"

export const Input = ({ name, index, inputValidator, isValid, placeholder, stateHandler, styleName, type, value, regEx, errMsg }) => {

  const inputReference = useRef();

  const changeHandler = () => {
    stateHandler((inputData) => {
      return { ...inputData, [name]: { element: inputReference.current,regEx:regEx, index: index } }
    });
  }

  return (
    <InputContainer>
      <input
        className={styleName}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={type !== "submit" ? () => inputValidator(inputReference.current, regEx, index) : null}
        value={value}
        ref={inputReference}
      />
      {
        !isValid[index] ?
          <span className="error">{errMsg}</span>
          : null
      }
    </InputContainer>
  )
}