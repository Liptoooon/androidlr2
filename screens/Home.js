import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Page 1" onPress={() => navigation.navigate('Page1')} />
      <Button title="Go to Page 2" onPress={() => navigation.navigate('Page2')} />
      <Button title="Go to Page 3" onPress={() => navigation.navigate('Page3')} />
      <Button title="Go to Page 4" onPress={() => navigation.navigate('Page4')} />
    </View>
  );
}
