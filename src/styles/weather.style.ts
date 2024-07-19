import { Dimensions, StyleSheet } from "react-native";

/** 화면 너비 */
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

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
    fontWeight: 600,
  },
});

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export const tempStyles = StyleSheet.create({
  scrollView: {
    paddingVertical: 20,
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
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  date: {
    fontSize: 30,
    fontWeight: "500",
  },
  tempBox: {
    width: SCREEN_WIDTH,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    gap: 30,
  },
  TableBox: {
    width: SCREEN_WIDTH * 0.7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  subTableBox: {
    width: SCREEN_WIDTH * 0.6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 13,
  },
  subDetailTableBox: {
    width: SCREEN_WIDTH * 0.6,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 30,
  },
  detailTempBox: {
    flexDirection: "column",
    alignItems: "center",
  },
  feelLikeBox: {
    width: SCREEN_WIDTH * 0.7,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 500,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 500,
  },
  temp: {
    fontSize: 105,
    marginLeft: 10,
  },
  description: {
    fontSize: 60,
    marginTop: -30,
  },
});
