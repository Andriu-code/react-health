import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../img/MARKETLOGO.png"
import './Logobar.css';
import Searchbar from '../../Searchbar/Searchbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';

const Logobar = ({ totalProducts }) => {


    const handleSearch = (query) => {
        console.log('Search query:', query);
        // Aquí puedes añadir la lógica de búsqueda, por ejemplo, realizar una llamada a una API.
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img className='logo-img' src={logo} alt="logo" />
                </Link>
                <div className="search">
                    <Searchbar onSearch={handleSearch} />
                </div>
                <div className="menu-icon">
                    <i className="fas fa-bars"></i>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item1">

                        <Link to="/login" className="nav-links">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <div className="num-products"><p>{totalProducts}</p></div>
                        <Link to="/basket" className="nav-links" >
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => ({
    totalProducts: state.cart.totalProducts,
});

export default connect(mapStateToProps)(Logobar);