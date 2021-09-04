/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Text, View} from 'react-native';

import styles from './App.style';

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world! 🎉</Text>
    </View>
  );
};

export default App;
