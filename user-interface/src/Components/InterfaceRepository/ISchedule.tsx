import { IClassGroup } from "./IClassGroup";
import { IPeriod } from "./IPeriod";
import { ISchool } from "./ISchool";

export interface ISchedule {
  scheduleId: string;
  timeslot: string;
  classGroup: string;
  school: string;

  classGroupNavigation?: IClassGroup;
  schoolNavigation?: ISchool;
  periods?: IPeriod[];
}
