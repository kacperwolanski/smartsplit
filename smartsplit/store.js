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
  payments: [
    {
      person: "krystofer",
      title: "woda gazowana",
      amount: "50PLN",
      date: "01.02.2023",
    },
    {
      person: "kacper",
      title: "koktajle",
      amount: "5PLN",
      date: "01.05.2023",
    },
    {
      person: "dumin",
      title: "woda gazowana",
      amount: "150PLN",
      date: "01.10.2023",
    },
    {
      person: "swierku",
      title: "woda destylowana",
      amount: "98PLN",
      date: "01.05.2023",
    },
  ],
  path: ["/mainScreen"],

  setActualGroup: (newGroup) => set(() => ({ actualGroup: newGroup })),
  addGroup: (newGroup) => {
    const { groups } = get();
    set(() => ({ groups: [...groups, newGroup] }));
  },
  addPayment: (newPayment) => {
    const { payments } = get();
    set(() => ({ payments: [...payments, newPayment] }));
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
