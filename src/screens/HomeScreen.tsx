import React, { useContext, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { UserContext } from '../contexts/UserContext';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">
}

export default function HomeScreen({navigation}: HomeScreenProps) {
  const  [input, setInput] = useState("")
  const userContext = useContext(UserContext)

  const navigateToUserScreen = () => {
    if(!(input == "")){
      userContext?.save(input)
      navigation.navigate('User', {username: input})
    } else {
      Alert.alert("Parâmetro obrigatório:", "Escreva seu nome para prosseguir!")
    }
  }

  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Digite seu nome:' placeholderTextColor="white"
        value={input} onChangeText={(text) => setInput(text)}/>
        <Text style={styles.button} onPress={navigateToUserScreen}>ENTRAR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: 'white',
    backgroundColor: '#072B3F',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 5,
    elevation: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  }
});