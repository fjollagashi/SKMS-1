import { IStudent } from "../InterfaceRepository/IStudent";
import { action, observable, makeAutoObservable } from "mobx";

export default class StudentStore {
  studentsRegistry = new Map<string, IStudent>();
  selectedStudent: IStudent | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  getStudents = () => {
    return Array.from(this.studentsRegistry.values()).sort((a, b) =>
      a.studentNavigation!.name.localeCompare(b.studentNavigation!.name)
    );
  };
}

export const hej = () => 0;
