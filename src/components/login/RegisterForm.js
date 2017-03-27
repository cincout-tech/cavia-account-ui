/**
 * Created by zhaoyu on 17-1-20.
 */

import React from 'react';
import {grey500, white} from 'material-ui/styles/colors';
import ThemeDefault from '../../theme-default';
import {Paper} from 'material-ui';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class RegisterForm extends React.Component {
    render() {
        const styles = {
            loginContainer: {
                minWidth: 320,
                maxWidth: 400,
                height: 'auto',
                position: 'absolute',
                top: '20%',
                left: 0,
                right: 0,
                margin: 'auto'
            },
            avatar: {
                margin: 'auto',
                height: 'auto',
                marginBottom: 10
            },
            image: {
                width:'auto',
                height:100
            },
            paper: {
                padding: 20,
                overflow: 'auto'
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
        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div style={styles.loginContainer}>
                    <div style={styles.avatar}>
                        <img src="style/images/logo_with_cincout_small.png" style={styles.image} />
                    </div>
                    <Paper style={styles.paper} zDepth={1}>
                        <form>
                            <TextField
                                hintText="E-mail"
                                floatingLabelText="E-mail"
                                fullWidth={true}
                            />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                fullWidth={true}
                                type="password"
                            />

                            <div>
                                <Checkbox
                                    label="Remember me"
                                    style={styles.checkRemember.style}
                                    labelStyle={styles.checkRemember.labelStyle}
                                    iconStyle={styles.checkRemember.iconStyle}
                                />

                                <Link to="/">
                                    <RaisedButton label="Register"
                                                  primary={true}
                                                  style={styles.loginBtn}/>
                                </Link>
                            </div>
                        </form>
                    </Paper>

                    <div style={styles.buttonsDiv}>
                        <FlatButton
                            label="Login"
                            href="/#/login"
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
            </MuiThemeProvider>
        );
    }
}

export default RegisterForm;