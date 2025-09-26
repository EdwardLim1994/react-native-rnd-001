import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function MainPage() {
  const router = useRouter();

  function onNavigateToProfile() {
    router.push("/profile");
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>This is main page</Text>
      <Pressable style={style.button} onPress={onNavigateToProfile}>
        <Text style={style.buttonText}>Profile</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    rowGap: 20,
  },
  title: {},
  button: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 600,
    color: "white",
    display: "flex",
    justifyContent: "center",
  },
});
