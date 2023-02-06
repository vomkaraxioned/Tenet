import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Routing } from "./Routes";
import { apiHandler } from "./api/apiHandler";
import { Navbar } from "./components/Navbar";
import { logout } from "./store/reducers/loginSlice";

const App = () => {

  const userLogged = useSelector(state => state.loginReducer.login);
  const url = useLocation();
  const dispatch = useDispatch();

  const changePage = () => {
    if (userLogged && url.pathname === "/login") {
      window.location.href = "/";
    } else {
      if (!userLogged && url.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
  }

  useEffect(() => changePage(), [userLogged]);

  return (
    <>
      {userLogged ?
        <Navbar
          userName={userLogged.username}
          orgName={userLogged.orgname}
          logoutHandler={() => dispatch(logout())}
        />
        : null
      }
      <Routing />
    </>
  )
}

export default App;
