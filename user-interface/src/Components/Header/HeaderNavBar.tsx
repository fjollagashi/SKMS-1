import "../../Css/HeaderNavBar.css";
import { Link } from "react-router-dom";

export const HeaderNavBar = () => {
  return (
    <ul className="navbar flex flex-row">
      <li className="clicked">
        <Link to="/ballina">Ballina</Link>
      </li>
      <li>
        <Link to="/about">Rreth shkollës</Link>
      </li>
      <li>
        <Link to="/femijet">Fëmijët tuaj</Link>
      </li>
      <li>
        <Link to="/profili">Profili im</Link>
      </li>
    </ul>
  );
};
