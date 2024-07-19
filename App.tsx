import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screen/HomeScreen";
import ScreenLayout from "./src/components/layout/ScreenLayout";
import TempScreen from "./src/screen/TempScreen";
import { Provider } from "react-redux";
import store from "./src/store/store";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenLayout>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home">
              {(props) => <HomeScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Temp" component={TempScreen} />
          </Stack.Navigator>
        </ScreenLayout>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
