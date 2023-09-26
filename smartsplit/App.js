import { View } from "react-native";
import Navigation from "./components/appComponents/Navigation";
import AppearAnimation from "./components/appComponents/AppearAnimation";
import useStore from "./store";
import SlideBackHandler from "./components/appComponents/SlideBackHandler";
import GradientView from "./components/appComponents/GradientView";

export default App = () => {
  const { previousScreen, slideDirection } = useStore();
  return (
    <GradientView>
      <SlideBackHandler>
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
          <GradientView>
            <View style={{ height: "100%" }}>
              <Navigation />
            </View>
          </GradientView>
        </AppearAnimation>
      </SlideBackHandler>
    </GradientView>
  );
};
