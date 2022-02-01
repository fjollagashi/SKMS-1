import React from "react";
import { IStudent } from "../../InterfaceRepository/IStudent";
import { Loader } from "../../Loader/Loader";
import { Modal } from "../../Modal/Modal";
import "../../../Css/Children.css";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../Stores/Store";
import { observer } from "mobx-react-lite";
import { GetDate } from "../../../Util";

export default observer(function Children() {
  const { loggedParent, loggedParentChildren } = useStore().userStore;
  return (
    <section id="Children">
      {loggedParentChildren.length === 0 ? (
        <Loader />
      ) : (
        <>
          <h2 className="bluetext">Fëmijët tuaj në shkollë</h2>
          {loggedParentChildren.map((item) => {
            return <ChildView child={item} />;
          })}
        </>
      )}
    </section>
  );
});

interface ChildViewProps {
  child: IStudent;
}

const ChildView: React.FC<ChildViewProps> = ({ child }) => {
  let navigate = useNavigate();
  return (
    <article>
      <div className="children-yellowbox flex flex-row">
        <img src={child.studentNavigation?.profilePictureUrl} alt="" />
        <div className="children-details">
          <h3>
            {child.studentNavigation!.name +
              " " +
              child.studentNavigation!.surname}
          </h3>
          <h5>{GetDate(child.studentNavigation!.birthday)}</h5>
          <p>Klasa {child.classGroupNavigation!.groupName}</p>
          <p>
            Me kujdestar{" "}
            {child.classGroupNavigation!.homeroomTeacherNavigation!
              .teacherNavigation!.name +
              " " +
              child.classGroupNavigation!.homeroomTeacherNavigation!
                .teacherNavigation!.surname}
          </p>
          <Link to={child.studentId}>
            <button onClick={() => navigate("/" + child.studentId)}>
              SHIKO PROFILIN
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};
