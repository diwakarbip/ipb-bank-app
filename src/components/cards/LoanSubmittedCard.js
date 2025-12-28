import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionButton from '../ActionButton';
import { COLORS } from '../../theme/colors';

export default function LoanSubmittedCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Personal Loan • Submitted</Text>

      <Text style={styles.description}>
        Submitted on 2025/11/06. Our team will review your documents.
      </Text>

      <View style={styles.statusRow}>
        <Text style={styles.activeStatus}>submitted</Text>
        <Text style={styles.inactiveStatus}>verified</Text>
        <Text style={styles.inactiveStatus}>approved</Text>
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 10,
    marginTop: 10,
    width: '85%',
    height: '14.5%',
    alignSelf: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },

  description: {
    color: '#555',
    fontSize: 13,
    marginBottom: 14,
  },

  statusRow: {
    flexDirection: 'row',
    paddingLeft: 10,
    gap: 55,
    marginBottom: 15,
  },

  activeStatus: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primaryPurple,
  },

  inactiveStatus: {
    fontSize: 13,
    color: '#999',
  },
});
