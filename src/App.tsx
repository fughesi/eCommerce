import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import { DarkModeProvider } from "./context/DarkModeContext";
import { NavbarContextProvider } from "./context/NavbarContext";
import { SearchContextProvider } from "./context/SearchContext";
import {
  Cart,
  Checkout,
  Confirmation,
  Index,
  Payment,
  Product,
  Success,
} from "./pages/_pagesEXPORT";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main className="AppMain">
        <DarkModeProvider>
          <NavbarContextProvider>
            <NavbarMobile />
            <SearchContextProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Confirmation" element={<Confirmation />} />
                <Route path="/Payment" element={<Payment />} />
                <Route path="/Products" element={<Product />} />
                <Route path="/Success" element={<Success />} />
              </Routes>
            </SearchContextProvider>
          </NavbarContextProvider>
        </DarkModeProvider>
      </main>
      ;
    </BrowserRouter>
  );
}

export default App;
