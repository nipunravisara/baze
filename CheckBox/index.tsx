import React from 'react';
import {StyleSheet, View} from 'react-native';
import BaseCheckBox, {BaseCheckBoxProps} from '../base/CheckBox';

const CheckBox: React.FC<BaseCheckBoxProps> = ({name, control, label}) => {
  return (
    <View>
      <BaseCheckBox
        name={name}
        control={control}
        label={label}
        containerStyles={styles.container}
        labelStyles={styles.label}
        checkboxStyles={styles.checkbox}
        checkboxCheckedStyles={styles.checkboxChecked}
        checkboxCheckMarkStyles={styles.checkboxCheckMark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: '#007bff',
    borderRadius: 4,
  },
  checkboxChecked: {
    borderWidth: 2,
  },
  checkboxCheckMark: {width: 10, height: 10, backgroundColor: '#007bff'},
});

export default CheckBox;
