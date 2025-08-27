import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RubifiLconcept } from "./screens/RubifiLconcept";
import { RubifiLconcept as RubTokenPage } from "./routes/sections";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RubifiLconcept />} />
        <Route path="/rub-token" element={<RubTokenPage />} />
      </Routes>
    </Router>
  );
};
