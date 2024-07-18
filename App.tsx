import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Location from "expo-location";
import { API_KEY } from "@env";

/** 화면 너비 */
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const App = () => {
  const [regionInfoData, setRegionInfoData] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ready, setReady] = useState(true);

  const getWeather = async () => {
    try {
      /** 사용자에게 위치 권한 물어보기 */
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        setReady(false);
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: 5 });

      const location = await Location.reverseGeocodeAsync(
        { latitude, longitude },
        { useGoogleMaps: false }
      );

      console.log("location", location);
      setRegionInfoData(location[0].city || "");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const json = await res.json();
      setDays(
        json.list.filter((weather: any) => {
          if (weather.dt_txt.includes("00:00:00")) {
            return weather;
          }
        })
      );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{regionInfoData}</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.weather}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {days?.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator
              color="white"
              size="large"
              style={{ marginTop: 10 }}
            />
          </View>
        ) : (
          days?.map((item: any, idx) => {
            return (
              <View key={idx} style={styles.day}>
                <Text style={styles.temp}>
                  {parseFloat(item.main.temp).toFixed(1)}
                </Text>
                <Text style={styles.description}>{item.weather[0].main}</Text>
                <Text>{item.weather[0].description}</Text>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    fontSize: 158,
    marginTop: 50,
  },
  description: {
    fontSize: 60,
    marginTop: -30,
  },
});
