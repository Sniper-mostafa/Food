import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthForm from './components/AuthForm';
import PlaceOrder from './pages/PlaceOrder';

const App = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      {showModal && <AuthForm setShowModal={setShowModal} /> }
      <div>
        <Navbar setShowModal={setShowModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
