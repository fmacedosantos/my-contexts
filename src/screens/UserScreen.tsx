import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../App';

type UserScreenProps = {
  route: RouteProp<RootStackParamList, "User">
}

export default function UserScreen({route}: UserScreenProps) {
  const {username} = route.params

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Bem vindo(a) {username}</Text>
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