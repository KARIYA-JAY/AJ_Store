import  { useEffect, useState } from 'react';
import { useAppContext } from '../context/Appcontext';
import { assets, dummyAddress } from '../assets/assets';

export const Cart = () => {
    const {
        cartItems,
        products,
        removeFromCart,
        currency,
        getCartCount,
        navigate,
        getCartAmount,
        updateCartItem,
    } = useAppContext();

    const [showAddress, setShowAddress] = useState(false);
    const [cartArray, setCartArray] = useState([]);
    const [address, setAddress] = useState(dummyAddress);
    const [selectedddress, setSelectedAddress] = useState(dummyAddress[0]);
    const [showpaymetOption, setPaymentOption] = useState("COD");

    const getCart = () => {
        let tempArray = [];
        for (const key in cartItems) {
            const p = products?.find((item) => item._id === key);
            if (p) {
                p.quantity = cartItems[key];
                tempArray.push(p);
            }
        }
        setCartArray(tempArray);
    };

    const placeorder = async () => {
        // Your logic here
    };

    useEffect(() => {
  console.log("Products:", products)
  console.log("Cart Items:", cartItems)
  if (products?.length > 0 && cartItems) {
    getCart()
  }
}, [products, cartItems])

    if (!products || !Array.isArray(products) || products.length === 0 || !cartItems) {
        return null;
    }

    return (
        <div className="flex flex-col md:flex-row mt-16">
            <div className="flex-1 max-w-4xl">
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-green-600">{getCartCount} Items</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartArray.map((products, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div
                                onClick={() => {
                                    navigate(`/product/${products.category?.toLowerCase()}/${products._id}`);
                                    scrollTo(0, 0);
                                }}
                                className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded"
                            >
                                <img
                                    className="max-w-full h-full object-cover"
                                    src={products.image}
                                    alt={products.name}
                                />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold">{products.name}</p>
                                <div className="font-normal text-gray-500/70">
                                    <p>Weight: <span>{products.weight || "N/A"}</span></p>
                                    <div className="flex items-center">
                                        <p>Qty:</p>
                                        <select onChange={e=>updateCartItem(products._id,Number(e.target.value))}
                                        value={cartItems[products._id]} className="outline-none">
                                            {Array(cartItems[products._id] > 9 ? cartItems[products._id] : 9).fill('').map((_, index) => (
                                                <option key={index} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">{currency}{products.offerPrice * products.quantity}</p>
                        <button onClick={() => removeFromCart(products._id)} className="cursor-pointer mx-auto">
                            <img src={assets.remove_icon} alt="remove" className="inline-block w-6 h-6" />
                        </button>
                    </div>
                ))}

                <button onClick={() => { navigate('/products'); scrollTo(0, 0); }} className="group cursor-pointer flex items-center mt-8 gap-2 text-green-600 font-medium">
                    <img src={assets.arrow_right_icon_colored} alt="arrow" className="group-hover:-translate-x-1 transition" />
                    Continue Shopping
                </button>
            </div>

            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500">{selectedddress ? `${selectedddress.street}, ${selectedddress.city}, ${selectedddress.state}, ${selectedddress.country}` : "No address found"}</p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-green-600 hover:underline cursor-pointer">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full z-10">
                                {address.map((address, i) => (
                                    <p key={i} onClick={() => { setSelectedAddress(address); setShowAddress(false); }} className="text-gray-500 p-2 hover:bg-gray-100 cursor-pointer">
                                        {address.street}, {address.city}, {address.state}, {address.co}
                                    </p>
                                ))}
                                <p onClick={() => navigate('/add-address')} className="text-green-600 text-center cursor-pointer p-2 hover:bg-green-600/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>
                    <select onChange={e => setPaymentOption(e.target.value)} className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>{currency}{getCartAmount()}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>{currency}{(getCartAmount() * 2 / 100).toFixed(2)}</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>{currency}{(getCartAmount() * 1.02).toFixed(2)}</span>
                    </p>
                </div>

                <button onClick={placeorder} className="w-full py-3 mt-6 cursor-pointer bg-green-600 text-white font-medium hover:bg-    transition">
                    {showpaymetOption === "COD" ? "Place order" : "Proceed to Checkout"}
                </button>
            </div>
        </div>
    );
};
