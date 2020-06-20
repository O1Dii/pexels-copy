import {combineReducers} from 'redux-immutable';
import mainReducer from '../proj/reducers';

export default combineReducers({
    main: mainReducer,
});
