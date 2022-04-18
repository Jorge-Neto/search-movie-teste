import React from "react";

import { Routes, Route } from "react-router-dom";

import Details from "./pages/details";
import Main from "./pages/main";

const App = () => {
  return (
      <Routes>
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<Main />} />
      </Routes>
  );
};

export default App;
