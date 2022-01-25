import { Modal } from "../../Modal/Modal";
import React from "react";
import { IStudent } from "../../InterfaceRepository/IStudent";
import "../../../Css/CustomModals/StudentDetailsModal.css";
import SubjectPhoto from "../../../Media/subject.png";

interface SubjectModalProps {
  hide: () => void;
}

export const SubjectModal: React.FunctionComponent<SubjectModalProps> = ({
  hide,
}) => {
  const [Subject, SetSubject] = React.useState<IStudent[]>([] as IStudent[]);
  const [ModalState, SetModalState] = React.useState("LIST");
  const [SelectedSubject, SetSelectedSubject] = React.useState<IStudent>(
    {} as IStudent
  );

  const ShowStudentDetails = () => {
    SetSelectedSubject({} as IStudent);
    SetModalState("DETAILS");
  };

  return (
    <Modal hide={hide}>
      <div className="student-modal">
        {ModalState === "LIST" ? (
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
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>Matematika I</td>
                    <td>1</td>
                    <td>
                      <button
                        onClick={() => ShowStudentDetails()}
                        className="student-modal-details-button"
                      >
                        SHIKO DETAJET
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>Matematika I</td>
                    <td>1</td>
                    <td>
                      <button
                        onClick={() => ShowStudentDetails()}
                        className="student-modal-details-button"
                      >
                        SHIKO DETAJET
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>Matematika I</td>
                    <td>1</td>
                    <td>
                      <button
                        onClick={() => ShowStudentDetails()}
                        className="student-modal-details-button"
                      >
                        SHIKO DETAJET
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <h2>Detajet e lëndës Matematika I</h2>
            <div className="student-blue">
              <button onClick={() => SetModalState("LIST")}>KTHEHU</button>
              <img src={SubjectPhoto} alt="" />
              <div className="student-details">
                <article>
                  <h3>Emri i lëndës</h3>
                  <p>Altina Ibrahimaj</p>
                </article>
                <article>
                  <h3>Ligjëruesit</h3>
                  <p>Arben Vitija</p>
                  <p>Anila Zogaj</p>
                  <p>Jane Doe</p>
                  <p>Elizabeta Bicaj Qerimi</p>
                </article>
                <article>
                  <h3>Klasa</h3>
                  <p>I</p>
                </article>
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
