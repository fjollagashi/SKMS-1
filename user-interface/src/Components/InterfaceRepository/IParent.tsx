import { IUser } from "./IUser";

export interface IParent {
  user?: IUser;
  parentId: string;
  phoneNumber: string;
}
