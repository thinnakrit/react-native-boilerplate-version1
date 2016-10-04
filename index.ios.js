import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CommerzyMain from './app'

class Commerzy extends Component {
  render() {
    return (
      <CommerzyMain />
    );
  }
}


AppRegistry.registerComponent('Commerzy', () => Commerzy);
