import { Tabs } from "expo-router";
import { Ionicons as Icon } from "@expo/vector-icons";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => <Icon name="person" size={size} />,
        }}
      />
    </Tabs>
  );
}
