import { createContext, ReactNode, useContext } from "react";

type NavbarContextProps = {
  NavContext: void;
};

export default function NavbarContext(children: ReactNode) {
  const NavbarContext = createContext({});

  function NavContext() {
    return useContext(NavbarContext);
  }

  return (
    <NavbarContext.Provider value={NavContext}>
      {children}
    </NavbarContext.Provider>
  );
}
