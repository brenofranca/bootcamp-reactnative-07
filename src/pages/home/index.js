import React, { Component } from "react";

import { Text } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

class Home extends Component {
  static navigationOptions = {
    title: "GoCommerce"
    // tabBarIcon: ({ tintColor }) => (
    //   <Icon name="home" size={20} color={tintColor} />
    // )
  };

  static propTypes = {};

  render() {
    return <Text>HomePage</Text>;
  }
}

export default Home;
