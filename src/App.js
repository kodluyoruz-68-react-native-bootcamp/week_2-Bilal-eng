import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello Message!</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
