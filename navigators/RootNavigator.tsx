import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import { AuthStackParamList } from "../types";
const Stack = createNativeStackNavigator<AuthStackParamList>();



const RootNavigator = () => {
  return (
    <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ title: 'Login' }}
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen} 
            options={{ title: 'Sign Up' }}
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Home' }}
            />
        </Stack.Navigator>
  );
};

export default RootNavigator;
