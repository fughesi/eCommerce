import { useState, createContext, useContext, SyntheticEvent } from "react";

type SearchContextProps = {
  search: string;
  SearchText?: string | number;
  useSearch?: () => void;
  useSearchBar: (e: SyntheticEvent<HTMLInputElement>) => void;
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

  function useSearchBar(e: SyntheticEvent<HTMLInputElement>): void {
    return setSearch(e.currentTarget["value"]);
  }

  return (
    <SearchContext.Provider value={{ search, useSearchBar }}>
      {children}
    </SearchContext.Provider>
  );
};
