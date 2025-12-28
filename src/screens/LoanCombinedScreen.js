import React from 'react';
import ScreenBackground from '../components/ScreenBackground';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import LoanTopSection from '../components/LoanTopSection';
import LoanSubmittedCard from '../components/cards/LoanSubmittedCard';
import CreditAppliedCard from '../components/cards/CreditAppliedCard';
import { View, StyleSheet } from 'react-native';
import ActionButton from '../components/ActionButton';

export default function LoanCombinedScreen() {
  return (
    <>
    <ScreenBackground>
      <AppHeader />
      <LoanTopSection />
      <LoanSubmittedCard />
      <CreditAppliedCard />
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
    gap: 12,
    marginTop: 185,
    gap: 30, 
    justifyContent: 'center',
  },
});