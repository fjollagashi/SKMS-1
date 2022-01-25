import { IAbsence } from "./IAbsence";
import { ISchedule } from "./ISchedule";
import { ISubjectsTeacher } from "./ISubjectsTeacher";

export interface IPeriod {
  periodId: string;
  slot: string;
  dayOfTheWeek: string;
  subject: string;
  teacher: string;
  academicYear: number;
  schedule: string;

  scheduleNavigation?: ISchedule;
  subjectsTeacher?: ISubjectsTeacher;
  absences?: IAbsence[];
}
