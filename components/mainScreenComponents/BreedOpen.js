import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const BreedOpen = () => {
  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        // source={require('../../assets/horses.jpg')}
        style={styles.image}
        blurRadius={1}></ImageBackground>
    </View>
  );
};

export default BreedOpen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  breedContainer: {
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
