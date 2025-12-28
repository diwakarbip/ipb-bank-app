import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionButton from '../ActionButton.js';

export default function ActiveLoanCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Personal Loan</Text>
      <Text>Outstanding: €4000</Text>
      <Text>Next installment: €250</Text>
      <Text>Due: 2025-10-15</Text>

      <ActionButton title="Pay" style={{ marginTop: -60, alignSelf: 'flex-end', paddingHorizontal: 40 }} />
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
    height: '13.75%',
    alignSelf: 'center',
    marginTop: 17,
  },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 6  },
});
