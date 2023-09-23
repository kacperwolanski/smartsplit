import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { screenHeight } from "../../appConsts";

const contentOffset = screenHeight > 700 ? 2 / 3 : 7 / 10;
const maxContentHeight = screenHeight * contentOffset;

const ScreenContent = ({ children, scrollEnabled }) => {
  const [viewHeight, setViewHeight] = useState(0);

  const handleLayout = (event) => {
    const newHeight = event.nativeEvent.layout.height;
    setViewHeight(newHeight);
  };

  const isScrollable =
    viewHeight > maxContentHeight &&
    (scrollEnabled !== undefined ? scrollEnabled : true);

  return (
    <ScrollView style={styles.container} scrollEnabled={isScrollable}>
      <View onLayout={handleLayout} style={{ marginBottom: 20 }}>
        {children}
      </View>
    </ScrollView>
  );
};

export default ScreenContent;

const styles = StyleSheet.create({
  container: {
    maxHeight: maxContentHeight,
    padding: 20,
  },
});
