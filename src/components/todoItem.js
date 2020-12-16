import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

export default TodoItem = ({item, onLongPressHandler, onPressHandler}) => {
  const [ispress, setIsPress] = useState(true);

  const changeColor = () => {
    if (ispress) {
      setIsPress(false);
    } else {
      setIsPress(true);
    }
  };

  return (
    <TouchableOpacity
      onLongPress={() => onLongPressHandler(item.id, ispress)}
      onPress={() => {
        console.log(ispress);
        onPressHandler(item.id, ispress);
        changeColor();
      }}>
      <View style={ispress ? styles.beforePressed : styles.afterPressed}>
        <Text
          style={
            ispress
              ? styles.textStyleBeforePressed
              : styles.textStyleAfterPressed
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
