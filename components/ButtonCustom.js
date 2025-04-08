import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import GeneralColors from '../constants/colors';

const ButtonCustom = ({children, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnStyle, style]}>
      <Text style={[styles.textStyle, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  textStyle: {
    padding: 4,
    fontSize: 24,
    color: GeneralColors.lightOrange,
  },
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
