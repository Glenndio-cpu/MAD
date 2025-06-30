import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/pages/SplashScreen';
import SplashScreen2 from './src/pages/SplashScreen2'; 
import Homepage from './src/pages/HomePage';
import TabelNumber from './src/pages/TabelNumber';
import LoginPage from './src/pages/LoginPage';
import CoffeMenu from './src/pages/CoffeMenu';
import Profile from './src/pages/Profile';
import SingUp from './src/pages/SingUp';
import AllMenu from './src/pages/AllMenu';
import TeaMenu from './src/pages/TeaMenu';
import OtherMenu from './src/pages/OtherMenu';
import CappucinoDescription from './src/pages/CappucinoDescription';
import Closing from './src/pages/Closing';
import RiwayatPesanan from './src/pages/RiwayatPesanan';
import AmericanoDescription from './src/pages/AmericanoDescription';
import IcedLemonTeaDescription from './src/pages/IcedLemonTeaDescription';
import StrawberrySquashDescription from './src/pages/StrawberrySquashDescription';
import CaramelMacchiatoDescription from './src/pages/CaramelMacchiatoDescription';
import LatteDescription from './src/pages/LatteDescription';
import GreenTeaDescription from './src/pages/GreenTeaDescription';
import IcedLycheeTeaDescription from './src/pages/IcedLycheeTeaDescription';
import MangoSmoothieDescription from './src/pages/MangoSmoothieDescription';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen2" screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="TabelNumber" component={TabelNumber} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="CoffeMenu" component={CoffeMenu} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="AllMenu" component={AllMenu} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="TeaMenu" component={TeaMenu} />
      <Stack.Screen name="OtherMenu" component={OtherMenu} />
      <Stack.Screen name="Closing" component={Closing} />
      <Stack.Screen name="RiwayatPesanan" component={RiwayatPesanan} />
      <Stack.Screen name="AmericanoDescription" component={AmericanoDescription} />
      <Stack.Screen name="CappucinoDescription" component={CappucinoDescription} />
      <Stack.Screen name="IcedLemonTeaDescription" component={IcedLemonTeaDescription} />
      <Stack.Screen name="StrawberrySquashDescription" component={StrawberrySquashDescription} />
      <Stack.Screen name="CaramelMacchiatoDescription" component={CaramelMacchiatoDescription} />
      <Stack.Screen name="LatteDescription" component={LatteDescription} />
      <Stack.Screen name="GreenTeaDescription" component={GreenTeaDescription} />
      <Stack.Screen name="IcedLycheeTeaDescription" component={IcedLycheeTeaDescription} />
      <Stack.Screen name="MangoSmoothieDescription" component={MangoSmoothieDescription} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App; 