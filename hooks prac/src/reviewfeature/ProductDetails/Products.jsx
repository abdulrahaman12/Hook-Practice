import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import Dropdown from '../dropdown/Dropdown';

const Products = ({ itemName, itemPrice, itemQuantity }) => {

    const [rating, setRating] = useState(0);

    const handleRating = (newRating) => {
        setRating(newRating);
    }

    return (
        <div className='m-4'>
            <div className="card w-100">
                <h5 className="card-header">Product Details</h5>
                <div className="card-body">
                    {/* <h5 className="card-title"></h5> */}
                    <p className="card-text">Item Name : {itemName} </p>
                    <p className="card-text">Item Price : {itemPrice}</p>
                    <p className="card-text">Item Quantity : {itemQuantity} </p>
                    <div className='d-flex'>
                        <ReactStars count={5} size={24} activeColor="#ffd700" isHalf={true}
                            value={rating}
                            onChange={handleRating}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>} />
                    </div>
                    <div>Your Rating is : {rating}</div>
                </div>
            </div>
        </div>
    )
}

export default Products