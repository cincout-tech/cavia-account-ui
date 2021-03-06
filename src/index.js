/**
 * Created by zhaoyu on 17-1-18.
 */

import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { Router, hashHistory, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';

import 'flexboxgrid/css/flexboxgrid.css';

injectTapEventPlugin();

const store = configureStore();
//const history = syncHistoryWithStore(hashHistory, store);

let rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    rootElement
);