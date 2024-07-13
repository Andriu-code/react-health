import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
  width: 180px;
  height: auto;
  background-color: #fff;
  color: black;
  display: block;
  position: absolute;
  flex-direction: column;
  transition: transform 0.3s ease;
  top: 125%;
  border-radius: 12px;
  padding-top: 1%;
  padding-bottom: 1%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 5%;

  

  @media (max-width: 768px) {
    width: 100%; /* Ajuste de ancho para pantallas pequeñas */
    top: 605%; /* Ajuste de posición superior */
    border-radius: 0; /* Eliminar borde redondeado */
    padding-top: 2%; /* Ajuste de relleno superior */
    padding-bottom: 2%; /* Ajuste de relleno inferior */
    margin-bottom: 10%; /* Ajuste de margen inferior */

    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')}; /* Transición de apertura/cierre */
  }

  @media (max-width: 480px) {
    width: 100%; /* Ajuste de ancho para pantallas extra pequeñas */
    margin-top: 70%;
  }
`;

const SidebarLink = styled(Link)`
  margin: 3% 10%;
  text-decoration: none;
  color: black;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    margin: 3% 5%; /* Ajuste de márgenes para pantallas medianas */
  }

  @media (max-width: 768px) {
    margin: 3% 3%; /* Ajuste de márgenes para pantallas pequeñas */
  }

  @media (max-width: 480px) {
    margin: 3% 2%; /* Ajuste de márgenes para pantallas extra pequeñas */
  }
`;

const ToggleButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: #333;
    color: white;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }
`;

const Sidebar = ({ categoriesArray, start, elements }) => {
  const [open, setOpen] = useState(false);


  const categoriesView = categoriesArray.slice(start, elements);

  return (
    <>
      <SidebarContainer open={open}>
        {categoriesView.map((category) => (
          <>
            <SidebarLink to="/products">{category.name}
              <br></br>
            </SidebarLink>
            <hr></hr>
          </>
        ))}
        <SidebarLink to="/products">See More</SidebarLink>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;