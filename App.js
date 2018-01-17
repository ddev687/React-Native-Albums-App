/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Header from './src/component/header';
import AlbumList from './src/component/AlbumList';

const App=()=> (
    <View>
      <Header headerText={'Albums'}/>
      <AlbumList/>
    </View>
);

export default App;



