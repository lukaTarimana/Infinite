import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Main from "./main/Main";

import UserPage from "./userPage/UserPage.jsx";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">HOME</Link>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </Router>
  );
};

export default App;
