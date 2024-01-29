import { Text, View } from "native-base";
import { StyleSheet } from "react-native";

export default function ProfileComponent() {
  let yourDate = new Date();
  return (
    <View style={styles.profile}>
      <View style={styles.photo}></View>
      <View>
        <Text>Alan Pereira</Text>
        <Text>Últ. avaliação: {yourDate.toISOString().split("T")[0]}</Text>
        <Text>
          Últ. entrada no clube: {yourDate.toISOString().split("T")[0]}
        </Text>
        <Text>
          Últ. treino atribuído: {yourDate.toISOString().split("T")[0]}
          {/* Number Workout on month */}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    height: 100,
  },
  photo: {
    backgroundColor: "red",
    height: 75,
    width: 75,
    borderRadius: 50,
    marginRight: 10,
  },
});
