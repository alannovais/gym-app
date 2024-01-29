import { ScrollView, Text, View } from "native-base";
import WorkoutDayComponent from "../components/WorkoutDayComponent";
import { WeekDays } from "../helpers/Contants";
import { WorkoutDayMock } from "../../mocks/WorkoutDayMock";

export default function Workout() {
  const weekDays = WeekDays;
  const workoutDay = WorkoutDayMock;
  return (
    <>
      <ScrollView>
        <View style={{ marginBottom: 85 }}>
          {weekDays.map((day, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "white",
              }}
            >
              <Text>{day}</Text>
              {workoutDay.map(
                (work, wIndex) =>
                  day === work.dayDefined && (
                    <View key={wIndex} style={{ marginBottom: 10 }}>
                      <Text>{work.name}</Text>
                      {work.routine.map((routine, rIndex) => (
                        <View key={rIndex} style={{  }}>
                          <Text>{routine.muscle}</Text>
                          <WorkoutDayComponent routine={routine} />
                        </View>
                      ))}
                    </View>
                  )
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
