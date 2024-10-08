import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [name, setName] = useState();

    function getData(name) {
        setName(name);
    }

    return (
        <div>
            <Child getData={getData} />
            <div>{name}</div>
        </div>
    )
}

export default Parent