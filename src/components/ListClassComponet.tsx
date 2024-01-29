import { Divider } from "native-base";
import { ComponentProps } from "react";
import { Text, View } from "react-native";
import ItemsListedComponent from "./ItemsListedComponent";


export default function ListClassComponent(props: ComponentProps<any>) {
  const {classes} = props;
  const myClass: number[] = [1];
  return (
    <>
      <View>
        <Text>Aulas Reservadas</Text>
        {classes.map(
          (item, index: number) =>
            myClass.includes(item.id) && (
              <ItemsListedComponent item={item} index={index} />
            )
        )}
      </View>
      <Divider />
      <View>
        <Text>Aulas Disponíveis</Text>
        {classes.map(
          (item, index: number) =>
            !myClass.includes(item.id) && (
              <ItemsListedComponent item={item} index={index} />
            )
        )}
      </View>
    </>
  );
}
