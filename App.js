import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Alert,StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

const [decimal, setDecimal] = useState('');
const [binary, setBinary] = useState('');

function converter(){
  
  if(binary.match(/^[0-1]+$/g) === null){
    return Alert.alert('Valor Inserido Inválido','por favor digite um número entre 0 ou 1')
  }

  const reverseBinary = binary
    .split('') 
    .map(Number) 
    .reverse()

   console.log(reverseBinary.length)

    const resultDecimal = reverseBinary.reduce(
      (accumulator,currentValue,index) => 

      accumulator + currentValue * Math.pow(2,index)
      
      )

      setDecimal(resultDecimal)
      Alert.alert('Perfeito!!','Valor convertido com sucesso !!');
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor</Text>
      <View style={styles.resultBox}>

        <Text style={styles.resultText}> Decimal : {decimal} </Text>
  
      </View>

      <TextInput
      placeholder="Insira um Binário"
      style={styles.input}
      onChangeText={text => setBinary(text)}
      value={binary}
    />
      <TouchableOpacity
        style={styles.button}
        onPress={converter}
      >
        <Text style={styles.textButton}>Converter</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color:"#fff",
    marginBottom:20,
    fontSize:25,
    fontWeight:'bold',
    fontStyle:'italic'
  },
  resultBox: {
    width:200,
    height:150,
    backgroundColor:'transparent',
    borderWidth:2,
    borderColor:'#fff',
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
  },
  resultText: {
    padding:5,
    color:'#fff'
  },
  input: {
    textAlign:'center',
    backgroundColor:'transparent',
    borderWidth:2,
    borderColor:'#fff',
    color:'#fff',
    width:200,
    height:40,
    marginTop:20,
    borderRadius:30
  },
  button: {
    borderRadius:40,
    borderColor:'#14213D',
    borderWidth:5,
    width:250,
    marginTop:30,
    padding:20,
    backgroundColor:'#000'
  },
  textButton: {
    color:'#fff',
    fontSize:17,
    textAlign:'center'
  }
});
