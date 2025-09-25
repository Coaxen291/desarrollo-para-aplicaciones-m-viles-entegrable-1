import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetalleMascotaScreen from "./screens/DetalleMascotaScreen.js";
import InicioScreen from "./screens/InicioScreen.js";
import PerfilScreen from "./screens/PerfilScreen.js";
import RecordatoriosScreen from "./screens/RecordatoriosScreen.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function InicioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="DetalleMascota" component={DetalleMascotaScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Mascotas") {
              iconName = "paw";
            } else if (route.name === "Recordatorios") {
              iconName = "calendar";
            } else if (route.name === "Perfil") {
              iconName = "person";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Mascotas" component={InicioStack} />
        <Tab.Screen name="Recordatorios" component={RecordatoriosScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
