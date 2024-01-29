import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { SafeAreaView, StyleSheet } from "react-native";
import Route from "./Route";

// const ProvidersTree = buildProvidersTree([]);
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <Route />
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
