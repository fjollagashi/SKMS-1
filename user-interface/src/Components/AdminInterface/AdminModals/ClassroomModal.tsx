import { Modal } from "../../Modal/Modal";
import React, { SyntheticEvent } from "react";
import "../../../Css/CustomModals/StudentDetailsModal.css";
import ClassroomPhoto from "../../../Media/classroom.png";
import { IClassroom } from "../../InterfaceRepository/IClassroom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Stores/Store";

interface ClassroomModalProps {
  hide: () => void;
}

export default observer(function ClassroomModal({ hide }: ClassroomModalProps) {
  const { classroomStore } = useStore();
  const {
    getClassrooms,
    selectedClassroom,
    modalState,
    openModal,
    selectClassroom,
    deselectClassroom,
    getDefaultClassroom,
    createClassroom,
    updateClassroom,
  } = classroomStore;

  const [classroom, setClassroom] = React.useState<IClassroom>(
    {} as IClassroom
  );

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setClassroom({
      ...classroom,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    classroom.classroomId
      ? updateClassroom(classroom)
      : createClassroom(classroom);
  };

  //do not change this useEffect or the entire MobX logic breaks becuse JS is a cunt

  React.useEffect(() => {
    const init = selectedClassroom ?? getDefaultClassroom();
    setClassroom(init);
  }, [selectedClassroom]);

  return (
    <Modal hide={hide}>
      <div className="student-modal">
        {modalState === "LIST" ? (
          <>
            <h2>Lista e klasave në shkollë</h2>
            <div className="student-blue">
              <table>
                <thead>
                  <td>ID</td>
                  <td>Emri</td>
                  <td>Grupet dhe kujdestarët</td>
                  <td>Kapaciteti</td>
                  <td></td>
                </thead>
                <tbody>
                  {getClassrooms().map((cls) => {
                    return (
                      <tr>
                        <td>{cls.classroomId}</td>
                        <td>Klasa {cls.classroomName}</td>
                        <td>
                          {cls.classgroups &&
                            cls.classgroups.map((group) => {
                              return (
                                <p>
                                  {group.groupName +
                                    " - " +
                                    group.homeroomTeacher}
                                </p>
                              );
                            })}
                        </td>
                        <td>{cls.capacity}</td>
                        <td>
                          <button
                            onClick={() =>
                              openModal("DETAILS", cls.classroomId)
                            }
                            className="student-modal-details-button"
                          >
                            SHIKO DETAJET
                          </button>
                          <button>FSHIJ</button>
                          <button
                            onClick={() => openModal("EDIT", cls.classroomId)}
                          >
                            NDYRSHO
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="create-modal-section">
                <button onClick={() => openModal("CREATE")}>
                  SHTO NJË KLASË
                </button>
              </div>
            </div>
          </>
        ) : modalState === "DETAILS" ? (
          <>
            <h2>Detajet e klasës {classroom.classroomName}</h2>
            <div className="student-blue">
              <button onClick={() => openModal("LIST")}>KTHEHU</button>
              <img src={ClassroomPhoto} alt="" />
              <div className="student-details">
                <article>
                  <h3>Emri i klasës</h3>
                  <p>{classroom.classroomName}</p>
                </article>
                <article>
                  <h3>Grupet</h3>
                  <p>III-4</p>
                  <p>VIII-4</p>
                </article>
                <article>
                  <h3>Kapaciteti</h3>
                  <p>{classroom.capacity} nxënës</p>
                </article>
                <article>
                  <h3>Kujdestarët</h3>
                  <p>Arben Vitija për grupin III-4</p>
                  <p>Arlinda Demaj për grupin VIII-4</p>
                </article>
              </div>
            </div>
          </>
        ) : modalState === "CREATE" ? (
          <>
            <h2>Shtoni një klasë të re</h2>

            <div className="student-blue">
              <div className="create-modal-section">
                <span>Emri i klasës</span>
                <input
                  type="text"
                  name="classroomName"
                  onChange={handleInputChange}
                />
              </div>
              <div className="create-modal-section">
                <span>Kapaciteti i klasës</span>
                <input
                  type="text"
                  name="capacity"
                  onChange={handleInputChange}
                />
              </div>
              <div className="create-modal-section">
                <button onClick={handleSubmit}>SHTO</button>
                <button onClick={() => openModal("LIST")}>KTHEHU</button>
              </div>
            </div>
          </>
        ) : modalState === "EDIT" ? (
          <>
            {classroom && (
              <>
                <h2>Ndryshoni detajet e klasës</h2>
                <div className="student-blue">
                  <div className="create-modal-section">
                    <span>Emri i klasës</span>
                    <input
                      type="text"
                      name="classroomName"
                      value={classroom.classroomName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="create-modal-section">
                    <span>Kapaciteti i klasës {classroom.capacity}</span>
                    <input
                      type="text"
                      name="capacity"
                      value={classroom.capacity}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="create-modal-section">
                    <button onClick={handleSubmit}>NDRYSHO</button>
                    <button onClick={() => openModal("LIST")}>KTHEHU</button>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </Modal>
  );
});
