import { StyleSheet, View } from "react-native";
import CardLobbyComponent from "../components/CardLobbyComponent";
import ClassComponent from "../components/ClassComponent";
import PersonalPerformace from "../components/PersonalPerformace";

export default function HomePage({ navigation }: any) {
  const sizeIcons: number = 50;
  const colorIcons: string = "black";
  const route = navigation;
  return (
    <>
      <View>
        <View style={styles.logoSpace}>
          <View style={styles.photo2}></View>
        </View>
        {/* <ProfileComponent /> */}
        <CardLobbyComponent slotComponent={<ClassComponent />} />
        <CardLobbyComponent slotComponent={<PersonalPerformace />} />
        {/* <MaterialIcons name="done" size={24} color="black" />
        <AntDesign name="form" size={sizeIcons} color={colorIcons} />
            <Text>Adesão</Text>
         */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logoSpace: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    borderBlockColor: "green",
    borderWidth: 1,
    height: 100,
  },
  photo2: {
    backgroundColor: "red",
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 10,
  },
  positionsActionsButtons: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    marginBottom: 20,
  },
  iconsAndLabels: {
    alignItems: "center",
  },
});
