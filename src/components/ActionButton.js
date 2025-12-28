import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function ActionButton({
  title,
  onPress,
  variant = 'primary',
  style,
}) {
  const isSecondary = variant === 'secondary';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isSecondary && styles.secondary,
        style,
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
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 10,
    backgroundColor: COLORS.primaryPurple,
    shadowOffset: 100,
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
    color: COLORS.primaryPurple,
  },
});
