import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import { setTopics, setTopic, setPhotos, setTopSectionImage, appendPhotos } from '../actions';

const main = handleActions(
  {
    [setTopics]: (state, { payload }) => state.set('topics', payload),
    [setTopic]: (state, {payload}) => state.set('search', payload),
    [setPhotos]: (state, { payload }) => state.set('photos', payload),
    [setTopSectionImage]: (state, { payload }) => state.set('topSectionImage', payload),
    [appendPhotos]: (state, { payload }) => state.update('photos', list => Array.concat(list, payload)),
  },
  Immutable.Map({
    topSectionImage: 'https://images.pexels.com/photos/4611687/pexels-photo-4611687.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=350.0&sharp=20&w=1400',
    photos: [],
    topics: [
      {
        name: 'Red',
        image: 'https://images.pexels.com/photos/1493226/pexels-photo-1493226.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=1&fit=crop&h=50&w=50'
      },
      {
        name: 'Reading',
        image: 'https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=1&fit=crop&h=50&w=50'
      }],
    search: '',
  }),
);

export default main;
