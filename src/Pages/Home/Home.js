import React from 'react';
import './Home.css';
import Layout from '../../components/Layout/LayoutInicial/Layout';
import freeSale from "../../img/freeSale.png";
import orange from "../../img/orange.png";
import breakfast from "../../img/breakfast.png";
import sandwich from "../../img/sandwich.png";
import fresh from "../../img/fresh.png";
import Infobar from '../../components/Infobar';
import ProductCarousel from '../../components/Carrousel/Carrousel';
import RecipeCard from '../../components/Cards/RecipeCard/RecipeCard';
import TestimonialCard from '../../components/Cards/TestimonialCard/TestimonialCard';

const Home = () => {
    const categories = [
        { id: 1, name: "frutas" },
        { id: 2, name: "verduras" },
        { id: 3, name: "carnes rojas" },
        { id: 4, name: "semillas" },
        { id: 5, name: "frutas secas" },
        { id: 6, name: "mariscos" },
        { id: 7, name: "carne blanca" },
        { id: 8, name: "cortes premium" },
        { id: 9, name: "legumbres" },
        { id: 10, name: "hongos" },
    ]

    return (
        <div>
            <Layout array={categories} start={0} elements={5} />
            <div className="containerHome">
                <div className="containerOffer">
                    <img className="offer1" src={freeSale} alt="offer1" />
                    <img className="offer2" src={orange} alt="offer2" />
                </div>

            </div>
            <div className="infobar">
                <Infobar />
            </div>
            <div className="recently-title">
                <h6 style={{ fontSize: 10, fontWeight: "bold" }}>
                    Recently Added Our Store
                </h6>
            </div>
            <div className="new-title">
                <h2 style={{ fontSize: 24 }}>
                    New Products
                </h2>
                <hr className="line" />
            </div>
            <div className="carrousel-prod">
                <ProductCarousel />
            </div>
            <div className="new-title">
                <h2 style={{ fontSize: 24 }}>
                    Recipe & More
                </h2>
                <hr className="line" />
            </div>
            <div className='container-recipe'>
                <RecipeCard />
                <div className='announce'>
                    <img className='image' src={sandwich} alt='announcement3' />
                    <img className='image' src={breakfast} alt='announcement' />
                    <img className='image' src={fresh} alt='announcement2' />
                </div>
            </div>
            <div className="new-title">
                <h2 style={{ fontSize: 24 }}>
                    Opinions
                </h2>
                <hr className="line" />
            </div>
            <div className="carrousel-prod">
                <TestimonialCard />
            </div>

        </div>
    );
};

export default Home;