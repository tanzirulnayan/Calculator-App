import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resultText: '',
    };
  }

  calculateResult() {
    const text = this.state.resultText;
  }

  buttonPressed(text) {
    // console.warn(text);
    if (text === '=') {
      return this.calculateResult();
    }
    this.setState({
      resultText: this.state.resultText + text,
    });
  }

  operate(operation) {
    switch (operation) {
      case 'D':
        let text = this.state.resultText.split('');
        text.pop();
        text.join('');
        this.setState({
          resultText: text.join(''),
        });
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        if (this.state.text === '') {
          return;
        } else {
          this.setState({
            resultText: this.state.resultText + operation,
          });
        }
    }
  }

  render() {
    let rows = [];
    let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            onPress={() => this.buttonPressed(nums[i][j])}
            style={styles.button}>
            <Text style={styles.buttonText}>{nums[i][j]}</Text>
          </TouchableOpacity>,
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    let operations = ['D', '/', '*', '-', '+'];
    let ops = [];
    for (let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.operate(operations[i])}>
          <Text style={[styles.buttonText, styles.whiteText]}>
            {operations[i]}
          </Text>
        </TouchableOpacity>,
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{ops}</View>
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
    backgroundColor: '#303f9f',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 30,
    color: 'white',
  },
  calculation: {
    flex: 1,
    backgroundColor: '#283593',
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
    backgroundColor: '#eceff1',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#37474f',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
});
