import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SingleSummary from "./SingleSummary";

const PersonSummary = ({ index, personName, summaries }) => {
  const randomState = ["+80PLN", "-145PLN", "+20PLN", "-9PLN"][
    Math.floor(Math.random() * 4)
  ];
  const summariesViewElement = summaries.map((summary, index) => {
    return <SingleSummary summary={summary} key={index} />;
  });
  return (
    <View style={{ padding: 25 }}>
      <View style={[styles.container, { borderTopWidth: index ? 0.2 : 0 }]}>
        <View>
          <Text style={styles.personName}>{personName}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                styles.stateStyle,
                { color: randomState[0] === "+" ? "green" : "red" },
              ]}
            >
              {randomState}
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
    borderTopColor: "white",
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
  },
  summariesContainer: {},
  personName: {
    minWidth: 90,
    fontSize: 20,
    color: "white",
  },
  stateStyle: {
    paddingVertical: 5,
  },
  coinsIcon: {
    width: 20,
    height: 20,
  },
});
