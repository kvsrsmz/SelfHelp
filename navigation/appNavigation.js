import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import useAuth from '../hooks/useAuth';
import KayitOlScreen from '../screens/KayitOlScreen';
import SozlesmeScreen from '../screens/SozlesmeScreen';
import KullaniciSozScreen from '../screens/KullaniciSozScreen';
import KVKKScreen from '../screens/KVKKScreen';
import ForgotScreen from '../screens/ForgotScreen';
import Soru1Screen from '../screens/Soru1Screen';
import Soru2Screen from '../screens/Soru2Screen';
import AnaSayfaScreen from '../screens/AnaSayfaScreen';
import SelfTerapScreen from '../screens/SelfTerapScreen';
import ArkadaslikIlisScreen from '../screens/ArkadaslikIlisScreen';









const Stack = createNativeStackNavigator();




export default function AppNavigation() {
  const { user } = useAuth();
  if(user)
  {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        </Stack.Navigator>
        
      </NavigationContainer>
    )
  }else
  {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
          <Stack.Screen name="KayitOl" options={{headerShown: false}} component={KayitOlScreen} />
          <Stack.Screen name="Sozlesme" options={{headerShown: false}} component={SozlesmeScreen} />
          <Stack.Screen name="KullaniciSoz" options={{headerShown: false}} component={KullaniciSozScreen} />
          <Stack.Screen name="KVKK" options={{headerShown: false}} component={KVKKScreen} />
          <Stack.Screen name="Forgot" options={{headerShown: false}} component={ForgotScreen} />
          <Stack.Screen name="Soru1" options={{headerShown: false}} component={Soru1Screen} />
          <Stack.Screen name="Soru2" options={{headerShown: false}} component={Soru2Screen} />
          <Stack.Screen name="AnaSayfa" options={{headerShown: false}} component={AnaSayfaScreen} />
          <Stack.Screen name="SelfTerapiler" options={{headerShown: false}} component={SelfTerapScreen} />
          <Stack.Screen name="ArkadaslikIliskileri" options={{headerShown: false}} component={ArkadaslikIlisScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
  
  
}