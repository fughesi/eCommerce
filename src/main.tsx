import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import { NavbarContextProvider } from "./context/NavbarContext";
import { SearchContextProvider } from "./context/SearchContext";
import {FormDataProvider} from "./context/FormDataContext"
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <NavbarContextProvider>
        <FormDataProvider>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
        </FormDataProvider>
      </NavbarContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
