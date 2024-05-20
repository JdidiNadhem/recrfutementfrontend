// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/navbar/NavBar';

const Layout = () => {
  return (
    <div>
      <Navbar />  
      <Outlet />
    </div>
  );
};

export default Layout;