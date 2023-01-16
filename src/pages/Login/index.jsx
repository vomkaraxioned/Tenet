import { Form } from "../../components/Form/index"
import { LoginWrapper } from "./Login.style"

const Login = () => {

  const inputsObj = [
    {
      name: "orgName",
      placeholder: "enter organization name",
      styleName: "login-page__org-name",
      type: "text",
      errMsg: "please enter organization name"
    },
    {
      name: "userName",
      placeholder: "enter user name",
      styleName: "login-page__user-name",
      type: "text",
      errMsg: "please enter user name"
    },
    {
      name: "password",
      placeholder: "enter password",
      styleName: "login-page__password",
      type: "password",
      errMsg: "please enter password"
    },
    {
      name: "btn-login",
      styleName: "login-page__btn-login",
      type: "submit",
      value: "login",
    }
  ];

  const formDataHandler = (data) => {
    console.log(data)
  }

  return (
    <LoginWrapper>
      <h1 className="login-page__title">Tenet Login</h1>
      <Form action="#FIXME"
        formDataHandler={formDataHandler}
        method="Post"
        name="login-form"
        styleName="login-page__form"
        inputs={inputsObj}
      />
    </LoginWrapper>
  )
}

export default Login;