import React from "react";
import { useParams } from "react-router-dom";
import "../../../Css/Child.css";
import { AbsenceModal } from "./AbsenceModal";
import { RemarkModal } from "./RemarkModal";
import { ScheduleModal } from "./ScheduleModal";

export const Child = () => {
  let { id } = useParams();
  const [ModalState, SetModalState] = React.useState<string>("NONE");

  const HideModal = (): void => {
    SetModalState("NONE");
  };

  return (
    <section id="Child">
      {ModalState === "NONE" ? (
        <></>
      ) : ModalState === "SCHEDULE" ? (
        <ScheduleModal hide={HideModal} />
      ) : ModalState === "ABSENCE" ? (
        <AbsenceModal hide={HideModal} />
      ) : (
        <RemarkModal hide={HideModal} />
      )}
      <h2>Profili i Altina Hodaj {id}</h2>
      <div className="child-bluebackground">
        <button>KTHEHU...</button>
        <img
          src="https://th.bing.com/th/id/OIP.BHOqw309oBOx1BIr2aa1ewHaHa?pid=ImgDet&rs=1"
          alt=""
        />
        <div className="child-details">
          <article>
            <h3>Data e lindjes</h3>
            <p>dsfds,fsdfsdf,sdfs</p>
          </article>
          <article>
            <h3>Gjinia</h3>
            <p>+383423 32423423</p>
          </article>
          <article>
            <h3>Suksesi</h3>
            <p>Vrelle</p>
          </article>
          <article>
            <h3>Suksesi</h3>
            <p>Vrelle</p>
          </article>
        </div>
        <h2>Të dhënat studentore</h2>
        <div className="child-details child-details-school">
          <article>
            <h3>Klasa</h3>
            <p>III - 3</p>
          </article>
          <article>
            <h3>Kujdestari</h3>
            <p>Arben Vitija</p>
          </article>
          <article>
            <h3>Notat</h3>
            <Grades />
            <p>Notat për lëndën Matematika III</p>
          </article>
          <article>
            <h3>Orari</h3>
            <button onClick={() => SetModalState("SCHEDULE")}>
              SHFAQ ORARIN
            </button>
          </article>
          <article>
            <h3>Mungesat</h3>
            <button onClick={() => SetModalState("ABSENCE")}>
              SHFAQ MUNGESAT
            </button>
          </article>
          <article>
            <h3>Vërejtjet</h3>
            <button onClick={() => SetModalState("REMARK")}>
              SHFAQ VËREJTJET
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

const Grades = () => {
  return (
    <section id="grades">
      <span>
        Zgjedhni lëndën -{" "}
        <select name="grade" id="grades-select">
          <option value="SubjectID">Matematikë III</option>
          <option value="SubjectID">Matematikë II</option>
        </select>
      </span>
      <table className="grades-table">
        <thead>
          <td></td>
          <td>Semestri I</td>
          <td>Semestri II</td>
          <td>Semestri III</td>
        </thead>
        <tbody>
          <tr>
            <td>Nota I</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Nota II</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Nota III</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Finale</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
