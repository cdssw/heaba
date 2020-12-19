import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Icon, Text } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Card(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image
        style={{width: 100, height: 100, borderRadius: 5, marginRight: 10}}
        source={require('../../../assets/200937431.jpg')}
      />
      <View style={{flexGrow: 1}}>
        <Text style={styles.text} category='h6'>아이 등원 요청</Text>
        <Text style={styles.text} appearance='hint'>서초구</Text>
        <View style={{marginTop: 5}}></View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon fill='#3E3E3E' style={styles.icon} name='clock-outline' />
          <Text style={styles.text} appearance='hint'>09:00~16:00</Text>
          <Text style={{color: '#02846E'}} appearance='hint'>주말</Text>
        </View>
        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.cost}>
            <Text style={{color: '#02846E'}}>￦50,000</Text>
          </View>
          <View style={{flexGrow: 1}}></View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
            <Icon fill='#3E3E3E' style={styles.icon} name='message-circle-outline' />
            <Text style={styles.text}>3</Text>
            <Icon fill='#3E3E3E' style={styles.icon} name='person-outline' />
            <Text style={styles.text}>3</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 5,
    height: 120,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    margin: 2
  },
  icon: {
    width: 20,
    height: 20,
  },
  cost: {
    borderWidth: 1,
    borderColor: '#02846E',
    borderRadius: 15,
    paddingTop: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 1,
  }
});