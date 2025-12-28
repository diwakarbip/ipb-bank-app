import React from 'react';
import ScreenBackground from '../components/ScreenBackground';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import LoanTopSection from '../components/LoanTopSectionActive';
import ActiveLoanCard from '../components/cards/ActiveLoanCard';
import ActiveCreditCard from '../components/cards/ActiveCreditCard';

export default function ActiveLoansScreen() {
  return (
    <ScreenBackground>
      <AppHeader />
      <LoanTopSection />
      <ActiveLoanCard />
      <ActiveCreditCard />
      <BottomNav />
    </ScreenBackground>
  );
}
