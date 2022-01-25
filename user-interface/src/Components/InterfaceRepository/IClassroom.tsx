import { IClassGroup } from "./IClassGroup";
import { ISchool } from "./ISchool";

export interface IClassroom {
  classroomId: string;
  classroomName: string;
  capacity: number;
  school: string;

  schoolNavigation?: ISchool;
  classgroups?: IClassGroup[];
}
