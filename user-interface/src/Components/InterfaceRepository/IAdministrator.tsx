import { ISchool } from "./ISchool";
import { IUser } from "./IUser";

export interface IAdministrator {
  administratorId: string;
  academicDegree: string;
  phoneNumber: string;
  emailAddress: string;

  administratorNavigation?: IUser;
  school?: ISchool;
}
