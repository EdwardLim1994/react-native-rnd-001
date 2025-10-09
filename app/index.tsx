import { useRouter } from "expo-router";
import { View, Text } from "react-native";

export default function MainPage() {
  const router = useRouter();

  function onNavigateToProfile() {
    router.push("/profile");
  }

  return (
    <View>
      <Text className="text-xl font-extrabold">Hello world</Text>
    </View>
  );
}
