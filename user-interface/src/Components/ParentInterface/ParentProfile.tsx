import "../../Css/ParentProfile.css";
import { useStore } from "../Stores/Store";
import { observer } from "mobx-react-lite";
import { GetDate } from "../../Util";

interface props {
  logOut: () => void;
}

export default observer(function ParentProfile({ logOut }: props) {
  const { loggedParent, loggedParentChildren } = useStore().userStore;

  return (
    <section id="ParentProfile">
      <div className="profile-blue">
        <div className="flex flex-row">
          <div className="profile-parent-image">
            <img
              src={loggedParent?.parentNavigation?.profilePictureUrl}
              alt=""
            />
            <h2>
              {loggedParent?.parentNavigation?.name +
                " " +
                loggedParent?.parentNavigation?.surname}
            </h2>
            <p>{GetDate(loggedParent?.parentNavigation?.birthday)}</p>
          </div>
          <div className="profile-parent-details">
            <article>
              <h3>Fëmijët</h3>
              {loggedParentChildren?.map((child) => {
                return (
                  <p>
                    {child.studentNavigation?.name +
                      " " +
                      child.studentNavigation?.surname}
                  </p>
                );
              })}
            </article>
            <article>
              <h3>Numri i telefonit</h3>
              <p>+383 45 667 134</p>
            </article>
            <article>
              <h3>Vendbanimi</h3>
              <p>
                {loggedParent?.parentNavigation?.userAddressNavigation
                  ?.streetName +
                  ", " +
                  loggedParent?.parentNavigation?.userAddressNavigation
                    ?.cityNavigation?.cityName}
              </p>
            </article>
          </div>
        </div>
        <button onClick={logOut}>ÇKYÇU</button>
      </div>
    </section>
  );
});
