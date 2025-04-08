import {StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const AppleMap = ({latitude, longitude}) => {
  const customKey = Math.random(100);
  console.log(customKey);
  console.log(latitude, longitude);

  console.log(parseFloat(latitude));
  return (
    <MapView
      style={styles.mapContainer}
      provider={PROVIDER_GOOGLE}
      loadingEnabled={true}
      loadingIndicatorColor="#FFBF78"
      loadingBackgroundColor="#803D3B"
      initialRegion={{
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        latitudeDelta: 5.0,
        longitudeDelta: 5.0,
      }}>
      <Marker
        key={customKey}
        coordinate={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        }}
      />
    </MapView>
  );
};

export default AppleMap;

const styles = StyleSheet.create({
  mapContainer: {
    height: 1,
    height: 250,
    // marginBottom: 30,
    marginHorizontal: 6,
  },
});
