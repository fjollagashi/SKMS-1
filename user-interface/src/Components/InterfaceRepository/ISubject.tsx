import { ICurriculum } from "./ICurriculum";
import { ISubjectsTeacher } from "./ISubjectsTeacher";

export interface ISubject {
  subjectId: string;
  subjectName: string;
  curriculum: string;

  curriculumNavigation?: ICurriculum;
  subjectsTeachers?: ISubjectsTeacher[];
}
