import { Modal } from "../../Modal/Modal";
import React from "react";
import { IStudent } from "../../InterfaceRepository/IStudent";
import "../../../Css/CustomModals/StudentDetailsModal.css";

interface StudentModalProps {
  hide: () => void;
}

export const StudentModal: React.FunctionComponent<StudentModalProps> = ({
  hide,
}) => {
  const [Students, SetStudents] = React.useState<IStudent[]>([] as IStudent[]);
  const [ModalState, SetModalState] = React.useState("LIST");
  const [SelectedStudent, SetSelectedStudent] = React.useState<IStudent>(
    {} as IStudent
  );

  const ShowStudentDetails = () => {
    SetSelectedStudent({} as IStudent);
    SetModalState("DETAILS");
  };

  return (
    <Modal hide={hide}>
      <div className="student-modal">
        {ModalState === "LIST" ? (
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
                  <tr>
                    <td>WER-3242R-R232-REW</td>
                    <td>Altina</td>
                    <td>Ibrahimaj</td>
                    <td>III - 3</td>
                    <td>Arben Vitija</td>
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
                    <td>Altina</td>
                    <td>Ibrahimaj</td>
                    <td>III - 3</td>
                    <td>Arben Vitija</td>
                    <td>
                      <button className="student-modal-details-button">
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
            <h2>Detajet e Anila Ibrahimaj</h2>
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
                  <h3>Prindërit</h3>
                  <p>Arbenita Ibrahimaj, Ditjon Ibrahimaj</p>
                </article>
                <article>
                  <h3>Data e lindjes</h3>
                  <p>12 Mars 2008</p>
                </article>
                <article>
                  <h3>Gjinia</h3>
                  <p>Femër</p>
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
