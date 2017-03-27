/**
 * Created by zhaoyu on 17-3-2.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green300, blue300, orange300, red400} from 'material-ui/styles/colors';

import PriceCard from '../components/price/PriceCard';
import Data from '../data';

export default class PricePanel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {props} = this.props;
        return (
            <div className="container-fluid">
                <div className="row">
                    <PriceCard title="月报价" subHeaderColor={green300} priceDetail={Data.serviceContent.month}/>
                    <PriceCard title="季度报价" subHeaderColor={blue300} priceDetail={Data.serviceContent.quarter}/>
                    <PriceCard title="半年报价" subHeaderColor={orange300} priceDetail={Data.serviceContent.halfYear}/>
                    <PriceCard title="年报价" subHeaderColor={red400} priceDetail={Data.serviceContent.year}/>
                </div>
            </div>
        );
    }
}