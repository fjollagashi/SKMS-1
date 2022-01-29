import { ICurriculum } from "../InterfaceRepository/ICurriculum";
import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";

const FakeData = new Map<string, ICurriculum>();

let id = v4();
FakeData.set(id, {
  curriculumId: id,
  grade: 1,
  school: "Hysni Zajmi",
  subjects: [
    {
      subjectId: "10",
      subjectName: "Matematika I",
      curriculum: id,
    },
    {
      subjectId: "20",
      subjectName: "Anglisht I",
      curriculum: id,
    },
    {
      subjectId: "30",
      subjectName: "Gjuhë Shqipe I",
      curriculum: id,
    },
  ],
});
id = v4();
FakeData.set(id, {
  curriculumId: id,
  grade: 2,
  school: "Hysni Zajmi",
  subjects: [
    {
      subjectId: "1",
      subjectName: "Matematika II",
      curriculum: id,
    },
    {
      subjectId: "2",
      subjectName: "Anglisht II",
      curriculum: id,
    },
    {
      subjectId: "3",
      subjectName: "Gjuhë Shqipe II",
      curriculum: id,
    },
  ],
});
id = v4();
FakeData.set(id, {
  curriculumId: id,
  grade: 3,
  school: "Hysni Zajmi",
  subjects: [
    {
      subjectId: "100",
      subjectName: "Matematika III",
      curriculum: id,
    },
    {
      subjectId: "200",
      subjectName: "Anglisht III",
      curriculum: id,
    },
    {
      subjectId: "300",
      subjectName: "Gjuhë Shqipe III",
      curriculum: id,
    },
  ],
});

export default class CurriculumStore {
  curriculumRegistry = new Map<string, ICurriculum>();
  selectedCurriculum: ICurriculum | undefined = undefined;
  modalState: string = "LIST";

  constructor() {
    makeAutoObservable(this);
    this.curriculumRegistry = FakeData;
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
