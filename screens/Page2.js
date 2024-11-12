import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const data = [
  { id: '1', title: 'Item 1 - Page 2' },
  { id: '2', title: 'Item 2 - Page 2' },
  { id: '3', title: 'Item 3 - Page 2' },
];

export default function Page2({ navigation }) {
  return (
    <View>
      <Text>Page 2</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}/>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}