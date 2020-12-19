import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const TodoItem = ({item, onLongPressHandler, onPressHandler}) => {
  return (
    <TouchableOpacity
      onLongPress={() => onLongPressHandler(item.id)}
      onPress={() => {
        onPressHandler(item);
      }}>
      <View style={item.isDone ? styles.afterPressed : styles.beforePressed}>
        <Text
          style={
            item.isDone
              ? styles.textStyleAfterPressed
              : styles.textStyleBeforePressed
          }>
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  beforePressed: {
    padding: 16,
    marginTop: 16,
    borderColor: '#00e676',
    backgroundColor: '#00e676',
    opacity: 1,
    borderWidth: 1,
    borderRadius: 10,
  },
  afterPressed: {
    padding: 16,
    marginTop: 16,
    borderColor: '#00e676',
    backgroundColor: '#00e676',
    opacity: 0.3,
    borderWidth: 1,
    borderRadius: 10,
  },
  textStyleBeforePressed: {
    color: 'black',
    fontSize: 16,
  },
  textStyleAfterPressed: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'black',
    fontSize: 16,
  },
});

export default TodoItem;
