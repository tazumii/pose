import { Provider } from "react-redux";
import store from "./src/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./src/navigation/RootStackNavigator";
import { StatusBar } from "expo-status-bar";


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStackNavigator />
          <StatusBar hidden={true} />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
