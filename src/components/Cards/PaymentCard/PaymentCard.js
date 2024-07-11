import { React, useState } from 'react';
import "./PaymentCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faTruck, faBox, faMoneyBill1, faCreditCard, faGift, faCoins } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import CreditCard from '../CreditCard/CreditCard';
import OrangeButton from '../../../components/Button/OrangeButton';


const GiftCard = ({ open }) => {
    return open ? (
        <div className='giftcard'>
            <h6>Enter the gift card code:</h6>
            <input className='input' placeholder='YU675T' />
            <OrangeButton>Send</OrangeButton>
        </div>
    ) : null;
};

const ChangeAddress = ({ open }) => {
    return open ? (
        <div className='giftcard'>
            <h6>Enter the address:</h6>
            <input className='input' placeholder='St. Tomas 34th, Washington' />
            <OrangeButton>Send</OrangeButton>
        </div>
    ) : null;
};

const CashPayment = ({ open }) => {
    return open ? (
        <div className='giftcard'>
            <OrangeButton>Order Completed!</OrangeButton>
        </div>
    ) : null;
};


const PaymentCard = () => {
    const [openAddress, setOpenAddress] = useState(false);
    const [openCard, setOpenCard] = useState(false);
    const [openGift, setOpenGift] = useState(false);
    const [openCash, setOpenCash] = useState(false);

    const handleChangeAddress = () => { setOpenAddress(!openAddress); };
    const handleShowCard = () => { setOpenCard(!openCard); };
    const handleShowGiftCard = () => { setOpenGift(!openGift); };
    const handleCash = () => { setOpenCash(!openCash); };

    return (
        <div className="container-payment">
            <h6>Shipping Address</h6>
            <div className="address">
                <p>St. Monica 35th Street, USA</p>
                <Link onClick={handleChangeAddress}>CHANGE</Link>
            </div>
            <ChangeAddress open={openAddress} />
            <h6>Shipping Service</h6>
            <div className='address'>
                <div className="delivery" role='button'>
                    <FontAwesomeIcon icon={faTruckFast} size='xl' />
                    <div>
                        <p className='title'>Express delivery</p>
                        <text className='text1'>We ship in 1-2 hours</text><br></br>
                        <text className='text2'>USD$50.00</text>
                    </div>
                </div>
                <div className="delivery" role='button'>
                    <FontAwesomeIcon icon={faTruck} size='xl' />
                    <div>
                        <p className='title'>Standar delivery</p>
                        <text className='text1'>We ship in 1 day</text><br></br>
                        <text className='text2'>USD$10.00</text>
                    </div>
                </div>
                <div className="delivery" role='button'>
                    <FontAwesomeIcon icon={faBox} size='xl' />
                    <div>
                        <p className='title'>Pickup from store</p>
                        <text className='text1'>Today</text><br></br>
                        <text className='text2'>Free</text>
                    </div>
                </div>
            </div>
            <h6>Payment Options</h6>
            <div className="pay-card" role='button' onClick={handleShowCard}>
                <div>
                    <p className='title'>Bank Card</p>
                    <text className='text1'>Pay with Visa and Mastercard</text>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCcVisa} fontSize="36px" />
                    <FontAwesomeIcon icon={faCcMastercard} fontSize="36px" />
                </div>
            </div>
            <CreditCard open={openCard} />
            <div className="pay-cash" role='button' onClick={handleCash}>
                <div>
                    <p className='title'>Cash</p>
                    <text className='text1'>Pay with cash in the store or delivery</text>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCoins} fontSize="36px" />
                    <FontAwesomeIcon icon={faMoneyBill1} fontSize="36px" />
                </div>
            </div>
            <CashPayment open={openCash} />
            <div className="pay-gift" role='button' onClick={handleShowGiftCard}>
                <div>
                    <p className='title'>Gift Card</p>
                    <text className='text1'>Pay with your gift cards</text>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCreditCard} fontSize="36px" />
                    <FontAwesomeIcon icon={faGift} fontSize="36px" />
                </div>
            </div>
            <GiftCard open={openGift} />

        </div>


    );
};

export default PaymentCard;