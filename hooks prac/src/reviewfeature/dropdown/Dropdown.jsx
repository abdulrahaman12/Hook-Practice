import React, { useState } from 'react';

const Dropdown = () => {

    const [selectdrop, setSelectdrop] = useState("Top Reviews");

    const options = [{
        id: 1,
        dropdownname: "Most Recent",
    }, {
        id: 2,
        dropdownname: "Top Reviews"
    }]

    const handleSelect = (value) => {
        setSelectdrop(value);
        if(value == "Top Reviews"){
            
        }
    }

    return (
        <div className='d-flex justify-content-around'>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {selectdrop}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {options.map((item) => (<a className="dropdown-item" key={item.id} href="#" onClick={() => handleSelect(item.dropdownname)}>{item.dropdownname}</a>))}
                </div>
            </div>
        </div>

    )
}

export default Dropdown