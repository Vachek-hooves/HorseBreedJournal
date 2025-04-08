import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {ButtonCustom} from './index';
import GeneralColors from '../constants/colors';

const UserProfile = ({data, onUpdate}) => {
  const profileImage = data.image;
  // console.log(profileImage)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/grass.jpg')}
        style={styles.image}>
        <View style={styles.blur}>
          <View style={styles.imageContainer}>
            <Image style={styles.imageProfile} source={{uri: profileImage}} />
          </View>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.buttonContainer}>
            <ButtonCustom onPress={onUpdate} style={styles.updateButton}>
              Update Profile
            </ButtonCustom>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  text: {
    color: 'white',
    fontSize: 58,
    fontWeight: 'bold',
    padding: 10,
  },
  blur: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  name: {
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
  },
  country: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
  },
  imageContainer: {
    borderRadius: 60,
    width: 300,
    height: 400,
    borderWidth: 3,
    overflow: 'hidden',
    margin: 13,
  },
  imageProfile: {
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    marginTop: 20,
  },
  updateButton: {
    backgroundColor: GeneralColors.maroon,
    padding: 10,
    borderRadius: 8,
  },
});
