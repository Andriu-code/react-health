import { React, useState, useEffect } from 'react';
import './ProductCard.css';
import pancake from "../../../img/prods/pancake.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import OrangeButton from '../../Button/OrangeButton';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { addToCart } from '../../../store/accions';


const ProductCard = ({ product, addToCart }) => {
    const [visible, setVisible] = useState(false);

    const onDismiss = () => setVisible(false);

    const handleAddToCart = () => {
        addToCart(product);
        setVisible(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [visible]);

    return (
        <div className="product-card">
            <img src={product.img} alt={product.name} className="product-image" />
            <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>

            </div>
            <div className="rating">
                {Array.from({ length: 4 }, (v, i) => (
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        color={i < product.stars ? "#004d3d" : "#e4e5e9"}
                    />
                ))}
            </div>
            <div className="basket">
                <h6>Price: {product.price}</h6>
                <OrangeButton className="button" onClick={handleAddToCart}>
                    <FontAwesomeIcon icon={faBasketShopping} size='xl' />
                </OrangeButton>

            </div>
            <Alert color='success' style={{ marginTop: "-18%", width: "60%" }} isOpen={visible} toggle={onDismiss}>
                Producto agregado al carrito!
            </Alert>
        </div>
    );
};

const mapDispatchToProps = {
    addToCart,
};

export default connect(null, mapDispatchToProps)(ProductCard);