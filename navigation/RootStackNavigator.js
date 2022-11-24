import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Confirmation from "../screens/Confirmation";
import Loading from "../screens/Loading";
import Permission from "../screens/Permission";
import Picture from "../screens/Picture";

const RootStack = createNativeStackNavigator();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Picture"
        component={Picture}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Permission"
        component={Permission}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}
