import React from 'react';
import "./ResumeOrderCard.css"
import OrangeButton from '../../Button/OrangeButton';
import { Link, useNavigate } from 'react-router-dom';


const ResumeOrderCard = (props) => {
    const navigate = useNavigate();

    const pagar = () => { navigate("/payment") }
    const seguirComprando = () => { navigate("/products") }

    return (
        <div className="container-order">

            <h5 className='title'>Resumen de Compra</h5>
            <div class="linea">
                <h6>SubTotal</h6>
                <h6>USD$12.00</h6>
            </div>
            <div class="linea">
                <h6>Descuentos</h6>
                <h6>USD$1.20</h6>
            </div>
            <div class="linea">
                <h6>Total</h6>
                <h6>USD$10.80</h6>
            </div>
            <OrangeButton onClick={pagar}>Pagar</OrangeButton>
            <OrangeButton onClick={seguirComprando}>Seguir Comprando</OrangeButton>
            <div className='boton'>
                <Link>Politica de devoluciones</Link>
            </div>

        </div>
    );
};

export default ResumeOrderCard;