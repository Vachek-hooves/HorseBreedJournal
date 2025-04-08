import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {ButtonCustom, ImagePicker, InputCustom} from './index';
import {BreedContext} from '../store/breed_context';
import GeneralColors from '../constants/colors';
import LocationPicker from './ui/LocationPicker';

const AddHorseForm = ({navigation}) => {
  const breedCtx = useContext(BreedContext);
  const [image, setImage] = useState(null);
  const [isLocationPickerVisible, setIsLocationPickerVisible] = useState(false);

  const [newBreed, setNewBreed] = useState({
    breed: '',
    location: '',
    latitude: null,
    longitude: null,
    care: '',
    description: '',
    image: image,
  });

  function inputChangeHandler(inputIdentifier, enteredText) {
    setNewBreed(currentInputValues => {
      return {...currentInputValues, [inputIdentifier]: enteredText};
    });
  }

  function resetHandle() {
    setNewBreed({
      breed: '',
      location: '',
      latitude: null,
      longitude: null,
      care: '',
      description: '',
      image: '',
    });
    setImage(null);
  }

  function saveImage(value) {
    setImage(value);
    inputChangeHandler('image', value);
  }

  function handleLocationSelect(location) {
    setNewBreed(current => ({
      ...current,
      latitude: location.latitude,
      longitude: location.longitude,
      location: `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(
        4,
      )}`,
    }));
    setIsLocationPickerVisible(false);
  }

  function validateForm() {
    const {breed, location, care, description, image} = newBreed;
    if (!breed.trim()) {
      Alert.alert('Invalid Input', 'Please enter the breed name');
      return false;
    }
    if (!location) {
      Alert.alert('Invalid Input', 'Please select a location');
      return false;
    }
    if (!care.trim()) {
      Alert.alert('Invalid Input', 'Please enter care information');
      return false;
    }
    if (!description.trim()) {
      Alert.alert('Invalid Input', 'Please enter a description');
      return false;
    }
    if (!image) {
      Alert.alert('Invalid Input', 'Please select an image');
      return false;
    }
    return true;
  }

  function addNewBreed() {
    if (!validateForm()) {
      return;
    }
    breedCtx.addBreed(newBreed);
    navigation.navigate('BreedScreen');
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={{height: 1100}}>
            {image && (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={{uri: image}}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 6,
                    marginVertical: 15,
                  }}
                />
              </View>
            )}

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
                    value: newBreed.breed,
                    autoFocus: true,
                  }}
                />
              </View>

              <View style={{alignItems: 'center'}}>
                <ImagePicker
                  onSelectImage={value => saveImage(value)}
                  style={{fontSize: 24, color: GeneralColors.lightOrange}}
                />
              </View>
              <View style={styles.inputRow}>
                <InputCustom
                  style={styles.rowInput}
                  textStyle={{color: 'black'}}
                  label="Description"
                  textInputConfig={{
                    keyboardType: 'ascii-capable',
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: newBreed.description,
                    autoFocus: true,
                    multiline: true,
                  }}
                />
              </View>
              <View style={styles.inputRow}>
                <InputCustom
                  style={styles.rowInput}
                  textStyle={{color: 'black'}}
                  label="Care"
                  textInputConfig={{
                    keyboardType: 'ascii-capable',
                    onChangeText: inputChangeHandler.bind(this, 'care'),
                    value: newBreed.care,
                    autoFocus: true,
                    multiline: true,
                  }}
                />
              </View>
              <View style={styles.locationContainer}>
                <Text style={styles.locationLabel}>Location</Text>
                <ButtonCustom
                  onPress={() => setIsLocationPickerVisible(true)}
                  style={styles.locationButton}>
                  {newBreed.location || 'Map'}
                </ButtonCustom>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <View style={{alignItems: 'center'}}>
                <ButtonCustom style={{width: 'auto'}} onPress={addNewBreed}>
                  Save Breed
                </ButtonCustom>
              </View>
              <View style={{alignItems: 'center'}}>
                <ButtonCustom style={{width: 120}} onPress={resetHandle}>
                  Reset
                </ButtonCustom>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>

      <Modal
        visible={isLocationPickerVisible}
        animationType="slide"
        onRequestClose={() => setIsLocationPickerVisible(false)}>
        <LocationPicker onLocationSelect={handleLocationSelect} />
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default AddHorseForm;

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
  },
  rowInput: {
    flex: 1,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  locationContainer: {
    marginHorizontal: 16,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationLabel: {
    fontSize: 16,
    color: 'black',
    marginBottom: 4,
  },
  locationButton: {
    backgroundColor: GeneralColors.maroon,
    padding: 4,
    borderRadius: 6,
    alignItems: 'center',
    fontSize: 12,
  },
});
