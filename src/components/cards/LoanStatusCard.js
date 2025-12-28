import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActionButton from '../ActionButton.js';

export default function LoanStatusCard() {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>No applications yet</Text>
      <Text style={styles.sub}>
        Your recent applications will appear here
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    elevation: 10,
    marginTop: 20,
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  sub: {
    color: 'gray',
    marginVertical: 10,
  },
});
