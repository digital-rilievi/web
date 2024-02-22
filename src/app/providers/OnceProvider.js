import { createContext, useContext, useState } from 'react'

const OnceContext = createContext();

export const OnceProvider = ({ children }) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false)

  const once = () => {
    if (!hasBeenCalled) {
      setHasBeenCalled(true)
      return true
    }
    return false
  };

  return (
    <OnceContext.Provider value={{ once }}>
      {children}
    </OnceContext.Provider>
  );
};

export const useOnce = () => {
  return useContext(OnceContext)
}