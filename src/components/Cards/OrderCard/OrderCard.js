import React, { useEffect, useState } from 'react';
import "./OrderCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTrashCan, faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { removeToCart } from '../../../store/accions';


const OrderCard = ({ product, removeToCart }) => {
    const [counter, setCounter] = useState(0);

    const handleCounterPlus = () => {
        setCounter(counter + 1);
    };

    const handleCounterMinus = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            setCounter(0);
        }
    };

    const handleRemoveToCart = () => {
        removeToCart(product);
    };

    return (
        <div>
            <div className="container">
                <div className="column">
                    <img src={product.img} alt='cherry' />
                </div>
                <div className="column">
                    <p>{product.name}</p>
                    <p style={{ color: "green" }}><FontAwesomeIcon icon={faCircleCheck} color='green'
                    /> Despacho a domicilio</p>
                    <div className='counter'>
                        <button onClick={handleCounterPlus}><FontAwesomeIcon icon={faSquarePlus} size='xl' color='#004d3d' /></button>
                        <h4>{counter}</h4>
                        <button onClick={handleCounterMinus}><FontAwesomeIcon icon={faSquareMinus} size='xl' color='#004d3d' /></button>
                        <button style={{ marginLeft: "5%" }} onClick={handleRemoveToCart}><FontAwesomeIcon icon={faTrashCan} size='xl' color='#FF0000' /></button>
                    </div>
                </div>
                <div className="column">
                    <p>Precio</p>
                    <p>{product.price}</p>
                </div>
            </div>
            <div className='line'></div>

        </div>
    );
};

const mapDispatchToProps = {
    removeToCart,
};

export default connect(null, mapDispatchToProps)(OrderCard);