import { IGrade } from "./IGrade";
import { IPeriod } from "./IPeriod";
import { ISubject } from "./ISubject";
import { ITeacher } from "./ITeacher";

export interface ISubjectsTeacher {
  subjectId: string;
  teacherId: string;

  subject?: ISubject;
  teacher?: ITeacher;
  grades?: IGrade[];
  periods?: IPeriod[];
}
