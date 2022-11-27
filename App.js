import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStackNavigator from "./src/navigation/RootStackNavigator";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
