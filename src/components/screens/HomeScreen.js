import { Text } from "@ui-kitten/components";
import React, { Component, useCallback, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import ScreenTemplate from "../templates/ScreenTemplate";
import Card from "../molecules/Card";

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function HomeScreen(props) {
  const [refreshing, setRefresing] = useState(false);

  const handleRefresh = useCallback(() => {
    setRefresing(true);

    wait(1000).then(() => setRefresing(false));
  }, []);

  const handlePress = e => {
    props.navigation.navigate("Content");
  }

  const arr = Array.from({length: 10}, (m, i) => i);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      <ScreenTemplate>
          {arr.map((m, i) => <Card key={i} onPress={handlePress} />)}
      </ScreenTemplate>
    </ScrollView>
  )
}