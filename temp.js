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
  submitValidator();
  if (valid) {
    formDataHandler(inputData)
    // setInputData({});
    // e.target.reset()
  }
  setValid(true)
}
