import { Dimensions, StyleSheet } from "react-native";

/** 화면 너비 */
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const homeStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  regionTitleBox: {
    flex: 0.2,
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
  menuButton: {
    width: SCREEN_WIDTH * 0.25,
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 50,
    borderWidth: 1.5,
    gap: 10,
  },
  buttonTitle: {
    fontSize: 20,
    color: "red",
    fontWeight: 600,
  },
});

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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  TableBox: {
    width: SCREEN_WIDTH * 0.6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  subTableBox: {
    width: SCREEN_WIDTH * 0.7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 13,
    marginTop: 10,
  },
  detailTempBox: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
  },
  subtitle: {
    fontSize: 40,
    fontWeight: 500,
  },
  temp: {
    fontSize: 70,
    marginLeft: 10,
  },
  description: {
    fontSize: 60,
    marginTop: -30,
  },
});
