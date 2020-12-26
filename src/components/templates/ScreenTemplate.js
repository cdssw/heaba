import React from "react";
import { StyleSheet, SafeAreaView, View, Keyboard } from "react-native";

export default function ScreenTemplate(props) {
  const handlePressEmpty = () => {
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={styles.container}>
      {props.children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',    
    flex: 1,
  },
});