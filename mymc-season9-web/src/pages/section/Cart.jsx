import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import ClaimBlocks from '../../assets/storeItems/ClaimBlocks.png';
import money from '../../assets/storeItems/money.png';
import DeleteButton from "../../components/Buttons/DeleteBtn.jsx";
import {handleRazorpayPayment} from "../../Rayzorpay/razorpay.js";


export const Cart = ({ username }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(Cookies.get('cart') || '[]');
        setCartItems(cart);
        calculateTotal(cart);
    }, []);
    const calculateTotal = (items) => {
        const total = items.reduce((sum, item) => sum + item.price, 0);
        setTotalAmount(total);
    };
    const removeFromCart = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        Cookies.set('cart', JSON.stringify(updatedCart), {expires: 7});
        calculateTotal(updatedCart);
    }
    const itemImage= (name)=>{
        if (name.includes('ClaimBlock')) {
            return ClaimBlocks;
        } else if (name.includes('In-Game Money')) {
            return money;
        }
    } ;
    const handleCheckout = () => {
        handleRazorpayPayment(username, totalAmount, cartItems);
    };
    return (
        <div className={'flex flex-col justify-between h-full'}>
            <div className="flex flex-col gap-5 pb-4">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="flex gap-5">
                            <div className={'flex items-center w-[80px]  '}>
                            <img src={itemImage(item.name)} alt="" />
                            </div>
                            <div className="flex flex-col ">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>₹{item.price}</p>

                                <DeleteButton onClick={() => removeFromCart(index)}/>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="flex flex-col gap-3">
                <h3 className={'text-lg '}>Total Amount : ₹{totalAmount}</h3>
                <button className="p-4 border w-full" onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
};
