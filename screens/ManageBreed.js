import {StyleSheet, View} from 'react-native';
import {AddHorseForm} from '../components';
import GeneralColors from '../constants/colors';

const ManageBreed = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <AddHorseForm navigation={navigation} />
    </View>
  );
};

export default ManageBreed;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: GeneralColors.maroon,
    flex: 1,
  },
});
