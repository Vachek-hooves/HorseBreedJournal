import {StyleSheet, View, Alert} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {ButtonCustom} from '../index';
import GeneralColors from '../../constants/colors';

const LocationPicker = ({onLocationSelect}) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapPress = event => {
    const {latitude, longitude} = event.nativeEvent.coordinate;
    setSelectedLocation({latitude, longitude});
  };

  const handleConfirm = () => {
    if (!selectedLocation) {
      Alert.alert(
        'No Location Selected',
        'Please select a location on the map',
      );
      return;
    }
    onLocationSelect(selectedLocation);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 100,
          longitudeDelta: 100,
        }}
        onPress={handleMapPress}>
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
          />
        )}
      </MapView>
      <View style={styles.buttonContainer}>
        <ButtonCustom onPress={handleConfirm} style={styles.button}>
          Confirm Location
        </ButtonCustom>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: GeneralColors.maroon,
    padding: 10,
    borderRadius: 8,
    width: 200,
  },
});
