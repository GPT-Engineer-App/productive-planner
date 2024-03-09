import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {loggedIn ? (
          <>
            <Route exact path="/" element={<Index />} />
            <Route path="/settings" element={<Settings />} />
          </>
        ) : (
          <Route path="*" element={<Login setLoggedIn={setLoggedIn} />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
