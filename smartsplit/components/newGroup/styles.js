import { StyleSheet } from "react-native";

export const newGroupStyles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 18,
    minHeight: 130,
  },
  groupNameContainer: {
    borderBottomWidth: 0.2,
    borderBottomColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  groupNameInput: {
    fontSize: 24,
    paddingVertical: 12,
  },
  editButton: {
    marginTop: 15,
  },
});

export const friendNameStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: 5,
  },

  textInput: {
    textAlign: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    fontSize: 20,
  },
});
