import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './app'

class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}


AppRegistry.registerComponent('You App Name', () => App);


AppRegistry.runApplication('You App Name', { rootTag: document.getElementById('react-app') });
