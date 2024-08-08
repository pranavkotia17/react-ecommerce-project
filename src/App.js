
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Chart from './components/Chart';
import Deposits from './components/Deposits';
import Orders from './components/Orders';
import Cart from './components/Cart';
import AllOrders from './components/AllOrders';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Chart />} />
          <Route path="deposits" element={<Deposits />} />
          <Route path="orders" element={<AllOrders />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

