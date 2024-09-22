import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => <div>Welcome to GitHub User Search</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
