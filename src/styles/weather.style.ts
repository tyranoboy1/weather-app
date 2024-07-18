import { Dimensions, StyleSheet } from "react-native";

/** 화면 너비 */
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const weatherStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  regionTitleBox: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  regionName: {
    fontSize: 50,
    fontWeight: "500",
  },
  districtName: {
    fontSize: 30,
    fontWeight: "500",
    marginLeft: 10,
  },
  weather: {
    paddingVertical: 20,
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  date: {
    fontSize: 30,
    fontWeight: "500",
  },
  tempBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  temp: {
    fontSize: 80,
  },
  description: {
    fontSize: 60,
    marginTop: -30,
  },
});
