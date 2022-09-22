import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routeConfig";
function App() {
  return (
    <Router>
      <Routes>
        {routes.map((e, i) => (
          <Route element={e.element} key={i} path={e.path} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
