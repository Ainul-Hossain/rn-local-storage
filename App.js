import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function App() {
  const setData = async () => {
    await AsyncStorage.setItem('user', JSON.stringify([
      {
        name: 'Ainul Hossain',
        age: 25,
        passion: 'Programming'
      },
      {
        name: 'Ainul Hossain Sakib',
        age: 25,
        passion: 'Programming'
      }
    ]));
  }

  // const [users, setUsers] = useState(null);

  const getData = async () => {
    const name = await AsyncStorage.getItem('user');

    const x = JSON.parse(name);

    console.log(x);

    // setUsers(x);
  }

  const updateData = async () => {
    const name = await AsyncStorage.getItem('user');

    const x = JSON.parse(name);

    const y = x.map((val, i) => {
      if (val['name'] === 'Ainul Hossain Sakib') {
        x[i].name = 'Ainul Hossain Sakib Arif'
      }
      return val;
    })

    console.log(y);

    await AsyncStorage.setItem('user', JSON.stringify(y))

    const z = await AsyncStorage.getItem('user');
    console.log('New', z);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>

      <Button title='Set Data' onPress={setData} />
      <Text></Text>
      <Button title='Get Data' onPress={getData} />
      <Button title='Update Data' onPress={updateData} />

      {

      }

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
});
