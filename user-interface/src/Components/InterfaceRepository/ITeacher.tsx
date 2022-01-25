import { IClassGroup } from "./IClassGroup";
import { IRemark } from "./IRemark";
import { ISchool } from "./ISchool";
import { ISubjectsTeacher } from "./ISubjectsTeacher";
import { IUser } from "./IUser";

export interface ITeacher {
  teacherId: string;
  academicDegree: string;
  phoneNumber: string;
  teacherCategory: string;
  school: string;

  schoolNavigation?: ISchool;
  teacherNavigation?: IUser;
  classgroup?: IClassGroup;
  remarks?: IRemark[];
  subjectsTeachers?: ISubjectsTeacher[];
}
