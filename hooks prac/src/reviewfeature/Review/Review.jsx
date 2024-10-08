import React from 'react'
import Products from '../ProductDetails/Products'
import Dropdown from '../dropdown/Dropdown'


const Review = () => {

    const ProductData = [
        {
            name: "Monitor",
            price: 1233,
            quantity: 2,

        },
        {
            name: "Television",
            price: 6531,
            quantity: 5,

        },
        {
            name: "Laptop",
            price: 95,
            quantity: 1,
        },
        {
            name: "Water Bottle",
            price: 100,
            quantity: 2,

        },
        {
            name: "Speaker",
            price: 450,
            quantity: 1,

        },
        {
            name: "Keyboard",
            price: 500,
            quantity: 1,

        },
    ]
    return (
        <div>
            <h2 className='text-center m-3'>Product review and customer rating</h2>
            <Dropdown />
            <div className='container'>
                <div className='row'>
                    {ProductData.map((item) => {
                        return (
                            <div className='col-4' key={item.name}>
                                <Products
                                    itemName={item.name}
                                    itemPrice={item.price}
                                    itemQuantity={item.quantity}
                                />
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Review