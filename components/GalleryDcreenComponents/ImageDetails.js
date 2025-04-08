import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import GeneralColors from '../../constants/colors';

const ImageDetails = ({imageDetails}) => {
  // console.log(imageDetails);
  // console.log(imageDetails.image);
  const {image, breed, id} = imageDetails;
  return (
    <View>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.textStyle}>{breed}</Text>
    </View>
  );
};

export default ImageDetails;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '60%',
  },
  textStyle: {
    marginTop:30,
    fontSize: 42,
    textAlign:'center',
    color:GeneralColors.lightYellow
  },
});
