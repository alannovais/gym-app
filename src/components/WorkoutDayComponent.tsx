import { Checkbox, Text, View } from "native-base";
import { StyleSheet } from "react-native";

export default function WorkoutDayComponent(props: any) {
  const { routine } = props;
  return (
    <>
      {routine.exercises.map((exercise: any, eIndex: any) => (
        <View
          key={eIndex}
          style={{
            flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-between",
            padding: 8
          }}
        >
          <View>
            <Text style={{ width: 200, backgroundColor: "red" }}>
              {exercise?.name ? exercise.name : ""}
            </Text>
          </View>
          {/** define character limit for exercise */}
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.spaceBetweenTreine}>
              {exercise?.sets ? exercise.sets : ""}
            </Text>
            {exercise.sets && exercise.reps && (
              <Text style={styles.spaceBetweenTreine}> x </Text>
            )}
            <Text style={styles.spaceBetweenTreine}>
              {exercise?.reps ? exercise.reps : ""}
            </Text>
            <Text style={styles.spaceBetweenTreine}>
              {exercise?.weight ? exercise.weight : ""}
            </Text>
            <Text style={styles.spaceBetweenTreine}>
              {exercise?.during ? exercise.during : ""}
            </Text>
            <Checkbox
              value="test"
              accessibilityLabel="This is a dummy checkbox"
            ></Checkbox>
          </View>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  spaceBetweenTreine: {
    marginLeft: 8,
  },
});
