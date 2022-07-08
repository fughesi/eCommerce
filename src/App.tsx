import { Route, Routes, BrowserRouter } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavbarMobile />
      <main className="AppMain">
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </main>
      ;
    </BrowserRouter>
  );
}

export default App;
