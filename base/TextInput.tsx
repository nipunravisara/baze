import React from 'react';
import {Control, Controller, FieldError} from 'react-hook-form';
import {
  StyleProp,
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
    <View style={containerStyle}>
      {label && (
        <Text style={labelStyle} {...labelProps}>
          {label}
        </Text>
      )}
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={inputStyle}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...textInputProps}
          />
        )}
      />
      {error && (
        <Text style={errorStyle} {...errorProps}>
          {error.message}
        </Text>
      )}
    </View>
  );
};

export default BaseTextInput;
