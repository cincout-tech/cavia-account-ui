/**
 * Created by zhaoyu on 17-1-20.
 */

import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {grey500, white, green200} from 'material-ui/styles/colors';

import {Paper} from 'material-ui';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import {Link} from 'react-router';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
    }

    componentWillMount() {
        console.log("LoginForm componentWillMount...");
    }

    componentWillReceiveProps(newProps) {
        const { session } = newProps;
        console.log("componentWillReceiveProps");
        if (session.isLogin) {
            this.context.router.push("/");
        } else {
            console.log("not login");
        }
    }

    handleUserNameChange(event) {
        this.setState({
            userName: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleRegisterClick() {
        this.context.router.push("register");
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("login action");
        const {actions, session} = this.props;
        console.log(session);
        var accountVo = {
            userName: this.state.userName,
            password: this.state.password
        };
        actions.login(accountVo);
        console.log("submit...");
    }

    render() {
        const styles = {
            loginContainer: {
                minWidth: 320,
                maxWidth: 400,
                height: 'auto',
                position: 'absolute',
                top: '12%',
                left: 0,
                right: 0,
                margin: 'auto'
            },
            paper: {
                padding: 20,
                overflow: 'auto'
            },
            avatar: {
                margin: 'auto',
                height: 'auto',
                marginBottom: 10
            },
            image: {
                width: 'auto',
                height: 100
            },
            buttonsDiv: {
                textAlign: 'center',
                padding: 10
            },
            flatButton: {
                color: grey500
            },
            checkRemember: {
                style: {
                    float: 'left',
                    maxWidth: 180,
                    paddingTop: 5
                },
                labelStyle: {
                    color: grey500
                },
                iconStyle: {
                    color: grey500,
                    borderColor: grey500,
                    fill: grey500
                }
            },
            loginBtn: {
                float: 'right'
            },
            btn: {
                background: '#4f81e9',
                color: white,
                padding: 7,
                borderRadius: 2,
                margin: 2,
                fontSize: 13
            },
            btnFacebook: {
                background: '#4f81e9'
            },
            btnGoogle: {
                background: '#e14441'
            },
            btnSpan: {
                marginLeft: 5
            },
        };

        const {actions, session} = this.props;

        return (

            <div style={styles.loginContainer}>
                <div style={styles.avatar}>
                    <img src="style/images/logo_with_cincout_small.png" style={styles.image}/>
                </div>

                <Paper style={styles.paper} zDepth={1}>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <TextField
                            hintText="E-mail"
                            floatingLabelText="E-mail"
                            fullWidth={true}
                            value={this.state.userName}
                            onChange={this.handleUserNameChange.bind(this)}
                        />
                        <TextField
                            hintText="Password"
                            floatingLabelText="Password"
                            fullWidth={true}
                            type="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange.bind(this)}
                        />

                        <div>
                            <Checkbox
                                label="Remember me"
                                style={styles.checkRemember.style}
                                labelStyle={styles.checkRemember.labelStyle}
                                iconStyle={styles.checkRemember.iconStyle}
                            />

                            <RaisedButton type="submit" label="Login"
                                          backgroundColor={green200}
                                          labelColor={white}
                                          style={styles.loginBtn}/>

                        </div>
                    </form>
                </Paper>

                <div style={styles.buttonsDiv}>
                    <FlatButton
                        label="Register"
                        onTouchTap={this.handleRegisterClick.bind(this)}
                        style={styles.flatButton}
                        icon={<PersonAdd />}
                    />

                    <FlatButton
                        label="Forgot Password?"
                        href="/"
                        style={styles.flatButton}
                        icon={<Help />}
                    />
                </div>
            </div>
        );
    }
}

LoginForm.contextTypes = {
    router: React.PropTypes.object
};

export default LoginForm;