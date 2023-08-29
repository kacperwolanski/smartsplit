import { StyleSheet } from "react-native";
import blueContainerStyle from "../../styles/blueContainer";

export const groupShortcutStyles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 22,
    height: 130,
    ...blueContainerStyle,
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
});
