import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Routing } from "./Routes";

const App = ()=>{

  const isLogin = useSelector(state => state.loginReducer.login);
  const url = useLocation();

  const changePage = () => {
    if (isLogin && url.pathname === "/login") {
      url.pathname = "/";
    } else {
      if (!isLogin && url.pathname !== "/login") {
        url.pathname = "/login"
      }
    }
  }

  useEffect(() => changePage(), [isLogin]);

  return(
    <Routing />
  )
}

export default App;