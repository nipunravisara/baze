import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export interface BaseButtonProps extends TouchableOpacityProps {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
}

const BaseButton: React.FC<BaseButtonProps> = ({
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
      {...buttonProps}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 4,
    backgroundColor: '#007AFF',
  },
  title: {
    fontWeight: 600,
    color: '#ffff',
  },
});

export default BaseButton;
