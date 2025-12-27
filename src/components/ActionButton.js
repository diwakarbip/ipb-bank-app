import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function ActionButton({
  title,
  variant = 'primary',
  style,
}) {
  const isSecondary = variant === 'secondary';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isSecondary && styles.secondary,
        style, // 👈 allows per-button size control
      ]}
    >
      <Text
        style={[
          styles.text,
          isSecondary && styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: COLORS.primaryPurple,
  },

  secondary: {
    backgroundColor: COLORS.accentGold,
  },

  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },

  secondaryText: {
    color: 'black',
  },
});
