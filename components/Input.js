import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import GeneralColors from '../constants/colors';

const InputCustom = ({label, style, textInputConfig, textStyle}) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} autoFocus />
    </View>
  );
};

export default InputCustom;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
  },
  input: {
    fontSize: 18,
    color: GeneralColors.maroon,
    backgroundColor: GeneralColors.lightOrange,
    padding: 6,
    borderRadius: 6,
  },
  inputMultiline: {
    minHeight: 80,
    textAlignVertical: 'top',
    // width: '',
  },
});
