import Razorpay from 'razorpay';



export const handleRazorpayPayment = async (username, totalAmount, cartItems) => {
    const options = {
        key: 'rzp_test_WqJB1cAL6yIVHX',
        amount: totalAmount * 100,
        currency: 'INR',
        name: 'MYMC STORE',
        description: 'Purchase Description',
        handler: function (response) {
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);


        },
        prefill: {
            name: username,
            email: 'user@example.com', // Replace with user's email
            contact: '9999999999' // Replace with user's contact number
        },
        notes: {
            items: JSON.stringify(cartItems)
        },
        theme: {
            color: '#F37254'
        }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
};