import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SingleSummary from "./SingleSummary";
import useTheme from "../../../../hooks/useThemeHook";

const PersonSummary = ({ index, summaryPerson, summaries }) => {
  const { name, status } = summaryPerson;
  const { theme } = useTheme();
  const summariesViewElement = summaries.map((summary, index) => {
    return <SingleSummary summary={summary} key={index} />;
  });
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
      <View
        style={[
          styles.container,
          {
            borderTopColor: theme.settingsFontColor,
            borderTopWidth: index ? 0.2 : 0,
          },
        ]}
      >
        <View>
          <Text style={[styles.personName, { color: theme.mainFontColor }]}>
            {name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                styles.stateStyle,
                { color: parseInt(status) >= 0 ? "green" : "red" },
              ]}
            >
              {status}
            </Text>
            <Image
              source={require("../../../../assets/coins.png")}
              style={styles.coinsIcon}
            />
          </View>
        </View>

        <View style={styles.summariesContainer}>{summariesViewElement}</View>
      </View>
    </View>
  );
};

export default PersonSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
  },

  personName: {
    minWidth: 90,
    fontSize: 16,
  },
  stateStyle: {
    paddingVertical: 5,
  },
  coinsIcon: {
    width: 20,
    height: 20,
  },
});
