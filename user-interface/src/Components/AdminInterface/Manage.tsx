import { observer } from "mobx-react-lite";
import React from "react";
import "../../Css/Manage.css";
import { ISchool } from "../InterfaceRepository/ISchool";
import { Loader } from "../Loader/Loader";
import { useStore } from "../Stores/Store";
import ClassroomModal from "./AdminModals/ClassroomModal";
import CurriculumModal from "./AdminModals/CurriculumModal";
import StudentModal from "./AdminModals/StudentModal";
import SubjectModal from "./AdminModals/SubjectModal";
import TeacherModal from "./AdminModals/TeacherModal";
import { ToastContainer } from "react-toastify";

const FakeSchool: ISchool = {
  schoolId: "sdfs",
  schoolName: 'Shkolla Fillore dhe e Mesme e Ulët " Hysni Zajmi "',
  about: "dsfsdf",
  category: "Fillore",
  schoolAddress: "123-3",
  administrator: "",
};

export default observer(function Manage() {
  const [School, SetSchool] = React.useState<ISchool | undefined>(undefined);
  const [ModalState, SetModalState] = React.useState("NONE");

  const {
    curriculumStore,
    classroomStore,
    teacherStore,
    subjectStore,
    studentStore,
  } = useStore();

  //has css animations
  const closeModal = () => {
    document.getElementsByClassName("modal")[0].classList.add("modal-close");
    document
      .getElementsByClassName("modal-background")[0]
      .classList.add("background-close");
    setTimeout(() => SetModalState("NONE"), 250);
  };

  return (
    <section onClick={() => SetSchool(FakeSchool)} id="Manage">
      {!School ? (
        <Loader />
      ) : (
        <>
          <ToastContainer />
          {ModalState === "STUDENT" ? (
            <StudentModal hide={closeModal} />
          ) : ModalState === "TEACHER" ? (
            <TeacherModal hide={closeModal} />
          ) : ModalState === "CURRICULUM" ? (
            <CurriculumModal hide={closeModal} />
          ) : ModalState === "SUBJECT" ? (
            <SubjectModal hide={closeModal} />
          ) : ModalState === "CLASS" ? (
            <ClassroomModal hide={closeModal} />
          ) : (
            <></>
          )}
          <h2>Menaxho shkollën</h2>
          <div className="backgr">
            <h2>Detajet e shkollës</h2>
            <div className="yellow-buttons-container">
              <article className="yellow-button">
                <h3>Numri i nxënësve në shkollë</h3>
                <h2>{studentStore.getStudents().length}</h2>
                <button onClick={() => SetModalState("STUDENT")}>
                  SHIKO LISTËN
                </button>
              </article>
              <article className="yellow-button">
                <h3>Numri i ligjëruesve në shkollë</h3>
                <h2>{teacherStore.getTeachers().length}</h2>
                <button onClick={() => SetModalState("TEACHER")}>
                  SHIKO LISTËN
                </button>
              </article>
              <article className="yellow-button">
                <h3>Numri i stafit ndihmës në shkollë</h3>
                <h2>1</h2>
                <button>SHIKO LISTËN</button>
              </article>
              <article className="yellow-button">
                <h3>Numri i lëndëve në shkollë</h3>
                <h2>{subjectStore.getSubjects().length}</h2>
                <button onClick={() => SetModalState("SUBJECT")}>
                  SHIKO LISTËN
                </button>
              </article>
              <article className="yellow-button">
                <h3>Numri i kurrikulave në shkollë</h3>
                <h2>{curriculumStore.getCurriculums().length}</h2>
                <button onClick={() => SetModalState("CURRICULUM")}>
                  SHIKO LISTËN
                </button>
              </article>
              <article className="yellow-button">
                <h3>Numri i klasave në shkollë</h3>
                <h2>{classroomStore.getClassrooms().length}</h2>
                <button onClick={() => SetModalState("CLASS")}>
                  SHIKO LISTËN
                </button>
              </article>
            </div>
          </div>
        </>
      )}
    </section>
  );
});
