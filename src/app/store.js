import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Immutable from 'immutable';

import reducer from './reducer';

export default createStore(reducer, Immutable.Map(), composeWithDevTools(applyMiddleware(thunk)));
