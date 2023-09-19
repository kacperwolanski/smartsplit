import React, { useEffect, useState } from "react";
import { View, Animated, Easing } from "react-native";
import useStore from "../../store";

const AppearAnimation = ({ children, direction }) => {
  const { path } = useStore();
  const [slideAnim] = useState(new Animated.Value(0));

  const slideValue = 300;
  const slideDirection = direction === "left" ? -1 * slideValue : slideValue;
  console.log(slideDirection);
  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    slideAnim.setValue(slideDirection);
    slideIn();
  }, [path]);
  return (
    <View>
      <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
        {children}
      </Animated.View>
    </View>
  );
};

export default AppearAnimation;
