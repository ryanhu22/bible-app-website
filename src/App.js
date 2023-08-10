import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import PrivacyPolicy from "./components/PrivacyPolicy";
import Support from "./components/Support";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <header class="flex items-center justify-between mb-6">
          <a href="/">
            <h1 class="text-3xl font-bold">Companion Bible App</h1>
          </a>
          <nav>
            <ul class="flex space-x-4">
              <li>
                <a href="/privacy-policy" class="text-blue-500">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/support" class="text-blue-500">
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
