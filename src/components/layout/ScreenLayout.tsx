import React from "react";
import { Text, View } from "react-native";
import { layoutStyles } from "../../styles/weather.style";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={layoutStyles.container}>
      {children}
      <View style={layoutStyles.footer}>
        <Text>상업적 목적이 아닌 포트폴리오용으로 제작되었습니다.</Text>
      </View>
    </View>
  );
};

export default ScreenLayout;
