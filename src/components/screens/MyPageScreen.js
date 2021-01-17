import React, { Component, useEffect, useState } from "react";
import ScreenTemplate from "../templates/ScreenTemplate";
import { Divider } from "@ui-kitten/components";
import { MyInfo, PlaceSetting } from "../organisms";
import Utils from "../Utils";
import * as Meet from "../../services/Meet";
import * as File from "../../services/File";

export default function MyPage0Screen(props) {
  const [loading, setLoading] = useState(false);
  const [meet, setMeet] = useState({});
  const [images, setImages] = useState([]);
  const token = null;

  return (
    <ScreenTemplate>
      <MyInfo />     
      <Divider style={{marginLeft: 10, marginRight: 10, borderWidth: 0.2, borderColor: '#cfcfcf'}} /> 
      <PlaceSetting />
    </ScreenTemplate>
  )
}