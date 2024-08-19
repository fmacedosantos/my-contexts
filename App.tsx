import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import UserScreen from './src/screens/UserScreen';

const {Navigator, Screen} = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' component={HomeScreen}/>
        <Screen name='User' component={UserScreen}/>
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
