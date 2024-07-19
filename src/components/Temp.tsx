import React from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { weatherStyles } from "../styles/weather.style";
import { WeatherUtils } from "../utils/weatherUtil";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Temp = () => {
  const days = useSelector((state: RootState) => state.weather.days);
  /** 온도값에 따른 온도계 아이콘 렌더링 해주는 함수 */
  const tempRenderIcon = (pTemp: string) => {
    const temp = Math.floor(Number(pTemp));
    if (temp <= 0) {
      return <FontAwesome6 name="temperature-empty" size={30} color="blue" />;
    } else if (temp > 0 && temp <= 10) {
      return <FontAwesome6 name="temperature-quarter" size={30} color="cyan" />;
    } else if (temp > 10 && temp <= 20) {
      return <FontAwesome6 name="temperature-half" size={30} color="gray" />;
    } else if (temp > 20 && temp <= 30) {
      return (
        <FontAwesome6
          name="temperature-three-quarters"
          size={30}
          color="orange"
        />
      );
    } else {
      return <FontAwesome6 name="temperature-full" size={30} color="red" />;
    }
  };

  return (
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
        days.map((item: any, idx: number) => (
          <View key={idx} style={weatherStyles.day}>
            <Text style={weatherStyles.date}>{item.dt_txt.split(" ")[0]}</Text>
            <View style={weatherStyles.tempBox}>
              <View style={weatherStyles.TableBox}>
                <Text style={weatherStyles.title}>온도</Text>
                {tempRenderIcon(item.main.temp)}
                <Text
                  style={[
                    weatherStyles.temp,
                    { color: WeatherUtils.getTempTextColor(item.main.temp) },
                  ]}
                >
                  {parseFloat(item.main.temp).toFixed(1)}°C
                </Text>
              </View>
              <View style={weatherStyles.subTableBox}>
                <View style={weatherStyles.detailTempBox}>
                  <Text style={weatherStyles.title}>최고</Text>
                  <Text
                    style={[
                      weatherStyles.subtitle,
                      {
                        color: WeatherUtils.getTempTextColor(
                          item.main.temp_max
                        ),
                      },
                    ]}
                  >
                    {parseFloat(item.main.temp).toFixed(1)}°C
                  </Text>
                </View>
                <View style={weatherStyles.detailTempBox}>
                  <Text style={weatherStyles.title}>최저</Text>
                  <Text
                    style={[
                      weatherStyles.subtitle,
                      {
                        color: WeatherUtils.getTempTextColor(
                          item.main.temp_min
                        ),
                      },
                    ]}
                  >
                    {parseFloat(item.main.temp).toFixed(1)}°C
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default Temp;
