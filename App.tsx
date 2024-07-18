import React, { useState, useEffect } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import * as Location from "expo-location";
import { API_KEY } from "@env";
import { LocationGeocodedAddress } from "expo-location";
import axios from "axios";
import { weatherStyles } from "./src/styles/weather.style";
import { FontAwesome6 } from "@expo/vector-icons";
import Temp from "./src/components/Temp";

const App = () => {
  const [regionInfoData, setRegionInfoData] = useState<
    LocationGeocodedAddress[]
  >([]);
  const [days, setDays] = useState([]);
  const [ready, setReady] = useState(true);

  /** 날씨 정보를 가져오는 함수 */
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

      setRegionInfoData(location);

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const result = await res.data;
      setDays(
        result.list.filter((weather: any) => {
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

  console.log("dat", days);
  console.log("regionInfoData", regionInfoData);

  return (
    <View style={weatherStyles.container}>
      {ready ? (
        <>
          <View style={weatherStyles.regionTitleBox}>
            <Text style={weatherStyles.regionName}>
              {regionInfoData[0]?.city}
            </Text>
            <Text style={weatherStyles.districtName}>
              {regionInfoData[0]?.district}
            </Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={weatherStyles.weather}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {days.length < 0 ? (
              <View style={weatherStyles.day}>
                <ActivityIndicator
                  color="white"
                  size="large"
                  style={{ marginTop: 10 }}
                />
              </View>
            ) : (
              days.map((item: any, idx) => (
                <View key={idx} style={weatherStyles.day}>
                  <Text style={weatherStyles.date}>
                    {item.dt_txt.split(" ")[0]}
                  </Text>
                  <Temp temp={item.main.temp} />
                  {/* <Text style={weatherStyles.description}>
                    {item.weather[0].main}
                  </Text>
                  <Text>{item.weather[0].description}</Text> */}
                </View>
              ))
            )}
          </ScrollView>
        </>
      ) : null}
    </View>
  );
};

export default App;
