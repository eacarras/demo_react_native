import React, {Component} from 'react';
import {StyleSheet, TextInput, View, ImageBackground, Dimensions} from 'react-native';

import image from './images/background_login.jpg';
import icons from 'react-native-vector-icons/Ionicons';

const {width: WIDTH } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <ImageBackground source={image} style={styles.background_container}>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            underlineColorAndroid='transparent'/>
        </View>

        <View>
          <TextInput placeholder={'Password'}/>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background_container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    marginHorizontal: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)'
  }
});