import React from "react";
import { StyleSheet, SafeAreaView, View, TouchableWithoutFeedback, Keyboard } from "react-native";

export default function LoginTemplate(props) {
  const handlePressEmpty = () => {
    Keyboard.dismiss();
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePressEmpty}>
        <View style={{flex: 1, justifyContent: 'center', marginLeft: 30, marginRight: 30}}>
          {props.children}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',    
    flex: 1,
  },
});