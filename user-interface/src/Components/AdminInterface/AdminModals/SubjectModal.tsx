import { Modal } from "../../Modal/Modal";
import React, { SyntheticEvent, useEffect } from "react";
import { IStudent } from "../../InterfaceRepository/IStudent";
import "../../../Css/CustomModals/StudentDetailsModal.css";
import SubjectPhoto from "../../../Media/subject.png";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Stores/Store";
import { ISubject } from "../../InterfaceRepository/ISubject";

interface SubjectModalProps {
  hide: () => void;
}

export default observer(function SubjectModal({ hide }: SubjectModalProps) {
  const { subjectStore, curriculumStore } = useStore();
  const {
    selectedSubject,
    getSubjects,
    modalState,
    openModal,
    createSubject,
    updateSubject,
    getDefaultSubject,
    deleteSubject,
  } = subjectStore;
  const [subject, setSubject] = React.useState<ISubject>({} as ISubject);

  const handleInputChange = (
    e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSubject({
      ...subject,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(subject);
  };

  const handleSubmit = () => {
    if (subject.curriculum === "") {
      alert("Zgedhni nje kurrikule");
      return;
    }
    subject.subjectId ? updateSubject(subject) : createSubject(subject);
  };

  useEffect(() => {
    const init = selectedSubject ?? getDefaultSubject();
    setSubject(init);
  }, [selectedSubject]);

  return (
    <Modal hide={hide}>
      <div className="student-modal">
        {modalState === "LIST" ? (
          <>
            <h2>Lista e lëndëve të shkollës</h2>
            <div className="student-blue">
              <table>
                <thead>
                  <td>ID</td>
                  <td>Emri</td>
                  <td>Kurrikula / Klasa</td>
                  <td></td>
                </thead>
                <tbody>
                  {getSubjects().map((sub) => {
                    return (
                      <tr>
                        <td>{sub.subjectId}</td>
                        <td>{sub.subjectName}</td>
                        <td>{sub.curriculum}</td>
                        <td>
                          <button
                            onClick={() => openModal("DETAILS", sub.subjectId)}
                            className="student-modal-details-button"
                          >
                            SHIKO DETAJET
                          </button>
                          <button
                            onClick={() => deleteSubject(sub.subjectId)}
                            className="student-modal-details-button"
                          >
                            FSHIJ
                          </button>
                          <button
                            onClick={() => openModal("EDIT", sub.subjectId)}
                            className="student-modal-details-button"
                          >
                            NDRYSHO
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="create-modal-section">
                <button onClick={() => openModal("CREATE")}>
                  SHTO NJË LËNDË
                </button>
              </div>
            </div>
          </>
        ) : modalState === "DETAILS" ? (
          <>
            <h2>Detajet e lëndës {subject.subjectName}</h2>
            <div className="student-blue">
              <button onClick={() => openModal("LIST")}>KTHEHU</button>
              <img src={SubjectPhoto} alt="" />
              <div className="student-details">
                <article>
                  <h3>Emri i lëndës</h3>
                  <p>{subject.subjectName}</p>
                </article>
                <article>
                  <h3>Ligjëruesit</h3>
                  {subject.subjectsTeachers &&
                    subject.subjectsTeachers.map((st) => {
                      if (st.teacher && st.teacher.teacherNavigation)
                        return (
                          <p>
                            {st.teacher.teacherNavigation.name +
                              " " +
                              st.teacher.teacherNavigation.surname}
                          </p>
                        );
                      else return <></>;
                    })}
                </article>
                <article>
                  <h3>Klasa</h3>
                  <p>{subject.curriculum}</p>
                </article>
              </div>
            </div>
          </>
        ) : modalState === "EDIT" ? (
          <>
            {subject && (
              <>
                <h2>Ndryshoni detajet e lëndës</h2>
                <div className="student-blue">
                  <div className="create-modal-section">
                    <span>Emri</span>
                    <input
                      type="text"
                      name="subjectName"
                      value={subject.subjectName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="create-modal-section">
                    <span>Kurrikula / Klasa</span>
                    <select name="curriculum" onChange={handleInputChange}>
                      {curriculumStore.getCurriculums().map((curr) => {
                        return (
                          <option
                            selected={
                              curr.curriculumId === selectedSubject!.curriculum
                            }
                            value={curr.curriculumId}
                          >
                            {curr.grade}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="create-modal-section">
                    <button onClick={handleSubmit}>NDRYSHO</button>
                    <button onClick={() => openModal("LIST")}>KTHEHU</button>
                  </div>
                </div>
              </>
            )}
          </>
        ) : modalState === "CREATE" ? (
          <>
            <h2>Shto një lëndë</h2>
            <div className="student-blue">
              <div className="create-modal-section">
                <span>Emri</span>
                <input
                  type="text"
                  name="subjectName"
                  value={subject.subjectName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="create-modal-section">
                <span>Kurrikula / Klasa</span>
                <select name="curriculum" onChange={handleInputChange}>
                  <option value="" disabled selected={true}>
                    Zgjedhni një kurrikulë
                  </option>
                  {curriculumStore.getCurriculums().map((curr) => {
                    return (
                      <option value={curr.curriculumId}>{curr.grade}</option>
                    );
                  })}
                </select>
              </div>
              <div className="create-modal-section">
                <button onClick={handleSubmit}>SHTO</button>
                <button onClick={() => openModal("LIST")}>KTHEHU</button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </Modal>
  );
});
