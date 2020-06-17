import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import store from './app/store';

import App from './app/components/App/App';

ReactDOM.render(
    (<Provider store={store}>
        <App />
    </Provider>),
    document.getElementById('root'),
);
