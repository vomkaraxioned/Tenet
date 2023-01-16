import { useState } from "react"
import { Input } from "../Input/index"

export const Form = ({ action, formDataHandler, method, name, styleName, inputs }) => {

  const getArr = () => {
    const arr = [],
      max = inputs.length - 1;
    let i = 0;
    for (i; i < max; i++) {
      arr.push(true)
    }
    return arr;
  }

  const [inputData, setInputData] = useState({});
  const [valid, setValid] = useState(true);
  const [validities, setValidities] = useState(getArr());

  const inputValidator = (inputElement, regEx, index) => {
    const regPattern = new RegExp(regEx);
    inputElement.value === "" ? changeValidity(false, index) : regEx && !regPattern.test(inputElement.value) ? changeValidity(false, index) : changeValidity(true, index);
    validities[index] ? inputElement.classList.remove("err") : inputElement.classList.add("err");
    if (!validities[index]) {
      setValid(false)
    }
  }

  const submitValidator = () => {
    const max = inputs.length - 1;
    let i = 0;
    for (i; i < max; i++) {
      if (inputData[inputs[i].name] === undefined) {
        changeValidity(false, i);
        setValid(false)
      } else {
        const { element, regEx, index } = inputData[inputs[i].name];
        inputValidator(element, regEx === undefined ? inputs[i].regEx : regEx, index)
      }
    }
  }

  const changeValidity = (value, index) => {
    setValidities(arr => {
      arr[index] = value;
      return arr
    }
    )
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let x;
    submitValidator();
    if (valid) {
      formDataHandler(inputData)
      setInputData({});
      e.target.reset()
    }
    setValid(true)
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
        inputs.map(({ name, placeholder, styleName, type, value, regEx, errMsg }, i) => {
          return (
            <Input
              errMsg={errMsg}
              index={i}
              inputValidator={inputValidator}
              isValid={validities}
              name={name}
              placeholder={placeholder}
              stateHandler={setInputData}
              styleName={styleName}
              regEx={regEx}
              type={type}
              value={value}
              key={i}
            />
          )
        })
      }
    </form>
  )
}