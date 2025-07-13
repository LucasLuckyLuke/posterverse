import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Posters from "./pages/Posters";
import Poster from "./pages/Poster";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-100 text-gray-900">
        <header className="bg-white shadow-md sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Posterverse
            </Link>
            <nav className="space-x-4">
              <Link to="/posters" className="hover:underline">Posters</Link>
              <Link to="/cart" className="hover:underline">Cart</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posters" element={<Posters />} />
            <Route path="/poster/:id" element={<Poster />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <footer className="bg-white border-t py-6 mt-12 text-center text-sm text-gray-500">
          &copy; 2025 Posterverse. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
