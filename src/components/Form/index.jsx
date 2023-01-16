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
  const [validities, setValidities] = useState(getArr());

  const inputValidator = (inputElement, regEx, index) => {
    const regPattern = new RegExp(regEx);
    inputElement.value === "" ? changeValidity(false, index) : regEx && !regPattern.test(inputElement.value) ? changeValidity(false, index) : changeValidity(true, index);
    validities[index] ? inputElement.classList.remove("err") : inputElement.classList.add("err");
  }

  const submitValidator = () => {
    const max = inputs.length - 1;
    let i = 0;
    for (i; i < max; i++) {
      if (inputData[inputs[i].name] === undefined) {
        changeValidity(false, i);
      } else {
        const { element, regEx, index } = inputData[inputs[i].name];
        inputValidator(element, regEx === undefined ? inputs[i].regEx : regEx, index)
      }
    }
    const valid = validities.filter(item => !item)
    return valid.length > 0 ? false : true;
  }

  const changeValidity = (value, index) => {
    const temp = validities;
    temp[index] = value;
    setValidities(temp)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (submitValidator()) {
      formDataHandler(inputData)
      setInputData({});
      e.target.reset()
    }
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
              isValid={validities[i]}
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