import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen2 from './src/pages/SplashScreen2';
import TabelNumber from './src/pages/TabelNumber';
import LoginPage from './src/pages/LoginPage';
import CoffeMenu from './src/pages/CoffeMenu';
import SingUp from './src/pages/SingUp';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen2" screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
      <Stack.Screen name="TabelNumber" component={TabelNumber} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="CoffeMenu" component={CoffeMenu} />
      <Stack.Screen name="SingUp" component={SingUp} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;