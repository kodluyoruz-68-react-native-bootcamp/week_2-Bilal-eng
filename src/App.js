import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, Text, StyleSheet} from 'react-native';
import Header from './components/header';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

export default App = () => {
  const [todos, setTodos] = useState([
    {text: 'Buy coffe', id: '1'},
    {text: 'Do homework', id: '2'},
    {text: 'Play games', id: '3'},
  ]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* Start Header component */}
        <View style={{flex: 1}}>
          <Header />
        </View>
        {/* End Header component */}
        <View style={styles.content}>
          <View style={styles.list}>
            {/* <FlatList
              data={todos}
              renderItem={({item}) => <Text>{item.text}</Text>}
            /> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    margin: 20,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
