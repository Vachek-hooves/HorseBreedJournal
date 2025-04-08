import {StyleSheet, View} from 'react-native';
import {GalleryOpen} from '../components/mainScreenComponents';
import GeneralColors from '../constants/colors';
import {useLayoutEffect} from 'react';
import {ButtonCustom} from '../components';

const GalleryScreen = ({navigation}) => {
  // navigation.navigate('GalleryOpen');

  function addNewPhotoHandler() {
    navigation.navigate('ManagePhotoGallery');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <ButtonCustom
            onPress={addNewPhotoHandler}
            textStyle={{
              color: GeneralColors.maroon,
              padding: 0,
              fontWeight: 'bold',
            }}
            style={{
              width: 'auto',
              marginBottom: 2,
              padding: 2,
              borderColor: GeneralColors.maroon,
              color: GeneralColors.maroon,
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
    <View style={styles.containerStyle}>
      <GalleryOpen />
    </View>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: GeneralColors.lightOrange,
  },
});
