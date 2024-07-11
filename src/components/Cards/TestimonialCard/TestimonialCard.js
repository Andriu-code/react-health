import React from 'react';
import './TestimonialCard.css';
import user from "../../../img/userW.jpg";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = () => {
    const users = [
        { id: 1, img: user, name: 'Mary Jhonson', stars: 5, opinion: 'I love the food in here and the delivery service' },
        { id: 2, img: user, name: 'Mark Duarte', stars: 5, opinion: 'I love the food in here and the delivery service' },
        { id: 3, img: user, name: 'Tony Dweith', stars: 3, opinion: 'I love the food in here but the delivery service needs to improve' },
        { id: 4, img: user, name: 'Tammy Diaz', stars: 5, opinion: 'I love the food in here and the delivery service' },
        { id: 5, img: user, name: 'Cameron Smith', stars: 4, opinion: 'I love the food in here and the delivery service but the costumer service not' },
        { id: 6, img: user, name: 'Ruth Paige', stars: 2, opinion: 'I love the food in here but it is not my favorite place to eat' },
        { id: 7, img: user, name: 'Cole Sprod', stars: 5, opinion: 'I love the food in here and the delivery service' },
        { id: 8, img: user, name: 'Morrison Ford', stars: 5, opinion: 'I love the food in here and the delivery service' },
    ];

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const productChunks = chunkArray(users, 4);

    return (
        <Carousel width={"92%"} showIndicators={false} showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
            {productChunks.map((chunk, index) => (
                <div key={index} className="container-slide">
                    {chunk.map(user => (
                        <div className="container-card" key={user.id}>
                            <img className="img" src={user.img} alt='userW' />
                            <div className="opinion-container">
                                <h6>{user.name}</h6>
                                <p>{user.opinion}</p>
                                <div className="product-rating">
                                    {Array.from({ length: 4 }, (v, i) => (
                                        <FontAwesomeIcon
                                            key={i}
                                            icon={faStar}
                                            color={i < user.stars ? "#004d3d" : "#e4e5e9"}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </Carousel>
    );
};

export default TestimonialCard;