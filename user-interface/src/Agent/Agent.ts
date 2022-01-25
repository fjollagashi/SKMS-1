import axios, { AxiosResponse } from "axios";
import { IStudent } from "../Components/InterfaceRepository/IStudent";

axios.defaults.baseURL = "localhost:5001/api/";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, obj: {}) => axios.post<T>(url, obj).then(responseBody),
  put: <T>(url: string, obj: {}) => axios.put<T>(url, obj).then(responseBody),
  delete: <T>(url: string, obj: {}) =>
    axios.delete<T>(url, obj).then(responseBody),
};

const Students = {
  list: () => requests.get<IStudent[]>("administration/getAllStudents"),
};

const agent = {
  Students,
};

export default agent;
