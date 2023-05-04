import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import getMeteo from './api.js';
import DayItem from './dayItem.js';

export default function Principal() {
    const [dataMeteo, setData] = useState();
    const [ville, setVille] = useState();
    return (
    <View style={styles.container}>
        <TextInput onChangeText={(text) => setVille(text)} style={styles.input} placeholder={"Ville :"} value={ville} />
        <Button
  title="Récuperer les données météo"
  onPress={() => {
    getMeteo(ville).then((rep) => {
        console.log(rep);
      setData(rep.forecast);
    });
  }}
/>
        <FlatList data={dataMeteo} keyExtractor={(item) => item.day.toString()} renderItem={({item}) =>
          <DayItem jour={item}/>
        }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texte: {
    fontFamily: 'Comic Sans MS',
    fontSize: '3rem',
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});