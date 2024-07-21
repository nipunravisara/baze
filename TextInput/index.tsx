import React from "react";
import { StyleSheet } from "react-native";
import BaseTextInput, { BaseTextInputProps } from "../base/TextInput";

const TextInput: React.FC<BaseTextInputProps> = (props) => {
  return (
    <BaseTextInput
      {...props}
      labelStyle={styles.label}
      errorStyle={styles.error}
      inputStyle={styles.input}
      containerStyle={styles.container}
    />
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
    color: "red",
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    borderRadius: 4,
  },
});

export default TextInput;
