import Razorpay from 'razorpay';
import MYMC_S9_Resorcepack from '../assets/MYMC_S9_Resorcepack.png';


export const handleRazorpayPayment = async (username, totalAmount, cartItems) => {
    const options = {
        key: 'rzp_test_WqJB1cAL6yIVHX',
        amount: totalAmount * 100,
        currency: 'INR',
        name: 'MYMC STORE',
        description: 'Purchase Description',
        image: MYMC_S9_Resorcepack,
        handler: function (response) {
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
            name: username,
        },
        notes: {
            items: JSON.stringify(cartItems)
        },
        theme: {
            color: '#370900'
        }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();

};