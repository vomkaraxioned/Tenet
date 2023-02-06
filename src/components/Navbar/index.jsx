import { Link } from "react-router-dom";
import { Header } from "./Header.style";
import { Button } from "../Button/index";

export const Navbar = ({ userName, orgName, logoutHandler }) => {

  return (
    <Header>
      <h1 className="logo"><Link to="/" title="Tenet">Tenet</Link></h1>
      <nav>
        <span className="user">{userName}</span>
        <span className="user">{orgName}</span>
        <Button name="Logout" styleName="logout-btn btn" clickHandler={logoutHandler} />
      </nav>
    </Header>
  )
}