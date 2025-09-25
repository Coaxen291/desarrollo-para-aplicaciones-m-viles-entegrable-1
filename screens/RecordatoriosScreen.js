import { Button, FlatList, Text, View } from "react-native";

export default function RecordatoriosScreen() {
  const recordatorios = [
    { id: "1", titulo: "Vacuna Rabia", fecha: "23/09/2025, 10:00 AM" },
    { id: "2", titulo: "Paseo", fecha: "24/09/2025, 5:00 PM" },
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>📅 Recordatorios</Text>

      <FlatList
        data={recordatorios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              marginVertical: 8,
              backgroundColor: "#e0f7fa",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 18 }}>{item.titulo}</Text>
            <Text>{item.fecha}</Text>
          </View>
        )}
      />

      <Button
        title="➕ Agregar Recordatorio"
        onPress={() => alert("Nuevo recordatorio")}
      />
    </View>
  );
}
