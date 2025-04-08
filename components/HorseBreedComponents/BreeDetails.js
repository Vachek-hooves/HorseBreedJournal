import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GeneralColors from '../../constants/colors';
import {useLayoutEffect, useState} from 'react';
import ButtonCustom from '../ButtonCustom';
import AppleMap from '../ui/Map';
import InputCustom from '../Input';

const BreedDetails = ({details, route}) => {
  // console.log(route);
  const navigation = useNavigation();
  const [showThisComment, setShowThisComment] = useState();
  const [comments, setNewComments] = useState({
    comment: '',
  });

  // console.log(comments);
  // console.log(showThisComment);

  // console.log(details.item);
  const {breed, care, location, image, description, id, latitude, longitude} =
    details.item;
  // console.log(id);

  function inputChangeHandle(inputIdentifier, enteredText) {
    setNewComments(currentInputValue => {
      return {...currentInputValue, [inputIdentifier]: enteredText};
    });
  }

  function selectBreedHandle() {
    navigation.navigate('Main', {
      breedId: id,
    });
  }

  function addComment() {
    setShowThisComment(comments.comment);
  }

  return (
    <View>
      <ScrollView>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.aboutContainer}>
          <Text style={styles.breed}>{breed.toUpperCase()}</Text>
          <View style={styles.subContainer}>
            <View style={styles.subHeader}>
              <Text style={styles.subHeader}>{'About me'.toUpperCase()}</Text>
            </View>
            <Text style={styles.text}>{description}</Text>
          </View>
          <View style={styles.subContainer}>
            <View style={styles.subHeader}>
              <Text style={styles.subHeader}>
                {'Where you can find me'.toUpperCase()}
              </Text>
            </View>
            <Text>{location}</Text>
          </View>
        </View>
        <View style={{marginVertical: 30}}>
          <AppleMap latitude={latitude} longitude={longitude} />
        </View>
        <View>
          <InputCustom
            textInputConfig={{
              multiline: true,
              onChangeText: inputChangeHandle.bind(this, 'comment'),
            }}
          />
          <View style={{alignItems: 'center'}}>
            <ButtonCustom onPress={addComment}>add comments</ButtonCustom>
          </View>
        </View>
        <View>
          {showThisComment && (
            <View
              style={{
                alignItems: 'center',
                borderWidth: 1,
                marginHorizontal: 24,
                borderRadius: 6,
                padding: 8,
                borderColor: GeneralColors.lightOrange,
              }}>
              <Text style={{fontSize: 22, color: 'white'}}>
                {showThisComment}
              </Text>
            </View>
          )}
        </View>
        <View style={{marginBottom: 480}}></View>
      </ScrollView>
    </View>
  );
};

export default BreedDetails;

const styles = StyleSheet.create({
  scrollContainer: {flex: 1, overflow: 'hidden'},
  image: {
    width: '100%',
    height: 250,
  },
  aboutContainer: {
    flex: 1,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  subContainer: {
    gap: 10,
    alignItems: 'center',
  },
  subHeader: {
    padding: 2,
    fontSize: 20,
    borderBottomColor: GeneralColors.lightOrange,
    borderBottomWidth: 1,
    width: '100%',
  },
  text: {
    textAlign: 'center',
  },
  breed: {
    fontSize: 37,
    fontWeight: 'bold',
    color: GeneralColors.lightOrange,
  },
});
