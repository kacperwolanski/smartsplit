import { StyleSheet, View } from "react-native";
import MainScreen from "./components/mainScreen/MainScreen";

export default App = () => {
  const groups = [
    {
      name: "group1",
      amount: "4",
      people: ["krystofer", "kacper", "andrzej", "kusiok"],
      createDate: "10.02.2021",
    },
    {
      name: "group2",
      amount: "5",
      people: ["swierku", "krystofer", "kacper", "andrzej", "kusiok"],
      createDate: "10.02.2022",
    },
    {
      name: "group3",
      amount: "2",
      people: ["andrzej", "kusiok"],
      createDate: "10.02.2029",
    },
  ];
  return (
    <View style={styles.container}>
      <MainScreen groups={groups} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#3B579E",
    paddingHorizontal: 35,
  },
});
