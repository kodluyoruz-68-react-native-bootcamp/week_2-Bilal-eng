import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export default TodoForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={{fontSize: 16}}
          placeholder="Type something to do..."
        />
      </View>
      <View style={styles.submitButton}>
        <Button color="black" title="ADD TODO" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
    borderRadius: 10,
    padding: 10,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 16,
    paddingStart: 16,
    justifyContent: 'center',
    height: 40,
  },
  submitButton: {
    backgroundColor: '#DDD',
    borderRadius: 5,
    justifyContent: 'center',
  },
});
