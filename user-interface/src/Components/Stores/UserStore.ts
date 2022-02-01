import { IUser } from "../InterfaceRepository/IUser";
import { makeAutoObservable, runInAction } from "mobx";
import { v4 } from "uuid";
import agent from "../../Agent/Agent";
import { ErrorToast, SuccessToast } from "./Toasts";
import { IAdministrator } from "../InterfaceRepository/IAdministrator";
import { IParent } from "../InterfaceRepository/IParent";
import { ISchool } from "../InterfaceRepository/ISchool";
import { IStudent } from "../InterfaceRepository/IStudent";
import { throws } from "assert";

const FakeSchool: ISchool = {
  schoolId: "sdfs",
  schoolName: 'Shkolla Fillore dhe e Mesme e Ulët " Hysni Zajmi "',
  about: "dsfsdf",
  category: "Fillore",
  schoolAddress: "123-3",
  administrator: "",
};

export default class UserStore {
  loggedParent: IParent | undefined = undefined;
  loggedParentChildren: IStudent[] = [];
  selectedStudent: IStudent | undefined = undefined;
  loggedAdmin: IAdministrator | undefined = undefined;
  loggedIn: boolean = false;
  role: string | undefined = undefined;
  school: ISchool | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
    if (!this.loggedIn) this.logUser();
  }

  selectStudent = async (id: string) => {
    this.selectedStudent = await agent.Students.getDetails(id);
  };

  getToken = async (user: IUser) => {
    let message = await agent.Login.generateLogin(user);
    if (message === "Does not exist")
      return ErrorToast("Përdoruesi nuk ekziston!");
    else if (message === "Bad password")
      return ErrorToast("Keni shtypur fjalëkalimin e gabuar!");
    else if (message === "OK") {
      this.logUser();
      return "OK";
    }
  };

  logUser = async () => {
    try {
      this.role = await agent.Login.getRole();
      runInAction(() => {
        this.handleRoleLogin();
        this.school = FakeSchool;
      });
    } catch (error) {
      console.log(error);
      ErrorToast("Error tek marrja e rolit");
    }
  };

  logOut = async () => {
    try {
      await agent.Login.logOut();
      runInAction(() => {
        this.loggedIn = false;
        this.loggedAdmin = undefined;
        this.loggedParent = undefined;
        this.loggedParentChildren = [];
      });
    } catch (error) {
      console.log(error);
      ErrorToast("Error ne logout");
    }
  };

  handleRoleLogin = async () => {
    switch (this.role) {
      case "PARENT":
        this.loggedParent = await agent.Login.parentLogin();
        runInAction(() => {
          this.loggedIn = true;
          this.loadChildren();
          console.log("parent logged in!");
        });

        break;
      case "ADMIN":
        this.loggedAdmin = await agent.Login.adminLogin();
        runInAction(() => {
          this.loggedIn = true;
          console.log("here2");
        });
        break;
      default:
        ErrorToast();
    }
  };

  loadChildren = () => {
    for (const parensstudent of this.loggedParent!.parentsStudents!) {
      this.loggedParentChildren.push(parensstudent!.student!);
    }
  };
}
