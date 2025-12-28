import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

export default function CreditAppliedCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Credit Application • Submitted</Text>

      <Text style={styles.description}>
        Submitted on 2025/11/05. Your credit application is under review.
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 10,
    width: '85%',
    height: '14.5%',
    alignSelf: 'center',
    marginTop: 25,
  },


  title: {
    fontSize: 16,
    fontWeight: '700',
  },

  description: {
    fontSize: 13,
    color: '#555',
    marginVertical: 8,
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
