import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Alert } from 'react-native';
import Logo from '../../assets/GeFiBra Cafe Logo 1 (1).svg';
import { auth } from '../../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const SingUp = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email.trim() || !password.trim() || !username.trim()) {
      Alert.alert('Error', 'Semua field harus diisi');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password minimal 6 karakter');
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await AsyncStorage.setItem('USERNAME', username);
      setLoading(false);
      Alert.alert('Sukses', 'Akun berhasil dibuat!', [
        { text: 'OK', onPress: () => navigation && navigation.navigate('LoginPage') }
      ]);
    } catch (error: any) {
      setLoading(false);
      Alert.alert('Gagal', error.message || 'Gagal membuat akun');
    }
  };

  return (
    <View style={styles.root}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation && navigation.goBack()}>
        <Text style={styles.backIcon}>{'<'}</Text>
      </TouchableOpacity>
      {/* Logo */}
      <Logo width={width * 0.25} height={width * 0.25} style={styles.logo} />
      {/* Title */}
      <Text style={styles.title}>Sign Up</Text>
      {/* Username */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Username"
          placeholderTextColor="#A0522D"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      {/* Email */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Email"
          placeholderTextColor="#A0522D"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      {/* Password */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Password"
          placeholderTextColor="#A0522D"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {/* Create Account Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Loading...' : 'Create Account'}</Text>
      </TouchableOpacity>
      {/* Sudah punya akun? */}
      <TouchableOpacity onPress={() => navigation && navigation.navigate('LoginPage')}>
        <Text style={styles.linkText}>Sudah punya akun? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingUp;

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
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
  },
}); 