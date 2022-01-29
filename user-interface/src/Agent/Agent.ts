import axios, { AxiosResponse } from "axios";
import { IClassGroup } from "../Components/InterfaceRepository/IClassGroup";
import { IStreet } from "../Components/InterfaceRepository/IStreet";
import { IStudent } from "../Components/InterfaceRepository/IStudent";

axios.defaults.baseURL = "https://localhost:5001/api/";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: (url: string, obj: {}) => axios.post(url, obj).then(responseBody),
  put: (url: string, obj: {}) => axios.put(url, obj).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Students = {
  list: () => requests.get<IStudent[]>("Students"),
  add: (obj: IStudent) => requests.post("Students", obj),
  update: (obj: IStudent) => requests.put(`Students/${obj.studentId}`, obj),
  delete: (id: string) => requests.delete(`Students/deleteStudent/${id}`),
};

const ClassGroups = {
  list: () => requests.get<IClassGroup[]>("Classgroups"),
  add: (obj: IClassGroup) => requests.post("Classgroups", obj),
  update: (obj: IClassGroup) => requests.put(`Classgroups/${obj.groupId}`, obj),
  delete: (id: string) => requests.delete(`Classgroups/${id}`),
};

const Addresses = {
  list: () => requests.get<IStreet[]>("Streets"),
  add: (obj: IStreet) => requests.post("Streets", obj),
  update: (obj: IStreet) => requests.put(`Streets/${obj.streetId}`, obj),
  delete: (id: string) => requests.delete(`Streets/${id}`),
};

const agent = {
  Students,
  ClassGroups,
  Addresses,
};

export default agent;
