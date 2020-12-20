import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ifIphoneX } from "react-native-iphone-x-helper";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./theme/heaba-theme.json";
import HomeScreen from "./src/components/screens/HomeScreen";
import LoginScreen from "./src/components/screens/LoginScreen";
import ContentScreen from "./src/components/screens/ContentScreen";

const Stack = createStackNavigator();
StatusBar.setBarStyle('dark-content', true);

function Logo() {
  return (
    <Image
      style={{width: 45, height: 35, marginLeft: 20, marginTop: 20, marginBottom: 15}}
      source={require('./assets/logo-2x.png')}
    />
  )
}

function Login({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{width: 35, height: 35, marginRight: 20, marginTop: 20, marginBottom: 15}}
        source={require('./assets/login.png')}
      />
    </TouchableOpacity>
  )
}

function Back() {
  return (
    <Image
      style={{width: 20, height: 17.14, marginLeft: 20, marginTop: 20, marginBottom: 15}}
      source={require('./assets/arrow-left2.png')}
    />
  )
}

function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
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
                  ...ifIphoneX({
                    height: 100
                  }, {
                    height: 70,
                  }),
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
                  ...ifIphoneX({
                    height: 100
                  }, {
                    height: 70,
                  }),
                  shadowOffset: {
                    height: 0,
                  }
                },
              }}
            />
            <Stack.Screen
              name='Content'
              component={ContentScreen}
              options={({navigation, route}) => ({
                headerBackImage: () => <Back />,
                headerTitle: '상세보기',
                headerBackTitleVisible: false,
                headerTitleStyle: { color: '#02846E' },
                headerStyle: {
                  ...ifIphoneX({
                    height: 100
                  }, {
                    height: 70,
                  }),
                  shadowOffset: {
                    height: 0,
                  }
                },
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
