import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import TodoForm from './components/todoForm';

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
    {text: 'Play games', id: '4'},
    {text: 'Play games', id: '5'},
    {text: 'Play games', id: '6'},
    {text: 'Play games', id: '7'},
    {text: 'Play games', id: '8'},
    {text: 'Play games', id: '9'},
    {text: 'Play games', id: '10'},
    {text: 'Play games', id: '11'},
    {text: 'Play games', id: '12'},
  ]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* Start Header component */}
        <View>
          <Header todosCount={todos.length} />
        </View>
        {/* End Header component */}
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => <TodoItem item={item} />}
            />
          </View>
          <View style={styles.todoForm}>
            <TodoForm />
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
    marginStart: 16,
    marginEnd: 16,
  },
  list: {
    flex: 0.85,
    marginBottom: 12,
  },
  todoForm: {
    flex: 0.15,
  },
});
