import { IClassroom } from "./IClassroom";
import { ISchedule } from "./ISchedule";
import { IStudent } from "./IStudent";
import { ITeacher } from "./ITeacher";

export interface IClassGroup {
  groupId: string;
  groupName: string;
  grade: string;
  classroom: string;
  homeroomTeacher: string;

  classroomNavigation?: IClassroom;
  homeroomTeacherNavigation?: ITeacher;
  schedules?: ISchedule[];
  students?: IStudent[];
}
