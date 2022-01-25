import { IAdministrator } from "./IAdministrator";
import { IArticle } from "./IArticle";
import { IClassroom } from "./IClassroom";
import { ICurriculum } from "./ICurriculum";
import { ISchedule } from "./ISchedule";
import { ISchoolEvent } from "./ISchoolEvent";
import { IStreet } from "./IStreet";
import { IStudent } from "./IStudent";
import { ITeacher } from "./ITeacher";

export interface ISchool {
  schoolId: string;
  schoolName: string;
  schoolAddress: string;
  category: string;
  administrator: string;
  about: string;

  administratorNavigation?: IAdministrator;
  schoolAddressNavigation?: IStreet;
  articles?: IArticle[];
  classrooms?: IClassroom[];
  curricula?: ICurriculum[];
  schedules?: ISchedule[];
  schoolevents?: ISchoolEvent[];
  students?: IStudent[];
  teachers?: ITeacher[];
}
