import React from 'react'
import { useState, useEffect } from 'react';
import './CSS/style.css'
import { MdRestaurantMenu } from 'react-icons/md';
import { BsCart4 } from 'react-icons/bs';



const Menu = () => {

    const response = require("./data.json");
    const data = response.food
    const [Arr, setArr] = useState([])

    const tot = (()=>{
        var e=document.getElementById('getTotal')
        var i
        var total=0
        for(i=0;i<Arr.length;i++){
            total=total+(Arr[i].price)
        }
        e.innerHTML=total
    })
    
    
    return (
        <>

            <div className="cont">
                <div className="menu-list">
                    <h2><MdRestaurantMenu />&nbsp;Menu</h2>


                    <div className="menu-cont">
                        {
                            data.map((ele) => {
                                return (
                                    <div className="card" key={ele.id}>
                                        <div className="img">
                                            <img src={ele.image} alt="salad" />
                                        </div>
                                        <p className="details">
                                            {ele.name} <br />
                                            <span className="price">$&nbsp;{ele.price}</span>
                                        </p>


                                        <button className='add2cart'
                                            onClick={() => {
                                                
                                                let obj = {
                                                    "id": ele.id,
                                                    "name": ele.name,
                                                    "rate": ele.price,
                                                    "quantity": ele.quantity + 1,
                                                    "price": ele.price * (ele.quantity + 1)
                                                }
                                                let flag = false
                                                for (var i = 0; i < Arr.length; i++) {
                                                    if (Arr[i].id === ele.id) {
                                                        flag = true

                                                    }
                                                }
                                                if (!flag) {
                                                    setArr(Arr => [...Arr, obj])
                                                }
                                                else {
                                                    alert("Item is already in cart. You can increace/decrease the quantity from cart")
                                                }
                                                tot()
                                                

                                            }}>Add to cart</button>
                                    </div>

                                )
                            })
                        }



                    </div>
                </div>

                <div className="cart">
                    <h2><BsCart4 />&nbsp;Cart</h2>

                    {Arr.length === 0 ?
                        <p>No item in cart</p> :
                        <>

                            <div className="cart-cont">
                                <div className="cart-list-title">
                                    <span>ID</span>
                                    <span>Name</span>
                                    <span>Rate</span>
                                    <span>Quantity</span>
                                    <span>Price</span>
                                    <span></span>

                                </div>
                                {
                                    Arr.map((i) => {
                                        return (
                                            <div className="cart-list" key={i.id}>
                                                <span>{i.id} </span>
                                                <span>{i.name}</span>
                                                <span>{i.rate} </span>
                                                <span className='crt-qty'>
                                                    <button className="dec" id='decbtn' onClick={() => {
                                                        var z = document.getElementById('decbtn')
                                                        var x = document.getElementById(i.id)
                                                        var y = document.getElementById(i.name)
                                                        if (i.quantity >= 1) {
                                                            i.quantity = i.quantity - 1
                                                            i.price=(i.rate*i.quantity)
                                                            x.innerHTML = i.quantity
                                                            y.innerHTML = (i.rate * i.quantity)
                                                        }
                                                        else if (i.quantity === 0) {

                                                            z.disabled = true;
                                                        }
                                                        tot()

                                                    }}>-</button>
                                                    <p id={i.id}>{i.quantity}</p>
                                                    <button className="inc" onClick={() => {
                                                        i.quantity = i.quantity + 1
                                                        i.price=(i.rate * i.quantity)
                                                        var x = document.getElementById(i.id)
                                                        var y = document.getElementById(i.name)
                                                        var z = document.getElementById('decbtn')
                                                        z.disabled = false
                                                        x.innerHTML = i.quantity
                                                        y.innerHTML = (i.rate * i.quantity)
                                                        tot()
                                                    }}>+</button>
                                                </span>
                                                <span id={i.name}>{i.price}</span>
                                                <span></span>
                                            </div>)
                                    })
                                }
                            </div>
                            <button onClick={tot}>Get total</button>
                            <p className="total">Grand Total : <span id='getTotal'> </span></p>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
export default Menu