import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "native-base";
import Footer from "./src/components/Footer";
import History from "./src/pages/History";
import HomePage from "./src/pages/HomePage";
import Messages from "./src/pages/Messages";
import Payments from "./src/pages/Payments";
import Shopping from "./src/pages/Shopping";
import Workout from "./src/pages/Workout";
import { StyleSheet } from "react-native";
import { ScheduleClass } from "./src/pages/ScheduleClass";

export default function Route() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            contentStyle: {
              padding: 12,
            },
            headerTitle: () => false,
            headerRight: (props) => (
              <Button
                {...props}
                onPress={() => {
                  navigation.navigate("Shopping");
                }}
                backgroundColor={"transparent"}
              >
                <View style={styles.photo}></View>
              </Button>
            ),
            headerLeft: (props) => (
              <Button
                {...props}
                onPress={() => {
                  navigation.navigate("Shopping");
                }}
                backgroundColor={"transparent"}
              >
                <AntDesign name="shoppingcart" size={22} color="black" />
              </Button>
            ),
            headerBackVisible: false,
          }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Workout" component={Workout} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Payments" component={Payments} />
          <Stack.Screen name="Shopping" component={Shopping} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="ScheduleClass" component={ScheduleClass} />
        </Stack.Group>
      </Stack.Navigator>
      <Footer navigation={navigation} />
    </>
  );
}
const styles = StyleSheet.create({
  photo: {
    backgroundColor: "red",
    height: 27,
    width: 27,
    borderRadius: 50,
    marginRight: 10,
  },
});