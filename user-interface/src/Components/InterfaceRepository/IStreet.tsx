import { ICity } from "./ICity";
import { ISchool } from "./ISchool";
import { IUser } from "./IUser";

export interface IStreet {
  streetId: string;
  streetName: string;
  city: string;

  cityNavigation?: ICity;
  schools?: ISchool[];
  users?: IUser[];
}
