import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Image } from "react-native";
import { Button, Icon, Input, Divider, Text } from '@ui-kitten/components';
import LoginTemplate from "../templates/LoginTemplate";

function Logo() {
  return (
    <Image
      style={styles.logo}
      source={require('../../../assets/logoLarge.png')}
    />
  )
}

export default function LoginForm(props) {
  const { loginData } = props;
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const userIcon = (props) => (
    <Icon {...props} name='person-outline' />
  );

  const secretIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Logo />
      </View>
      <View style={{flex: 1}}>
        <Input
          value={loginData.username}
          placeholder='이메일 ID를 입력하세요'
          accessoryRight={userIcon}
          keyboardType='email-address'
          autoCapitalize="none"
          onChangeText={value => props.onChangeText('username', value)}
        />
        <View style={{marginTop: 10}}>
          <Input
            value={loginData.password}
            placeholder='비밀번호를 입력하세요'
            accessoryRight={secretIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={value => props.onChangeText('password', value)}
          />
        </View>
      </View>
      <View style={{height: 102}}>
        <Button>LOGIN</Button>
        <View style={{height: 80, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{paddingTop: 12, paddingLeft: 10}}><Text>아이디가 없으신가요?</Text></View>
          <View><Button status='success' appearance='ghost'>회원가입</Button></View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 170,
    height: 127,
  },
});