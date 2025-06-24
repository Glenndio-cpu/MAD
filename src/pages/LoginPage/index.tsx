import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Logo from '../../assets/GeFiBra Cafe Logo 1 (1).svg';

const { width } = Dimensions.get('window');

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.root}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation && navigation.navigate('TabelNumber')}>
        <Text style={styles.backIcon}>{'<'}</Text>
      </TouchableOpacity>
      {/* Logo */}
      <Logo width={width * 0.25} height={width * 0.25} style={styles.logo} />
      {/* Title */}
      <Text style={styles.title}>Sign In</Text>
      {/* Username */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Username"
          placeholderTextColor="#A0522D"
        />
      </View>
      {/* Password */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Password"
          placeholderTextColor="#A0522D"
          secureTextEntry
        />
      </View>
      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation && navigation.navigate('AllMenu')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      {/* Create New Account Link */}
      <TouchableOpacity onPress={() => navigation && navigation.navigate('SingUp')}>
        <Text style={styles.linkText}>Create New Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF6EB',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    top: 36,
    left: 24,
    zIndex: 2,
  },
  backIcon: {
    fontSize: 22,
    color: '#8B4513',
    fontWeight: 'bold',
  },
  logo: {
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    color: '#A0522D',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: 'bold',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#8B4513',
    fontFamily: 'Poppins-Bold',
    marginBottom: 6,
    marginLeft: 6,
  },
  input: {
    backgroundColor: '#FFF6EB',
    borderColor: '#A0522D',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#A0522D',
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: '#A0522D',
    borderRadius: 10,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  linkText: {
    color: '#A0522D',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginTop: 8,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
