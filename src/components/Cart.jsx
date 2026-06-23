import React from "react";
function Cart({ cart, increaseQty, decreaseQty, removePaintings }) {


    const total = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace("₹", ""));
        return sum + price * item.qty;
    }, 0);

    const handlePayment = (amount) => {
        if (!amount || amount <= 0) {
            alert("Invalid amount");
            return;
        }

        const options = {
            key: "rzp_test_YOURKEY", //  replace with your real Razorpay test key
            amount: amount * 100, // in paise
            currency: "INR",
            name: "MyShop",
            description: "Purchase Payment",
            handler: function (response) {
                alert("Payment Successful!");
                console.log(response);
            },
            prefill: {
                name: "Customer",
                email: "test@example.com",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className="cart-container">
            <h2>Cart Page</h2>

            {cart.length === 0 ? (
                <h3 className="empty-cart">Your cart is empty</h3>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">

                            <img src={item.image} alt={item.title} />

                            <div className="cart-info">
                                <h3>{item.name}</h3>
                                <p>Price: {item.price}</p>

                                <div className="qty-controls">
                                    <button onClick={() => decreaseQty(item.id)}>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => increaseQty(item.id)}>+</button>
                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => removePaintings(item.id)}
                                >
                                    Remove
                                </button>
                            </div>

                        </div>
                    ))}

                    <div className="cart-total">
                        <h2>Total: ₹{total}</h2>
                        <button className="pay-btn" onClick={() => handlePayment(total)}>
                            Pay Now
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;