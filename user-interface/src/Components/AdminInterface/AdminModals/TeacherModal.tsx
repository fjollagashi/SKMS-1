import { Modal } from "../../Modal/Modal";
import React from "react";
import { IStudent } from "../../InterfaceRepository/IStudent";
import "../../../Css/CustomModals/StudentDetailsModal.css";

interface TeacherModalProps {
  hide: () => void;
}

export const TeacherModal: React.FunctionComponent<TeacherModalProps> = ({
  hide,
}) => {
  const [Teachers, SetTeachers] = React.useState<IStudent[]>([] as IStudent[]);
  const [ModalState, SetModalState] = React.useState("LIST");
  const [SelectedTeacher, SetSelectedTeacher] = React.useState<IStudent>(
    {} as IStudent
  );

  const ShowStudentDetails = () => {
    SetSelectedTeacher({} as IStudent);
    SetModalState("DETAILS");
  };

  return (
    <Modal hide={hide}>
      <div className="student-modal">
        {ModalState === "LIST" ? (
          <>
            <h2>Lista e ligjëruesve</h2>
            <div className="student-blue">
              <table>
                <thead>
                  <td>ID</td>
                  <td>Emri</td>
                  <td>Mbiemri</td>
                  <td>Kujdestar i klasës</td>
                  <td>Niveli</td>
                  <td></td>
                </thead>
                <tbody>
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>Arben</td>
                    <td>Vitja</td>
                    <td>III - 3</td>
                    <td>Fillor</td>
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
                    <td>Arben</td>
                    <td>Vitja</td>
                    <td>III - 3</td>
                    <td>Fillor</td>
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
                    <td>Arben</td>
                    <td>Vitja</td>
                    <td>III - 3</td>
                    <td>Fillor</td>
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
            <h2>Detajet e Arben Vitija</h2>
            <div className="student-blue">
              <button onClick={() => SetModalState("LIST")}>KTHEHU</button>
              <img
                src="https://th.bing.com/th/id/OIP.BHOqw309oBOx1BIr2aa1ewHaHa?pid=ImgDet&rs=1"
                alt=""
              />
              <div className="student-details">
                <article>
                  <h3>Emri dhe Mbiemri</h3>
                  <p>Altina Ibrahimaj</p>
                </article>
                <article>
                  <h3>Lëndët</h3>
                  <p>Ligjërues i përgjithshëm</p>
                </article>
                <article>
                  <h3>Data e lindjes</h3>
                  <p>12 Mars 1988</p>
                </article>
                <article>
                  <h3>Gjinia</h3>
                  <p>Mashkull</p>
                </article>
                <article>
                  <h3>Vendbanimi</h3>
                  <p>Vrelle</p>
                </article>
                <article>
                  <h3>Klasa</h3>
                  <p>III - 4</p>
                </article>
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
