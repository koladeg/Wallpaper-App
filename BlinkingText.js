import React, { Component } from 'react';
//import react in our project

import { Text, View } from 'react-native';
//import all the components we needed

export default class CustomBlinkingTxt extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // Change the state every second or the time given by User.
    setInterval(() => {
        this.setState(previousState => {
          return { showText: !previousState.showText };
        });
      },
      // Define blinking time in milliseconds
      10000
    );

  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={{
      color: 'grey',
      fontSize: 32,
      padding: 10, }}>{display}</Text>
    );
  }
}
