import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TextButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF', // Border color for iOS, can be adjusted
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#007AFF', // Text color
  },
});

export default TextButton;
