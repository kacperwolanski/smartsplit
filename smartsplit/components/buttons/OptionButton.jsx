import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { historyIconUrl, optionsIconUrl } from "../../appConsts";
import useStore from "../../store";
import { usePath } from "../../hooks/usePathHook";
const OptionButton = ({ imagePath, pathKeyword }) => {
  const { moveTo } = usePath();
  const { actualGroup } = useStore();
  const { id } = actualGroup;
  let additionalStyle = {
    marginTop: imagePath === optionsIconUrl ? 3 : -2,
    marginLeft: imagePath === optionsIconUrl ? 5 : 0,
    marginRight: imagePath === historyIconUrl ? 5 : 0,
  };

  const handleNavigateToScreen = () => {
    moveTo(`/group/${id}/${pathKeyword}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigateToScreen}>
      <Image
        source={{ uri: imagePath }}
        style={[styles.icon, additionalStyle]}
      />
    </TouchableOpacity>
  );
};

export default OptionButton;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: "#191B3F",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 65,
    height: 65,
  },
});
