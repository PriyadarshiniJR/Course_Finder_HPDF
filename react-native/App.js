/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import {Container} from 'native-base'

import AppHeader from './components/appheader';
import AppFooter from './components/appfooter';
import AppBody from './components/appbody';

//import DropDown from './components/dropdown';


export default class App extends Component {
  render() {
    return (
      <Container>

		<AppHeader/>
		<AppBody/>
		<AppFooter/>

		</Container>

    );
  }
}

