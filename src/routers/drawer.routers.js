
import { Feather } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RotaTeste from "../screens/rotaTeste";
import RotaTesteDois from "../screens/rotaTesteDois";

const Drawer = createDrawerNavigator()

export default function DrawerRouters() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen
                options={{ tabBarIcon: () => <Feather name="home" size={30} color="red" /> }}
                name="rota1"
                component={RotaTeste}
            />

            <Drawer.Screen
                options={{ tabBarIcon: () => <Feather name="box" size={30} color="red" /> }}
                name="rota2"
                component={RotaTesteDois}
            />
        </Drawer.Navigator>
    )
}

