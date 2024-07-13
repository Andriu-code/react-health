import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTruck, faCartShopping, faArrowRightArrowLeft, faCreditCard } from "@fortawesome/free-solid-svg-icons";


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #004d3d;
  width: 100%;
  color: #000;
  border-radius: 12px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);

 

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column; /* Cambiar la dirección del flex a columna */
    align-items: flex-start; /* Alinear los elementos al inicio */
    padding: 1rem; /* Agregar padding si es necesario */
    border-radius: 0; /* Quitar el borde redondeado */
    box-shadow: none;
    }
`;

const NavLinks = styled.div`
   display: flex;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    


    @media (max-width: 768px) {
     
      display: flex;
   margin-left: 3%;
   width: 260px;
    }
`;

const NavInfoLinks = styled.div`
display: flex;
   margin-left: 3%;
   width: 260px;

   @media (max-width: 768px) {
   flex-direction: column; /* Cambiar la dirección del flex a columna si es necesario */
    margin-left: 0; /* Ajustar el margen izquierdo */
    width: 100%;
   }
`;


const Infobar = () => {

  return (
    <NavbarContainer>
      <NavLinks>
        <NavInfoLinks><FontAwesomeIcon icon={faTruck} size="xl" />Free Shipping <br></br> Free shipping over $150</NavInfoLinks>
        <NavInfoLinks><FontAwesomeIcon icon={faCartShopping} size="xl" />Best Deal Online <br></br> We provide a free in-home</NavInfoLinks>
        <NavInfoLinks><FontAwesomeIcon icon={faArrowRightArrowLeft} size="xl" />15 Days Return <br></br> We provide a free in-home mesuare</NavInfoLinks>
        <NavInfoLinks><FontAwesomeIcon icon={faCreditCard} size="xl" />Secure Payment <br></br> We provide a free in-home mesuare</NavInfoLinks>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Infobar;