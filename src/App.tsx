import { StyleSheet, View, ImageBackground } from 'react-native';
import Contador from './contador';

export default function App() {
  return (
    <ImageBackground source={require('../assets/1000247244.jpg')} resizeMode="cover" style={styles.background}>
      <View style={styles.container}>
        <Contador inicial={10}
                  passo={1} />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
