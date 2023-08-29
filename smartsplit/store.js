import { create } from "zustand";
const useStore = create((set) => ({
  actualScreen: "/mainScreen",
  actualGroupId: {},
  groups: [
    {
      name: "group1",
      amount: "4",
      people: ["krystofer", "kacper", "andrzej", "kusiok"],
      createDate: "10.02.2021",
      id: "1",
    },
    {
      name: "group2",
      amount: "5",
      people: ["swierku", "krystofer", "kacper", "andrzej", "kusiok"],
      createDate: "10.02.2022",
      id: "2",
    },
    {
      name: "group3",
      amount: "2",
      people: ["andrzej", "kusiok"],
      createDate: "10.02.2029",
      id: "3",
    },
  ],

  moveToScreen: (newScreen) => set(() => ({ actualScreen: newScreen })),
  setActualGroup: (newGroup) => set(() => ({ actualGroup: newGroup })),
}));

export default useStore;
