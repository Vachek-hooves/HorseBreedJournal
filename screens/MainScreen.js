import {View, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {ApplicationName} from '../components/mainScreenComponents';
import {BlurEffect} from '../components';

const MainScreen = ({navigation}) => {
  function photoAlbumHandle() {
    console.log('photo album btn pressed');
    navigation.navigate('GalleryScreen');
  }

  function allHorsesScreenHandle() {
    navigation.navigate('BreedScreen');
  }

  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={require('../assets/grassFlowers.jpg')}
        style={styles.image}>
        <ScrollView>
          <View style={styles.applicationNameContainer}>
            <ApplicationName style={styles.applicationName} />
          </View>

          <View style={styles.rowContainer}>
            <BlurEffect onPressProp={allHorsesScreenHandle}>
              Horse Breeds
            </BlurEffect>
            <BlurEffect onPressProp={photoAlbumHandle}>Photo Album</BlurEffect>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  applicationName: {
    width: '100%',
  },
  applicationNameContainer: {
    width: '100%',

    borderWidth: 2,
    borderColor: '#E4C59E',
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    opacity: 0.55,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    gap: 20,
    margin: 25,
  },
  flexItem: {
    flex: 1,
  },
});
