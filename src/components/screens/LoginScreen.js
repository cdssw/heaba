import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Image } from "react-native";
import { Button, Icon, Input, Divider, Text } from '@ui-kitten/components';
import LoginTemplate from "../templates/LoginTemplate";
import LoginForm from "../organisms/LoginForm";

export default function LoginScreen(props) {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChangeText = (name, value) => {
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  return (
    <LoginTemplate>
        <LoginForm
          loginData={loginData}
          onChangeText={handleChangeText}
        />
    </LoginTemplate>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 170,
    height: 127,
  },
});