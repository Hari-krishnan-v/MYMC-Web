import Razorpay from 'razorpay';
// import jsPDF from 'jspdf';


export const handleRazorpayPayment = async (username, totalAmount, cartItems) => {
    const options = {
        key: 'rzp_test_WqJB1cAL6yIVHX',
        amount: totalAmount * 100,
        currency: 'INR',
        name: 'MYMC STORE',
        description: 'Purchase Description',
        handler: function (response) {
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);

            // Generate and download PDF receipt
            // const doc = new jsPDF();
            // doc.text('Payment Receipt', 10, 10);
            // doc.text(`Username: ${username}`, 10, 20);
            // doc.text(`Payment ID: ${response.razorpay_payment_id}`, 10, 30);
            // doc.text(`Total Amount: ₹${totalAmount}`, 10, 40);
            // doc.text('Items:', 10, 50);
            // cartItems.forEach((item, index) => {
            //     doc.text(`- ${item.name} (Quantity: ${item.quantity})`, 10, 60 + (index * 10));
            // });
            // doc.save('receipt.pdf');
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