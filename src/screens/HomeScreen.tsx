import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">
}

export default function HomeScreen({navigation}: HomeScreenProps) {
  const  [input, setInput] = useState("")

  const navigateToUserScreen = () => {
    navigation.navigate('User', {username: input})
  }

  return (
    <View>
        <TextInput placeholder='Digite seu nome:'
        value={input} onChangeText={(text) => setInput(text)}/>
        <Button title='Entrar' onPress={navigateToUserScreen}/>
    </View>
  );
}