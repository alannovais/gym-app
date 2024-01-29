import { Checkbox, View } from "native-base";
import { Text } from "react-native";

export function ScheduleClass({ route, navigation }) {
    const classes = route.params;

    return <>
        <Text>List of Class</Text>
        <View>
            {classes.map(
                (classDay, index) =>
                    <View key={index}>
                        <Text >{classDay.name}</Text>
                        <Text >{classDay.capacity}</Text>
                        <Checkbox value="{}"></Checkbox>
                    </View>
            )}
        </View>
    </>;
}