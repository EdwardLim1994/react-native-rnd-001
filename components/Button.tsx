import React from "react";
import { Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import styled from "@emotion/native";

export interface ButtonProps {
  text: string;
  onPress?: () => void;
}

export const Button = ({ text, onPress }: ButtonProps) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => (scale.value = withSpring(0.9))}
      onPressOut={() => (scale.value = withSpring(1.0))}
    >
      <AnimatedButtonContainer style={animatedStyle}>
        <ButtonText>{text}</ButtonText>
      </AnimatedButtonContainer>
    </Pressable>
  );
};

const Container = styled.View`
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: blue;
  padding: 12px 10px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

const AnimatedButtonContainer = Animated.createAnimatedComponent(Container);
