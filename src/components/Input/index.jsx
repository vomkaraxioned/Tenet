import { useRef } from "react"

export const Input = ({ name, placeholder, stateHandler, styleName, type }) => {

  const inputReference = useRef();
  const changeHandler = () => {
    setState(inputReference.current.value)
  }

  return (
    <input
      className={styleName}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={changeHandler}
      ref={inputReference}
    />
  )
}