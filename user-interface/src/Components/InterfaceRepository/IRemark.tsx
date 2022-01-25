import { IStudent } from "./IStudent";
import { ITeacher } from "./ITeacher";

export interface IRemark {
  remarkId: string;
  student: string;
  teacher: string;
  dateMarked: string;
  comment: string;

  studentNavigation?: IStudent;
  teacherNavigation?: ITeacher;
}
