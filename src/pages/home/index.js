import React, { Component } from 'react';

import {
  Text, View, ScrollView, TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
  };

  static propTypes = {};

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal style={styles.menuContainer}>
          <View style={styles.menuContent}>
            <TouchableHighlight style={styles.menuButton}>
              <Text style={styles.menuButtonText}>1</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
