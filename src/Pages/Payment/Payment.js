
import "./Payment.css"
import Layout from "../../components/Layout/LayoutInicial/Layout";
import zanahoriababy from "../../img/prods/zanahoriababy.jpg";
import cherry from "../../img/prods/cherry.jpg";
import frambuesa from "../../img/prods/frambuesa.jpg";
import ResumeOrderCard from "../../components/Cards/OrderCard/ResumeOrderCard";
import PaymentCard from "../../components/Cards/PaymentCard/PaymentCard";

const Payment = () => {
    const products = [
        { id: 3, img: cherry, name: 'cherry', stars: 3, price: '$4.00', description: "a box of cherries" },
        { id: 8, img: zanahoriababy, name: 'zanahoria baby', stars: 5, price: '$5.00', description: "a bag of baby carrot" },
        { id: 10, img: frambuesa, name: 'frambuesa', stars: 5, price: '$5.00', description: "a box of frambuesa" },
    ];

    return (
        <div>
            <Layout open={true} />
            <div className="payment-container">
                <PaymentCard className="part1" />
                <ResumeOrderCard className="part2" />
            </div>

        </div>
    )
}

export default Payment;      