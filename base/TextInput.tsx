import React from 'react';
import {Control, Controller, FieldError} from 'react-hook-form';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  TextStyle,
  View,
} from 'react-native';

export interface BaseTextInputProps extends TextInputProps {
  control: Control<any>;
  name: string;
  label?: string;
  error?: FieldError;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
  labelProps?: TextProps;
  errorProps?: TextProps;
}

const BaseTextInput: React.FC<BaseTextInputProps> = ({
  control,
  name,
  label,
  error,
  labelStyle,
  errorStyle,
  inputStyle,
  containerStyle,
  labelProps,
  errorProps,
  ...textInputProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, labelStyle]} {...labelProps}>
          {label}
        </Text>
      )}
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[styles.input, inputStyle]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...textInputProps}
          />
        )}
      />
      {error && (
        <Text style={[styles.error, errorStyle]} {...errorProps}>
          {error.message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#727272',
    padding: 8,
    borderRadius: 4,
  },
});

export default BaseTextInput;
