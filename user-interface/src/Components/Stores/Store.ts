import { createContext, useContext } from "react";
import AddressStore from "./AddressStore";
import ClassGroupStore from "./ClassgroupStore";
import ClassroomStore from "./ClassroomStore";
import CurriculumStore from "./CurriculumStore";
import StudentStore from "./StudentStore";
import SubjectStore from "./SubjectStore";
import TeacherStore from "./TeacherStore";
import UserStore from "./UserStore";

export const Store = {
  classroomStore: new ClassroomStore(),
  curriculumStore: new CurriculumStore(),
  subjectStore: new SubjectStore(),
  teacherStore: new TeacherStore(),
  studentStore: new StudentStore(),
  classGroupStore: new ClassGroupStore(),
  addressStore: new AddressStore(),
  userStore: new UserStore(),
};

export const StoreContext = createContext(Store);

export function useStore() {
  return useContext(StoreContext);
}
