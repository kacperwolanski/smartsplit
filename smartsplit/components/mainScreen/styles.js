import { StyleSheet } from "react-native";
import blueContainerStyle from "../../styles/BlueContainer";
export const mainScreenStyles = StyleSheet.create({
  circleButton: {
    borderRadius: "50%",
    backgroundColor: "#191B3F",
    width: 70,
    height: 70,
    justifyContent: "center",
    marginTop: 40,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
});

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
