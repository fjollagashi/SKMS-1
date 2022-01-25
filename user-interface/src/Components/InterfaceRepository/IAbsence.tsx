import { IStudent } from "./IStudent";
import { IPeriod } from "./IPeriod";
import { ISchool } from "./ISchool";

export interface IAbsence extends ISchool {
  absenceId: string;
  student: string;
  reasoned: string;
  period: string;
  dateMarked: string;

  periodNavigation?: IPeriod;
  studentNavigation?: IStudent;
}
