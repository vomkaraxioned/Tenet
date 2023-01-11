import { useRef } from "react"
import { InputContainer } from "./InputContainer"

export const Input = ({ name, placeholder, stateHandler, styleName, type }) => {

  const inputReference = useRef();
  const changeHandler = () => {
    setState({...prev,[name]:inputReference.current.value})
  }

  return (
    <InputContainer>
      <input
        className={styleName}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={changeHandler}
        ref={inputReference}
      />
    </InputContainer>
  )
}