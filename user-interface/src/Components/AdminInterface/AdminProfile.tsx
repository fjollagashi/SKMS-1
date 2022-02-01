import "../../Css/ParentProfile.css";
import { GetDate } from "../../Util";
import { useStore } from "../Stores/Store";

interface props {
  logOut: () => void;
}

export const AdminProfile: React.FunctionComponent<props> = ({ logOut }) => {
  const { loggedAdmin } = useStore().userStore;

  return (
    <section id="ParentProfile">
      <div className="profile-blue">
        <div className="flex flex-row">
          <div className="profile-parent-image">
            <img
              src={loggedAdmin?.administratorNavigation?.profilePictureUrl}
              alt=""
            />
            <h2>
              {loggedAdmin?.administratorNavigation?.name +
                " " +
                loggedAdmin?.administratorNavigation?.surname}
            </h2>
            <p>{GetDate(loggedAdmin?.administratorNavigation?.birthday)}</p>
          </div>
          <div className="profile-parent-details">
            <article>
              <h3>Shkolla</h3>
              <p>Shkolla Fillore dhe e Mesme e Ulët "Hysni Zajmi"</p>
            </article>
            <article>
              <h3>Numri i telefonit</h3>
              <p>{loggedAdmin?.phoneNumber}</p>
            </article>
            <article>
              <h3>Vendbanimi</h3>
              <p>
                {loggedAdmin?.administratorNavigation?.userAddressNavigation
                  ?.streetName +
                  ", " +
                  loggedAdmin?.administratorNavigation?.userAddressNavigation
                    ?.cityNavigation?.cityName}
              </p>
            </article>
          </div>
        </div>
        <button onClick={logOut}>ÇKYÇU</button>
      </div>
    </section>
  );
};
