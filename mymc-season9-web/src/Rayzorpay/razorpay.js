import Razorpay from 'razorpay';

export const handleRazorpayPayment = (username, totalAmount, cartItems) => {
    const options = {
        key: 'YOUR_RAZORPAY_KEY',
        amount: totalAmount * 100,
        currency: 'INR',
        name: 'Your Store Name',
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

    const rzp = new Razorpay(options);
    rzp.open();
};