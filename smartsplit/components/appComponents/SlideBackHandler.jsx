import React from "react";
import { View } from "react-native";
import { usePath } from "../../hooks/usePathHook";

const SlideBackHandler = ({ children }) => {
  const { goBack } = usePath();
  return (
    <View
      onTouchStart={(e) => (this.touchX = e.nativeEvent.pageX)}
      onTouchEnd={(e) => {
        if (e.nativeEvent.pageX - this.touchX > 200) goBack();
      }}
    >
      {children}
    </View>
  );
};

export default SlideBackHandler;
