import { IStudent } from "../InterfaceRepository/IStudent";
import { makeAutoObservable, runInAction } from "mobx";
import { v4 } from "uuid";
import agent from "../../Agent/Agent";
import { ErrorToast, SuccessToast } from "./Toasts";

export default class StudentStore {
  studentsRegistry = new Map<string, IStudent>();
  selectedStudent: IStudent | undefined = undefined;
  modalState = "LIST";

  constructor() {
    makeAutoObservable(this);
    this.fetchStudents();
  }

  fetchStudents = async () => {
    this.studentsRegistry = await agent.Students.list().then(
      (res) => new Map(res.map((i) => [i.studentId, i]))
    );
  };

  getStudents = () => {
    return Array.from(this.studentsRegistry.values()).sort((a, b) =>
      a.studentNavigation!.name.localeCompare(b.studentNavigation!.name)
    );
  };

  openModal = (state: string, studentId?: string) => {
    studentId ? this.selectStudent(studentId) : this.deselectStudent();
    this.modalState = state;
  };

  closeModal = () => {
    this.modalState = "LIST";
  };

  selectStudent = (id: string) => {
    this.selectedStudent = this.studentsRegistry.get(id);
  };

  deselectStudent = () => {
    this.selectedStudent = {} as IStudent;
  };

  createStudent = async (student: IStudent) => {
    student.studentId = v4();
    student.studentNavigation!.userId = student.studentId;
    student.school = "FA91D3EA-1D5A-4AB7-BBCC-BC3A8BFE634D";
    console.log(student);
    try {
      await agent.Students.add(student);
      runInAction(() => {
        this.studentsRegistry.set(student.studentId, student); //key, value
        this.selectedStudent = student;
        this.modalState = "LIST";
        SuccessToast();
      });
    } catch (error) {
      console.log(error);
      ErrorToast();
    }
  };

  deleteStudent = async (studentId: string) => {
    try {
      await agent.Students.delete(studentId);
      runInAction(() => {
        this.studentsRegistry.delete(studentId);
        this.selectedStudent
          ? this.selectedStudent.studentId === studentId
            ? this.deselectStudent()
            : console.log("")
          : console.log("");

        SuccessToast();
      });
    } catch (error) {
      ErrorToast();
    }
  };

  updateStudent = async (student: IStudent) => {
    try {
      await agent.Students.update(student);
      runInAction(() => {
        this.studentsRegistry.set(student.studentId, student);
        this.selectedStudent = student;
        this.modalState = "LIST";
        SuccessToast();
      });
    } catch (error) {
      ErrorToast();
    }
  };

  getStudentClassgroup = (student: IStudent): string => {
    return student.classGroupNavigation
      ? student.classGroupNavigation.groupName
      : "Nuk ka";
  };

  getDefaultStudent = (): IStudent => {
    return {
      studentId: "",
      classGroup: "",
      school: "",
    };
  };
}
