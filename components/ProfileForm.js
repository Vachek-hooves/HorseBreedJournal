import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Input,
  Image,
} from 'react-native';
import GeneralColors from '../constants/colors';
import {useEffect, useState} from 'react';
import {ButtonCustom, InputCustom, ImagePicker} from '../components';

const ProfileForm = ({onSubmit, initialData}) => {
  const [imagePreview, setImagePreview] = useState(
    initialData?.image || require('../assets/profile.png'),
  );
  const [inputValues, setInputValues] = useState({
    name: initialData?.name || '',
    // date: '',
    // country: '',
    image: initialData?.image || require('../assets/profile.png'),
  });

  useEffect(() => {
    if (initialData) {
      setInputValues({
        name: initialData.name || '',
        image: initialData.image || require('../assets/profile.png'),
      });
      setImagePreview(initialData.image || require('../assets/profile.png'));
    }
  }, [initialData]);

  function inputChangeHandler(inputIdentifier, enteredText) {
    setInputValues(currentInputValues => {
      return {...currentInputValues, [inputIdentifier]: enteredText};
    });
  }

  function resetHandle() {
    setInputValues({
      name: initialData?.name || '',
      image: initialData?.image || require('../assets/profile.png'),
    });
    setImagePreview(initialData?.image || require('../assets/profile.png'));
  }

  function saveImage(value) {
    setImagePreview(value);
    inputChangeHandler('image', value);
  }

  function submitHandler() {
    const formData = {
      name: inputValues.name,
      userId: initialData?.userId || Math.random(),
      image: inputValues.image,
    };

    const nameIsValid = formData.name.trim().length > 0;

    if (!nameIsValid) {
      Alert.alert('Invalid Input', 'Please check your input values');
      return;
    }

    onSubmit(formData);
  }

  const imagePreviewHandler = (
    <>
      <Text>Photo here</Text>
    </>
  );
  useEffect(() => {
    imagePreviewHandler;
  }, [imagePreview]);

  return (
    <View style={{overflow: 'hidden'}}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image
            source={
              typeof imagePreview === 'string'
                ? {uri: imagePreview}
                : imagePreview
            }
            style={{
              width: '90%',
              height: 400,
              borderRadius: 6,
              marginVertical: 15,
            }}
          />
        </View>
        <View style={styles.form}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Text>Image preview</Text>
            {imagePreview ? imagePreviewHandler : null} */}
          </View>
          <View
            style={{
              borderColor: GeneralColors.lightOrange,
              margin: 20,
              borderWidth: 2,
              borderRadius: 8,
            }}>
            {/* <Text style={styles.title}> Your Profile </Text> */}
            <View style={styles.inputRow}>
              <InputCustom
                style={styles.rowInput}
                label="User name"
                textInputConfig={{
                  keyboardType: 'ascii-capable',
                  onChangeText: inputChangeHandler.bind(this, 'name'),
                  value: inputValues.name,
                  autoFocus: true,
                }}
              />
              {/* <InputCustom
                style={styles.rowInput}
                label="Birth Date"
                textInputConfig={{
                  placeholder: 'YYYY-MM-DD',
                  keyboardType: 'default',
                  maxLength: 10,
                  onChangeText: inputChangeHandler.bind(this, 'date'),
                  value: inputValues.date,
                }}
              /> */}
            </View>
            {/* <View style={styles.inputRow}>
              <InputCustom
                label="Country"
                textInputConfig={{
                  keyboardType: 'ascii-capable',
                  onChangeText: inputChangeHandler.bind(this, 'country'),
                  value: inputValues.country,
                }}
              />
            </View> */}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {/* <ButtonCustom
                style={
                  {
                    // marginHorizontal: 15,
                    // marginBottom: 10,
                    // borgerRaduis: 6,
                    // textAlign: 'center',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }
                }> */}
              <ImagePicker
                // onSelectImage={uri => inputChangeHandler('image', uri)}
                onSelectImage={value => saveImage(value)}
                style={{fontSize: 24, color: GeneralColors.lightOrange}}
              />
              {/* </ButtonCustom> */}
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <View>
              <ButtonCustom
                label="reset"
                onPress={resetHandle}
                style={{width: 120}}>
                Reset
              </ButtonCustom>
            </View>
            <View>
              <ButtonCustom
                label="confirm"
                onPress={submitHandler}
                style={{width: 120}}>
                {initialData ? 'Update' : 'Submit'}
              </ButtonCustom>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{marginBottom: 0}}></View>
    </View>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GeneralColors.lightOrange,
    marginVertical: 24,
    textAlign: 'center',
  },
  buttonsContainer: {
    // padding:6,
    // marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 60,
    // justifyContent: 'space-around',
  },
});
