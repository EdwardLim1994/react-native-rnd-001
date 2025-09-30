import { useRouter } from "expo-router";
import { Button } from "../components/Button";

export default function MainPage() {
  const router = useRouter();

  function onNavigateToProfile() {
    router.push("/profile");
  }

  return <Button text="Profile" onPress={onNavigateToProfile} />;
}
