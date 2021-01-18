import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Icon, Text } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";
import Utils from "../Utils";
import { REACT_APP_IMAGE } from "@env";

const url = `${REACT_APP_IMAGE}`;

export default function Card(props) {
  const item = props.item;

  return (
    <TouchableOpacity delayPressIn={1000} activeOpacity={1} style={styles.container} onPress={() => props.onPress(item.id)}>
      {props.image &&
        <Image
          style={{width: 100, height: 100, borderRadius: 5, marginRight: 10}}
          source={{uri: url + item.imgList[0].path + '/' + item.imgList[0].chgFileNm}}
        />
      }
      <View style={{flexGrow: 1}}>
        <Text style={styles.text} category='h6'>{item.title}</Text>
        <Text style={styles.text} appearance='hint'>{item.address.sgg}</Text>
        <View style={{marginTop: 5}}></View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon fill='#3E3E3E' style={styles.icon} name='clock-outline' />
          {item.term.tmOption
          ? <>
              <Text style={styles.text} appearance='hint'>시간협의 </Text>
              <Text style={{color: '#02846E'}} appearance='hint'>{Utils.detailDay(item.term)}</Text>
            </>
          : <>
              <Text style={styles.text} appearance='hint'>{item.term.startTm}~{item.term.endTm}</Text>
              <Text style={{color: '#02846E'}} appearance='hint'>{Utils.detailDay(item.term)}</Text>
            </>
          }
        </View>
        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.cost}>
            <Text style={{color: '#02846E'}}>{item.cost === 0 ? 'Free' : `￦ ` + Utils.numberWithCommas(item.cost)}</Text>
          </View>
          <View style={{flexGrow: 1}}></View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
            <Icon fill='#3E3E3E' style={styles.icon} name='message-circle-outline' />
            <Text style={styles.text}>{item.chatCnt}</Text>
            <Icon fill='#3E3E3E' style={styles.icon} name='person-outline' />
            <Text style={styles.text}>{item.recruitment - item.application}</Text>
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
    marginTop: 5,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
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
