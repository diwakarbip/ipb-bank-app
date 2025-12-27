import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import ActionButton from '../components/ActionButton';
import LoanTopSection from '../components/LoanTopSection';
import LoanStatusCard from '../components/LoanStatusCard';
import { COLORS } from '../theme/colors';

const { height } = Dimensions.get('window');
const PURPLE_HEIGHT = height * 0.5;

export default function LoanStatusScreen() {
  return (
    <View style={styles.container}>
      {/* Purple Gradient */}
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
        <LoanStatusCard />
       
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
    top: 5,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },

  whiteContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginTop: 90,
  },
});
