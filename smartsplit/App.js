import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Navigation from "./components/appComponents/Navigation";
import useTheme from "./hooks/useThemeHook";

export default App = () => {
  const { theme } = useTheme();

  return (
    <LinearGradient
      colors={theme.mainBackground}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Navigation />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
});
