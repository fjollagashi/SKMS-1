import { SyntheticEvent } from "react";
import "../../Css/LogIn.css";
import Logo from "../../Media/logo.png";
import { useNavigate } from "react-router-dom";

interface LogInProps {
  logIn: () => void;
  logged: boolean;
  buildUser: (e: SyntheticEvent<HTMLInputElement>) => void;
}

export const LogIn: React.FunctionComponent<LogInProps> = ({
  logIn,
  buildUser,
  logged,
}) => {
  let navigate = useNavigate();
  //if (!logged) navigate("/ballina");
  return (
    <section
      className="flex flex-column justify-center align-center"
      id="LogIn"
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <p>Kyçuni në platformë</p>
        <img src={Logo} alt="" />
        <p className="formFields flex flex-row justify-between">
          <span>NUMRI IDENTIFIKUES</span>
          <input type="text" name="userId" onChange={buildUser} />
        </p>
        <p className="formFields flex flex-row justify-between">
          <span>KODI I QASJES</span>
          <input type="text" name="userPassword" onChange={buildUser} />
        </p>
        <button onClick={logIn}>KYÇUNI</button>
        <p className="info">
          Keni pyetje?<span className="bluetext"> Na kontaktoni këtu. </span>
        </p>
      </form>
    </section>
  );
};
