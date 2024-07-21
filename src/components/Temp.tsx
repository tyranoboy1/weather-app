import React from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { tempStyles } from "../styles/weather.style";
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
      contentContainerStyle={tempStyles.scrollView}
      pagingEnabled
      showsHorizontalScrollIndicator
    >
      {days.length < 0 ? (
        <View style={tempStyles.day}>
          <ActivityIndicator
            color="white"
            size="large"
            style={{ marginTop: 10 }}
          />
        </View>
      ) : (
        days.map((item: any, idx: number) => (
          <View key={idx} style={tempStyles.day}>
            <Text style={tempStyles.date}>{item.dt_txt.split(" ")[0]}</Text>
            <View style={tempStyles.tempBox}>
              <View style={tempStyles.TableBox}>
                {tempRenderIcon(item.main.temp)}
                <Text
                  style={[
                    tempStyles.temp,
                    { color: WeatherUtils.getTempTextColor(item.main.temp) },
                  ]}
                >
                  {parseFloat(item.main.temp).toFixed(1)}°C
                </Text>
              </View>

              <View style={tempStyles.subDetailTableBox}>
                <View style={tempStyles.detailTempBox}>
                  <Text style={tempStyles.title}>최고</Text>
                  <Text
                    style={[
                      tempStyles.subtitle,
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
                <View style={tempStyles.detailTempBox}>
                  <Text style={tempStyles.title}>최저</Text>
                  <Text
                    style={[
                      tempStyles.subtitle,
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
                <View style={tempStyles.detailTempBox}>
                  <Text style={tempStyles.title}>체감 온도</Text>
                  <Text
                    style={[
                      tempStyles.subtitle,
                      {
                        color: WeatherUtils.getTempTextColor(
                          item.main.feels_like
                        ),
                      },
                    ]}
                  >
                    {parseFloat(item.main.feels_like).toFixed(1)}°C
                  </Text>
                </View>
                <View style={tempStyles.detailTempBox}>
                  <Text style={tempStyles.title}>습도</Text>
                  <Text style={[tempStyles.subtitle]}>
                    {item.main.humidity}%
                  </Text>
                </View>
                <View style={tempStyles.detailTempBox}>
                  <Text style={tempStyles.title}>대기압</Text>
                  <Text style={[tempStyles.subtitle]}>
                    {item.main.pressure}hPa
                  </Text>
                </View>
                <View style={tempStyles.detailTempBox}>
                  <Text style={tempStyles.title}>해수면 대기압</Text>
                  <Text style={[tempStyles.subtitle]}>
                    {item.main.sea_level}hPa
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
