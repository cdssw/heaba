import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { TabView, Tab, Layout, Text } from "@ui-kitten/components";
import { Card } from "../molecules";

const renderCard = (item, index, onPress) => {
  return (
    <Card
      key={index}
      item={item}
      image={item.imgList.length > 0 && true}
      onPress={onPress}
    />
  )
}

const MyRecruitment = (props) => {
  return (
    <View>
      {props.items.map((m, index) => renderCard(m, index))}
    </View>
  )
}

const MyApplication = (props) => {
  return (
    <View>
      {props.items.map((m, index) => renderCard(m, index))}
    </View>
  )
}

export default function MyTab(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <TabView
      tabBarStyle={styles.tabBarStyle}
      indicatorStyle={styles.indicator}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <Tab title='내가 모집중' style={styles.tab}>
        <MyRecruitment items={props.myOpened} />
      </Tab>
      <Tab title='내가 지원/문의중' style={styles.tab}>
        <MyApplication items={props.myApplication} />
      </Tab>
    </TabView>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    width: '100%',
  },
  tab: {
    height: 40,
    width: '100%',
  },
  indicator: {
    height: 2,
    marginLeft: 10,
    marginRight: 10,
    width: '47%'
  }
});
