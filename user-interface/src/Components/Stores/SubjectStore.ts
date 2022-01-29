import { ISubject } from "../InterfaceRepository/ISubject";
import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";
import { ICurriculum } from "../InterfaceRepository/ICurriculum";

const FakeData = new Map<string, ISubject>();

let id = v4();
FakeData.set(id, {
  subjectId: id,
  subjectName: "Matematika I",
  curriculum: "1",
  subjectsTeachers: [
    {
      subjectId: id,
      teacherId: "teacher1",
      teacher: {
        teacherId: "teacher1",
        teacherCategory: "",
        academicDegree: "",
        phoneNumber: "",
        school: "",
        teacherNavigation: {
          userId: id,
          name: "Arben",
          surname: "Vitija",
          userAddress: "",
          birthday: "",
          profilePictureUrl: "",
          gender: "M",
        },
      },
    },
    {
      subjectId: id,
      teacherId: "teacher2",
      teacher: {
        teacherId: "teacher2",
        teacherCategory: "",
        academicDegree: "",
        phoneNumber: "",
        school: "",
        teacherNavigation: {
          userId: id,
          name: "Adrian",
          surname: "Idrizi",
          userAddress: "",
          birthday: "",
          profilePictureUrl: "",
          gender: "M",
        },
      },
    },
    {
      subjectId: id,
      teacherId: "teacher3",
      teacher: {
        teacherId: "teacher3",
        teacherCategory: "",
        academicDegree: "",
        phoneNumber: "",
        school: "",
        teacherNavigation: {
          userId: id,
          name: "Besa",
          surname: "Zekaj",
          userAddress: "",
          birthday: "",
          profilePictureUrl: "",
          gender: "F",
        },
      },
    },
  ],
});
id = v4();
FakeData.set(id, {
  subjectId: id,
  subjectName: "Matematika III",
  curriculum: "3",
  subjectsTeachers: [
    {
      subjectId: id,
      teacherId: "teacher4",
      teacher: {
        teacherId: "teacher4",
        teacherCategory: "",
        academicDegree: "",
        phoneNumber: "",
        school: "",
        teacherNavigation: {
          userId: id,
          name: "Zek",
          surname: "Zekaj",
          userAddress: "",
          birthday: "",
          profilePictureUrl: "",
          gender: "M",
        },
      },
    },
    {
      subjectId: id,
      teacherId: "teacher5",
      teacher: {
        teacherId: "teacher5",
        teacherCategory: "",
        academicDegree: "",
        phoneNumber: "",
        school: "",
        teacherNavigation: {
          userId: id,
          name: "Festina",
          surname: "Idrizi",
          userAddress: "",
          birthday: "",
          profilePictureUrl: "",
          gender: "F",
        },
      },
    },
    {
      subjectId: id,
      teacherId: "teacher6",
      teacher: {
        teacherId: "teacher6",
        teacherCategory: "",
        academicDegree: "",
        phoneNumber: "",
        school: "",
        teacherNavigation: {
          userId: id,
          name: "Besiana",
          surname: "Bytyqi",
          userAddress: "",
          birthday: "",
          profilePictureUrl: "",
          gender: "F",
        },
      },
    },
  ],
});

export default class SubjectStore {
  subjectRegistry = new Map<string, ISubject>();
  selectedSubject: ISubject | undefined = undefined;
  modalState: string = "LIST";

  constructor() {
    makeAutoObservable(this);
    this.subjectRegistry = FakeData;
  }

  openModal = (state: string, subjectId?: string) => {
    subjectId ? this.selectSubject(subjectId) : this.deselectSubject();
    this.modalState = state;
  };

  closeModal = () => {
    this.modalState = "LIST";
  };

  getSubjects = () => {
    return Array.from(this.subjectRegistry.values());
  };

  selectSubject = (id: string) => {
    this.selectedSubject = this.subjectRegistry.get(id);
  };

  deselectSubject = () => {
    this.selectedSubject = undefined;
  };

  createSubject = (subject: ISubject) => {
    subject.subjectId = v4();
    this.subjectRegistry.set(subject.subjectId, subject);
    this.selectedSubject = subject;
    this.modalState = "LIST";
  };

  deleteSubject = (subjectId: string) => {
    this.subjectRegistry.delete(subjectId);
  };

  updateSubject = (subject: ISubject) => {
    this.subjectRegistry.set(subject.subjectId, subject);
    this.selectedSubject = subject;
    this.modalState = "LIST";
  };

  getDefaultSubject = (): ISubject => {
    return {
      subjectId: "",
      subjectName: "",
      curriculum: "",
    };
  };
}
