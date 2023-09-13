import { Image, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useStore from "./store";
import Navigation from "./components/appComponents/Navigation";
import { coinsIconUrl } from "./appConsts";

export default App = () => {
  const { path } = useStore();

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
        {/* <Image source={{ uri: coinsIconUrl }} style={styles.coinsIcon} /> */}
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
  coinsIcon: {
    position: "absolute",
    top: 300,
    left: -50,
    width: 500,
    height: 500,
    opacity: 0.1,
  },
});
