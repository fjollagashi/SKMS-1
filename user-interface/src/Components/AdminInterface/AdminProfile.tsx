import "../../Css/ParentProfile.css";
import { IParent } from "../InterfaceRepository/IParent";

const FakeParent: IParent = {
  parentId: "dfsdfs",
  phoneNumber: "1231231",
};

interface props {
  logOut: () => void;
}

export const AdminProfile: React.FunctionComponent<props> = ({ logOut }) => {
  return (
    <section id="ParentProfile">
      <div className="profile-blue">
        <div className="flex flex-row">
          <div className="profile-parent-image">
            <img
              src="https://th.bing.com/th/id/OIP.BHOqw309oBOx1BIr2aa1ewHaHa?pid=ImgDet&rs=1"
              alt=""
            />
            <h2>Adriatik Kelmendi</h2>
            <p>23 Gusht, 1977</p>
          </div>
          <div className="profile-parent-details">
            <article>
              <h3>Shkolla</h3>
              <p>Shkolla Fillore dhe e Mesme e Ulët "Hysni Zajmi"</p>
            </article>
            <article>
              <h3>Numri i telefonit</h3>
              <p>+383423 32423423</p>
            </article>
            <article>
              <h3>Vendbanimi</h3>
              <p>Vrelle</p>
            </article>
          </div>
        </div>
        <button onClick={logOut}>ÇKYÇU</button>
      </div>
    </section>
  );
};
