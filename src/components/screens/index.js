import * as React from 'react';
import { TouchableOpacity, Image, StatusBar } from "react-native";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import { ifIphoneX } from "react-native-iphone-x-helper";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import ContentScreen from "./ContentScreen";
import MyPageScreen from "./MyPageScreen";

const assetsPath = '../../../assets';
const Stack = createStackNavigator();
StatusBar.setBarStyle('dark-content', true);

function Logo() {
  return (
    <Image
      style={{width: 45, height: 35, marginLeft: 20, marginTop: 20, marginBottom: 15}}
      source={require(assetsPath + '/logo-2x.png')}
    />
  )
}

function Login({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{width: 35, height: 35, marginRight: 20, marginTop: 20, marginBottom: 15}}
        source={require(assetsPath + '/login.png')}
      />
    </TouchableOpacity>
  )
}

function Back() {
  return (
    <Image
      style={{width: 20, height: 17.14, marginLeft: 20, marginTop: 20, marginBottom: 15}}
      source={require(assetsPath + '/arrow-left2.png')}
    />
  )
}

export default function Screens() {
  return (
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
      <Stack.Screen
        name='MyPage'
        component={MyPageScreen}
        options={({navigation, route}) => ({
          headerLeft: props => <HeaderBackButton {...props} onPress={() => navigation.navigate("Home")} />,
          headerBackImage: () => <Back />,
          headerTitle: '마이페이지',
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
  )

}
