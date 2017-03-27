/**
 * Created by zhaoyu on 17-3-2.
 */

import React from 'react';
import { List, ListItem, Divider, Checkbox, Subheader, Chip } from 'material-ui';
import {cyan600, white, red600} from 'material-ui/styles/colors';
import {spacing, typography} from 'material-ui/styles';
import {RaisedButton, FlatButton} from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Badge from 'material-ui/Badge';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import PageBase from '../PageBase';

export default class PriceCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, subHeaderColor, priceDetail } = this.props;
        const styles = {
            subheader: {
                fontSize: 20,
                fontWeight: typography.fontWeightLight,
                backgroundColor: subHeaderColor,
                color: white
            },
            bottomButton: {
                margin: '5 0, 10, 0',
                height: 'auto',
                paddingBottom: 10,
                fontWeight: typography.fontWeightNormal,
                textAlign: 'center',
                color: red600,
                fontSize: 20
            }
        };

        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <PageBase>
                    <List >
                        <Subheader style={styles.subheader}>{title}</Subheader>
                        <Divider/>
                        {
                            priceDetail.itemList.map((item, index) =>
                                <ListItem
                                    key = {item.id}
                                    rightIcon={<ContentAdd/>}
                                    leftCheckbox={<Checkbox checked={true} />}
                                    primaryText={item.name}
                                    secondaryText={item.description}
                                />
                            )
                        }
                        <Divider/>

                    </List>
                    <div style={styles.bottomButton}>
                        <span>总计: {priceDetail.price} * {priceDetail.discount} = {Math.floor(priceDetail.price * priceDetail.discount)}</span>
                    </div>
                    <div style={styles.bottomButton}>
                        <RaisedButton primary={true} label="购买"/>
                    </div>
                </PageBase>
            </div>
        );
    }
}