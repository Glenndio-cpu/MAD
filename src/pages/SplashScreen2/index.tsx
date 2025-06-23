import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from '../../assets/GeFiBra Cafe Logo 1 (1).svg';

const SplashScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo width={200} height={200} />
      <Text style={styles.welcomeText}>Welcome!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation && navigation.navigate('TabelNumber')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6EB',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#8B4513',
    marginVertical: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#A0522D',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
}); 