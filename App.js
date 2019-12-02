import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0 , 0, '=']];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{nums[i][j]}</Text>
          </TouchableOpacity>,
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    let operations = ['+', '-', '*', '/'];
    let ops = [];
    for (let i = 0; i < 4; i++) {
      ops.push(<TouchableOpacity style={styles.button}>
        <Text style={[styles.buttonText, styles.whiteText]}>{operations[i]}</Text>
      </TouchableOpacity>,);
    }
    return(
        <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resultText}>11*11</Text>
          </View>
          <View style={styles.calculation}>
            <Text style={styles.calculationText}>121</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              {rows}
            </View>
            <View style={styles.operations}>
              {ops}
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 30,
    color: 'white',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculationText: {
    fontSize: 24,
    color: 'white',
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
  },
  whiteText: {
    color: 'white',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
});
