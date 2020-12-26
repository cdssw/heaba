import React, { Component, useEffect, useState } from "react";
import ScreenTemplate from "../templates/ScreenTemplate";
import Content from "../organisms/Content";
import Utils from "../Utils";
import * as Meet from "../../services/Meet";
import * as File from "../../services/File";
import { REACT_APP_IMAGE } from "@env";

const imageUrl = `${REACT_APP_IMAGE}`;

export default function ContentScreen(props) {
  const [loading, setLoading] = useState(false);
  const [meet, setMeet] = useState({});
  const [images, setImages] = useState([]);
  const token = null;

  useEffect(() => {
    getMeet(token);
  }, []);

  const getMeet = async (token, userInfo) => {
    setLoading(true);
    try {
      // meet 정보
      const meet = await Meet.getMeet({id: props.route.params.id, token: token});

      // 첨부이미지 정보
      if(meet.data.imgList && meet.data.imgList.length > 0) {
        const imageList = await File.postImagesPath({fileList: meet.data.imgList});
        if(imageList.data !== undefined) {
          const images = Array.from(imageList.data).map(img => {
            return {original: imageUrl + img.path + '/' + img.chgFileNm};
          });
          setImages(images);
        }
      }
      console.log(meet);
      setMeet(meet);
    } catch(error) {
      Utils.alertError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScreenTemplate>
      <Content
        meet={meet.data}
      />
    </ScreenTemplate>
  )
}