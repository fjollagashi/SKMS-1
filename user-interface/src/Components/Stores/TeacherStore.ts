import { ITeacher } from "../InterfaceRepository/ITeacher";
import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";

const FakeData = new Map<string, ITeacher>();

let id = v4();
FakeData.set(id, {
  teacherId: id,
  teacherCategory: "Fillore",
  academicDegree: "Masters",
  phoneNumber: "",
  school: "",
  teacherNavigation: {
    userId: id,
    birthday: "",
    name: "Adrian",
    surname: "Idrizi",
    userAddress: "",
    gender: "M",
    profilePictureUrl:
      "https://m.media-amazon.com/images/I/712lOAnLS8L._SS500_.jpg",
  },
  classgroup: {
    groupId: "group1",
    groupName: "II - 2",
    grade: "2",
    classroom: "class1",
    homeroomTeacher: id,
  },
});
id = v4();
FakeData.set(id, {
  teacherId: id,
  teacherCategory: "Fillore",
  academicDegree: "Masters",
  phoneNumber: "",
  school: "",
  teacherNavigation: {
    userId: id,
    birthday: "",
    name: "Arben",
    surname: "Vitija",
    userAddress: "",
    gender: "M",
    profilePictureUrl: "",
  },
  classgroup: {
    groupId: "group2",
    groupName: "III - 3",
    grade: "3",
    classroom: "class3a",
    homeroomTeacher: id,
  },
});

export default class TeacherStore {
  teacherRegistry = new Map<string, ITeacher>();
  selectedTeacher: ITeacher | undefined = undefined;
  modalState: string = "LIST";

  constructor() {
    makeAutoObservable(this);
    this.teacherRegistry = FakeData;
  }

  openModal = (state: string, teacherId?: string) => {
    teacherId ? this.selectTeacher(teacherId) : this.deselectTeacher();
    this.modalState = state;
  };

  closeModal = () => {
    this.modalState = "LIST";
  };

  getTeachers = () => {
    return Array.from(this.teacherRegistry.values());
  };

  selectTeacher = (id: string) => {
    this.selectedTeacher = this.teacherRegistry.get(id);
  };

  deselectTeacher = () => {
    this.selectedTeacher = {} as ITeacher;
  };

  createTeacher = (teacher: ITeacher) => {
    teacher.teacherId = v4();
    teacher.teacherNavigation!.userId = teacher.teacherId;
    teacher.school = "Hysni Zajmi";
    this.teacherRegistry.set(teacher.teacherId, teacher);
    this.selectedTeacher = teacher;
    this.modalState = "LIST";
  };

  deleteTeacher = (teacherId: string) => {
    this.teacherRegistry.delete(teacherId);
  };

  updateTeacher = (teacher: ITeacher) => {
    this.teacherRegistry.set(teacher.teacherId, teacher);
    this.selectedTeacher = teacher;
    this.modalState = "LIST";
  };

  getDefaultTeacher = (): ITeacher => {
    return {
      teacherId: "",
      school: "",
      academicDegree: "",
      teacherCategory: "",
      phoneNumber: "",
      teacherNavigation: {
        userId: "",
        name: "",
        surname: "",
        birthday: "",
        gender: "",
        profilePictureUrl: "",
        userAddress: "",
      },
    };
  };
}
