import { createContext, useContext } from "react";
import ClassroomStore from "./ClassroomStore";

export const Store = {
  classroomStore: new ClassroomStore(),
};

export const StoreContext = createContext(Store);

export function useStore() {
  return useContext(StoreContext);
}
