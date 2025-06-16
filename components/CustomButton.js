import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';

const CustomButton = ({text, backgroundColor, textColor = '#fff', icon}) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor}]}>
      <View style={styles.content}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default CustomButton;
