import React, { Component, useEffect, useState } from "react";
import ScreenTemplate from "../templates/ScreenTemplate";
import { Divider } from "@ui-kitten/components";
import { MyInfo, PlaceSetting, MyTab } from "../organisms";
import Utils from "../Utils";
import * as Meet from "../../services/Meet";
import * as File from "../../services/File";
import { ScrollView } from "react-native-gesture-handler";

export default function MyPage0Screen(props) {
  const [refreshing, setRefresing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [myOpened, setMyOpend] = useState([]);
  const [myApplication, setMyApplication] = useState([]);
  const [images, setImages] = useState([]);
  const [param, setParam] = useState({});
  const [page, setPage] = useState(0);
  const token = null;
  const size = 10;

  useEffect(e => {
    fetchMoreData(0);
  }, []);

  const fetchMoreData = async init => {
    setLoading(true);
    try {
      const p = init === 0 ? init : page;
      const response = await Meet.getMeetSearch({body: param, page: p, size: size, sort: 'id,desc'});
      const data = await getImagePath(response.data.content);
      setRefresing(false);
      setPage(p + 1); // infinite scroll시 다음페이지 조회
      setMyOpend(init === 0 ? data : items.concat(data));
      setMyApplication(init === 0 ? data : items.concat(data));
    } catch(error) {
      Utils.alertError(error);
    } finally {
      setLoading(false);
    }
  }

  const getImagePath = async arr => {
    for (const m of arr) {
      const data = await File.postImagesPath({fileList: m.imgList});
      m.imgList = data.data;
    }
    return arr;
  }

  return (
    <ScreenTemplate>
      <ScrollView style={{flex: 1}}>
        <MyInfo />
        <Divider style={{marginLeft: 10, marginRight: 10, borderWidth: 0.2, borderColor: '#cfcfcf'}} /> 
        <PlaceSetting />
        <Divider style={{marginLeft: 10, marginRight: 10, borderWidth: 0.2, borderColor: '#cfcfcf'}} /> 
        <MyTab
          myOpened={myOpened}
          myApplication={myApplication}
        />
      </ScrollView>
    </ScreenTemplate>
  )
}