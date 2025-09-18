import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function MainPage() {
  const router = useRouter();

  function onNavigateToProfile() {
    router.push("/profile");
  }

  return (
    <View>
      <Text>This is main page</Text>
      <Pressable onPress={onNavigateToProfile}>
        <Text>Profile</Text>
      </Pressable>
    </View>
  );
}
