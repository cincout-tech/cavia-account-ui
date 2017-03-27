/**
 * Created by zhaoyu on 17-1-26.
 */

import React from 'react';
import RegisterForm from '../components/login/RegisterForm';

export default class LoginContainer extends React.Component {
    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h2>注册</h2>
                        <hr/>
                        <RegisterForm/>
                    </div>
                </div>
            </div>
        );
    }
}