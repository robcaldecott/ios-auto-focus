import * as React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function Screen1(props) {
  return (
    <View style={styles.screen}>
      <Pressable
        onPress={() => {
          props.navigation.navigate("Screen2");
        }}
      >
        <Text>Next screen</Text>
      </Pressable>
    </View>
  );
}

function Screen2(props) {
  const [blurCount, setBlurCount] = React.useState(0);

  return (
    <View style={styles.screen}>
      <TextInput
        autoFocus
        onBlur={() => {
          setBlurCount((count) => count + 1);
        }}
      />

      <Text>Blur count: {blurCount}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "none" }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
});
