import { create } from "zustand";
import { updateValueByKey } from "./helpers/updateValueByKey";
import MainScreen from "./components/mainScreen/MainScreen";
const useStore = create((set, get) => ({
  actualGroupId: "",
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
      summaries: [],
      statuses: [],
      payments: [
        {
          person: { name: "kacper", id: "2" },
          forWho: [
            { name: "kacper", id: "2" },
            { name: "krystofer", id: "1" },
            { name: "dumin", id: "4" },
          ],
          note: "koktajle",
          amount: 20,
          date: "01.05.2023",
        },
      ],
      id: "1",
    },
  ],

  path: ["/mainScreen"],
  appLanguage: "English",
  appTheme: "dark",
  slideDirection: "right",
  signedUser: "Kacper",
  setActualGroup: (newGroupId) => set(() => ({ actualGroupId: newGroupId })),
  updateGroups: (updatedGroups) => {
    set(() => ({ groups: updatedGroups }));
  },
  addGroup: (newGroup) => {
    const { groups } = get();
    set(() => ({ groups: [...groups, newGroup] }));
  },

  updatePayments: (newPayments, groupId) => {
    const { updateGroupsByKey } = get();
    updateGroupsByKey(newPayments, "payments", groupId);
  },

  updateSummaries: (newSummaries, groupId) => {
    const { updateGroupsByKey } = get();
    updateGroupsByKey(newSummaries, "summaries", groupId);
  },

  updateGroupsByKey: (newValue, key, groupId) => {
    const { groups } = get();
    const updatedGroups = updateValueByKey(groups, groupId, key, newValue);

    set(() => ({ groups: updatedGroups }));
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
