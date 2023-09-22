import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import useTheme from "../../hooks/useThemeHook";

const PaymentsPlaceholder = () => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: theme.icons.paymentPlaceholderImage }}
        style={styles.paymentImage}
      />
      <Text style={[{ color: theme.mainFontColor }]}>Lack of payments</Text>
    </View>
  );
};

export default PaymentsPlaceholder;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  paymentImage: {
    marginLeft: 10,
    width: 150,
    height: 150,
  },
});
