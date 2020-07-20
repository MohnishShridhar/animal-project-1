import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MissingScreen from './screens/MissingScreen';
import FoundScreen from './screens/FoundScreen';
import { geolocated } from "react-geolocated";

export default class App extends React.Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        console.log(position);
      },
      function(error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }

  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Missing:{screen:MissingScreen},
  Found:{screen:FoundScreen}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});