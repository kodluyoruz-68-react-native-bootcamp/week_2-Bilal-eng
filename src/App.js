import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  Alert,
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
  ]);

  const [tempTodos, setTempTodos] = useState([]);

  //==== Start submit button function ====
  const submitHandler = (text) => {
    if (text.length !== 0) {
      setTodos((prevTodos) => {
        return [{text: text, id: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', "Todo's text mustn't be empty", [
        {text: 'Ok', onPress: () => console.log('Alert closed')},
      ]);
    }
  };
  //==== End submit button function ====

  //==== Start list item on long press function ====
  const onLongPressHandler = (id) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id != id);
    });
  };
  //==== End list item on long press ====

  //==== Start list item on press function ====
  const onPressHandler = (id, ispress) => {
    // console.log(id);
    // if (ispress) {
    //   setTempTodos((tempTodos) => {
    //     return [{text: id.text, id: id}, ...tempTodos];
    //   });
    // } else {
    //   setTempTodos((todos) => {
    //     return todos.filter((todo) => todo.id != id);
    //   });
    // }

    console.log(tempTodos.length);
    // if (!ispress) {
    //   todos.length - 1;
    // } else {
    //   todos.length + 1;
    // }
    // setTodos((todos) => {
    //   return todos.filter((todo) => todo.id != id);
    // });
  };
  //==== End list item on long press ====

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* Start Header component */}
        <View>
          <Header todosCount={todos.length - tempTodos.length} />
        </View>
        {/* End Header component */}

        <View style={styles.content}>
          {/* Start FlatList content */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem
                  item={item}
                  onLongPressHandler={onLongPressHandler}
                  onPressHandler={onPressHandler}
                />
              )}
            />
          </View>
          {/* End FlatList content */}

          {/* Start TodoForm component */}
          <View style={styles.todoForm}>
            <TodoForm submitHandler={submitHandler} />
          </View>
          {/* End TodoForm component */}
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
