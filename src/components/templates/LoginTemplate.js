import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function LoginTemplate(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', marginLeft: 30, marginRight: 30}}>
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