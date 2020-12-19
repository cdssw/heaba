import { Text } from "@ui-kitten/components";
import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import ScreenTemplate from "../templates/ScreenTemplate";
import Card from "../molecules/Card";

export default function HomeScreen() {
  const arr = Array.from({length: 10}, (m, i) => i);
  return (
    <ScrollView>
      <ScreenTemplate>
          {arr.map(m => <Card />)}
      </ScreenTemplate>
    </ScrollView>
  )
}