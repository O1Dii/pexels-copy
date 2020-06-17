import * as requests from '../requests';
import {API_URL, API_KEY} from '../constants';

import { appendPhotos, setPhotos } from './index';

export const getPhotos = (page) => async (dispatch) => {
  try {
    const response = await requests.GET(API_URL + 'curated/', page ? {page} : undefined, API_KEY);
    const json = await response.json();

    if (!response.ok) {
      throw json;
    }

    console.log(json);

    if (page) {
      dispatch(appendPhotos(json.photos));
    } else {
      dispatch(setPhotos(json.photos));
    }
  } catch (errorMessage) {
    console.error(errorMessage);
  }
};

// Это для примера
export const searchPhotos = (topic) => async (dispatch) => {
  try {
    const response = await requests.GET(API_URL + 'search/', topic ? {query: topic} : undefined, API_KEY);
    const json = await response.json();

    if (!response.ok) {
      throw json;
    }

    console.log(json);

    dispatch(setPhotos(json));
  } catch (errorMessage) {
    console.error(errorMessage);
  }
};
