import React from "react";
import { View } from "react-native";
import { layoutStyles } from "../../styles/weather.style";

const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return <View style={layoutStyles.container}>{children}</View>;
};

export default ScreenLayout;
