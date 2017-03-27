/**
 * Created by zhaoyu on 17-1-19.
 */

import React from 'react'
import {Route, IndexRoute} from 'react-router';

import AuthContainer from './containers/AuthContainer';
import LoginContainer from './containers/LoginContainer';
import App from './components/App';
import Application from './containers/Application';

import RegisterForm from './components/login/RegisterForm';

import PricePanel from './containers/PricePanel';
import ApplicationListPanel from './containers/ApplicationListPanel';
import OrderListPanel from './containers/OrderListPanel';
import Dashboard from './containers/Dashboard';
import OrderDetail from './components/order/OrderDetail';
import ApplicationDetail from './components/app/ApplicationDetail';
import PersonInfo from './components/person/PersonInfo';
import Configuration from './components/config/Configuration';

function auth() {
    console.log("hello");
}

export default (
    <Route path="/" onEnter={auth} component={App}>
        <Route path={"login"} component={LoginContainer}/>
        <Route path="register" component={RegisterForm}/>

        <Route component={AuthContainer}>
            <IndexRoute component={Dashboard}/>
            <Route path="dashboard" component={Dashboard}/>
            <Route path="price" component={PricePanel}/>
            <Route path="apps" component={ApplicationListPanel}/>
            <Route path="application/detail/:agentId" component={ApplicationDetail}/>
            <Route path="order" component={OrderListPanel}/>
            <Route path="order/detail/:orderNumber" component={OrderDetail}/>
            <Route path="info" component={PersonInfo}/>
            <Route path={"settings"} component={Configuration}/>
        </Route>
    </Route>

);