import {useState} from 'react'
import { Text, Button, StyleSheet, View } from 'react-native'

const Contador = ({inicial = 0, passo = 1}) => {
    const [numero, setNumero] = useState(inicial)
    let inc = () => setNumero(numero + passo)
    let dec = () => setNumero(numero - passo)
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.controls}>
                    <Button title="  +  " color="#b4f198" onPress={inc}/>
                    <Text style={styles.number}>🍓 {numero} 🍓</Text>
                    <Button title="  -  " color="#ff80ab" onPress={dec}/>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    padding: 20,
  },
  container: {
    backgroundColor: '#ffe4ec', 
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ff99aa',
    shadowRadius: 6,
    marginBlockEnd: 250,
  },
  number: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ff4d6d', 
    marginHorizontal: 20,
  },
})
export default Contador