import { IParentsStudent } from "./IParentsStudent";
import { IUser } from "./IUser";

export interface IParent {
  parentId: string;
  phoneNumber: string;

  parentNavigation?: IUser;
  parentsStudents?: IParentsStudent[];
}
