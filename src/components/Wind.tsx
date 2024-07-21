import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { weatherStyles } from "../styles/weather.style";

const Wind = () => {
  const days = useSelector((state: RootState) => state.weather.days);

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
              <View style={weatherStyles.subDetailTableBox}>
                <View style={weatherStyles.detailWeatherBox}>
                  <Text style={weatherStyles.title}>바람 속도</Text>
                  <Text style={[weatherStyles.subtitle]}>
                    {item.wind.speed}m/s
                  </Text>
                </View>
                <View style={weatherStyles.detailWeatherBox}>
                  <Text style={weatherStyles.title}>바람 방향</Text>
                  <Text style={[weatherStyles.subtitle]}>{item.wind.deg}°</Text>
                </View>
                <View style={weatherStyles.detailWeatherBox}>
                  <Text style={weatherStyles.title}>돌풍 속도</Text>
                  <Text style={[weatherStyles.subtitle]}>
                    {item.wind.gust}m/s
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

export default Wind;
