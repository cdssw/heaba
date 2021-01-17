import React from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
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
    <FlatList
      data={props.items}
      renderItem={renderCard}
      keyExtractor={(item, index) => item.id.toString()}
      onEndReached={props.fetchMoreData}
      onEndReachedThreshold={0.6}
      ListFooterComponent={props.loading && <ActivityIndicator />}
      refreshing={props.refreshing}
      onRefresh={props.onRefresh}
    />
  );
}