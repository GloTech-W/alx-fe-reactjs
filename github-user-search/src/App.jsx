import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search"; // Import the Search component

const Home = () => (
  <div>
    <h1>Welcome to GitHub User Search</h1>
    <Search /> {/* Add the Search component here */}
  </div>
);

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
