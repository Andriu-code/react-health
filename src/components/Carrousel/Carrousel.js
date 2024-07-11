import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProductCarousel.css';
import alitas from "../../img/prods/alitas.jpg";
import arandanos from "../../img/prods/arandanos.jpg";
import col from "../../img/prods/col.jpg";
import jamaica from "../../img/prods/jamaica.jpg";
import camaron from "../../img/prods/camaron.jpg";
import molida from "../../img/prods/molida.jpg";
import maracuya from "../../img/prods/maracuya.jpg";
import zanahoriababy from "../../img/prods/zanahoriababy.jpg";
import cherry from "../../img/prods/cherry.jpg";
import frambuesa from "../../img/prods/frambuesa.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ProductCarousel = () => {
    const products = [
        { id: 1, img: alitas, name: 'alitas', stars: 5, price: '$12.00' },
        { id: 2, img: arandanos, name: 'arandanos', stars: 5, price: '$5.00' },
        { id: 3, img: cherry, name: 'cherry', stars: 3, price: '$4.00' },
        { id: 4, img: jamaica, name: 'jamaica', stars: 5, price: '$2.00' },
        { id: 5, img: camaron, name: 'camaron', stars: 4, price: '$18.00' },
        { id: 6, img: molida, name: 'molida', stars: 2, price: '$15.00' },
        { id: 7, img: maracuya, name: 'maracuya', stars: 5, price: '$1.00' },
        { id: 8, img: zanahoriababy, name: 'zanahoriababy', stars: 5, price: '$5.00' },

    ];

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const productChunks = chunkArray(products, 4);

    return (
        <Carousel width={"92%"} showIndicators={false} showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
            {productChunks.map((chunk, index) => (
                <div key={index} className="product-slide">
                    {chunk.map(product => (
                        <div key={product.id} className="product">
                            <img src={product.img} alt={product.name} />
                            <p className="product-name">{product.name}</p>
                            <p className="product-name">{product.price}</p>
                            <div className="product-rating">
                                {Array.from({ length: 4 }, (v, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        color={i < product.stars ? "#004d3d" : "#e4e5e9"}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </Carousel>
    );
};

export default ProductCarousel;