import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {HomeScreen} from "./src/screens/HomeScreen"
import {PhotoScreen} from "./src/screens/PhotoScreen"
import { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { dataFetch } from "./src/redux/actions";
import { store } from "./src/redux/redux";
import AppLoading from "expo-app-loading";
import { Platform } from "react-native";

function App() {
  const Stack = createStackNavigator();
  const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();

  if (isLoading === true) {
    return (
      <AppLoading
        startAsync={(() => dispatch(dataFetch()))}
        onFinish={() => setisLoading(false)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? "#f4511e" : "#fff",
          },
          headerTintColor:  Platform.OS === 'android' ? "#fff" : "#f4511e",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Photo"
          component={PhotoScreen}
          options={({ route }) => ({
            headerTitle: route.params.description,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
