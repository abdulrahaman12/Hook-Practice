import React, { useReducer, useState } from 'react';

const Counter = () => {
    const counterReducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return { count: state.count + action.payload };
            case 'DECREMENT':
                return { count: state.count - action.payload };
            case 'RESET':
                return { count: action.payload };
            default:
                return state;
        }
    };


    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    const [incrementValue, setIncrementValue] = useState();
    const [decrementValue, setDecrementValue] = useState();
    const [resetValue, setResetValue] = useState(0);


    return (
        <div>
            <h1>Count: {state.count}</h1>
            <div>
                <input
                    type="number"
                    value={incrementValue}
                    onChange={(e) => setIncrementValue(Number(e.target.value))}
                />
                <button onClick={() => dispatch({ type: 'INCREMENT', payload: incrementValue })}>
                    Increment by {incrementValue}
                </button>
            </div>
            <div>
                <input
                    type="number"
                    value={decrementValue}
                    onChange={(e) => setDecrementValue(Number(e.target.value))}
                />
                <button onClick={() => dispatch({ type: 'DECREMENT', payload: decrementValue })}>
                    Decrement by {decrementValue}
                </button>
            </div>
            <div>
                <input
                    type="number"
                    value={resetValue}
                    onChange={(e) => setResetValue(Number(e.target.value))}
                />
                <button onClick={() => dispatch({ type: 'RESET', payload: resetValue })}>
                    Reset to {resetValue}
                </button>
            </div>
        </div>
    );
};

export default Counter;
