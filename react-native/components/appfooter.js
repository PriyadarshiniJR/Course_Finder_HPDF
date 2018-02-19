import React, {Component} from 'react';
import { Image,Text} from 'react-native';
import {Footer, Left, Button, Icon, Title, Body, Right} from 'native-base';

export default class AppFooter extends Component  {
    render() {
        return (
            <Footer style={{backgroundColor:'white'}}>
                <Body>

            <Text style={{ color: 'black',fontFamily:'Courier New',
					 fontWeight:'normal',fontSize:16,alignContent:'center',paddingLeft:95}}>
              Made with  <Icon name="heart" style={{fontSize: 20, color: 'red'}}/>  from IMAD
                     </Text>
                </Body>
            </Footer>
        );
    }
}
module.export = AppFooter;
