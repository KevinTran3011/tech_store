// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/homePage.component";
import TechStore from "./components/store/store.component";
import TechCategory from "./components/techCategory/techCategory.component";
import LogIn from "./components/logIn/logIn.component";
import CheckOut from "./components/checkOut/checkOut.component";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<TechStore />} />
        <Route path="/store/:categoryId" element={<TechCategory />} />
        <Route path="/Log_in" element={<LogIn />} />
        <Route path="/Check_out" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
