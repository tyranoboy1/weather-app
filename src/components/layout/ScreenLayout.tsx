import React from "react";
import { View } from "react-native";
import { weatherStyles } from "../../styles/weather.style";

const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return <View style={weatherStyles.container}>{children}</View>;
};

export default ScreenLayout;
