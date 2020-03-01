import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resultText: '',
    };
    this.operations = ['DEL', 'AC', '/', '*', '-', '+'];
  }

  validate() {
    const text = this.state.resultText;
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }
    return true;
  }

  calculateResult() {
    const text = this.state.resultText;
    this.setState({
      calculationText: eval(text),
    });
  }

  buttonPressed(text) {
    if (text === '=') {
      return this.validate() && this.calculateResult();
    }
    this.setState({
      resultText: this.state.resultText + text,
    });
  }

  operate(operation) {
    switch (operation) {
      case 'DEL':
        let text = this.state.resultText.split('');
        text.pop();
        text.join('');
        this.setState({
          resultText: text.join(''),
        });
        break;
      case 'AC':
        this.setState({
          resultText: '',
          calculationText: '',
        });
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.resultText.split('').pop();
        if (this.operations.indexOf(lastChar) > 0) {
          return;
        }
        if (this.state.text === '') {
          return;
        } else {
          this.setState({ 
            resultText: this.state.resultText + operation,
          });
        }
        break;
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

    let ops = [];
    for (let i = 0; i < 6; i++) {
      ops.push(
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.operate(this.operations[i])}>
          <Text style={[styles.buttonText, styles.whiteText]}>
            {this.operations[i]}
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
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 30,
    color: '#263238',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculationText: {
    fontSize: 24,
    color: '#263238',
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
