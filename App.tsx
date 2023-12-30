import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Button } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  FontAwesome5,
  Foundation,
  MaterialIcons,
} from "@expo/vector-icons";

export default function App() {
  const sizeIcons: number = 50;
  const colorIcons: string = "black";
  let yourDate = new Date();
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View
          style={{
            alignSelf: "stretch",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "blue",
          }}
        >
          <View style={styles.photo}></View>
        </View>
        <View style={styles.profile}>
          <View style={styles.photo}></View>
          <View>
            <Text>Alan Pereira</Text>
            <Text>Últ. avaliação: {yourDate.toISOString().split("T")[0]}</Text>
            <Text>
              última entrada no clube: {yourDate.toISOString().split("T")[0]}
            </Text>
            <Text>
              Últ. treino atribuído: {yourDate.toISOString().split("T")[0]}
            </Text>
          </View>
        </View>
        <View style={styles.positionsActionsButtons}>
          <View style={styles.iconsAndLabels}>
            <FontAwesome5
              name="calendar-alt"
              size={sizeIcons}
              color={colorIcons}
            />
            <Text>Marcar Aulas</Text>
          </View>
          <View style={styles.iconsAndLabels}>
            <FontAwesome5
              name="credit-card"
              size={sizeIcons}
              color={colorIcons}
            />
            <Text>Pagamentos</Text>
          </View>
          <View style={styles.iconsAndLabels}>
            <MaterialIcons name="history" size={sizeIcons} color={colorIcons} />
            <Text>Histórico</Text>
          </View>
        </View>
        <View style={styles.positionsActionsButtons}>
          <View style={styles.iconsAndLabels}>
            <FontAwesome5
              name="chart-bar"
              size={sizeIcons}
              color={colorIcons}
            />
            <Text>Evolução</Text>
          </View>
          <View style={styles.iconsAndLabels}>
            <AntDesign name="form" size={sizeIcons} color={colorIcons} />
            <Text>Adesão</Text>
          </View>
          <View style={styles.iconsAndLabels}>
            <Foundation
              name="clipboard-pencil"
              size={sizeIcons}
              color={colorIcons}
            />
            <Text>Treino</Text>
          </View>
        </View>
        {/* <MaterialIcons name="done" size={24} color="black" />
        <FontAwesome5 name="home" size={24} color="black" /> */}
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch",
    height: 200,
  },
  photo: {
    backgroundColor: "red",
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  positionsActionsButtons: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  iconsAndLabels: {
    alignItems: "center",
  },
});
