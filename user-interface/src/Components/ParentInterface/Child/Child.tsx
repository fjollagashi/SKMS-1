import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import agent from "../../../Agent/Agent";
import "../../../Css/Child.css";
import { IGrade } from "../../InterfaceRepository/IGrade";
import { ISchedule } from "../../InterfaceRepository/ISchedule";
import { IStudent } from "../../InterfaceRepository/IStudent";
import { ISubject } from "../../InterfaceRepository/ISubject";
import { AbsenceModal } from "./AbsenceModal";
import { RemarkModal } from "./RemarkModal";
import { ScheduleModal } from "./ScheduleModal";
import { GetDate } from "../../../Util";
import { Loader } from "../../Loader/Loader";

export const Child = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [ModalState, SetModalState] = React.useState<string>("NONE");
  const [child, setChild] = useState<IStudent>({} as IStudent);

  const gradeSorter = (a: IGrade, b: IGrade): number => {
    if (a.semester < b.semester) return -1;
    else if (a.semester > b.semester) return 1;
    else return 0;
  };

  const HideModal = (): void => {
    document.getElementsByClassName("modal")[0].classList.add("modal-close");
    document
      .getElementsByClassName("modal-background")[0]
      .classList.add("background-close");
    setTimeout(() => SetModalState("NONE"), 250);
  };

  const getUniqueSubjects = (): ISubject[] => {
    if (!child.grades) return [] as ISubject[];
    let subjects: ISubject[] = [];
    child.grades!.forEach((grade) => {
      if (
        subjects.filter((sub) => sub.subjectId === grade.teacher).length === 0
      )
        subjects.push(grade.subjectsTeacher!.subject!);
    });
    return subjects;
  };

  useEffect(() => {
    //if (!id) return;
    const get = async () => {
      let user = await agent.Students.getDetails(id!);
      setChild(user);
    };
    get();
  }, [id]);

  if (Object.keys(child).length === 0)
    return (
      <section id="child">
        <Loader />
      </section>
    );

  return (
    <section id="Child">
      {ModalState === "NONE" ? (
        <></>
      ) : ModalState === "SCHEDULE" ? (
        <ScheduleModal
          hide={HideModal}
          //@ts-ignore
          schedule={child.classGroupNavigation?.schedules[0]}
        />
      ) : ModalState === "ABSENCE" ? (
        <AbsenceModal absences={child!.absences!} hide={HideModal} />
      ) : (
        //@ts-ignore
        <RemarkModal hide={HideModal} remarks={child?.remarks} />
      )}
      <h2>
        Profili i{" "}
        {child.studentNavigation?.name + " " + child.studentNavigation?.surname}
      </h2>
      <div className="child-bluebackground">
        <button onClick={() => navigate("/femijet")}>KTHEHU...</button>
        <img src={child.studentNavigation?.profilePictureUrl} alt="" />
        <div className="child-details">
          <article>
            <h3>Data e lindjes</h3>
            <p>{GetDate(child.studentNavigation?.birthday) || ""}</p>
          </article>
          <article>
            <h3>Gjinia</h3>
            <p>{child.studentNavigation?.gender}</p>
          </article>
          <article>
            <h3>Suksesi</h3>
            <p>Shkelqyeshëm</p>
          </article>
        </div>
        <h2>Të dhënat studentore</h2>
        <div className="child-details child-details-school">
          <article>
            <h3>Klasa</h3>
            <p>{child.classGroupNavigation?.groupName}</p>
          </article>
          <article>
            <h3>Kujdestari</h3>
            <p>
              {child.classGroupNavigation?.homeroomTeacherNavigation
                ?.teacherNavigation?.name +
                " " +
                child.classGroupNavigation?.homeroomTeacherNavigation
                  ?.teacherNavigation?.surname}
            </p>
          </article>
          <article>
            <h3>Notat</h3>
            <Grades
              grades={child.grades?.sort((a, b) => gradeSorter(a, b))}
              gradesSubjects={getUniqueSubjects()}
            />
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

interface GradesProps {
  grades?: IGrade[];
  gradesSubjects: ISubject[];
}

const Grades = ({ grades, gradesSubjects }: GradesProps) => {
  let subjects = gradesSubjects;
  const [selectedSubject, setSelectedSubject] = useState<ISubject>(subjects[0]);

  const handleSelectSubject = (optionValue: string) => {
    setSelectedSubject(subjects.filter((s) => s.subjectId === optionValue)[0]);
  };

  const getGradesBySemester = (semester: number): IGrade[] => {
    if (!grades || !selectedSubject) return [] as IGrade[];
    return grades.filter(
      (grade) =>
        grade.semester === semester &&
        grade.teacher === selectedSubject.subjectId
    );
  };

  const displayGradesBySemester = (semester: number) => {
    let semesterGrades = getGradesBySemester(semester);
    return (
      <>
        <td>{displayGrade(semesterGrades[0])}</td>
        <td>{displayGrade(semesterGrades[1])}</td>
        <td>{displayGrade(semesterGrades[2])}</td>
      </>
    );
  };

  const getFinalGradeBySemester = (semester: number): number | string => {
    if (getGradesBySemester(semester).length !== 3) return "-";
    let average = 0;
    getGradesBySemester(semester).forEach((grade) => (average += grade.value));
    average /= getGradesBySemester(semester).length;
    return isNaN(average) ? "-" : Math.round(average);
  };

  const displayGrade = (grade: IGrade): string => {
    return grade === undefined ? "-" : grade.value.toString();
  };

  return (
    <section id="grades">
      <span>
        Zgjedhni lëndën -{" "}
        <select
          onChange={(e) => handleSelectSubject(e.target.value)}
          name="grade"
          id="grades-select"
        >
          {subjects.map((subject) => {
            return (
              <option key={subject.subjectId} value={subject.subjectId}>
                {subject.subjectName}
              </option>
            );
          })}
        </select>
      </span>
      <table className="grades-table">
        <thead>
          <td></td>
          <td>Nota I</td>
          <td>Nota II</td>
          <td>Nota III</td>
          <td>Finale</td>
        </thead>
        <tbody>
          <tr>
            <td>Semestri I</td>
            {displayGradesBySemester(1)}
            <td>{getFinalGradeBySemester(1)}</td>
          </tr>
          <tr>
            <td>Semestri I</td>
            {displayGradesBySemester(2)}
            <td>{getFinalGradeBySemester(2)}</td>
          </tr>
          <tr>
            <td>Semestri I</td>
            {displayGradesBySemester(3)}
            <td>{getFinalGradeBySemester(3)}</td>
          </tr>
        </tbody>
      </table>
      <p>Notat për lëndën {selectedSubject?.subjectName || ""}</p>
    </section>
  );
};
