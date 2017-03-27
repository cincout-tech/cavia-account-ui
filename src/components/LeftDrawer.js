/**
 * Created by zhaoyu on 17-3-2.
 */

import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, green200, green300} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';

const LeftDrawer = (props) => {
    let { navDrawerOpen } = props;

    const styles = {
        menuItem: {
            color: white,
            fontSize: 14
        },
        logo: {
            cursor: 'pointer',
            fontSize: 20,
            color: typography.textFullWhite,
            lineHeight: `${spacing.desktopKeylineIncrement}px`,
            fontWeight: typography.fontWeightLight,
            backgroundColor: green300,
            paddingLeft: 15
        },
        avatar: {
            div: {
                padding: '15px 20px 20px 15px',
                //backgroundImage:  'url(style/images/cavia_logo2.png)',
                height: 45
            },
            icon: {
                float: 'left',
                display: 'block',
                marginRight: 15,
                marginBottom: 20,
                boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
            },
            span: {
                paddingTop: 12,
                display: 'block',
                color: 'white',
                fontWeight: 300,
                textShadow: '1px 1px #444'
            }
        }
    };

    var menuListArr = [];
    props.menus.map(function(menu, index) {
        if (menu.submenu == null) {
            menuListArr.push(<ListItem
                key={menu.text + index}
                primaryText={menu.text}
                leftIcon={menu.icon}
                containerElement={<Link to={menu.link}/>}
            />);
        } else {
            var nestedItems = [];
            menu.submenu.map((menu, index) => {
                nestedItems.push(
                    <ListItem
                        key={menu.text + index}
                        primaryText={menu.text}
                        leftIcon={menu.icon}
                        containerElement={<Link to={menu.link}/>}
                    />
                );
            });

            menuListArr.push(<ListItem
                key={menu.text + index}
                initiallyOpen={true}
                primaryTogglesNestedList={true}
                primaryText={menu.text}
                leftIcon={menu.icon}
                nestedItems={nestedItems}
            />)
        }
    })

    return (
        <Drawer width={230} docked={true} open={navDrawerOpen}>
            <div style={styles.logo}>
                <Avatar src="style/images/cavia_logo2.png" size={30} />&nbsp;&nbsp;{props.username}
            </div>
            <div>
                <List>
                    {
                        menuListArr
                    }
                </List>

            </div>
        </Drawer>
    );
};

LeftDrawer.propTypes = {
    navDrawerOpen: PropTypes.bool,
    menus: PropTypes.array,
    username: PropTypes.string,
};

export default LeftDrawer;
