import React from "react";
import { IChild } from "../../InterfaceRepository/IChild";
import { Loader } from "../../Loader/Loader";
import { Modal } from "../../Modal/Modal";
import "../../../Css/Children.css";
import { Link } from "react-router-dom";

const FakeChildren: IChild[] = [
  {
    id: "12345",
    name: "Altina Hodaj",
    profilePicture:
      "https://th.bing.com/th/id/OIP.BHOqw309oBOx1BIr2aa1ewHaHa?pid=ImgDet&rs=1",
    teacher: "Arben Vitija",
    class: "III - 3",
    birthday: "22 Janar 2009",
  },
  {
    id: "12345",
    name: "Altina Hodaj",
    profilePicture:
      "https://th.bing.com/th/id/OIP.BHOqw309oBOx1BIr2aa1ewHaHa?pid=ImgDet&rs=1",
    teacher: "Arben Vitija",
    class: "III - 3",
    birthday: "22 Janar 2009",
  },
  {
    id: "12345",
    name: "Altina Hodaj",
    profilePicture:
      "https://th.bing.com/th/id/OIP.BHOqw309oBOx1BIr2aa1ewHaHa?pid=ImgDet&rs=1",
    teacher: "Arben Vitija",
    class: "III - 3",
    birthday: "22 Janar 2009",
  },
];

export const Children = () => {
  const [Children, SetChildren] = React.useState<IChild[]>([] as IChild[]);
  return (
    <section onClick={() => SetChildren(FakeChildren)} id="Children">
      {Children.length === 0 ? (
        <Loader />
      ) : (
        <>
          <h2 className="bluetext">Fëmijët tuaj në shkollë</h2>
          {Children.map((item) => {
            return <ChildView child={item} />;
          })}
        </>
      )}
    </section>
  );
};

interface ChildViewProps {
  child: IChild;
}

const ChildView: React.FC<ChildViewProps> = ({ child }) => {
  return (
    <article>
      <div className="children-yellowbox flex flex-row">
        <img src={child.profilePicture} alt="" />
        <div className="children-details">
          <h3>{child.name}</h3>
          <h5>{child.birthday}</h5>
          <p>Klasa {child.class}</p>
          <p>Me kujdestar {child.teacher}</p>
          <Link to={child.id}>
            <button>SHIKO PROFILIN</button>
          </Link>
        </div>
      </div>
    </article>
  );
};
