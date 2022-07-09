import { useState, createContext, useContext } from "react";

type SearchContextProps = {
  search: string | number;
  SearchText?: string | number
  useSearch?: () => void;
  useSearchBar: (SearchText: string | number) => void;
};

type childProps = {
  children: any;
};

const SearchContext = createContext({} as SearchContextProps);

export function useSearchContext() {
  return useContext(SearchContext);
}

export const SearchContextProvider = ({ children }: childProps) => {
  const [search, setSearch] = useState("");

  function useSearchBar() {
    console.log("things and stuff")
    return setSearch((i) => i);
  }

  return (
    <SearchContext.Provider value={{ search, useSearchBar }}>
      {children}
    </SearchContext.Provider>
  );
};
