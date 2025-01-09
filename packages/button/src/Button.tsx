import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
}

const Button: React.FC<ButtonProps> = ({
  title,
  buttonStyle,
  titleStyle,
  activeOpacity,
  ...buttonProps
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      activeOpacity={activeOpacity || 0.7}
      {...buttonProps}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 4,
    backgroundColor: "#000000", // Base Button's color
  },
  title: {
    fontWeight: "600",
    color: "#ffff", // Base Button's title color
  },
});

export default Button;
