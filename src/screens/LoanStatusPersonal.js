import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import LoanTopSection from '../components/LoanTopSection';
import { COLORS } from '../theme/colors';

const { height } = Dimensions.get('window');
const PURPLE_HEIGHT = height * 0.5;

export default function LoanHistoryScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          'rgba(139,17,122,1)',
          'rgba(72,8,64,0.9)',
        ]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={[styles.purpleBg, { height: PURPLE_HEIGHT }]}
      />

      <AppHeader />
      <View style={styles.divider} />

      <LoanTopSection />

      <View style={styles.whiteContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Loan History</Text>
          <Text style={styles.sub}>
            You don’t have any completed loans yet.
          </Text>
        </View>
      </View>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },

  purpleBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },

  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },

  whiteContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginTop: 90,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    elevation: 10,
    marginTop: -100,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  sub: {
    color: 'gray',
    marginTop: 10,
  },
});
