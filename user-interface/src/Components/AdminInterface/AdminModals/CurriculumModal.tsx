import { Modal } from "../../Modal/Modal";
import React from "react";
import { IStudent } from "../../InterfaceRepository/IStudent";
import "../../../Css/CustomModals/StudentDetailsModal.css";
import CurriculumPhoto from "../../../Media/curriculum.png";

interface CurriculumModalProps {
  hide: () => void;
}

export const CurriculumModal: React.FunctionComponent<CurriculumModalProps> = ({
  hide,
}) => {
  const [Curriculum, SetCurriculum] = React.useState<IStudent[]>(
    [] as IStudent[]
  );
  const [ModalState, SetModalState] = React.useState("LIST");
  const [SelectedCurriculum, SetSelectedCurriculum] = React.useState<IStudent>(
    {} as IStudent
  );

  const ShowStudentDetails = () => {
    SetSelectedCurriculum({} as IStudent);
    SetModalState("DETAILS");
  };

  return (
    <Modal hide={hide}>
      <div className="student-modal">
        {ModalState === "LIST" ? (
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
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>1</td>
                    <td>
                      <button
                        onClick={() => ShowStudentDetails()}
                        className="student-modal-details-button"
                      >
                        SHIKO LËNDËT
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>2</td>
                    <td>
                      <button
                        onClick={() => ShowStudentDetails()}
                        className="student-modal-details-button"
                      >
                        SHIKO LËNDËT
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>3</td>
                    <td>
                      <button
                        onClick={() => ShowStudentDetails()}
                        className="student-modal-details-button"
                      >
                        SHIKO LËNDËT
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>4</td>
                    <td>
                      <button
                        onClick={() => ShowStudentDetails()}
                        className="student-modal-details-button"
                      >
                        SHIKO LËNDËT
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <h2>Lëndet e kurrikulës së klasës 3</h2>
            <div className="student-blue">
              <button onClick={() => SetModalState("LIST")}>KTHEHU</button>
              <img src={CurriculumPhoto} alt="" />
              <table>
                <thead>
                  <td>ID</td>
                  <td>Emri i lëndës</td>
                </thead>
                <tbody>
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>Matematika I</td>
                  </tr>
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>Matematika I</td>
                  </tr>
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>Matematika I</td>
                  </tr>
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>Matematika I</td>
                  </tr>
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>Matematika I</td>
                  </tr>
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>Matematika I</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
