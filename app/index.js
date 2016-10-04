import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configStore from './configStore';
import App from './containers';
const store = configStore();


export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}
