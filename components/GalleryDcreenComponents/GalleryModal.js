import {useState} from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import GeneralColors from '../../constants/colors';

const GalleryModal = ({isOpen, children}) => {
  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={isOpen}>
        {children}
      </Modal>
    </View>
  );
};

export default GalleryModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: GeneralColors.maroon,
  },
});
