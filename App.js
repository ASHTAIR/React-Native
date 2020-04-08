import React from 'react';
<<<<<<< HEAD
import Campobase from './componentes/CampobaseComponent';

export default class App extends React.Component {
  render() {
    return (
      <Campobase />
    );
  }
}

=======
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo! 
        ¿Cómo va la cuarentena? </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> e760ff156f5ffabc7a2ad1327d53018d6d2c0679
