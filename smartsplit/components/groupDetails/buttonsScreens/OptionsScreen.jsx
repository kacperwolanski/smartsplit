import { Button, StyleSheet, Text, View } from "react-native";
import ScreenContent from "../../appComponents/ScreenContent";
import { usePath } from "../../../hooks/usePathHook";
import BlueTextInput from "../../appComponents/BlueTextInput";
import useStore from "../../../store";
import headerStyle from "../../../styles/headerStyle";

const OptionsScreen = () => {
  const { goBack } = usePath();
  const { actualGroup } = useStore();
  const { name, people, groupCurrency, groupType, groupNote } = actualGroup;

  const handleBackPress = () => {
    goBack();
  };

  return (
    <View>
      <Text style={headerStyle}>Options</Text>
      <ScreenContent>
        <BlueTextInput
          placeholder={name}
          saveFunction={() => {}}
          header="Group name"
        />
        <BlueTextInput
          placeholder={groupType}
          saveFunction={() => {}}
          header="Group type"
        />
        <BlueTextInput
          placeholder={groupCurrency}
          saveFunction={() => {}}
          header="Group currency"
        />
        <BlueTextInput
          placeholder={groupNote}
          saveFunction={() => {}}
          header="Group note"
        />
        <View style={{ marginTop: 20 }}>
          <Text style={styles.headerStyle}>Delete group</Text>
          <View style={styles.deleteButtonContainer}>
            <Button color="#C7372F" title="delete "></Button>
          </View>
        </View>
      </ScreenContent>
      <View style={styles.buttonsContainer}>
        <Button color="white" title="back" onPress={handleBackPress} />
        <Button title="save" />
      </View>
    </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 700,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    marginTop: 38,
  },
  headerStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  deleteButtonContainer: {
    marginTop: 5,
    gap: 10,
    padding: 10,
    ...blueContainerStyle,
  },
});
