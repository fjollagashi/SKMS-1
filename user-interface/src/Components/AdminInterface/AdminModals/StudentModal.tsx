import { Modal } from "../../Modal/Modal";
import React, { SyntheticEvent, useEffect } from "react";
import { IStudent } from "../../InterfaceRepository/IStudent";
import "../../../Css/CustomModals/StudentDetailsModal.css";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Stores/Store";
import { IClassGroup } from "../../InterfaceRepository/IClassGroup";

interface StudentModalProps {
  hide: () => void;
}

export default observer(function StudentModal({ hide }: StudentModalProps) {
  const { studentStore, classroomStore, classGroupStore, addressStore } =
    useStore();
  const {
    selectedStudent,
    getDefaultStudent,
    modalState,
    openModal,
    updateStudent,
    createStudent,
    deleteStudent,
    getStudents,
  } = studentStore;

  const [Student, SetStudent] = React.useState<IStudent>(
    selectedStudent ?? getDefaultStudent()
  );

  const handleInputChange = (
    e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    SetStudent({
      ...Student!,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleInnerInputChange = (
    e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    SetStudent({
      ...Student!,
      studentNavigation: {
        ...Student!.studentNavigation!,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    });
  };

  const handleClassGroupInputChange = (
    e: SyntheticEvent<HTMLSelectElement>
  ) => {
    let groups: IClassGroup[] = [];
    classroomStore.getClassrooms().forEach((clgr) => {
      clgr.classgroups!.forEach((clsgrps) => groups.push(clsgrps));
    });
    let group = groups.find((gr) => gr.groupId === e.currentTarget.value);
    SetStudent({
      ...Student,
      classGroup: group!.groupId,
      classGroupNavigation: group,
    });
  };

  const handleSubmit = () => {
    Student.classGroupNavigation = classGroupStore.classGroupsRegistry.get(
      Student.classGroup
    );
    Student.studentNavigation!.userAddressNavigation =
      addressStore.addressRegistry.get(Student.studentNavigation!.userAddress);
    Student.studentId ? updateStudent(Student) : createStudent(Student);
  };

  useEffect(() => {
    SetStudent(selectedStudent ?? getDefaultStudent());
  }, [selectedStudent]);

  return (
    <Modal hide={hide}>
      <div className="student-modal">
        {modalState === "LIST" ? (
          <>
            <h2>Lista e studentëve</h2>
            <div className="student-blue">
              <table>
                <thead>
                  <td>ID</td>
                  <td>Emri</td>
                  <td>Mbiemri</td>
                  <td>Klasa</td>
                  <td>Kujdestari</td>
                  <td></td>
                </thead>
                <tbody>
                  {getStudents().map((student) => {
                    return (
                      <tr>
                        <td>{student.studentId}</td>
                        <td>{student.studentNavigation?.name}</td>
                        <td>{student.studentNavigation?.surname}</td>
                        <td>{student.classGroupNavigation?.groupName}</td>
                        <td>
                          {student.classGroupNavigation
                            ?.homeroomTeacherNavigation?.teacherNavigation
                            ?.name +
                            " " +
                            student.classGroupNavigation
                              ?.homeroomTeacherNavigation?.teacherNavigation
                              ?.surname}
                        </td>
                        <td>
                          <button
                            onClick={() =>
                              openModal("DETAILS", student.studentId)
                            }
                            className="student-modal-details-button"
                          >
                            SHIKO DETAJET
                          </button>
                          <button
                            onClick={() => deleteStudent(student.studentId)}
                            className="student-modal-details-button"
                          >
                            FSHIJ
                          </button>
                          <button
                            onClick={() => openModal("EDIT", student.studentId)}
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
                  REGJISTRO NJË STUDENT
                </button>
              </div>
            </div>
          </>
        ) : modalState === "DETAILS" ? (
          <>
            <h2>
              {"Detajet e " +
                Student.studentNavigation?.name +
                " " +
                Student.studentNavigation?.surname}
            </h2>
            <div className="student-blue">
              <button onClick={() => openModal("LIST")}>KTHEHU</button>
              <img
                src={
                  Student.studentNavigation
                    ? Student.studentNavigation.profilePictureUrl
                    : ""
                }
                alt=""
              />
              <div className="student-details">
                <article>
                  <h3>Emri dhe Mbiemri</h3>
                  <p>
                    {Student.studentNavigation?.name +
                      " " +
                      Student.studentNavigation?.surname}
                  </p>
                </article>
                <article>
                  <h3>Prindërit</h3>
                  {Student.parentsStudents?.map((ps) => {
                    return (
                      <p>
                        {ps.parent?.parentNavigation?.name +
                          " " +
                          ps.parent?.parentNavigation?.surname}
                      </p>
                    );
                  })}
                  {Student.parentsStudents?.length === 0 && <p>Të pacaktuar</p>}
                </article>
                <article>
                  <h3>Data e lindjes</h3>
                  <p>{Student.studentNavigation?.birthday || "E pa caktuar"}</p>
                </article>
                <article>
                  <h3>Gjinia</h3>
                  <p>{Student.studentNavigation?.gender || "E pa caktuar"}</p>
                </article>
                <article>
                  <h3>Vendbanimi</h3>
                  <p>
                    {Student.studentNavigation?.userAddressNavigation
                      ?.streetName +
                      ", " +
                      Student.studentNavigation?.userAddressNavigation
                        ?.cityNavigation?.cityName || "I pacaktuar"}
                  </p>
                </article>
                <article>
                  <h3>Klasa</h3>
                  <p>
                    {Student.classGroupNavigation?.groupName || "E pa caktuar"}
                  </p>
                </article>
              </div>
            </div>
          </>
        ) : modalState === "CREATE" ? (
          <>
            <h2>Regjistro një student të ri</h2>
            <div className="student-blue">
              <div className="create-modal-section">
                <span>Emri</span>
                <input
                  type="text"
                  name="name"
                  minLength={3}
                  id="studentNavigation"
                  onChange={handleInnerInputChange}
                />
              </div>
              <div className="create-modal-section">
                <span>Mbiemri</span>
                <input
                  type="text"
                  name="surname"
                  id="studentNavigation"
                  onChange={handleInnerInputChange}
                />
              </div>
              <div className="create-modal-section">
                <span>Adresa</span>
                <select
                  name="userAddress"
                  defaultValue={""}
                  onChange={handleInnerInputChange}
                >
                  <option value="" disabled>
                    Zgjedh adresën
                  </option>
                  {addressStore.getAddresses().map((ad) => {
                    return <option value={ad.streetId}>{ad.streetName}</option>;
                  })}
                </select>
              </div>
              <div className="create-modal-section">
                <span>Gjinia</span>
                <select
                  name="gender"
                  id="studentNavigation"
                  onChange={handleInnerInputChange}
                >
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
                  id="studentNavigation"
                  onChange={handleInnerInputChange}
                />
              </div>
              <div className="create-modal-section">
                <span>Klasa</span>
                <select
                  name="classGroup"
                  id="studentNavigation"
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Zgjedh klasën
                  </option>
                  {classGroupStore.getClassGroups().map((cls) => {
                    return <option value={cls.groupId}>{cls.groupName}</option>;
                  })}
                  )
                </select>
              </div>
              <div className="create-modal-section">
                <button onClick={handleSubmit}>SHTO</button>
                <button onClick={() => openModal("LIST")}>KTHEHU</button>
              </div>
            </div>
          </>
        ) : modalState === "EDIT" ? (
          <>
            {console.log(Student)}
            <h2>Ndrysho detajet e nxënësit</h2>
            <div className="student-blue">
              <div className="create-modal-section">
                <span>Emri</span>
                <input
                  type="text"
                  name="name"
                  minLength={3}
                  id="studentNavigation"
                  defaultValue={Student.studentNavigation?.name}
                  onChange={handleInnerInputChange}
                />
              </div>
              <div className="create-modal-section">
                <span>Mbiemri</span>
                <input
                  type="text"
                  name="surname"
                  id="studentNavigation"
                  defaultValue={Student.studentNavigation?.surname}
                  onChange={handleInnerInputChange}
                />
              </div>
              <div className="create-modal-section">
                <span>Adresa</span>
                <select name="userAddress" onChange={handleInnerInputChange}>
                  <option value="" disabled>
                    Zgjedh adresën
                  </option>
                  {addressStore.getAddresses().map((ad) => {
                    return (
                      <option
                        value={ad.streetId}
                        selected={
                          Student.studentNavigation?.userAddress === ad.streetId
                        }
                      >
                        {ad.streetName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="create-modal-section">
                <span>Gjinia</span>
                <select
                  name="gender"
                  id="studentNavigation"
                  onChange={handleInnerInputChange}
                  defaultValue={Student.studentNavigation?.gender}
                >
                  <option value="" disabled>
                    Zgjedh gjininë
                  </option>
                  <option
                    value="M"
                    selected={Student.studentNavigation?.gender === "M"}
                  >
                    Mashkull
                  </option>
                  <option
                    value="F"
                    selected={Student.studentNavigation?.gender === "F"}
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
                  id="studentNavigation"
                  defaultValue={
                    Student.studentNavigation &&
                    Date.parse(Student.studentNavigation.birthday)
                  }
                  onChange={handleInnerInputChange}
                />
              </div>
              <div className="create-modal-section">
                <span>Klasa</span>
                <select
                  name="classGroup"
                  id="studentNavigation"
                  onChange={handleInputChange}
                  value={Student.classGroup}
                >
                  <option value="" disabled>
                    Zgjedh klasën
                  </option>
                  {classGroupStore.getClassGroups().map((cls) => {
                    return <option value={cls.groupId}>{cls.groupName}</option>;
                  })}
                  )
                </select>
              </div>
              <div className="create-modal-section">
                <button onClick={handleSubmit}>NDRYSHO</button>
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
