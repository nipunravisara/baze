import React from 'react';
import {StyleSheet} from 'react-native';
import BaseButton, {BaseButtonProps} from '../base/Button';

const Button: React.FC<BaseButtonProps> = props => {
  return (
    <BaseButton
      {...props}
      buttonStyle={styles.button}
      titleStyle={styles.title}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000',
  },
  title: {
    color: '#ffff',
  },
});

export default Button;
