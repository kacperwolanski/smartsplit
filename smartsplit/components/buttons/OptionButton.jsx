import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { usePath } from "../../hooks/usePathHook";
import useTheme from "../../hooks/useThemeHook";
import useActualGroup from "../../hooks/useActualGroupHook";

const OptionButton = ({ imagePath, pathKeyword }) => {
  const { moveTo } = usePath();
  const { theme } = useTheme();
  const { actualGroup } = useActualGroup();
  const { id } = actualGroup;
  let additionalStyle = {
    marginTop: pathKeyword === "summary" ? -3 : 0,
    marginLeft: pathKeyword === "history" ? -2 : 0,
    marginRight: pathKeyword === "options" ? -4 : 0,
  };

  const handleNavigateToScreen = () => {
    moveTo(`/group/${id}/${pathKeyword}`);
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.buttonColor }]}
      onPress={handleNavigateToScreen}
    >
      <Image source={imagePath} style={[styles.icon, additionalStyle]} />
    </TouchableOpacity>
  );
};

export default OptionButton;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 65,
    height: 65,
  },
});
