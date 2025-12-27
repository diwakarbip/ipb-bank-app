import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionButton from './ActionButton';

export default function LoanStatusCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>No applications yet</Text>
      <Text style={styles.cardSub}>
        Your recent applications will appear here
      </Text>

      <View style={styles.btnRow}>
         <ActionButton
              title="Refresh"
              style={{
              paddingHorizontal: 28 , // 👈 smaller width
              paddingVertical: 8,    // 👈 smaller height
              }}
              />
        
              <ActionButton
                title="Contact Support"
                variant="secondary"
              />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    elevation: 10,
    marginTop: -100,
    width: '90%',
    alignSelf: 'center',
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
  },

  cardSub: {
    color: 'gray',
    marginVertical: 10,
  },

  btnRow: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
    justifyContent: 'center',
  },
});
