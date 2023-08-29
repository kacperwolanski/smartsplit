import { create } from "zustand";

const useStore = create((set) => ({
  actualScreen: "/mainScreen",
  groups: [
    {
      name: "group1",
      amount: "4",
      people: ["krystofer", "kacper", "andrzej", "kusiok"],
      createDate: "10.02.2021",
    },
    {
      name: "group2",
      amount: "5",
      people: ["swierku", "krystofer", "kacper", "andrzej", "kusiok"],
      createDate: "10.02.2022",
    },
    {
      name: "group3",
      amount: "2",
      people: ["andrzej", "kusiok"],
      createDate: "10.02.2029",
    },
  ],

  moveToScreen: (newScreen) => set(() => ({ actualScreen: newScreen })),
}));

export default useStore;
