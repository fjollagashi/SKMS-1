import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../Css/Child.css";
import { IGrade } from "../../InterfaceRepository/IGrade";
import { IStudent } from "../../InterfaceRepository/IStudent";
import { ISubject } from "../../InterfaceRepository/ISubject";
import { AbsenceModal } from "./AbsenceModal";
import { RemarkModal } from "./RemarkModal";
import { ScheduleModal } from "./ScheduleModal";

const FakeChild: IStudent = {
  studentId: "sdfs",
  classGroup: "sdfs",
  school: "sdfsd",
  grades: [
    {
      gradeId: "1",
      student: "dsf",
      subject: "sub1",
      teacher: "",
      value: 5,
      academicYear: 2021,
      semester: 1,
      subjectsTeacher: {
        subjectId: "sub1",
        teacherId: "",
        subject: {
          subjectId: "sub1",
          subjectName: "Matematika III",
          curriculum: "klasa3",
        },
      },
    },
    {
      gradeId: "2",
      student: "dsf",
      subject: "sub1",
      teacher: "",
      value: 5,
      academicYear: 2021,
      semester: 1,
      subjectsTeacher: {
        subjectId: "sub1",
        teacherId: "",
        subject: {
          subjectId: "sub1",
          subjectName: "Matematika III",
          curriculum: "klasa3",
        },
      },
    },
    {
      gradeId: "3",
      student: "dsf",
      subject: "sub1",
      teacher: "",
      value: 4,
      academicYear: 2021,
      semester: 1,
      subjectsTeacher: {
        subjectId: "sub1",
        teacherId: "",
        subject: {
          subjectId: "sub1",
          subjectName: "Matematika III",
          curriculum: "klasa3",
        },
      },
    },
    {
      gradeId: "4",
      student: "dsf",
      subject: "sub1",
      teacher: "",
      value: 5,
      academicYear: 2021,
      semester: 2,
      subjectsTeacher: {
        subjectId: "sub1",
        teacherId: "",
        subject: {
          subjectId: "sub1",
          subjectName: "Matematika III",
          curriculum: "klasa3",
        },
      },
    },
    {
      gradeId: "5",
      student: "dsf",
      subject: "sub2",
      teacher: "",
      value: 5,
      academicYear: 2021,
      semester: 1,
      subjectsTeacher: {
        subjectId: "sub2",
        teacherId: "",
        subject: {
          subjectId: "sub2",
          subjectName: "Anglisht III",
          curriculum: "klasa3",
        },
      },
    },
    {
      gradeId: "6",
      student: "dsf",
      subject: "sub2",
      teacher: "",
      value: 3,
      academicYear: 2021,
      semester: 1,
      subjectsTeacher: {
        subjectId: "sub2",
        teacherId: "",
        subject: {
          subjectId: "sub2",
          subjectName: "Anglisht III",
          curriculum: "klasa3",
        },
      },
    },
    {
      gradeId: "7",
      student: "dsf",
      subject: "sub2",
      teacher: "",
      value: 5,
      academicYear: 2021,
      semester: 1,
      subjectsTeacher: {
        subjectId: "sub2",
        teacherId: "",
        subject: {
          subjectId: "sub2",
          subjectName: "Anglisht III",
          curriculum: "klasa3",
        },
      },
    },
    {
      gradeId: "8",
      student: "dsf",
      subject: "sub2",
      teacher: "",
      value: 5,
      academicYear: 2021,
      semester: 2,
      subjectsTeacher: {
        subjectId: "sub2",
        teacherId: "",
        subject: {
          subjectId: "sub2",
          subjectName: "Anglisht III",
          curriculum: "klasa3",
        },
      },
    },
    {
      gradeId: "9",
      student: "dsf",
      subject: "sub3",
      teacher: "",
      value: 5,
      academicYear: 2021,
      semester: 1,
      subjectsTeacher: {
        subjectId: "sub3",
        teacherId: "",
        subject: {
          subjectId: "sub3",
          subjectName: "Shqip III",
          curriculum: "klasa3",
        },
      },
    },
    {
      gradeId: "10",
      student: "dsf",
      subject: "sub3",
      teacher: "",
      value: 5,
      academicYear: 2021,
      semester: 1,
      subjectsTeacher: {
        subjectId: "sub3",
        teacherId: "",
        subject: {
          subjectId: "sub3",
          subjectName: "Shqip III",
          curriculum: "klasa3",
        },
      },
    },
  ],
};

export const Child = () => {
  let { id } = useParams();
  const [ModalState, SetModalState] = React.useState<string>("NONE");
  const [child, setChild] = useState<IStudent>(FakeChild);

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
    let subjects: ISubject[] = [];
    child.grades!.forEach((grade) => {
      if (
        subjects.filter((sub) => sub.subjectId === grade.subject).length === 0
      )
        subjects.push(grade.subjectsTeacher!.subject!);
    });
    return subjects;
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
            <Grades
              grades={child.grades!.sort((a, b) => gradeSorter(a, b))}
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
  grades: IGrade[];
  gradesSubjects: ISubject[];
}

const Grades = ({ grades, gradesSubjects }: GradesProps) => {
  let subjects = gradesSubjects;
  const [selectedSubject, setSelectedSubject] = useState<ISubject>(subjects[0]);

  const handleSelectSubject = (optionValue: string) => {
    setSelectedSubject(subjects.filter((s) => s.subjectId === optionValue)[0]);
  };

  const getGradesBySemester = (semester: number): IGrade[] => {
    return grades.filter(
      (grade) =>
        grade.semester === semester &&
        grade.subject === selectedSubject.subjectId
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
              <option value={subject.subjectId}>{subject.subjectName}</option>
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
      <p>Notat për lëndën {selectedSubject.subjectName}</p>
    </section>
  );
};
