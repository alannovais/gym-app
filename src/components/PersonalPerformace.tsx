import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native";

export default function PersonalPerformace() {
  const sizeIcons: number = 50;
  const colorIcons: string = "black";
  return (
    <>
      <FontAwesome5 name="chart-bar" size={sizeIcons} color={colorIcons} />
      <Text>Evolução</Text>
    </>
  );
}
