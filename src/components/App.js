/**
 * Created by zhaoyu on 17-3-20.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import Data from '../data';
import DevTools from '../containers/DevTools';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        // Injected by connect() call:
        return (
            <MuiThemeProvider>
                <div>
                    <DevTools />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default App;