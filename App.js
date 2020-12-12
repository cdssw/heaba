import * as React from 'react';
import { View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({navigation}) {

  const handlePress = e => {
    navigation.navigate('Profile');
  }  
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>안녕하세요, HomeScreen 테스트 입니다.</Text>      
      <Button title='프로필 페이지로 이동' onPress={handlePress} />
    </View>
  )
}

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>안녕하세요, ProfileScreen 입니다.</Text>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Welcome'}} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
