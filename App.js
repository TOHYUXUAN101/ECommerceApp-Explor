import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screen/SignInScreen/SignInScreen';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';
import AllProductScreen from './src/screen/AllProductScreen/AllProductScreen';
import ViewCartScreen from './src/screen/ViewCartScreen/ViewCartScreen';
import CategorySearchScreen from './src/screen/CategorySearchScreen/CategorySearchScreen';
import ItemDetailsScreen from './src/screen/ItemDetailsScreen/ItemDetailsScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AllProductScreen" component={AllProductScreen} />
        <Stack.Screen name="ViewCartScreen" component={ViewCartScreen} />
        <Stack.Screen name="CategorySearchScreen" component={CategorySearchScreen} />
        <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f54e42',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
