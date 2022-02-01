import Emblem from "../../Media/emblem.png";
import { ISchool } from "../InterfaceRepository/ISchool";
import "../../Css/Header.css";
import HeaderNavBar from "./HeaderNavBar";

interface IProps {
  School: ISchool;
  LoggedIn: boolean;
}

export const Header: React.FunctionComponent<IProps> = ({
  School,
  LoggedIn,
}) => {
  return (
    <header>
      <ul className="mainheader flex flex-row">
        <li>
          <img src={Emblem} alt="Emblema e Kosovës" />
        </li>
        <li className="goldtext">{School.schoolName}</li>
        <li>
          <p>SKMS</p>
          <p>Sistemi Kombëtar për Menaxhimin e Shkollave</p>
        </li>
      </ul>
      {LoggedIn && <HeaderNavBar />}
    </header>
  );
};
