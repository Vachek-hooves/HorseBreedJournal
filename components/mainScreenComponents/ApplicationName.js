import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const ApplicationName = () => {
  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={require('../../assets/lucia.jpg')}
        style={styles.image}
        imageStyle={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>World of Horse Breeds</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ApplicationName;

const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
    width: '100%',
    height: 200,
    marginHorizontal: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.0)', // Тло для тексту, щоб він був видимий
  },
  title: {
    marginBottom: 32,
    fontSize: 32,
    color: '#E4C59E',
    fontWeight: 'bold',
  },
  backgroundImage: {
    // opacity: 0.7,
    borderRadius:8
  },
});
