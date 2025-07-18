import React, { useState } from 'react'
import { useAppContext } from '../../context/Appcontext'
import { assets, dummyOrders } from '../../assets/assets';
import { useEffect } from 'react';

export default function Order() {

    const {currency} = useAppContext();
    const [orders , setOrders]= useState([]);

    const fetchOrder = async() =>{
        setOrders(dummyOrders);
    };

    useEffect(()=>{
        fetchOrder();
    },[])

  return (
    <div className="no-scrollba flex-1 h-[95vh] overflow-y-scroll ">
    <div className="md:p-10 p-4 space-y-4">
            <h2 className="text-lg font-medium">Orders List</h2>
            {orders.map((order, index) => (
                <div key={index} className="flex flex-col md:items-center md:flex-row  gap-5 justify-between p-5 max-w-4xl rounded-md border border-gray-300">
                    <div className="flex gap-5 max-w-80">
                        <img className="w-12 h-12 object-cover " src={assets.box_icon} alt="boxIcon" />
                        <div>
                            {order.items.map((item, index) => (
                                <div key={index} className="flex flex-col ">
                                    <p className="font-medium">
                                        {item.product.name}{" "} <span className={`text-green-500 ${item.quantity < 2 && "hidden"}`}>x {item.quantity}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-sm md:text-base text-balck/60">
                        <p className='font-medium mb-1'>{order.address.firstName} {order.address.lastName}</p>
                        <p>{order.address.street}, {order.address.city}</p>
                        <p> {order.address.state},{order.address.zipcode}, {order.address.country}</p>
                        <p>{order.address.phone}</p>
                    </div>

                    <p className="font-medium text-lg my-auto">{currency}{order.amount}</p>

                    <div className="flex flex-col text-sm">
                        <p>Method: {order.paymentType}</p>
                        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                        <p>Payment: {order.isPaid  ? "Paid" : "Pending"}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
  )
}
