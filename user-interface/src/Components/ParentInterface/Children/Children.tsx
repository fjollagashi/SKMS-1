import React from "react";
import { IStudent } from "../../InterfaceRepository/IStudent";
import { Loader } from "../../Loader/Loader";
import { Modal } from "../../Modal/Modal";
import "../../../Css/Children.css";
import { Link } from "react-router-dom";

const FakeChildren: IStudent[] = [
  {
    studentId: "324",
    classGroup: "324234",
    school: "sdfsdf",
    studentNavigation: {
      userId: "12345",
      name: "Altina",
      surname: "Hodaj",
      profilePictureUrl:
        "https://th.bing.com/th/id/OIP.BHOqw309oBOx1BIr2aa1ewHaHa?pid=ImgDet&rs=1",
      userAddress: "sdfs",
      gender: "F",
      birthday: "22 Janar 2009",
    },
    classGroupNavigation: {
      groupId: "dsfsd",
      groupName: "III - 3",
      grade: "3",
      classroom: "23242",
      homeroomTeacher: "45435",
      homeroomTeacherNavigation: {
        teacherId: "",
        academicDegree: "",
        phoneNumber: "",
        teacherCategory: "",
        school: "",
        teacherNavigation: {
          userId: "",
          name: "Arben",
          surname: "Vitija",
          profilePictureUrl: "null",
          userAddress: "",
          gender: "",
          birthday: "",
        },
      },
    },
  },
  {
    studentId: "324",
    classGroup: "324234",
    school: "sdfsdf",
    studentNavigation: {
      userId: "12345",
      name: "Altina",
      surname: "Hodaj",
      profilePictureUrl:
        "https://th.bing.com/th/id/OIP.BHOqw309oBOx1BIr2aa1ewHaHa?pid=ImgDet&rs=1",
      userAddress: "sdfs",
      gender: "F",
      birthday: "22 Janar 2009",
    },
    classGroupNavigation: {
      groupId: "dsfsd",
      groupName: "III - 3",
      grade: "3",
      classroom: "23242",
      homeroomTeacher: "45435",
      homeroomTeacherNavigation: {
        teacherId: "",
        academicDegree: "",
        phoneNumber: "",
        teacherCategory: "",
        school: "",
        teacherNavigation: {
          userId: "",
          name: "Arben",
          surname: "Vitija",
          profilePictureUrl: "null",
          userAddress: "",
          gender: "",
          birthday: "",
        },
      },
    },
  },
  {
    studentId: "324",
    classGroup: "324234",
    school: "sdfsdf",
    studentNavigation: {
      userId: "12345",
      name: "Altina",
      surname: "Hodaj",
      profilePictureUrl:
        "https://th.bing.com/th/id/OIP.BHOqw309oBOx1BIr2aa1ewHaHa?pid=ImgDet&rs=1",
      userAddress: "sdfs",
      gender: "F",
      birthday: "22 Janar 2009",
    },
    classGroupNavigation: {
      groupId: "dsfsd",
      groupName: "III - 3",
      grade: "3",
      classroom: "23242",
      homeroomTeacher: "45435",
      homeroomTeacherNavigation: {
        teacherId: "",
        academicDegree: "",
        phoneNumber: "",
        teacherCategory: "",
        school: "",
        teacherNavigation: {
          userId: "",
          name: "Arben",
          surname: "Vitija",
          profilePictureUrl: "null",
          userAddress: "",
          gender: "",
          birthday: "",
        },
      },
    },
  },
];

export const Children = () => {
  const [Children, SetChildren] = React.useState<IStudent[]>([] as IStudent[]);
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
  child: IStudent;
}

const ChildView: React.FC<ChildViewProps> = ({ child }) => {
  return (
    <article>
      <div className="children-yellowbox flex flex-row">
        <img src={child.studentNavigation?.profilePictureUrl} alt="" />
        <div className="children-details">
          <h3>
            {child.studentNavigation!.name + child.studentNavigation!.surname}
          </h3>
          <h5>{child.studentNavigation!.birthday}</h5>
          <p>Klasa {child.classGroupNavigation!.groupName}</p>
          <p>
            Me kujdestar{" "}
            {child.classGroupNavigation!.homeroomTeacherNavigation!
              .teacherNavigation!.name +
              child.classGroupNavigation!.homeroomTeacherNavigation!
                .teacherNavigation!.surname}
          </p>
          <Link to={child.studentId}>
            <button>SHIKO PROFILIN</button>
          </Link>
        </div>
      </div>
    </article>
  );
};
