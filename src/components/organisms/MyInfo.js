import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Icon, Text, Avatar, Divider } from "@ui-kitten/components";
import Utils from "../Utils";

export default function MyInfo(props) {
  const meet = props.meet;

  return (
    <View style={styles.container}>
      <View style={styles.avatarWrap}>
        <View style={styles.avatarIcon}>
          <Icon fill='white' style={{width: 50, height: 50}} name='person' />
        </View>
        <View style={{marginRight: 10}} />
        <View style={styles.info}>
          <Text style={styles.nickNm}>Blue</Text>
          <Text style={styles.text}>Andrew</Text>
          <Text style={styles.text}>010-8888-1111</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 15,
  },
  avatarWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  avatarIcon: {
    borderWidth: 2,
    borderColor: '#cfcfcf',
    backgroundColor: '#02846E',
    borderRadius: 90,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  nickNm: {
    fontWeight: 'bold',

  },
  text: {
    margin: 2,
    color: '#707070',    
  },
});