import { NavigationContainer } from "@react-navigation/native";
import DrawerRouters from "./drawer.routers";

export default function Routers() {

    return (
        <NavigationContainer>
            <DrawerRouters />
        </NavigationContainer>
    )

}