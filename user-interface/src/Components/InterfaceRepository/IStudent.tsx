import { IAbsence } from "./IAbsence";
import { IClassGroup } from "./IClassGroup";
import { IGrade } from "./IGrade";
import { IParentsStudent } from "./IParentsStudent";
import { IRemark } from "./IRemark";
import { ISchool } from "./ISchool";
import { IUser } from "./IUser";

export interface IStudent {
  studentId: string;
  classGroup: string;
  school: string;

  classGroupNavigation?: IClassGroup;
  schoolNavigation?: ISchool;
  studentNavigation?: IUser;
  absences?: IAbsence[];
  grades?: IGrade[];
  parentsStudents?: IParentsStudent[];
  remarks?: IRemark[];
}
