import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";
import { Text } from "react-native";
import ListClassComponent from "./ListClassComponet";
import { PropsWithRef } from "react";
import { ClassesMock } from "../../mocks/GroupClassMock";

export default function ClassComponent(props: PropsWithRef<any>) {
  const sizeIcons: number = 35;
  const colorIcons: string = "black";
  const navigation = useNavigation();
  const classes = ClassesMock;
  return (
    <>
      {/* <Button onPress={() => navigation.navigate('Workout')} backgroundColor={"transparent"}>
        <FontAwesome5 name="calendar-alt" size={sizeIcons} color={colorIcons} />
      </Button> */}
      <Text>Marcar Aulas</Text>
      <Button backgroundColor={"transparent"} onPress={() => navigation.navigate('ScheduleClass', classes)}>
        <ListClassComponent classes={classes} />
      </Button>
    </>
  );
}
