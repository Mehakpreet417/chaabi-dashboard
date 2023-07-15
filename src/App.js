import React from "react";
import { Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Header from './Header/header';
import Dashboard from './Pages/dashboard';
import Training from './Pages/trainings';
import Users from './Pages/users';
import Analytics from './Pages/analytics';
import MyAccount from './Pages/account';
import Support from './Pages/support';

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Header />
      
        <Routes>
          <Route exact path = '/' element ={<Dashboard />} />
          <Route path='/training' element={<Training />} />
          <Route path="/users" element={<Users />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/support" element={<Support />} />
        </Routes> 
    
    </div>
  );
};

export default App;
