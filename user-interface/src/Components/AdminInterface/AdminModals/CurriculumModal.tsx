import { Modal } from "../../Modal/Modal";
import React, { SyntheticEvent, useEffect, useState } from "react";
import "../../../Css/CustomModals/StudentDetailsModal.css";
import CurriculumPhoto from "../../../Media/curriculum.png";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Stores/Store";
import { ICurriculum } from "../../InterfaceRepository/ICurriculum";

interface CurriculumModalProps {
  hide: () => void;
}

export default observer(function CurriculumModal({
  hide,
}: CurriculumModalProps) {
  const { curriculumStore } = useStore();

  const {
    getCurriculums,
    selectedCurriculum,
    openModal,
    modalState,
    getDefaultCurriculum,
    createCurriculum,
    updateCurriculum,
    deleteCurriculum,
  } = curriculumStore;

  const [curriculum, setCurriculum] = useState<ICurriculum>({} as ICurriculum);

  const handleInputChange = (
    e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCurriculum({
      ...curriculum,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    if (curriculum.grade === 0) return alert("Ju lutem zgjedhni një klasë.");
    curriculum.curriculumId
      ? updateCurriculum(curriculum)
      : createCurriculum(curriculum);
  };

  useEffect(() => {
    const init = selectedCurriculum ?? getDefaultCurriculum();
    setCurriculum(init);
  }, [selectedCurriculum]);

  return (
    <Modal hide={hide}>
      <div className="student-modal">
        {modalState === "LIST" ? (
          <>
            <h2>Lista e kurrikulave</h2>
            <div className="student-blue">
              <table>
                <thead>
                  <td>ID</td>
                  <td>Klasa</td>
                  <td>Lëndët</td>
                </thead>
                <tbody>
                  {getCurriculums().map((curr) => {
                    return (
                      <tr>
                        <td>{curr.curriculumId}</td>
                        <td>{curr.grade}</td>
                        <td>
                          <button
                            onClick={() =>
                              openModal("DETAILS", curr.curriculumId)
                            }
                            className="student-modal-details-button"
                          >
                            SHIKO LËNDËT
                          </button>
                          <button
                            onClick={() => deleteCurriculum(curr.curriculumId)}
                          >
                            FSHIJ
                          </button>
                          <button
                            onClick={() => openModal("EDIT", curr.curriculumId)}
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
                  SHTO NJË KURRIKULË
                </button>
              </div>
            </div>
          </>
        ) : modalState === "DETAILS" ? (
          <>
            <h2>Lëndet e kurrikulës së klasës {curriculum.grade}</h2>
            <div className="student-blue">
              <button onClick={() => openModal("LIST")}>KTHEHU</button>
              <img src={CurriculumPhoto} alt="" />
              <table>
                <thead>
                  <td>ID</td>
                  <td>Emri i lëndës</td>
                </thead>
                <tbody>
                  {curriculum.subjects &&
                    curriculum!.subjects!.map((subject) => {
                      return (
                        <tr>
                          <td>{subject.subjectId}</td>
                          <td>{subject.subjectName}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </>
        ) : modalState === "CREATE" ? (
          <>
            <h2>Shtoni një kurrikulë të re</h2>

            <div className="student-blue">
              <div className="create-modal-section">
                <span>Klasa për të cilën vlen</span>
                <select name="grade" onChange={handleInputChange}>
                  <option value="" disabled selected>
                    Zgjedh klasën për të cilën vlen
                  </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
                    return <option value={num}>{num}</option>;
                  })}
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
            {curriculum && (
              <>
                <h2>Ndryshoni detajet e kurrikulës</h2>
                <div className="student-blue">
                  <div className="create-modal-section">
                    <span>Klasa</span>
                    <select name="grade" onChange={handleInputChange}>
                      <option value="" disabled>
                        Zgjedh klasën për të cilën vlen
                      </option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
                        return (
                          <option
                            value={num}
                            selected={curriculum.grade === num}
                          >
                            {num}
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
        ) : (
          <></>
        )}
      </div>
    </Modal>
  );
});
