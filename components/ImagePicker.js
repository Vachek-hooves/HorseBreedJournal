import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import GeneralColors from '../constants/colors';
import {launchImageLibrary} from 'react-native-image-picker';

const ImagePicker = ({onSelectImage, style}) => {
  const handleResponse = response => {
    if (response.didCancel) {
      Alert.alert('Operation canceled');
    } else if (response.errorCode) {
      Alert.alert('Error', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      const image = response.assets[0].uri;
      // console.log(image)
      onSelectImage(image);
    } else {
      Alert.alert('No image selected');
    }
  };

  const labriryHandle = () => {
    const options = {storageOptions: {path: 'images'}};
    launchImageLibrary(options, handleResponse);
  };

  return (
    <TouchableOpacity style={styles.btnStyle} onPress={() => labriryHandle()}>
      <Text style={style}> Add Image</Text>
    </TouchableOpacity>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  btnStyle: {
    padding: 3,
    margin: 6,
    marginBottom: 16,
    borderColor: GeneralColors.lightOrange,
    borderWidth: 1,
    width: 200,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
