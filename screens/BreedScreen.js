import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import {useEffect, useLayoutEffect} from 'react';
import {useContext, useState} from 'react';
import GeneralColors from '../constants/colors';
import {DropDownFilter, AllBreeds} from '../components/HorseBreedComponents';
import {BREED_LOCATION} from '../data/breedLocation';
import {ButtonCustom} from '../components';
import Orientation from 'react-native-orientation-locker';

const BreedScreen = ({navigation, route}) => {
  const [selectedRegion, setSelectedRegion] = useState([]);

  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  function choosenBreedRegion(values) {
    setSelectedRegion(values);
  }

  function addBreedHandler() {
    navigation.navigate('ManageBreed');
  }
  function resetFilter() {
    console.log('reset filter handle');
    setSelectedRegion([]);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <ButtonCustom
            onPress={addBreedHandler}
            textStyle={{
              color: GeneralColors.lightOrange,
              padding: 0,
              fontWeight: 'bold',
            }}
            style={{
              width: 'auto',
              marginBottom: 2,
              padding: 2,
              borderColor: GeneralColors.lightOrange,
              color: GeneralColors.lightOrange,
              width: 60,
              borderWidth: 2,
              marginVertical: 3,
            }}>
            +
          </ButtonCustom>
        );
      },
    });
  });

  return (
    <>
      <ImageBackground
        source={require('../assets/grassFlowers.jpg')}
        style={styles.imageBg}>
        <View style={styles.container}>
          <DropDownFilter
            selected={choosenBreedRegion}
            data={BREED_LOCATION}
            save="value"
          />
          <View style={{alignItems: 'center'}}>
            <ButtonCustom
              onPress={resetFilter}
              textStyle={{
                color: GeneralColors.maroon,
                fontSize: 14,
                fontWeight: 'bold',
              }}
              style={{
                borderColor: GeneralColors.maroon,
                width: 'auto',
              }}>
              Reset Filter
            </ButtonCustom>
          </View>
          <AllBreeds route={route} regionFilter={selectedRegion} />
        </View>
      </ImageBackground>
    </>
  );
};

export default BreedScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    // alignItems: 'center',
    flex: 1,
    marginHorizontal: 6,
    marginVertical: 12,
  },
  imageBg: {
    width: '100%',
    height: '100%',
  },
});
