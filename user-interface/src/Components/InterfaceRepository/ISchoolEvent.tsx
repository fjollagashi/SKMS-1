import { ISchool } from "./ISchool";

export interface ISchoolEvent {
  eventId: string;
  title: string;
  eventDescription: string;
  dateHeld: string;
  category: string;
  school: string;

  categoryNavigation?: any;
  schoolNavigation?: ISchool;
}
