import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
