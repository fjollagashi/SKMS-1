import { IStreet } from "./IStreet";

export interface ICity {
  cityId: string;
  cityName: string;
  municipality: string;

  municipalityNavigation?: ICity;
  inverseMunicipalityNavigation?: ICity[];
  streets?: IStreet[];
}
