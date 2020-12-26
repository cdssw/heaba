import axios from "axios";
import { REACT_APP_SERVICE_MEET } from "@env";

const url = `${REACT_APP_SERVICE_MEET}`;

export async function getMeetSearch(props) {
  return axios({
    url: url + "/search",
    method: 'POST',
    params: {
      page: props.page,
      size: props.size,
      sort: props.sort,
    },
    data: props.body
  });
}

export async function getMeet(props) {
  if(props.token === null)
    return axios.get(url + "/" + props.id);
  else
    return axios.get(url + "/" + props.id, {headers: { Authorization: "Bearer " + props.token }});
}
