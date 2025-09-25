import { Button, Text, View } from "react-native";

export default function DetalleMascotaScreen({ route, navigation }) {
  const { mascota } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>🐾 {mascota.nombre}</Text>
      <Text>Raza: Desconocida</Text>
      <Text>Edad: 2 años</Text>

      <Button
        title="Ver Recordatorios"
        onPress={() => navigation.navigate("Recordatorios")}
      />
      <Button title="Historial de salud" onPress={() => alert("Historial")} />
    </View>
  );
}
