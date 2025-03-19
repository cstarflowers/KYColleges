import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text><h1>Rise Up Academics</h1></Text>
      <Text>This page is empty for now. Check out <a href="/test"><b>Test.tsx</b></a> instead!</Text>
    </View>
  );
}
