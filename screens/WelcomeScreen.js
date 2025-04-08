import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const WelcomeScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={require('../assets/horse-eye.jpg')}
        style={styles.image}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Welcome </Text>
            <Text style={styles.textStyle}>to the</Text>
            <Text style={styles.textStyle}>WORLD</Text>
            <Text style={styles.textStyle}>OF HORSE</Text>
            <Text style={styles.textStyle}>BREEDS</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 65,
    margin: 10,
  },
});
