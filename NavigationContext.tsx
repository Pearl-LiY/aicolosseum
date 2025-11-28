import React, { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'LANDING' | 'DASHBOARD';

interface NavigationContextType {
  currentPage: Page;
  goToApp: () => void;
  goToLanding: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('LANDING');

  const goToApp = () => {
    window.scrollTo(0, 0);
    setCurrentPage('DASHBOARD');
  };
  
  const goToLanding = () => {
    window.scrollTo(0, 0);
    setCurrentPage('LANDING');
  };

  return (
    <NavigationContext.Provider value={{ currentPage, goToApp, goToLanding }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useNavigation must be used within a NavigationProvider');
  return context;
};