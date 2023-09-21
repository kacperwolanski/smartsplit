import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useTheme from "./hooks/useThemeHook";
import { usePath } from "./hooks/usePathHook";
import Navigation from "./components/appComponents/Navigation";

export default App = () => {
  const { theme } = useTheme();
  const { goBack } = usePath();

  return (
    <LinearGradient
      colors={theme.mainBackground}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View
        onTouchStart={(e) => (this.touchX = e.nativeEvent.pageX)}
        onTouchEnd={(e) => {
          if (e.nativeEvent.pageX - this.touchX > 200) goBack();
        }}
        style={{ flex: 1 }}
      >
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
