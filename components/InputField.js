import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputField = ({placeholder, secureTextEntry}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    width: 250,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 6,
  },
});
