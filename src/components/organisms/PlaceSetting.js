import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Icon, Text, Avatar, Divider, Button } from "@ui-kitten/components";
import Utils from "../Utils";

const PlusIcon = (props) => (
  <Icon {...props} name='plus-circle-outline'/>
);

export default function PlaceSetting(props) {
  const meet = props.meet;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>관심지역</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5}}>
        <Button appearance='outline' style={{width: 100}} accessoryLeft={PlusIcon}></Button>
        <Button appearance='outline' style={{width: 100}} accessoryLeft={PlusIcon}></Button>
        <Button appearance='outline' style={{width: 100}} accessoryLeft={PlusIcon}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  title: {
    color: '#707070',
    marginTop: 0,
    marginBottom: 7,
    marginLeft: 5,
    marginRight: 5,
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