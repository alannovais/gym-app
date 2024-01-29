import {
  AntDesign,
  FontAwesome5,
  Foundation,
  MaterialIcons,
} from "@expo/vector-icons";
import { Button, View } from "native-base";
import { PropsWithRef } from "react";
import { StyleSheet, Text } from "react-native";

export default function Footer(props: PropsWithRef<any>) {
  const sizeIcons: number = 27;
  const sizeFont: number = 12;
  const colorIcons: string = "black";
  const routesName: any = {
    Home: "Home",
    Workout: "Workout",
    History: "History",
    Payments: "Payments",
    Shopping: "Shopping",
    Messages: "Messages",
  };
  const handleFooterNavigate = (name: string) => {
    props.navigation.navigate(routesName[name]);
  };
  return (
    <>
      <View style={styles.boxFooter}>
        <View style={styles.postionElements}>
          <Button
            backgroundColor={"transparent"}
            onPress={() => handleFooterNavigate("Workout")}
          >
            <View style={styles.iconsAndLabels}>
              <Foundation
                name="clipboard-pencil"
                size={sizeIcons}
                color={colorIcons}
              />
              <Text style={{ fontSize: sizeFont }}>Treino</Text>
            </View>
          </Button>
          <Button
            backgroundColor={"transparent"}
            onPress={() => handleFooterNavigate("History")}
          >
            <View style={styles.iconsAndLabels}>
              <MaterialIcons
                name="history"
                size={sizeIcons}
                color={colorIcons}
              />
              <Text style={{ fontSize: sizeFont }}>Histórico</Text>
            </View>
          </Button>
          <Button
            backgroundColor={"transparent"}
            onPress={() => handleFooterNavigate("Home")}
          >
            <View style={styles.iconsAndLabels}>
              <FontAwesome5 name="home" size={sizeIcons} color={colorIcons} />
              <Text style={{ fontSize: sizeFont }}>Meu espaço</Text>
            </View>
          </Button>

          <Button
            backgroundColor={"transparent"}
            onPress={() => handleFooterNavigate("Payments")}
          >
            <View style={styles.iconsAndLabels}>
              <FontAwesome5
                name="credit-card"
                size={sizeIcons}
                color={colorIcons}
              />
              <Text style={{ fontSize: sizeFont }}>Pagamentos</Text>
            </View>
          </Button>
          <Button
            backgroundColor={"transparent"}
            onPress={() => handleFooterNavigate("Messages")}
          >
            <View style={styles.iconsAndLabels}>
              <MaterialIcons
                name="mail-outline"
                size={sizeIcons}
                color="black"
              />
              <Text style={{ fontSize: sizeFont }}>Menssagens</Text>
            </View>
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  boxFooter: {
    backgroundColor: "#fff",
    borderColor: "lightgray",
    borderWidth: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  postionElements: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch",
    height: 70,
    padding: 10,
  },
  iconsAndLabels: {
    alignItems: "center",
    width: 100,
  },
});
