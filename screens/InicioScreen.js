import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";

export default function InicioScreen({ navigation }) {
  const mascotas = [
    { id: "1", nombre: "Firulais" },
    { id: "2", nombre: "Michi" },
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>🐶 Mis Mascotas</Text>

      <FlatList
        data={mascotas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 15,
              marginVertical: 8,
              backgroundColor: "#f0f0f0",
              borderRadius: 10,
            }}
            onPress={() =>
              navigation.navigate("DetalleMascota", { mascota: item })
            }
          >
            <Text style={{ fontSize: 18 }}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
      />

      <Button
        title="➕ Agregar Mascota"
        onPress={() => alert("Función agregar")}
      />
    </View>
  );
}
