import { Divider, Text, View } from "native-base";
import { StyleSheet } from "react-native";

export default function History() {
  const history = [
    {
      year: "2023",
      month: [
        {
          label: "Dezembro",
          days: [
            {
              day: new Date().toLocaleDateString(),
              typeAccess: [
                {
                  type: "Acesso",
                  getIn: new Date().toLocaleDateString(),
                  getOut: new Date().toLocaleDateString(),
                },
                {
                  type: "Toalha",
                  getIn: new Date().toLocaleDateString(),
                  getOut: new Date().toLocaleDateString(),
                },
                {
                  type: "Bebidas",
                  getIn: new Date().toLocaleDateString(),
                  getOut: new Date().toLocaleDateString(),
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      {history.map((hist, index) => (
        <View key={index}>
          {hist.month.map((m, index2) => (
            <View key={index2}>
              <Text style={styles.titleYear}>{`${m.label} ${hist.year}`}</Text>
              {m.days.map((d, index3) => (
                <View key={index3}>
                  {d.typeAccess.map((access, index4) => (
                    <View key={index4}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginBottom: 24,
                        }}
                      >
                        <View>
                          <Text style={{ marginBottom: 8 }}>
                            {d.day} {access.type}
                          </Text>
                          <Text>Duração: 2h:30min</Text>
                        </View>
                        <View>
                          <Text style={{ marginBottom: 8 }}>
                            Entrada: {access.getIn}
                          </Text>
                          <Text>Saída: {access.getOut}</Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              ))}
              <Divider />
            </View>
          ))}
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  titleHistory: {
    height: 25,
    padding: 2,
  },
  titleYear: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
