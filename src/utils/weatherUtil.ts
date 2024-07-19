export class WeatherUtils {
  static getTempTextColor(pTemp: string): string {
    const temp = Math.floor(Number(pTemp));
    if (temp <= 0) {
      return "blue";
    } else if (temp > 0 && temp <= 10) {
      return "cyan";
    } else if (temp > 10 && temp <= 20) {
      return "gray";
    } else if (temp > 20 && temp <= 30) {
      return "orange";
    } else {
      return "red";
    }
  }
}
