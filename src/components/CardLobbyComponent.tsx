import { Text, View } from "native-base";
import { PropsWithRef } from "react";
import { StyleSheet } from "react-native";

export default function CardLobbyComponent(props: PropsWithRef<any>) {
  const { title, body, slotComponent } = props;
  return (
    <>
      <View style={styles.card}>
        {title && <Text style={styles.cardTitle}>{title}</Text>}
        {body && <Text>{body}</Text>}
        {slotComponent && slotComponent}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginTop: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
