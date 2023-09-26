import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useTheme from "./hooks/useThemeHook";
import { usePath } from "./hooks/usePathHook";
import Navigation from "./components/appComponents/Navigation";
import AppearAnimation from "./components/appComponents/AppearAnimation";
import useStore from "./store";

export default App = () => {
  const { theme } = useTheme();
  const { goBack } = usePath();
  const { previousScreen, slideDirection, path } = useStore();

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
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          {previousScreen}
        </View>

        <AppearAnimation offset={1} direction={slideDirection}>
          <LinearGradient
            colors={theme.mainBackground}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={{ height: "100%" }}>
              <Navigation />
            </View>
          </LinearGradient>
        </AppearAnimation>
      </View>
    </LinearGradient>
  );
};
