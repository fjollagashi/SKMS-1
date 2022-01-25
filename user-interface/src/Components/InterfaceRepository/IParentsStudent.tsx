import { IStudent } from "./IStudent";
import { IParent } from "./IParent";

export interface IParentsStudent {
  studentId: string;
  parentId: string;

  parent?: IParent;
  student?: IStudent;
}
