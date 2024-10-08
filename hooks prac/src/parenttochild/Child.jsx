import React, { useState } from 'react'

const Child = ({ getData }) => {

    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
        console.log(name);

    }

    const handleSubmit = () => {
        getData(name);
    }
    return (
        <div>
            <form action="">
                <input type="text" value={name} onChange={(e) => handleChange(e)} />
                <button type='button' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Child