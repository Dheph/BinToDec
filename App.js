import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

// const [decimal, setDecimal] = useState('');
const [binary, setBinary] = useState('');
const [decimal, setDecimal] = useState('');

function converter(){
  
  if(binary.match(/^[0-1]+$/g) === null){
    alert('entre com um número entre 0 ou 1')
  }

  const reverseBinary = binary
    .split('') // percorre os dados
    .map(Number) // converter para um numero de string
    .reverse() //inverte a posição dos numeros

    console.log(reverseBinary)


    const result = reverseBinary.reduce(
      (accumulator,currentValue,index) => 

      accumulator + currentValue * Math.pow(2,index)
      
      )
      setDecimal(result)
      alert('resultado da conversão : ' + result)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bin To Dec</Text>

      <TextInput
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:30,
    fontWeight:'bold',
    fontStyle:'italic'
  },
  input: {
    textAlign:'center',
    backgroundColor:'#d3d3d3',
    borderWidth:1,
    borderColor:'black',
    borderStyle:'dashed',
    color:'#000',
    width:300,
    height:40,
    marginTop:20,
    borderRadius:30
  },
  button: {
    borderRadius:40,
    borderColor:'red',
    borderWidth:2,
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
