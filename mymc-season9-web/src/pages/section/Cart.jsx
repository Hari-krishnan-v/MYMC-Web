import React, { useEffect, useState } from 'react';
import ClaimBlocks from '../../assets/storeItems/ClaimBlocks.png';
import money from '../../assets/storeItems/money.png';
import DeleteButton from "../../components/Buttons/DeleteBtn.jsx";
import useAuthStore from "../../store/authStore.js";

export const Cart = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const { user, cart, getCartItems, removeFromCart } = useAuthStore();

    useEffect(() => {
        if (user) {
            getCartItems(user);
        }
    }, [user]);

    useEffect(() => {
        calculateTotal(cart);
    }, [cart]);

    const calculateTotal = (items) => {
        const total = items.reduce((sum, item) => sum + item.price, 0);
        setTotalAmount(total);
    };

    const handleRemove = (itemId) => {
        removeFromCart(user, itemId);
    };

    const itemImage = (name) => {
        if (name.includes('ClaimBlock')) return ClaimBlocks;
        if (name.includes('In-Game Money')) return money;
        return null;
    };

    return (
        <div className={'flex flex-col justify-between h-full'}>
            <div className="flex flex-col gap-5 pb-4">
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cart.map((item) => (
                        <div key={item._id} className="flex gap-5">
                            <div className="flex items-center w-[80px]">
                                <img src={itemImage(item.name)} alt="" />
                            </div>
                            <div className="flex flex-col">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>₹{item.price}</p>
                                <DeleteButton onClick={() => handleRemove(item._id)} />
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="text-lg">Total Amount: ₹{totalAmount}</h3>
                {/* <button className="p-4 border w-full" onClick={handleCheckout}>Checkout</button> */}
            </div>
        </div>
    );
};
