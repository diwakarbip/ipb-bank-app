import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionButton from '../ActionButton.js';

export default function ActiveCreditCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Credits</Text>
      <Text>Balance: €400</Text>
      <Text>Due: 2025-10-30</Text>

      <ActionButton
        title="Pay"
        style={{ marginTop: -46, alignSelf: 'flex-end', paddingHorizontal: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    elevation: 10,
    width: '80%',
    height: '13.5%',
    alignSelf: 'center',
    marginTop: 25,
  },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 6 },
});
