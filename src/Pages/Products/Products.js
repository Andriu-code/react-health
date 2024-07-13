import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import Layout from "../../components/Layout/LayoutInicial/Layout";
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
import { connect } from "react-redux";
import { getProducts } from "../../store/product/accionsProduct";
import "./Products.css";
import { useEffect } from "react";


const Products = ({ getProducts }) => {
    const products = [
        { id: 1, img: alitas, name: 'alitas', stars: 5, price: '$12.00', description: "a pound of chicken" },
        { id: 2, img: arandanos, name: 'arandanos', stars: 5, price: '$5.00', description: "a box of arandanos" },
        { id: 3, img: cherry, name: 'cherry', stars: 3, price: '$4.00', description: "a box of cherries" },
        { id: 4, img: jamaica, name: 'jamaica', stars: 5, price: '$2.00', description: "a box of jamaica" },
        { id: 5, img: camaron, name: 'camaron', stars: 4, price: '$18.00', description: "a pound of shrimps" },
        { id: 6, img: molida, name: 'molida', stars: 2, price: '$15.00', description: "a pound of meat" },
        { id: 7, img: maracuya, name: 'maracuya', stars: 5, price: '$1.00', description: "one maracuya" },
        { id: 8, img: zanahoriababy, name: 'zanahoria baby', stars: 5, price: '$5.00', description: "a bag of baby carrot" },
        { id: 9, img: col, name: 'col', stars: 3, price: '$2.00', description: "one col" },
        { id: 10, img: frambuesa, name: 'frambuesa', stars: 5, price: '$5.00', description: "a box of frambuesa" },
    ];

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

    const getProductsList = () => {
        getProducts(products)
    };

    /* useEffect(() => {
         getProductsList();
     }, []);*/

    return (
        <div>
            <Layout open={true} array={categories} start={0} elements={categories.length} />
            <div className="containerProducts">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    )
}

const mapDispatchToProps = {
    getProducts,
};

export default connect(null, mapDispatchToProps)(Products);       