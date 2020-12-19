import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Icon, Text, Avatar, Divider } from "@ui-kitten/components";
import ScreenTemplate from "../templates/ScreenTemplate";

export default function ContentScreen() {
  return (
    <ScreenTemplate>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* <View style={styles.avatar}>
          <Avatar size='large' source={require('../../../assets/200937431.jpg')}/>
        </View> */}
        <View style={styles.avatarIcon}>
          <Icon fill='white' style={{width: 30, height: 30}} name='person' />
        </View>
        <View style={{marginRight: 6}} />
        <Text>Blue</Text>
        <View style={{flexGrow: 1}} />
        <View style={styles.cost}>
          <Text style={{color: '#02846E'}}>￦50,000</Text>
        </View>
      </View>
      <Divider style={{marginTop: 20, marginBottom: 20}} />
      <Text style={styles.text} category='h6'>아이 등원 요청</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text} appearance='hint'>12월 19일 16:20</Text>
        <View style={{flexGrow: 1}}></View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
          <Icon fill='#3E3E3E' style={styles.icon} name='message-circle-outline' />
          <Text style={styles.text}>3</Text>
          <Icon fill='#3E3E3E' style={styles.icon} name='person-outline' />
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={{marginTop: 10, marginBottom: 10}} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon fill='#3E3E3E' style={styles.icon} name='clock-outline' />
        <Text style={styles.text} appearance='hint'>09:00~16:00</Text>
        <Text style={{color: '#02846E'}} appearance='hint'>월/수/금</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon fill='#3E3E3E' style={styles.icon} name='map' />
        <Text style={styles.text}>경기도 용인시 처인구</Text>
      </View>
      <Divider style={{marginTop: 20, marginBottom: 20}} />
      <Text style={styles.text}>{`안녕하세요. 아이등원 요청 드립니다.
집에서 멀지 않은 곳에 어린이집에 등원해 주실분 구합니다.
      `}</Text>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
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