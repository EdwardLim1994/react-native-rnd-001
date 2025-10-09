import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { signal, effect } from "@preact/signals-react";
import { View, Text } from "react-native";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

SplashScreen.preventAutoHideAsync();

export default function MainLayout() {
  const isAppReady = signal(false);
  const isLoading = signal(true);

  effect(() => {
    async function prepare() {
      setTimeout(() => {
        isLoading.value = true;
      }, 5000);
    }
    isAppReady.value = true;

    prepare();
  });

  effect(() => {
    if (isAppReady.value) {
      SplashScreen.hideAsync();
    }
  });

  if (!isAppReady.value && isLoading.value) {
    return (
      <GluestackUIProvider mode="dark">
        <View>
          <Text>Loading...</Text>
        </View>
      </GluestackUIProvider>
    );
  }

  return <Stack />;
}
