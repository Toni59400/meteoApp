import { StyleSheet, View} from 'react-native';
import Principal from './components/Principal.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Principal/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
  },
  texte: {
    fontFamily: 'Comic Sans MS',
    fontSize: '3rem',

  },
});
