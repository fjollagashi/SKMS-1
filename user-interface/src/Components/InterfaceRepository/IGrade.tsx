import { IStudent } from "./IStudent";
import { ISubjectsTeacher } from "./ISubjectsTeacher";

export interface IGrade {
  gradeId: string;
  student: string;
  subject: string;
  teacher: string;
  value: number;
  academicYear: number;
  semester: number;

  studentNavigation?: IStudent;
  subjectsTeacher?: ISubjectsTeacher;
}
