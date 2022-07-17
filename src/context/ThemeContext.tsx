import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
  SyntheticEvent,
  useRef
} from "react";

type ThemeContext = {
  darkMode: boolean;
  scrollTracker: number;
  getClientHeight: (e: SyntheticEvent) => number | void;
  getClientWidth: (e: SyntheticEvent) => number | void;
  getVerticalScroll: () => void;
  setScrollTracker?: () => void;
  setDarkMode?: (darkMode: boolean) => boolean;
  toggleDarkMode: () => void;
};

type providerprops = {
  children: ReactNode;
};

const ThemeContext = createContext({} as ThemeContext);

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: providerprops) {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollTracker, setScrollTracker] = useState(window.pageYOffset);

  function getVerticalScroll() {
    window.addEventListener("scroll", getVerticalScroll);
    setScrollTracker((i) => window.pageYOffset);
    return () => window.removeEventListener("scroll", getVerticalScroll);
  }

  useEffect(() => {
    getVerticalScroll();
  }, [window.pageYOffset]);

  function toggleDarkMode() {
    return setDarkMode((i) => !i);
  }

  function getClientHeight(e: SyntheticEvent) {
    //add ref={referencedClient} on object to get height 
    const referencedClient:React.MutableRefObject<any> = useRef(null)
    return referencedClient?.current?.clientHeight
  }
  
  function getClientWidth(e: SyntheticEvent) {
    //add ref={referencedClient} on object to get width 
    const referencedClient:React.MutableRefObject<any> = useRef(null)
    return referencedClient?.current?.clientWidth
  }

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        scrollTracker,
        getVerticalScroll,
        getClientHeight,
        getClientWidth
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
