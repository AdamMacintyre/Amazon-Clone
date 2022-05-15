import React, { useState, useEffect } from 'react';
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'
import {query, collection, onSnapshot, orderBy, } from 'firebase/firestore'

import { db } from "./firebase"

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    if(user) {

        /// firebase v8 sdk
        // db
        // .collection('users')
        // .doc(user?.uid)
        // .collection('orders')
        // .orderBy('created', 'desc')
        // .onSnapshot(snapshot => (
        //     setOrders(snapshot.docs.map(doc => ({
        //         id: doc.id,
        //         data: doc.data()
        //     })))
        // ))


        /// THIS IS THE PROBLEM!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        const ref = collection(db, "users", user?.uid, "orders" );

        const orderedOrders = query(ref, orderBy('created', 'desc'));
        
        onSnapshot(orderedOrders, (snapshot) => {
        setOrders(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
        })))
        })



    } else {
        setOrders([])
    }

  }, [user])

    return (

        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>

    )
}

export default Orders;