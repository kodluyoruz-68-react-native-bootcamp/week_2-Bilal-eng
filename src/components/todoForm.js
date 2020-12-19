import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

const TodoForm = ({submitHandler}) => {
  const [text, settext] = useState('');

  const onChangeTextHandler = (val) => {
    settext(val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          testID="input"
          style={{fontSize: 16}}
          placeholder="Type something to do..."
          onChangeText={onChangeTextHandler}
          clearButtonMode="while-editing"
          value={text}
        />
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          testID="button"
          style={styles.submitButton}
          onPress={() => {
            submitHandler(text.trim());
            settext('');
          }}>
          <Text style={styles.textStyle}>ADD TODO</Text>
        </TouchableOpacity>
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
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  viewStyle: {
    backgroundColor: '#DDD',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodoForm;
