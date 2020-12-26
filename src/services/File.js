import axios from "axios";
import { REACT_APP_SERVICE_FILE } from "@env";

const url = `${REACT_APP_SERVICE_FILE}`;

export async function postImagesPath(imageList) {
  return axios.post(
    url + "/images/path",
    imageList
  );
}