import { ICurriculum } from "../InterfaceRepository/ICurriculum";
import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";

export default class CurriculumStore {
  curriculumRegistry = new Map<string, ICurriculum>();
  selectedCurriculum: ICurriculum | undefined = undefined;
  modalState: string = "LIST";

  constructor() {
    makeAutoObservable(this);
    //this.curriculumRegistry = null;
  }

  openModal = (state: string, curriculumId?: string) => {
    curriculumId
      ? this.selectCurriculum(curriculumId)
      : this.deselectCurriculum();
    this.modalState = state;
  };

  closeModal = () => {
    this.modalState = "LIST";
  };

  getCurriculums = () => {
    return Array.from(this.curriculumRegistry.values()).sort(
      (a, b) => a.grade - b.grade
    );
  };

  selectCurriculum = (id: string) => {
    this.selectedCurriculum = this.curriculumRegistry.get(id);
  };

  deselectCurriculum = () => {
    this.selectedCurriculum = undefined;
  };

  createCurriculum = (curriculum: ICurriculum) => {
    curriculum.curriculumId = v4();
    curriculum.school = "Hysni Zajmi";
    this.curriculumRegistry.set(curriculum.curriculumId, curriculum);
    this.selectedCurriculum = curriculum;
    this.modalState = "LIST";
  };

  deleteCurriculum = (curriculumId: string) => {
    this.curriculumRegistry.delete(curriculumId);
  };

  updateCurriculum = (curriculum: ICurriculum) => {
    this.curriculumRegistry.set(curriculum.curriculumId, curriculum);
    this.selectedCurriculum = curriculum;
    this.modalState = "LIST";
  };

  getDefaultCurriculum = (): ICurriculum => {
    return {
      curriculumId: "",
      grade: 0,
      school: "",
    };
  };
}
