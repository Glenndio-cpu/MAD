import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import Logo from '../../assets/GeFiBra Cafe Logo 1 (1).svg';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const TabelNumber = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('SplashScreen2')}>
        <Text style={styles.backIcon}>{'<'}</Text>
      </TouchableOpacity>
      <Logo width={width * 0.22} height={width * 0.22} style={styles.logo} />
      <Text style={styles.title}>Table Number</Text>
      <TextInput style={styles.input} placeholder="Table number" placeholderTextColor="#A0522D" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginPage')}
      >
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabelNumber;

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#A0522D',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 32,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A0522D',
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: '80%',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#A0522D',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A0522D',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 15,
    marginTop: 10,
    width: width * 0.6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
}); 