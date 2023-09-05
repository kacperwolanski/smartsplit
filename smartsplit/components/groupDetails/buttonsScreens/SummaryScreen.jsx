import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../appComponents/ScreenContent";
import { usePath } from "../../../hooks/usePathHook";

const SummaryScreen = () => {
  const { goBack } = usePath();
  const handleBackPress = () => {
    goBack();
  };

  return (
    <View>
      <Text style={headerStyle}>Summary</Text>
      <ScreenContent></ScreenContent>
      <View style={styles.buttonsContainer}>
        <Button color="white" title="back" onPress={handleBackPress} />
        <Button title="save" />
      </View>
    </View>
  );
};

export default SummaryScreen;

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
