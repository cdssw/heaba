import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function ScreenTemplate() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    backgroundColor: 'blue'
  }
});