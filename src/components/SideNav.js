import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import * as _ from 'lodash';
import Button from 'react-bootstrap/Button';
import { about_switch } from '../actions';
import { contact_switch } from '../actions';

const styles = {
    list: {
        width: 400
    },
    fullList: {
        width: 'auto',
    },
};

class TemporaryDrawer extends React.Component {
    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const weatherList = [
            { text: 'Todays Weather', icon: 'wb_sunny' },
            { text: 'Weekly Forecast', icon: 'cloud' }
        ];

        const infoList = [
            { text: 'About Us', icon: 'info_outline', action: about_switch },
            { text: 'Contact Info', icon: 'email', action: contact_switch }
        ];

        const sideList = (
            <div className={classes.list}>
                <List>
                    {_.map(weatherList, ({ text, icon }) => {
                        return (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <i className="material-icons">{icon}</i>
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    })}
                </List>
                <Divider />
                <List>
                    {_.map(infoList, ({ text, icon, action }) => {
                        return (
                            <ListItem button key={text} onClick={action}>
                                <ListItemIcon>
                                    <i className="material-icons" onClick={action}>{icon}</i>
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        );


        return (
            <div>
                <Button variant="outline-secondary" size="lg" onClick={this.toggleDrawer('left', true)}> menu</Button>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >

                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);