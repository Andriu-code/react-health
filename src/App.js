import './App.css';
import Carrito from './Pages/Carrito/Carrito';
import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import Payment from './Pages/Payment/Payment';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/basket" element={<Carrito />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
