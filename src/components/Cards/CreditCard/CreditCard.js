import React from 'react';
import "./CreditCard.css";
import chip from "../../../img/chipc.png";
import vlogo from "../../../img/vlogo.png";
import { Input } from 'reactstrap';
import OrangeButton from '../../Button/OrangeButton';




const CreditCard = ({ open }) => {

    return open ? (
        <div className="principal-container">
            <div className="ccard">
                <div className="logo-card">
                    <img src={chip} alt='chip' width="50px" />
                    <img src={vlogo} alt='visa' width="50px" />
                </div>
                <div className="num-card">
                    <h6>9444</h6>
                    <h6>3218</h6>
                    <h6>0888</h6>
                    <h6>3216</h6>
                </div>
                <div className="name-card"><h6>JORDAN HOLMES</h6></div>
                <div className="date-card">
                    <h6>Expiry 24/08</h6>
                    <h6>CVV</h6>
                </div>
            </div>
            <div className='fillCard'>
                <h6>Enter Card Number</h6>
                <input className='input' placeholder='**** **** **** ****' />
                <h6>Card Holder Name</h6>
                <input className='input' placeholder='Enter name' />
                <div className='date-cvv'>
                    <div className='date'>
                        <h6>Expiry Date</h6>
                        <input className='input' placeholder='MM/YYYY' />
                    </div>
                    <div className='cvv'>
                        <h6>CVV</h6>
                        <input className='input' placeholder='CVV' />
                    </div>
                </div>
                <OrangeButton>Proceed Payment</OrangeButton>
            </div>

        </div>

    ) : null;
}

export default CreditCard;