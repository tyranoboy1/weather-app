import React, { useState, useEffect } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

const {width: SCREEN_WIDTH } = Dimensions.get("window")
export default function App() {
  const [city, setCity] = useState("Loading...")
  const [location , setLocation] = useState()
  const [ready, setReady] = useState(true) 
  const ask = async() => {
    /** 사용자에게 위치 권한 물어보기 */
    const permission = await Location.requestForegroundPermissionsAsync();
    if(permission.granted){
      setReady(false)
    }
    const {coords : {latitude,longitude }} = await Location.getCurrentPositionAsync({accuracy:5})
    const location = await Location.reverseGeocodeAsync({latitude, longitude},{useGoogleMaps:false})
    setCity(location[0].city)
  }
  useEffect(() => {
    ask()
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.weather} pagingEnabled showsHorizontalScrollIndicator={false}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'tomato'
  },
  city: {
    flex:1.2,
    justifyContent:'center',
    alignItems:'center'
  },
  cityName: {
    fontSize:68,
    fontWeight:"500"
  },
  weather: {
    backgroundColor:'red'
  },
  day:{
    width: SCREEN_WIDTH,
    alignItems:'center',
  },
  temp: {
    fontSize: 158,
    marginTop:50,
  },
  description: {
    fontSize:60,
    marginTop: -30,
  }
})
