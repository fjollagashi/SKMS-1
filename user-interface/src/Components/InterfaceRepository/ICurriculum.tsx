import { ISchool } from "./ISchool";
import { ISubject } from "./ISubject";

export interface ICurriculum {
  curriculumId: string;
  grade: number;
  school: string;

  schoolNavigation?: ISchool;
  subjects?: ISubject[];
}
