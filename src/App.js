import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

const App = () => {
  const [todos, setTodos] = useState([]);

  //==== Start submit button function ====
  const submitHandler = (text) => {
    if (text.length !== 0) {
      setTodos((prevTodos) => {
        return [
          {text: text, id: Math.random().toString(), isDone: false},
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert(
        'OOPS!',
        "Todo shouldn't be able to add to list if input is empty",
        [{text: 'Ok', onPress: () => console.log('Alert closed')}],
      );
    }
  };
  //==== End submit button function ====

  //==== Start list item on long press function ====
  const onLongPressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  //==== End list item on long press ====

  //==== Start list item on press function ====
  const onPressHandler = (item) => {
    if (item.isDone) {
      setTodos((prevTodos) => {
        return prevTodos.map((el) =>
          el.id === item.id ? {...el, isDone: false} : el,
        );
      });
    } else {
      setTodos((prevTodos) => {
        return prevTodos.map((el) =>
          el.id === item.id ? {...el, isDone: true} : el,
        );
      });
    }
  };
  //==== End list item on press function ====

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* Start Header component */}
        <View>
          <Header
            todosCount={
              todos.filter((item) => {
                return !item.isDone;
              }).length
            }
          />
        </View>
        {/* End Header component */}

        <View style={styles.content}>
          {/* Start FlatList content */}
          <View style={styles.list}>
            <FlatList
              testID="list"
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
    flex: 0.75,
    marginBottom: 12,
  },
  todoForm: {
    flex: 0.25,
  },
});

export default App;
