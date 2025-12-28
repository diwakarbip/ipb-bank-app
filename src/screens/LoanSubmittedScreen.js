import React from 'react';
import ScreenBackground from '../components/ScreenBackground';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import LoanTopSection from '../components/LoanTopSection';
import LoanSubmittedCard from '../components/cards/LoanSubmittedCard';
import { View, StyleSheet } from 'react-native';
import ActionButton from '../components/ActionButton';

export default function LoanSubmittedScreen() {
  return (
    <>
    <ScreenBackground>
      <AppHeader />
      <LoanTopSection />
      <LoanSubmittedCard />
      
      <View style={styles.btnRow}>
              <ActionButton
                title="Refresh"
                style={{ paddingHorizontal: 35, paddingVertical: 10 }}
              />
              <ActionButton
                title="Contact Support"
                variant="secondary"
              />
            </View>
      <BottomNav />
      </ScreenBackground>
      
    </>
    
  );
}

const styles = StyleSheet.create({
  btnRow: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 335,
    justifyContent: 'center',
  },
});

