import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    return (
      <View style={styles.container}>
         <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
