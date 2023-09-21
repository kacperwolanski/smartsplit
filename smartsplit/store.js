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
        { name: "kamil", id: "3" },
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
      person: { name: "kacper", id: "2" },
      forWho: [
        { name: "kacper", id: "2" },
        { name: "krystofer", id: "1" },
        { name: "dumin", id: "4" },
        { name: "kamil", id: "3" },
      ],
      note: "koktajle",
      amount: 20,
      date: "01.05.2023",
    },
  ],

  summaries: [],
  path: ["/mainScreen"],
  appLanguage: "English",
  appTheme: "dark",
  slideDirection: "right",
  setActualGroup: (newGroup) => set(() => ({ actualGroup: newGroup })),
  updateGroups: (updatedGroups) => {
    set(() => ({ groups: updatedGroups }));
  },
  addGroup: (newGroup) => {
    const { groups } = get();
    set(() => ({ groups: [...groups, newGroup] }));
  },
  addPayment: (newPayment) => {
    const { payments } = get();
    set(() => ({ payments: [...payments, newPayment] }));
  },
  addSummary: (newSummary) => {
    if (!newSummary) {
      set(() => ({ summaries: [] }));
    } else {
      const { summaries } = get();
      set(() => ({ summaries: [...summaries, newSummary] }));
    }
  },
  updatePath: (destination) => {
    const { path, setSlideDirection } = get();
    if (destination === "back") {
      setSlideDirection("left");
      if (path.length > 1) {
        set(() => ({ path: path.slice(0, -1) }));
      }
    } else {
      setSlideDirection("right");
      set(() => ({ path: [...path, destination] }));
    }
  },
  setAppLanguage: (selectedLanguage) => {
    set(() => ({ appLanguage: selectedLanguage }));
  },
  setAppTheme: (selectedTheme) => {
    set(() => ({ appTheme: selectedTheme }));
  },
  setSlideDirection: (newSlideDirection) => {
    set(() => ({ slideDirection: newSlideDirection }));
  },
}));

export default useStore;
