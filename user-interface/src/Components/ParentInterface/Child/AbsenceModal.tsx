import { GetDate, GetDayOfWeek } from "../../../Util";
import { IAbsence } from "../../InterfaceRepository/IAbsence";
import { Modal } from "../../Modal/Modal";

interface ChildModalProps {
  hide: () => void;
  absences: IAbsence[];
}

export const AbsenceModal: React.FunctionComponent<ChildModalProps> = ({
  hide,
  absences,
}) => {
  const GetPeriod = (abs: IAbsence) => {
    return (
      "Ora " +
      abs.periodNavigation?.slot +
      " - " +
      abs.periodNavigation?.subjectsTeacher?.subject?.subjectName
    );
  };

  if (absences.length === 0)
    return (
      <Modal hide={hide}>
        <h2>Nuk ka mungesa!</h2>
      </Modal>
    );
  return (
    <Modal hide={hide}>
      {absences?.map((absence) => {
        return (
          <article key={absence.absenceId} className="absence">
            <div>
              <h2>{GetDate(absence.dateMarked)}</h2>
              <h5>{absence.periodNavigation?.dayOfTheWeek}</h5>
            </div>
            <div>
              <h2>{GetPeriod(absence)}</h2>
              <h5>
                Ligjëruesi -{" "}
                {absence.periodNavigation?.subjectsTeacher?.teacher
                  ?.teacherNavigation?.name +
                  " " +
                  absence.periodNavigation?.subjectsTeacher?.teacher
                    ?.teacherNavigation?.surname}
              </h5>
            </div>
            <p>{absence.reasoned === "1" ? "Me arsye" : "Pa arsye"}</p>
          </article>
        );
      })}
    </Modal>
  );
};
