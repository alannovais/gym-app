import { View } from "native-base";
import { PropsWithRef } from "react";
import { Text } from "react-native";

export default function ItemsListedComponent(props: PropsWithRef<any>) {
  const { item, index } = props;
  return (
    <>
      <View
        key={index}
        style={{
          marginBottom: 20,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignSelf: "flex-start" }}>
          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: "red",
              borderRadius: 8,
            }}
          ></View>
        </View>
        <View style={{ width: 230 }}>
          <Text style={{ marginBottom: 8 }}>
            {item.name} {item.price && `${item.price} $`}
          </Text>
          <Text>{item.description}</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text>icon</Text>
        </View>
      </View>
    </>
  );
}
