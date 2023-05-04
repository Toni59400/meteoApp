// Components/ImageItem.js import React from 'react'; 
import { StyleSheet, View, Text, Image } from 'react-native'; 

export default function DayItem(jour) { 
  
  //console.log(img); 
  console.log(jour);
  return ( 

    <View style={styles.main_container}> 
      <View style={{ flexDirection: 'row' }}> 
        <Image style={{ width: "20px", height: "20px" }} source={{ uri: "../assets/soleil.png" }} />
        <Text style={styles.title_text}>{jour.jour.day}</Text>
        <Text style={styles.title_text}>{(jour.jour.tmin+jour.jour.tmax)/2}°C</Text>
      </View> 
    </View> 
  ); 
} 
    
const styles = StyleSheet.create({ 
  main_container: { 
    height: 100, 
    flex: 1, 
    marginTop: 5, 
    marginLeft: 5, 
    marginRight: 5, 
    flexDirection: 'row', 
  }, 
  title_text: { 
    marginLeft: 5, 
  }, 
});