import { StyleSheet, View } from "react-native";
import MainScreen from "./components/mainScreen/MainScreen";
import NewGroupScreen from "./components/newGroup/NewGroupScreen";
import { LinearGradient } from "expo-linear-gradient";
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
    <LinearGradient
      colors={[
        "rgba(5,213,245,0.2)",
        "rgba(1,101,176,0.4)",
        "rgba(7,108,186,0.4)",
        "rgba(0,255,255,0.2)",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <NewGroupScreen />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,

    paddingHorizontal: 35,
  },
});
