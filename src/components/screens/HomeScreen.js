import React, { Component, useCallback, useEffect, useState } from "react";
import { Text, Input } from "@ui-kitten/components";
import ScreenTemplate from "../templates/ScreenTemplate";
import { CardList } from "../organisms";
import Utils from "../Utils";
import * as Meet from "../../services/Meet";
import * as File from "../../services/File";

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function HomeScreen(props) {
  const [refreshing, setRefresing] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [param, setParam] = useState({});

  const size = 10;

  useEffect(e => {
    fetchMoreData(0);
  }, []);

  const fetchMoreData = async init => {
    try {
      const p = init === 0 ? init : page;
      const response = await Meet.getMeetSearch({body: param, page: p, size: size, sort: 'id,desc'});
      const data = await getImagePath(response.data.content);
      setRefresing(false);
      setPage(p + 1); // infinite scroll시 다음페이지 조회
      setItems(init === 0 ? data : items.concat(data));
    } catch(error) {
      Utils.alertError(error);
    }
  }

  const getImagePath = async arr => {
    for (const m of arr) {
      const data = await File.postImagesPath({fileList: m.imgList});
      m.imgList = data.data;
    }
    return arr;
  }

  const handleRefresh = () => {
    setRefresing(true);
    fetchMoreData(0);
  }

  const handlePress = id => {
    props.navigation.navigate("Content", {
      id: id
    });
  }

  return (
    <ScreenTemplate>
      <CardList
        items={items}
        refreshing={refreshing}
        fetchMoreData={fetchMoreData}
        onPress={handlePress}
        onRefresh={handleRefresh}
      />
    </ScreenTemplate>
  )
}