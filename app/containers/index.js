import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Router, routerReducer, Route, Container, Animations, Schema } from 'react-native-redux-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  detail: {
    color: '#333333',
    marginBottom: 5,
  },
});

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native - Boilerplate By THINK!
        </Text>
        <Text style={styles.detail}>
          - React Native
        </Text>
        <Text style={styles.detail}>
          - React Native Base
        </Text>
        <Text style={styles.detail}>
          - React Native Web
        </Text>
        <Text style={styles.detail}>
          - Redux
        </Text>
        <Text style={styles.detail}>
          - Router
        </Text>

        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}



// State
function mapStateToProps(state) {
  return {
    state,
  }
}

// Action
const actions = {
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

