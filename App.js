import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/components/screens/HomeScreen";
import LoginScreen from "./src/components/screens/LoginScreen";

const Stack = createStackNavigator();

function Logo() {
  return (
    <Image
      style={{width: 45, height: 35, marginLeft: 10, marginTop: 10, marginBottom: 10}}
      source={require('./assets/logo-2x.png')}
    />
  )
}

function Login({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{width: 35, height: 35, marginRight: 10, marginTop: 10, marginBottom: 10}}
        source={require('./assets/login.png')}
      />
    </TouchableOpacity>
  )
}

function Back() {
  return (
    <Image
      style={{width: 14, height: 12, marginLeft: 10, marginTop: 10, marginBottom: 10}}
      source={require('./assets/arrow-left2.png')}
    />
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={({navigation, route}) => ({
            headerLeft: props => <Logo {...props} />,
            headerTitle: '',
            headerRight: props => <Login onPress={() => navigation.navigate("Login")} />,
            headerStyle: {
              shadowOffset: {
                height: 0,
              }
            },
          })}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            headerBackImage: () => <Back />,
            headerTitle: '',
            headerBackTitleVisible: false,
            headerStyle: {
              shadowOffset: {
                height: 0,
              }
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
