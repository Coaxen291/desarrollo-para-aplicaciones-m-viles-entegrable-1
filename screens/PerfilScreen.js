import { Button, Text, View } from "react-native";

export default function PerfilScreen() {
  return (
    <View style={{ flex: 1, padding: 20, alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>👤 Perfil</Text>
      <Text>Nombre: Cristian Mejía</Text>
      <Text>Correo: cristian@example.com</Text>

      <Button
        title="⚙ Opciones de Configuración"
        onPress={() => alert("Configuración")}
      />
      <Button
        title="🚪 Cerrar Sesión"
        onPress={() => alert("Sesión cerrada")}
      />
    </View>
  );
}
