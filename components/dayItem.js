// Components/ImageItem.js import React from 'react'; 
import { StyleSheet, View, Text, Image } from 'react-native';

function formatDateWithOffset(offset) {
    const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  
    const date = new Date();
    date.setDate(date.getDate() + offset);
  
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;
  }

export default function DayItem(jour) { 
    const todayy = new Date();
    var uriSource = require("/assets/soleil.png");
    var tmpMoy = (jour.jour.tmin+jour.jour.tmax)/2;
    if(tmpMoy>=15){
        uriSource = require("/assets/soleil.png");
    }else if(tmpMoy>10 && tmpMoy<15){
        uriSource = require("/assets/nuage.jpg");
    }else{
        uriSource = require("/assets/pluit.jpg");
    }
    //console.log(img); 
  
  return ( 

    <View style={styles.main_container}> 
      <View style={{ flexDirection: 'row' }}> 
        <Image style={{ width: 20, height: 20 }} source={uriSource} />
        <Text style={styles.title_text}>{formatDateWithOffset(jour.jour.day)}</Text>
        <Text style={styles.title_text}> : {tmpMoy}°C</Text>
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