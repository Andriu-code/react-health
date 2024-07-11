import React from 'react';
import Logobar from '../Logobar/Logobar';
import './Layout.css';
import Navbar from '../Navbar';

const Layout = ({ children, open, array, start, elements }) => {

  return (
    <div className="layout">
      <Logobar />
      <Navbar open={open} array={array} start={start} elements={elements} />
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;