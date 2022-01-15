import "../../Css/Footer.css";
import Emblem from "../../Media/emblem.png";

export const Footer = () => {
  return (
    <footer>
      <ul className="flex flex-row justify-between">
        <li>
          <p className="whitetext">SKMS (C) 2021</p>
          <p className="goldtext">
            Ministria e Arsimit, Shkencës, Teknologjisë, dhe Inovacionit
          </p>
          <p className="goldtext">
            Adresa - Rruga Agim Ramadani, 10000 Prishtinë, Republika e Kosovës
          </p>
        </li>
        <li>
          <img src={Emblem} alt="Emblema e Kosovës" />
        </li>
      </ul>
    </footer>
  );
};
