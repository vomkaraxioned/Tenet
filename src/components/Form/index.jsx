import { useState } from "react";
import { Input } from "../Input";

export const Form = ({ action, formDataHandler, method, name, styleName, inputs }) => {

  const getObj = () => {
    const obj = {},
      max = inputs.length - 1;
    let i = 0;
    for (i; i < max; i++) {
      obj[i] = true
    }
    return obj;
  }

  const [inputData, setInputData] = useState({});
  const [validities, setValidities] = useState(getObj());

  const inputValidator = (input, regEx, index) => {
    const regPattern = new RegExp(regEx);
    input === "" ? changeValidity(false, index) : regEx && !regPattern.test(input) ? changeValidity(false, index) : changeValidity(true, index);
  }

  const submitValidator = () => {
    const max = inputs.length - 1;
    let i = 0, valid = true;
    for (i; i < max; i++) {
      if (inputData[inputs[i].name] === undefined) {
        changeValidity(false, i);
        valid = false
      } else {
        const { input, regEx, index } = inputData[inputs[i].name];
        inputValidator(input, regEx === undefined ? inputs[i].regEx : regEx, index);
        if (!validities[i]) {
          valid = false
        }
      }
    }
    return valid
  }

  const changeValidity = (value, index) => {
    setValidities(obj => {
      return { ...obj, [index]: value }
    })
  }

  const dataFilter = () => {
    const obj = {};
    let x;
    for (x in inputData) {
      obj[x] = inputData[x].input;
    }
    return obj
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (submitValidator()) {
      formDataHandler(dataFilter())
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