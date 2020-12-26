import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Icon, Text, Avatar, Divider } from "@ui-kitten/components";
import Utils from "../Utils";

export default function Content(props) {
  const meet = props.meet;

  return (
      <View style={styles.container}>
        {meet &&
          <>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <View style={styles.avatar}>
              <Avatar size='large' source={require('../../../assets/200937431.jpg')}/>
            </View> */}
            <View style={styles.avatarIcon}>
              <Icon fill='white' style={{width: 30, height: 30}} name='person' />
            </View>
            <View style={{marginRight: 6}} />
            <Text>{meet.user.userNickNm}</Text>
            <View style={{flexGrow: 1}} />
            <View style={styles.cost}>
              <Text style={{color: '#02846E'}}>￦ {Utils.numberWithCommas(meet.cost)}</Text>
            </View>
          </View>
          <Divider style={{marginTop: 20, marginBottom: 20}} />
          <Text style={styles.text} category='h6'>{meet.title}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.text} appearance='hint'>{Utils.parseDate(meet.modifyDt, '월 ')}일 {meet.modifyDt.split(' ')[1].substring(0, 5)}</Text>
            <View style={{flexGrow: 1}}></View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
              <Icon fill='#3E3E3E' style={styles.icon} name='message-circle-outline' />
              <Text style={styles.text}>{meet.chatCnt}</Text>
              <Icon fill='#3E3E3E' style={styles.icon} name='person-outline' />
              <Text style={styles.text}>{meet.recruitment - meet.application}</Text>
            </View>
          </View>
          <View style={{marginTop: 10, marginBottom: 10}} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon fill='#3E3E3E' style={styles.icon} name='clock-outline' />
            {meet.term.dtOption && <Text style={styles.text} appearance='hint'>{Utils.parseDate(meet.term.startDt)} - {Utils.parseDate(meet.term.endDt)} </Text>}
            {meet.term.tmOption 
              ? <Text style={styles.text} appearance='hint'>시간협의 </Text>
              : <Text style={styles.text} appearance='hint'>{meet.term.startTm}~{meet.term.endTm}</Text>
            }
            <Text style={{color: '#02846E'}} appearance='hint'>{Utils.detailDay(meet.term)}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon fill='#3E3E3E' style={styles.icon} name='map' />
            <Text style={styles.text}>{(meet.address.sido, meet.address.sgg)}</Text>
          </View>
          <Divider style={{marginTop: 20, marginBottom: 20}} />
          <Text style={styles.text}>{meet.content}</Text>
        </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  avatar: {
    borderWidth: 2,
    borderColor: '#cfcfcf',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarIcon: {
    borderWidth: 2,
    borderColor: '#cfcfcf',
    backgroundColor: '#02846E',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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