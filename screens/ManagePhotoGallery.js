import {StyleSheet, Text, View} from 'react-native';
import {AddPhotoToGallery} from '../components';
import GeneralColors from '../constants/colors';
import {useEffect} from 'react';
import Orientation from 'react-native-orientation-locker';

const ManagePhotoGallery = ({navigation}) => {
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);
  return (
    <View style={styles.containerStyle}>
      <AddPhotoToGallery navigation={navigation} />
    </View>
  );
};

export default ManagePhotoGallery;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: GeneralColors.maroon,
    flex: 1,
  },
});
