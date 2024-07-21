import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { weatherStyles } from "../styles/weather.style";

const Weather = () => {
  const days = useSelector((state: RootState) => state.weather.days);

  console.log("daY", days);
  return (
    <ScrollView
      horizontal
      contentContainerStyle={weatherStyles.scrollView}
      pagingEnabled
      showsHorizontalScrollIndicator
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
            <View style={weatherStyles.weatherBox}>
              <View style={weatherStyles.TableBox}>
                <Text style={weatherStyles.title}>날씨:</Text>
                <Text style={weatherStyles.weather}>
                  {item.weather[0].main}
                </Text>
              </View>
              <View style={weatherStyles.TableBox}>
                <Text style={weatherStyles.weatherDescription}>
                  {`( ${item.weather[0].description} )`}
                </Text>
              </View>
              <View style={weatherStyles.subDetailTableBox}>
                <View style={weatherStyles.detailWeatherBox}>
                  <Text style={weatherStyles.title}>강수량</Text>
                  <Text style={[weatherStyles.subtitle]}>
                    {item.rain?.["3h"]}(3h)
                  </Text>
                </View>
                <View style={weatherStyles.detailWeatherBox}>
                  <Text style={weatherStyles.title}>구름량</Text>
                  <Text style={[weatherStyles.subtitle]}>
                    {item.clouds.all}%
                  </Text>
                </View>
                <View style={weatherStyles.detailWeatherBox}>
                  <Text style={weatherStyles.title}>강수확률</Text>
                  <Text style={[weatherStyles.subtitle]}>{item.pop}%</Text>
                </View>
                <View style={weatherStyles.detailWeatherBox}>
                  <Text style={weatherStyles.title}>예보주기</Text>
                  <Text style={[weatherStyles.subtitle]}>
                    {item.sys.pod === "d" ? "낮" : "밤"}{" "}
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

export default Weather;
