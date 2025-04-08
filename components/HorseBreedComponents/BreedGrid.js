import {StyleSheet, Text, View, Image} from 'react-native';
import {BlurView} from '@react-native-community/blur';

const BreedGrid = ({breedItem}) => {
  const {breed, id, care, description, image, location, longitude, latitude} =
    breedItem;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <View style={styles.container}>
      {/* <BlurView
        style={styles.blurContainer}
        blurType="light"
        blurAmount={3}
        reducedTransparencyFallbackColor="white"
      /> */}
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.aboutContainer}>
        <Text style={[styles.textStyle, styles.breedName]}>{breed} </Text>
        <Text style={styles.textStyle}>{truncateText(description, 80)}</Text>
        <Text style={styles.textStyle}>Where to find- {location}</Text>
      </View>
    </View>
  );
};

export default BreedGrid;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 6,
    flex: 1,
    marginVertical: 6,
    backgroundColor: '#FFFFFF' + 90,
    borderRadius: 18,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 6,
    margin: 4,
  },
  aboutContainer: {
    flex: 1,
    // textAlign: 'center',
    paddingLeft: 10,
    // justifyContent: 'center',
    alignItems: 'flex-start',
  },
  blurContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 8,
  },
  textStyle: {
    marginVertical: 4,
  },
  breedName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
