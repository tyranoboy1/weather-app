import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screen/HomeScreen";
import ScreenLayout from "./src/components/layout/ScreenLayout";
import TempScreen from "./src/screen/TempScreen";
import { Provider } from "react-redux";
import store from "./src/store/store";
import WeatherScreen from "./src/screen/WeatherScreen";
import WindScreen from "./src/screen/WindScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenLayout>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home">
              {(props) => <HomeScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="temp" component={TempScreen} />
            <Stack.Screen name="weather" component={WeatherScreen} />
            <Stack.Screen name="wind" component={WindScreen} />
          </Stack.Navigator>
        </ScreenLayout>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
