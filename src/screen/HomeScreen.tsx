import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Location from "expo-location";
import { API_KEY } from "@env";
import { LocationGeocodedAddress } from "expo-location";
import axios from "axios";
import { homeStyles } from "../styles/weather.style";
import { FontAwesome6 } from "@expo/vector-icons";
import { WeatherUtils } from "../utils/weatherUtil";
import { useDispatch, useSelector } from "react-redux";
import weatherSlice from "../slice/weatherSlice";
import { RootState } from "../store/store";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const [regionInfoData, setRegionInfoData] = useState<
    LocationGeocodedAddress[]
  >([]);
  const days = useSelector((state: RootState) => state.weather.days);
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
      dispatch(
        weatherSlice.actions.setDaysData(
          result.list.filter((weather: any) => {
            if (weather.dt_txt.includes("00:00:00")) {
              return weather;
            }
          })
        )
      );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      {ready ? (
        <View style={homeStyles.homeContainer}>
          <View style={homeStyles.regionTitleBox}>
            <Text style={homeStyles.regionName}>{regionInfoData[0]?.city}</Text>
            <Text style={homeStyles.districtName}>
              {regionInfoData[0]?.district}
            </Text>
          </View>
          <View>
            {days.length > 0 ? (
              <TouchableOpacity
                style={[
                  homeStyles.menuButton,
                  {
                    borderColor: WeatherUtils.getTempTextColor(
                      days[0]?.main.temp
                    ),
                  },
                ]}
                onPress={() => navigation.navigate("Temp")}
              >
                <FontAwesome6
                  name="temperature-quarter"
                  size={40}
                  color={WeatherUtils.getTempTextColor(days[0]?.main.temp)}
                />
                <Text
                  style={[
                    homeStyles.buttonTitle,
                    {
                      color: WeatherUtils.getTempTextColor(days[0]?.main.temp),
                    },
                  ]}
                >
                  온도
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      ) : null}
    </>
  );
};

export default HomeScreen;
