import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface BaseRadioButtonProps {
  name: string;
  control: any;
  options: Array<{label: string; value: string}>;
  containerStyle?: any;
  radioStyle?: any;
  selectedRadioStyle?: any;
  labelStyle?: any;
}

const BaseRadioButton: React.FC<BaseRadioButtonProps> = ({
  name,
  control,
  options,
  containerStyle,
  radioStyle,
  selectedRadioStyle,
  labelStyle,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}}) => (
        <View>
          {options.map(option => (
            <TouchableOpacity
              key={option.value}
              onPress={() => onChange(option.value)}
              style={[styles.container, containerStyle]}>
              <View style={[styles.radio, radioStyle]}>
                {value === option.value && (
                  <View style={[styles.selectedRadio, selectedRadioStyle]} />
                )}
              </View>
              <Text style={[styles.label, labelStyle]}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radio: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadio: {
    height: 9,
    width: 9,
    borderRadius: 6,
    backgroundColor: '#007bff',
  },
  label: {
    marginLeft: 8,
  },
});

export default BaseRadioButton;
