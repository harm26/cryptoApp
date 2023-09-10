import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screen/Home";
import Details from "./src/screen/Details";
import { Provider } from "react-redux";
import store from "./src/store/store";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitleAlign: "center",
              headerTitle: "Inicio",
              headerTitleStyle: { fontSize: 25 },
              headerTintColor: "#202026",
              headerStyle: {
                backgroundColor: "#8396c1",
              },
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerTitleAlign: "center",
              headerTitle: "Detalles",
              headerTitleStyle: { fontSize: 25 },
              headerTintColor: "#202026",
              headerStyle: {
                backgroundColor: "#8396c1",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
