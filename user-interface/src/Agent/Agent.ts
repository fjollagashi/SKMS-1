import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAdministrator } from "../Components/InterfaceRepository/IAdministrator";
import { IArticle } from "../Components/InterfaceRepository/IArticle";
import { IClassGroup } from "../Components/InterfaceRepository/IClassGroup";
import { IParent } from "../Components/InterfaceRepository/IParent";
import { IParentsStudent } from "../Components/InterfaceRepository/IParentsStudent";
import { IStreet } from "../Components/InterfaceRepository/IStreet";
import { IStudent } from "../Components/InterfaceRepository/IStudent";

axios.defaults.baseURL = "http://localhost:5000/api/";
axios.defaults.withCredentials = true;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    axios.get<T>(url, config).then(responseBody),
  post: (url: string, obj: {}) => axios.post(url, obj).then(responseBody),
  put: (url: string, obj: {}) => axios.put(url, obj).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Students = {
  list: () => requests.get<IStudent[]>("Students"),
  add: (obj: IStudent) => requests.post("Students", obj),
  update: (obj: IStudent) => requests.put(`Students/${obj.studentId}`, obj),
  delete: (id: string) => requests.delete(`Students/deleteStudent/${id}`),
  getDetails: (id: string) =>
    requests.get<IStudent>("Students/getStudentDetails/" + id),
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

const Login = {
  generateLogin: (obj: {}) =>
    axios.post<string>("Auth/generateLogin", obj).then(responseBody),
  getRole: () => requests.get<string>("Auth/getRole"),
  parentLogin: () => requests.get<IParent>("Auth/parentLogin"),
  adminLogin: () => requests.get<IAdministrator>("Auth/adminLogin"),
  logOut: () => requests.get("Auth/logOut"),
};

const Parent = {
  getChildren: (id: string) => requests.get<IParentsStudent[]>("Parent/" + id),
};

const Articles = {
  list: () => requests.get<IArticle[]>("Schools/getSchoolArticles"),
};

const agent = {
  Students,
  ClassGroups,
  Addresses,
  Login,
  Parent,
  Articles,
};

export default agent;
