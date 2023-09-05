import { create } from "zustand";
const useStore = create((set, get) => ({
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
      groupCurrency: "PLN",
      groupNote: "this is group of my friends ",
      id: "1",
    },
  ],
  path: ["/mainScreen"],

  setActualGroup: (newGroup) => set(() => ({ actualGroup: newGroup })),
  addGroup: (newGroup) => {
    const { groups } = get();
    set(() => ({ groups: [...groups, newGroup] }));
  },
  updatePath: (destination) => {
    const { path } = get();
    if (destination === "back") {
      set(() => ({ path: path.slice(0, -1) }));
    } else {
      set(() => ({ path: [...path, destination] }));
    }
  },
}));

export default useStore;
