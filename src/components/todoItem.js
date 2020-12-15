import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default TodoItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 16,
    borderColor: '#00e676',
    backgroundColor: '#00e676',
    borderWidth: 1,
    borderRadius: 10,
    color: 'black',
    fontSize: 20,
  },
});
