import { IClassGroup } from "../InterfaceRepository/IClassGroup";
import { makeAutoObservable, runInAction } from "mobx";
import { v4 } from "uuid";
import agent from "../../Agent/Agent";
import { ErrorToast, SuccessToast } from "./Toasts";

export default class ClassGroupStore {
  classGroupsRegistry = new Map<string, IClassGroup>();
  selectedclassGroup: IClassGroup | undefined = undefined;
  modalState = "LIST";

  constructor() {
    makeAutoObservable(this);
    this.fetchclassGroups();
  }

  fetchclassGroups = async () => {
    this.classGroupsRegistry = await agent.ClassGroups.list().then(
      (res) => new Map(res.map((i) => [i.groupId, i]))
    );
  };

  getClassGroups = () => {
    return Array.from(this.classGroupsRegistry.values()).sort((a, b) =>
      a.groupName.localeCompare(b.groupName)
    );
  };

  openModal = (state: string, classGroupId?: string) => {
    classGroupId
      ? this.selectClassGroup(classGroupId)
      : this.deselectClassGroup();
    this.modalState = state;
  };

  closeModal = () => {
    this.modalState = "LIST";
  };

  selectClassGroup = (id: string) => {
    this.selectedclassGroup = this.classGroupsRegistry.get(id);
  };

  deselectClassGroup = () => {
    this.selectedclassGroup = {} as IClassGroup;
  };

  createclassGroup = async (classGroup: IClassGroup) => {
    classGroup.groupId = v4();
    try {
      await agent.ClassGroups.add(classGroup);
      runInAction(() => {
        this.classGroupsRegistry.set(classGroup.groupId, classGroup);
        this.selectedclassGroup = classGroup;
        this.modalState = "LIST";
      });
    } catch (error) {
      console.log(error);
      ErrorToast();
    }
  };

  deleteClassGroup = async (classGroupId: string) => {
    try {
      await agent.ClassGroups.delete(classGroupId);
      runInAction(() => {
        this.classGroupsRegistry.delete(classGroupId);
        this.selectedclassGroup
          ? this.selectedclassGroup.groupId === classGroupId
            ? this.deselectClassGroup()
            : console.log("")
          : SuccessToast();
      });
    } catch (error) {
      ErrorToast();
    }
  };

  updateclassGroup = (classGroup: IClassGroup) => {
    try {
      this.classGroupsRegistry.set(classGroup.groupId, classGroup);
      this.selectedclassGroup = classGroup;
      this.modalState = "LIST";
    } catch (error) {
      ErrorToast();
    }
  };

  getDefaultclassGroup = (): IClassGroup => {
    return {
      classroom: "",
      grade: "",
      groupId: "",
      groupName: "",
      homeroomTeacher: "",
      homeroomTeacherNavigation: {
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
      },
    };
  };
}
