import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, Text } from 'react-native';
import { Card } from "../molecules";

export default function CardList(props) {

  const renderCard = ({item, index}) => {
    return (
      <Card
        key={index}
        item={item}
        image={item.imgList.length > 0 && true}
        onPress={props.onPress}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.items}
        renderItem={renderCard}
        keyExtractor={(item, index) => item.id.toString()}
        onEndReached={props.fetchMoreData}
        onEndReachedThreshold={0.6}
        refreshing={props.refreshing}
        onRefresh={props.onRefresh}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  }
});