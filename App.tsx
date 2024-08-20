import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import UserScreen from './src/screens/UserScreen';

export type RootStackParamList = {
  Home: undefined;
  User: {username: string}
}

const {Navigator, Screen} = createStackNavigator<RootStackParamList>()

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
