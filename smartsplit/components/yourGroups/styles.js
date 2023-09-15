import { StyleSheet } from "react-native";

export const groupShortcutStyles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 18,
    minHeight: 130,
  },
  name: {
    color: "white",
    fontSize: 24,
  },
  date: {
    color: "#3B579E",
    marginBottom: 5,
    fontSize: 12,
  },
  personImage: {
    width: 14,
    height: 14,
    marginTop: 1,
  },
  groupType: {
    color: "white",
    textAlign: "right",
  },
  groupNote: {
    marginTop: 20,
    fontSize: 12,
    color: "white",
  },
});
