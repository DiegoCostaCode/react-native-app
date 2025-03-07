
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RotaTeste from "../screens/rotaTeste";
import RotaTesteDois from "../screens/rotaTesteDois";

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                options={{ tabBarIcon: () => <Feather name="home" size={30} color="red" /> }}
                name="rota1"
                component={RotaTeste}
            />

            <Tab.Screen
                options={{ tabBarIcon: () => <Feather name="box" size={30} color="red" /> }}
                name="rota2"
                component={RotaTesteDois}
            />
        </Tab.Navigator>
    )
}

