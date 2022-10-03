// Dependencies
import { createContext, FC, ReactNode, useState } from 'react';

// Interfaces
interface IAppProviderProps {
  children: ReactNode;
}

export interface IAppContext {
  account: null | {};
  setAccount: (account: null | {}) => void;
}

// Export app context
export const AppContext = createContext<IAppContext>({
  account: null,
  setAccount: (account) => {
    console.log(account);
  }
});

// Create context provider
const AppProvider: FC<IAppProviderProps> = ({ children }) => {
  // States
  const [account, setAccount] = useState<null | {}>(null);

  // Define value
  const value = {
    account,
    setAccount,
  };

  // Return app provider
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Export context provider
export default AppProvider;
