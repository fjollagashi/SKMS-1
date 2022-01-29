import { IClassroom } from "../InterfaceRepository/IClassroom";
import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";

const FakeData = new Map<string, IClassroom>();

let id = v4();
FakeData.set(id, {
  classroomId: id,
  classroomName: "Klasa III-4/VIII-4",
  capacity: 30,
  classgroups: [
    {
      groupId: "3-4",
      groupName: "III-4",
      grade: "4",
      classroom: id,
      homeroomTeacher: "",
    },
    {
      groupId: "8-4",
      groupName: "VIII-4",
      grade: "8",
      classroom: id,
      homeroomTeacher: "",
    },
  ],
  school: "Hysni Zajmi",
});
id = v4();
FakeData.set(id, {
  classroomId: id,
  classroomName: "Klasa I-4/IV-4",
  capacity: 40,
  classgroups: [],
  school: "Hysni Zajmi",
});
id = v4();
FakeData.set(id, {
  classroomId: id,
  classroomName: "Klasa III-3/VIII-3",
  capacity: 15,
  classgroups: [],
  school: "Hysni Zajmi",
});

export default class ClassroomStore {
  classroomRegistry = new Map<string, IClassroom>();
  selectedClassroom: IClassroom | undefined = undefined;
  modalState: string = "LIST";

  constructor() {
    makeAutoObservable(this);
    this.classroomRegistry = FakeData;
  }

  openModal = (state: string, classroomId?: string) => {
    console.log("this is id : " + classroomId);
    classroomId ? this.selectClassroom(classroomId) : this.deselectClassroom();
    this.modalState = state;
  };

  closeModal = () => {
    this.modalState = "LIST";
  };

  getClassrooms = () => {
    return Array.from(this.classroomRegistry.values()).sort((a, b) =>
      a.classroomName.localeCompare(b.classroomName)
    );
  };

  selectClassroom = (id: string) => {
    this.selectedClassroom = this.classroomRegistry.get(id);
  };

  deselectClassroom = () => {
    this.selectedClassroom = undefined;
  };

  deleteClassroom = (classroomId: string) => {
    this.classroomRegistry.delete(classroomId);
  };

  createClassroom = (classroom: IClassroom) => {
    classroom.classroomId = v4();
    classroom.school = "Hysni Zajmi";
    this.classroomRegistry.set(classroom.classroomId, classroom);
    this.selectedClassroom = classroom;
    this.modalState = "LIST";
  };

  updateClassroom = (classroom: IClassroom) => {
    this.classroomRegistry.set(classroom.classroomId, classroom);
    this.selectedClassroom = classroom;
    this.modalState = "LIST";
  };

  getDefaultClassroom = (): IClassroom => {
    return {
      classroomId: "",
      classroomName: "",
      capacity: 0,
      school: "",
    };
  };
}
