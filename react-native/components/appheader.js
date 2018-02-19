import React, {Component} from 'react';
import { Image} from 'react-native';
import {Header, Left, Button, Icon, Title, Body, Right} from 'native-base';

export default class AppHeader extends Component  {
    render() {
        return (
            <Header style={{backgroundColor:'cyan'}}>
                <Body>
            <Image source={require('../img/cf.png')}
            style={{width: 335,height: 40}}/>
                </Body>
            </Header>
        );
    }
}
module.export = AppHeader;
