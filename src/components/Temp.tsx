import React from "react";
import { View, Text } from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";
import { weatherStyles } from "../styles/weather.style";
import { ITemp } from "../interface/weather.interface";

const Temp = (props: ITemp) => {
  const { temp } = props;
  const tempRenderIcon = (pTemp: string) => {
    const temp = Math.floor(Number(pTemp));
    if (temp <= 0) {
      return <FontAwesome6 name="temperature-empty" size={30} color="blue" />;
    } else if (temp > 0 && temp <= 10) {
      return (
        <FontAwesome6 name="temperature-quarter" size={30} color="black" />
      );
    } else if (temp > 10 && temp <= 20) {
      return <FontAwesome6 name="temperature-half" size={30} color="red" />;
    } else if (temp > 20 && temp <= 30) {
      return (
        <FontAwesome6 name="temperature-three-quarters" size={30} color="red" />
      );
    } else {
      return <FontAwesome6 name="temperature-full" size={30} color="black" />;
    }
  };

  return (
    <View style={weatherStyles.tempBox}>
      {tempRenderIcon(temp)}
      <Text style={weatherStyles.temp}>{parseFloat(temp).toFixed(1)}</Text>
    </View>
  );
};

export default Temp;
