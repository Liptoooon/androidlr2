import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';

const Stack = createNativeStackNavigator();

function Start() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Start;
