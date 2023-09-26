import { create } from "zustand";
import { updateValueByKey } from "./helpers/updateValueByKey";

const useStore = create((set, get) => ({
  actualGroupId: "",
  groups: [],

  path: ["/mainScreen"],
  appLanguage: "English",
  appTheme: "light",
  slideDirection: "right",
  signedUser: "Kacper",
  previousScreen: <></>,
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
  setPreviousScreen: (newScreen) => {
    set(() => ({ previousScreen: newScreen }));
  },
}));

export default useStore;
