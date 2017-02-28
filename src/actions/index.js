import axios from 'axios';

export const GET_CHAMP_DATA = 'GET_CHAMP_DATA';
export const APPLY_TAG_FILTER = 'APPLY_TAG_FILTER';
export const CLEAR_CHAMP_LIST = 'CLEAR_CHAMP_LIST';

const ROOT_URL = 'https://na.api.pvp.net/api/lol/static-data/na/v1.2/';
const API_KEY = 'api_key=86d43a6a-6b70-4b76-bc49-15bd3ebf5cbd';

export function getChampsData() {
  const request = axios.get(`${ROOT_URL}champion?champData=all&${API_KEY}`);

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: GET_CHAMP_DATA, payload: data });
    });
  };
}

export function setFilterTypes(tag) {
  return (dispatch) => {
    dispatch({ type: APPLY_TAG_FILTER, payload: tag });
  };
}
