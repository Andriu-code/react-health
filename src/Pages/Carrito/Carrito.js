
import "./Carrito.css"
import Layout from "../../components/Layout/LayoutInicial/Layout";
import { connect } from "react-redux";
import OrderCard from "../../components/Cards/OrderCard/OrderCard";
import ResumeOrderCard from "../../components/Cards/OrderCard/ResumeOrderCard";

const Carrito = ({ items }) => {

    return (
        <div>
            <Layout open={true} />
            <div className="container-orders">
                <div className="card1">
                    {items.map((item) => (
                        <OrderCard key={item.id} product={item} />
                    ))}
                </div>
                <ResumeOrderCard className="card2" />
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.cart.items,
});

export default connect(mapStateToProps)(Carrito);      