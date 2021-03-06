/**
 * Created by zhaoyu on 17-3-17.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from '../components/login/LoginForm';
import { login } from '../actions/accounts';

function mapStateToProps(state) {
    console.log(state);
    return {
        session: state.session
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({login}, dispatch)};
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default LoginContainer;
