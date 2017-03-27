/**
 * Created by zhaoyu on 17-3-7.
 */

import React from 'react';

import OrderList from '../components/order/OrderList';

import Data from '../data';

export default class OrderListPanel extends React.Component {
    render() {
        return (
            <div className="row">
                <OrderList orderList={Data.orderList}/>
            </div>
        );
    }
}