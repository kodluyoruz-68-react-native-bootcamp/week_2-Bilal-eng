import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default Header = ({todosCount}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>TODOS</Text>
      <Text style={styles.headerText}>{todosCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00e676',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    color: 'black',
  },
});
