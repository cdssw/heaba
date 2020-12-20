import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function ScreenTemplate(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'center', marginTop: 5, marginLeft: 20, marginRight: 20}}>
        {props.children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',    
    flex: 1,
  },
});