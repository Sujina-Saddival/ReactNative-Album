// Import a library
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header'
import AlbumnList from './src/components/AlbumList'

// create a component
const App = () => {
  return (
  	<View style={{flex: 1}}>
    	<Header headerText={'Albums!!'}/>
    	<AlbumnList/>
    </View>
    );
}

// Render it to the device

AppRegistry.registerComponent('albums', () => App);
