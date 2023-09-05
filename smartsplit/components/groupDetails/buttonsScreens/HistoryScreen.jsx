import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../appComponents/ScreenContent";
import useStore from "../../../store";

const HistoryScreen = () => {
  const { moveToScreen } = useStore();
  const handleBackPress = () => {
    moveToScreen("");
  };

  return (
    <View>
      <Text style={headerStyle}>History</Text>
      <ScreenContent></ScreenContent>
      <View style={styles.buttonsContainer}>
        <Button color="white" title="back" onPress={handleBackPress} />
        <Button title="save" />
      </View>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 700,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
});
