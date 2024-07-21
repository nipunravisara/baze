// BaseCheckBox.tsx
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface BaseCheckBoxProps {
  name: string;
  control: Control<any>;
  label?: string;
  containerStyles?: StyleProp<ViewStyle>;
  labelStyles?: StyleProp<TextStyle>;
  checkboxStyles?: StyleProp<ViewStyle>;
  checkboxCheckedStyles?: StyleProp<ViewStyle>;
  checkboxCheckMarkStyles?: StyleProp<ViewStyle>;
}

const BaseCheckBox: React.FC<BaseCheckBoxProps> = ({
  name,
  control,
  label,
  containerStyles,
  labelStyles,
  checkboxStyles,
  checkboxCheckedStyles,
  checkboxCheckMarkStyles,
}) => {
  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => (
        <TouchableOpacity
          onPress={() => onChange(!value)}
          style={[defaultStyles.container, containerStyles]}>
          <View
            style={[
              defaultStyles.checkbox,
              checkboxStyles,
              value && checkboxCheckedStyles,
            ]}>
            {value && (
              <View
                style={[
                  defaultStyles.checkboxCheckMark,
                  checkboxCheckMarkStyles,
                ]}
              />
            )}
          </View>
          {label && (
            <Text style={[defaultStyles.label, labelStyles]}>{label}</Text>
          )}
        </TouchableOpacity>
      )}
      name={name}
    />
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    marginLeft: 8,
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#727272',
    borderRadius: 4,
  },
  checkboxChecked: {
    borderColor: '#000',
  },
  checkboxCheckMark: {
    width: 13,
    height: 13,
    borderRadius: 2,
    backgroundColor: '#000',
  },
});

export default BaseCheckBox;
