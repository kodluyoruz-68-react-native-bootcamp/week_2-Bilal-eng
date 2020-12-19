import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({todosCount}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>TODOS</Text>
      <Text style={styles.headerText}>{todosCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    backgroundColor: '#00e676',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 5,
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Header;
