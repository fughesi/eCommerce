import { useState, createContext, useContext, ReactNode } from "react";

type DarkModeContext = {
  darkMode: boolean;
  setDarkMode?: (darkMode: boolean) => boolean;
  toggleDarkMode: () => void;
  useDarkTheme: () => void;
};

type providerprops = {
  children: ReactNode;
};

const DarkModeContext = createContext({} as DarkModeContext);

export function useDarkTheme() {
  return useContext(DarkModeContext);
}

export function DarkModeProvider({ children }: providerprops) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    return setDarkMode((i) => !i);
  }
  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggleDarkMode, useDarkTheme }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
