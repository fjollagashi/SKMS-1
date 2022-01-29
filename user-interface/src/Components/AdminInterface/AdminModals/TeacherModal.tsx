import { Modal } from "../../Modal/Modal";
import React, { SyntheticEvent, useEffect } from "react";
import "../../../Css/CustomModals/StudentDetailsModal.css";
import { ITeacher } from "../../InterfaceRepository/ITeacher";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Stores/Store";

interface TeacherModalProps {
  hide: () => void;
}

export default observer(function TeacherModal({ hide }: TeacherModalProps) {
  const { teacherStore } = useStore();
  const {
    selectedTeacher,
    getTeachers,
    deleteTeacher,
    createTeacher,
    updateTeacher,
    openModal,
    modalState,
    getDefaultTeacher,
  } = teacherStore;

  const [Teacher, SetTeacher] = React.useState<ITeacher>(
    selectedTeacher ?? getDefaultTeacher()
  );

  const handleInputChange = (
    e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    SetTeacher({
      ...Teacher!,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleInnerInputChange = (
    e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    SetTeacher({
      ...Teacher!,
      teacherNavigation: {
        ...Teacher!.teacherNavigation!,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    });
  };

  const handleSubmit = () => {
    Teacher.teacherId ? updateTeacher(Teacher) : createTeacher(Teacher);
  };

  useEffect(() => {
    SetTeacher(selectedTeacher ?? getDefaultTeacher());
  }, [selectedTeacher]);

  return (
    <Modal hide={hide}>
      <div className="student-modal">
        {modalState === "LIST" && Teacher ? (
          <>
            <h2>Lista e ligjëruesve</h2>
            <div className="student-blue">
              <table>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Emri</td>
                    <td>Mbiemri</td>
                    <td>Kujdestar i klasës</td>
                    <td>Niveli</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {getTeachers().map((teacher) => {
                    if (teacher.teacherNavigation)
                      return (
                        <tr>
                          <td>{teacher.teacherId}</td>
                          <td>{teacher.teacherNavigation.name}</td>
                          <td>{teacher.teacherNavigation.surname}</td>
                          <td>
                            {teacher.classgroup
                              ? teacher.classgroup.groupName
                              : "Nuk ka"}
                          </td>
                          <td>{teacher.teacherCategory}</td>
                          <td>
                            <button
                              onClick={() =>
                                openModal("DETAILS", teacher.teacherId)
                              }
                              className="student-modal-details-button"
                            >
                              SHIKO DETAJET
                            </button>
                            <button
                              onClick={() => deleteTeacher(teacher.teacherId)}
                              className="student-modal-details-button"
                            >
                              FSHIJ
                            </button>
                            <button
                              onClick={() =>
                                openModal("EDIT", teacher.teacherId)
                              }
                              className="student-modal-details-button"
                            >
                              NDRYSHO
                            </button>
                          </td>
                        </tr>
                      );
                    else return <></>;
                  })}
                </tbody>
              </table>
              <div className="create-modal-section">
                <button onClick={() => openModal("CREATE")}>
                  SHTO NJË LIGJËRUES
                </button>
              </div>
            </div>
          </>
        ) : modalState === "DETAILS" && Teacher.teacherNavigation ? (
          <>
            <h2>
              Detajet e
              {Teacher.teacherNavigation &&
                " " +
                  Teacher.teacherNavigation!.name +
                  " " +
                  Teacher.teacherNavigation!.surname}
            </h2>
            <div className="student-blue">
              <button onClick={() => openModal("LIST")}>KTHEHU</button>
              <img
                src={
                  Teacher.teacherNavigation &&
                  Teacher.teacherNavigation.profilePictureUrl
                }
                alt=""
              />
              <div className="student-details">
                <article>
                  <h3>Emri dhe Mbiemri</h3>
                  <p>
                    {Teacher.teacherNavigation!.name +
                      " " +
                      Teacher.teacherNavigation!.surname}
                  </p>
                </article>
                <article>
                  <h3>Data e lindjes</h3>
                  <p>{Teacher.teacherNavigation!.birthday}</p>
                </article>
                <article>
                  <h3>Gjinia</h3>
                  <p>{Teacher.teacherNavigation!.gender}</p>
                </article>
                <article>
                  <h3>Vendbanimi</h3>
                  <p>{Teacher.teacherNavigation!.userAddress}</p>
                </article>
                <article>
                  <h3>Klasa</h3>
                  <p>
                    {Teacher.classgroup
                      ? Teacher.classgroup.groupName
                      : "Nuk ka"}
                  </p>
                </article>
              </div>
            </div>
          </>
        ) : modalState === "CREATE" ? (
          <>
            <h2>Shtoni një ligjërues</h2>
            <div className="student-blue">
              <div className="create-modal-section">
                <span>Emri</span>
                <input
                  type="text"
                  name="name"
                  minLength={3}
                  onChange={handleInnerInputChange}
                />
              </div>
              <div className="create-modal-section">
                <span>Mbiemri</span>
                <input
                  type="text"
                  name="surname"
                  onChange={handleInnerInputChange}
                />
              </div>
              <div className="create-modal-section">
                <span>Adresa</span>
                <select name="userAddress"></select>
              </div>
              <div className="create-modal-section">
                <span>Gjinia</span>
                <select name="gender" onChange={handleInnerInputChange}>
                  <option value="" disabled selected>
                    Zgjedh gjininë
                  </option>
                  <option value="M">Mashkull</option>
                  <option value="F">Femër</option>
                </select>
              </div>
              <div className="create-modal-section">
                <span>Ditëlindja</span>
                <input
                  type="date"
                  name="birthday"
                  onChange={handleInnerInputChange}
                />
              </div>
              <div className="create-modal-section">
                <span>Grada akademike</span>
                <select name="academicDegree" onChange={handleInputChange}>
                  <option value="" disabled selected>
                    Zgjedh gradën akademike
                  </option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                </select>
              </div>
              <div className="create-modal-section">
                <span>Kategoria</span>
                <select name="teacherCategory" onChange={handleInputChange}>
                  <option value="" disabled selected>
                    Zgjedh kategorinë
                  </option>
                  <option value="Fillor">Fillor</option>
                  <option value="Arsimtar">Arsimtar</option>
                </select>
              </div>
              <div className="create-modal-section">
                <span>Numri i telefonit</span>
                <input
                  type="text"
                  name="phoneNumber"
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
            {Teacher && Teacher.teacherNavigation && (
              <>
                <h2>Ndryshoni detajet e ligjëruesit</h2>
                <div className="student-blue">
                  <div className="create-modal-section">
                    <span>Emri</span>
                    <input
                      type="text"
                      name="name"
                      defaultValue={Teacher.teacherNavigation!.name}
                      onChange={handleInnerInputChange}
                    />
                  </div>
                  <div className="create-modal-section">
                    <span>Mbiemri</span>
                    <input
                      type="text"
                      name="surname"
                      defaultValue={Teacher.teacherNavigation!.surname}
                      onChange={handleInnerInputChange}
                    />
                  </div>
                  <div className="create-modal-section">
                    <span>Adresa</span>
                    <select name="userAddress"></select>
                  </div>
                  <div className="create-modal-section">
                    <span>Gjinia</span>
                    <select name="gender" onChange={handleInnerInputChange}>
                      <option value="" disabled>
                        Zgjedh gjininë
                      </option>
                      <option
                        value="M"
                        selected={Teacher.teacherNavigation!.gender === "M"}
                      >
                        Mashkull
                      </option>
                      <option
                        value="F"
                        selected={Teacher.teacherNavigation!.gender === "F"}
                      >
                        Femër
                      </option>
                    </select>
                  </div>
                  <div className="create-modal-section">
                    <span>Ditëlindja</span>
                    <input
                      type="date"
                      name="birthday"
                      onChange={handleInnerInputChange}
                    />
                  </div>
                  <div className="create-modal-section">
                    <span>Grada akademike</span>
                    <select name="academicDegree" onChange={handleInputChange}>
                      <option value="" disabled>
                        Zgjedh gradën akademike
                      </option>
                      <option
                        value="Bachelor"
                        selected={Teacher.academicDegree === "Bachelor"}
                      >
                        Bachelor
                      </option>
                      <option
                        value="Master"
                        selected={Teacher.academicDegree === "Bachelor"}
                      >
                        Master
                      </option>
                    </select>
                  </div>
                  <div className="create-modal-section">
                    <span>Kategoria</span>
                    <select name="teacherCategory" onChange={handleInputChange}>
                      <option value="" disabled>
                        Zgjedh kategorinë
                      </option>
                      <option
                        value="Fillor"
                        selected={Teacher.academicDegree === "Fillor"}
                      >
                        Fillor
                      </option>
                      <option
                        value="Arsimtar"
                        selected={Teacher.academicDegree === "Arsimtar"}
                      >
                        Arsimtar
                      </option>
                    </select>
                  </div>
                  <div className="create-modal-section">
                    <span>Numri i telefonit</span>
                    <input
                      type="text"
                      name="phoneNumber"
                      defaultValue={Teacher.phoneNumber}
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
