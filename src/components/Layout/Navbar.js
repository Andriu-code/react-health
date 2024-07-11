import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import OrangeButton from "./../Button/OrangeButton";
import Sidebar from './../Layout/Sidebar';


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #FFF;
  color: #000;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: -2%;
  position: relative;
  border-radius: 12px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);

 

  @media (max-width: 768px) {
      margin: 0 0.5rem; /* Ajusta el margen horizontal en pantallas pequeñas */
    }
`;

const NavLinks = styled.div`
  & > a {
    margin-right: 1rem;
    text-decoration: none;
    color: #000;

    @media (max-width: 768px) {
      margin: 0.5rem 0;
    }
  }
`;



const Navbar = ({ open, array, start, elements }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(open);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  }


  return (
    <NavbarContainer>
      <OrangeButton onClick={toggleSidebar}>SHOP BY CATEGORY</OrangeButton>
      {!isSidebarOpen ? (
        <>
          <Sidebar onClose={toggleSidebar} categoriesArray={array} start={start} elements={elements} />
        </>
      ) : null}
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
      <NavLinks>
        <Link to="/"><FontAwesomeIcon icon={faInstagram} size="lg" /></Link>
        <Link to="/about"><FontAwesomeIcon icon={faFacebook} size="lg" /></Link>
        <Link to="/contact"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;