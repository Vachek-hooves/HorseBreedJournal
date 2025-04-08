import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import GeneralColors from '../constants/colors';
import InputCustom from './Input';
import {useContext, useState} from 'react';
import ButtonCustom from './ButtonCustom';
import ImagePicker from './ImagePicker';
import {BreedContext} from '../store/breed_context';

const AddPhotoToGallery = ({navigation}) => {
  const galleryCtx = useContext(BreedContext);
  const [image, setImage] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState({
    breed: '',
    image: image,
  });
  // console.log(galleryPhoto);

  function inputChangeHandler(inputIdentifier, enteredText) {
    setGalleryPhoto(currentInputValues => {
      return {...currentInputValues, [inputIdentifier]: enteredText};
    });
  }
  function saveImage(value) {
    // console.log('Manage Gallery Photo', value);
    setImage(value);
    inputChangeHandler('image', value);
  }

  function addNewPhotoToGallery() {
    // console.log('add image to gallery');
    galleryCtx.createPhoto(galleryPhoto);
    navigation.navigate('GalleryScreen');
    // // console.log(galleryPhoto);
  }

  function resetHandle() {
    setImage(null);
    setGalleryPhoto({breed: '', image: ''});
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.buttonsContainer}>
            <View>
              <ButtonCustom onPress={addNewPhotoToGallery}>
                Add to gallery
              </ButtonCustom>
            </View>
            <View style={{alignItems: 'center'}}>
              <ButtonCustom style={{width: 120, flex: 1}} onPress={resetHandle}>
                Reset
              </ButtonCustom>
            </View>
          </View>
          <View
            style={{
              borderColor: GeneralColors.lightOrange,
              margin: 20,
              borderWidth: 2,
              borderRadius: 8,
            }}>
            <View style={styles.inputRow}>
              <InputCustom
                style={styles.rowInput}
                textStyle={{color: 'black'}}
                label="Breed"
                textInputConfig={{
                  keyboardType: 'ascii-capable',
                  onChangeText: inputChangeHandler.bind(this, 'breed'),
                  value: galleryPhoto.breed,
                  autoFocus: true,
                }}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              {/* <ButtonCustom> */}

              <ImagePicker
                onSelectImage={value => saveImage(value)}
                style={{fontSize: 24, color: GeneralColors.lightOrange}}
                // style={{fontSize: 24, color: GeneralColors.lightOrange}}
              />
              {/* </ButtonCustom> */}
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            {/* <Text>Image preview</Text> */}
            {image && (
              <Image
                source={{uri: image}}
                style={{
                  width: '90%',
                  height: 400,
                  borderRadius: 6,
                  marginVertical: 15,
                }}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddPhotoToGallery;

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
