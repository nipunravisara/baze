import React from 'react';
import {StyleSheet} from 'react-native';
import BaseRadioButton from '../base/RadioButton';

interface StyledRadioButtonProps {
  name: string;
  control: any;
  options: Array<{label: string; value: string}>;
}

const StyledRadioButton: React.FC<StyledRadioButtonProps> = ({
  name,
  control,
  options,
}) => {
  return (
    <BaseRadioButton
      name={name}
      control={control}
      options={options}
      containerStyle={styles.container}
      radioStyle={styles.radio}
      selectedRadioStyle={styles.selectedRadio}
      labelStyle={styles.label}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // marginBottom: 15,
  },
  radio: {
    // height: 24,
    // width: 24,
    // borderRadius: 12,
    // borderWidth: 2,
    // borderColor: '#007AFF',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginRight: 12,
  },
  selectedRadio: {
    // height: 16,
    // width: 16,
    // borderRadius: 8,
    // backgroundColor: '#007AFF',
  },
  label: {
    // fontSize: 18,
    // color: '#007AFF',
  },
});

export default StyledRadioButton;
