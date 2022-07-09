import { createContext, ReactNode, useContext, useState } from "react";

type NavbarContextProps = {
  blur: boolean;
  showNav: boolean;
  setBlur?: () => boolean;
  setShowNav?: (showNav: boolean) => boolean;
  toggleBlur: () => void;
  toggleShowNav: () => void;
};

type childType = {
  children: ReactNode;
};

const NavbarContext = createContext({} as NavbarContextProps);

export function useNavContext() {
  return useContext(NavbarContext);
}

export function NavbarContextProvider({ children }: childType) {
  const [blur, setBlur] = useState(false);
  const [showNav, setShowNav] = useState(false);

  function toggleBlur() {
    return setBlur((i) => !i);
  }
  
  function toggleShowNav() {
    setShowNav((i) => !i);
    return setBlur((i) => !i);
  }

  return (
    <NavbarContext.Provider
      value={{ blur, showNav, toggleBlur, toggleShowNav }}
    >
      {children}
    </NavbarContext.Provider>
  );
}
