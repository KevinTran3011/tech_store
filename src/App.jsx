import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HomePage from "./components/homePage/homePage.component";
import TechStore from "./components/store/store.component";
import LogIn from "./components/logIn/logIn.component";
import CheckOut from "./components/checkOut/checkOut.component";
import "./App.css";

function App() {
  const { categoryId, itemId } = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<TechStore />} />
          <Route path="/Log_in" element={<LogIn />} />
          <Route path="/Check_out" element={<CheckOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
