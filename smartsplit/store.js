import { create } from "zustand";
const useStore = create((set, get) => ({
  actualScreen: "/mainScreen",
  actualGroupId: {},
  groups: [
    {
      name: "group1",
      amount: "4",
      people: [
        { name: "krystofer", id: "1" },
        { name: "kacper", id: "2" },
        { name: "lucyfer", id: "3" },
        { name: "dumin", id: "4" },
      ],
      createDate: "10.02.2021",
      groupType: "Friends",
      id: "1",
    },
  ],

  moveToScreen: (newScreen) => set(() => ({ actualScreen: newScreen })),
  setActualGroup: (newGroup) => set(() => ({ actualGroup: newGroup })),
  addGroup: (newGroup) => {
    const { groups } = get();
    set(() => ({ groups: [...groups, newGroup] }));
  },
}));

export default useStore;
