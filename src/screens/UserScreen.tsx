import { RouteProp } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../App';
import { UserContext } from '../contexts/UserContext';

type UserScreenProps = {
  route: RouteProp<RootStackParamList, "User">
}

export default function UserScreen({route}: UserScreenProps) {
  const {username} = route.params
  const userContext = useContext(UserContext)
  const nomePadrao = userContext?.name || "Nenhum nome salvo"
  const nomeDinamico = userContext?.username || "Nenhum nome salvo"

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Nome estático: {nomePadrao}</Text>
        <Text style={styles.text}>Nome da rota: {username}</Text>
        <Text style={styles.text}>Nome dinâmico: {nomeDinamico}</Text>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});