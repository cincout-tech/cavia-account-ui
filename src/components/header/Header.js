/**
 * Created by zhaoyu on 17-1-20.
 */

import React from 'react';
import {
    AppBar,
    Dialog,
    IconMenu,
    MenuItem,
    Avatar,
    IconButton,
    FlatButton,
    Badge,
    Menu,
    TextField,
    FontIcon,
    SvgIcon
} from 'material-ui';
import {spacing, typography} from 'material-ui/styles';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ActionHome from 'material-ui/svg-icons/action/home';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new'
import ViewModule from 'material-ui/svg-icons/action/view-module';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {white, blue500, blue600, green200, green300, red500} from 'material-ui/styles/colors';
import SearchBox from './SearchBox';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleClose() {
        this.setState({open: false});
    };

    handleOpen() {
        this.setState({open: true});
    }

    handleLogout() {
        const {actions} = this.props;
        actions.logout();
    }

    render() {
        const {styles, handleChangeRequestNavDrawer} = this.props;
        console.log(styles);

        const style = {
            appBar: {
                position: 'fixed',
                top: 0,
                overflow: 'hidden',
                backgroundColor: green300
            },
            logo: {
                cursor: 'pointer',
                fontSize: 22,
                color: typography.textFullWhite,
                lineHeight: `${spacing.desktopKeylineIncrement}px`,
                fontWeight: typography.fontWeightLight,
                backgroundColor: green300,
                paddingLeft: 40
            },
            menuButton: {
                marginLeft: 10
            },
            iconsRightContainer: {
                marginLeft: 20
            }
        };

        const iconStyles = {
            marginRight: 24,
        };

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
        ];

        return (

            <div>
                <AppBar
                    zDepth={1}
                    style={{...styles, ...style.appBar}}
                    title={
                        <div style={styles.logo}>
                            <Avatar src="style/images/cavia_logo2.png" size={40}/>&nbsp;&nbsp;CinCout.Tech
                        </div>
                    }
                    onLeftIconButtonTouchTap={handleChangeRequestNavDrawer}
                    iconStyleLeft={style.menuButton}
                    iconElementRight={
                        <div style={style.iconsRightContainer}>
                            {/*<IconMenu color={white}
                             iconButtonElement={
                             <IconButton><ViewModule color={white}/></IconButton>
                             }
                             targetOrigin={{horizontal: 'right', vertical: 'top'}}
                             anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                             >
                             <MenuItem key={1} primaryText="Application 1"/>
                             <MenuItem key={2} primaryText="Application 2"/>
                             <MenuItem key={3} primaryText="Application 3"/>
                             </IconMenu>*/}

                            <Badge
                                onTouchTap={this.handleOpen.bind(this)}
                                badgeContent={10}
                                primary={true}
                                style={{paddingTop: 8,cursor: 'pointer'}}
                                badgeStyle={{top: 0, right: 2}}
                            >
                                <NotificationsIcon color={white} hoverColor={red500}/>
                            </Badge>
                            <IconMenu color={white}
                                      iconButtonElement={
                                          <IconButton><MoreVertIcon color={white}/></IconButton>
                                      }

                                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                                <MenuItem primaryText="Sign Out" onTouchTap={this.handleLogout}/>
                                <MenuItem primaryText="中文"/>
                                <MenuItem primaryText="English"/>
                            </IconMenu>
                        </div>
                    }
                />
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    The actions in this window were passed in as an array of React objects.
                </Dialog>
            </div>
        );
    }
}

export default Header;