import React from 'react';
import LandingPage from './webcolosseum-main/App';
import { TradingDashboard } from './TradingDashboard';
import { NavigationProvider, useNavigation } from './NavigationContext';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();

  return (
    <>
      {currentPage === 'LANDING' ? <LandingPage /> : <TradingDashboard />}
    </>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}