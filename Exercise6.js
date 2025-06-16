import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Title from './componentsB/Title';
import CustomTextInput from './componentsB/CustomTextInput';
import CustomButton from './componentsB/CustomButton';

const Exercise6 = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone:', phone);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title text="Registration" />
      <CustomTextInput
        label="Name"
        placeholder="Masukan nama lengkap anda"
        value={name}
        onChangeText={setName}
      />
      <CustomTextInput
        label="Username"
        placeholder="Masukan username anda"
        value={username}
        onChangeText={setUsername}
      />
      <CustomTextInput
        label="Email"
        placeholder="Masukan email anda"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <CustomTextInput
        label="Address"
        placeholder="Masukan alamat anda"
        value={address}
        onChangeText={setAddress}
      />
      <CustomTextInput
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
      />
      <CustomButton
        text="Register"
        backgroundColor="#B833F2"
        onPress={handleRegister}
        buttonstyle={styles.button}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: 'white',
    flexGrow: 1,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 150,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Exercise6;
